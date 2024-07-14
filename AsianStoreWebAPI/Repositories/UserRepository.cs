using AsianStoreWebAPI.EF.DTO;
using AsianStoreWebAPI.EF.Models;
using AsianStoreWebAPI.Responses;
using AsianStoreWebAPI.Services;
using FirebaseAdmin.Auth;
using Google.Rpc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace AsianStoreWebAPI.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly FirebaseAuthService _firebaseAuthService;
        private readonly FirestoreService _firestoreService;
        private readonly JwtService _jwtService;
        private readonly IRoleRepository _roleRepo;

        public UserRepository(FirebaseAuthService fas, FirestoreService fs, JwtService js, IRoleRepository roleRepo)
        { _firebaseAuthService = fas; _firestoreService = fs; _jwtService = js; _roleRepo = roleRepo; }



        private async Task<string> GenerateVerificationCodeAsync(string userId)
        {
            var collection = "verificationCodes";
            var rand = new Random();
            string newCode;
            bool isUnique = false;
            VerificationCode verfCode = null!;

            var existingUserCodes = await _firestoreService.GetRecordsByFieldAsync<VerificationCode>(collection, "IssuedTo", userId);
            var validUserCode = existingUserCodes.FirstOrDefault(code => code.ExpiresIn > DateTime.UtcNow);

            if (validUserCode != null)
            {
                return validUserCode.Code;
            }

            while (!isUnique)
            {
                newCode = rand.Next(100000, 1000000).ToString();

                var existingCodes = await _firestoreService.GetRecordsByFieldAsync<VerificationCode>(collection, "Code", newCode);
                var notExpiredCode = existingCodes.FirstOrDefault(code => code.ExpiresIn > DateTime.UtcNow);

                if (notExpiredCode == null)
                {
                    verfCode = new VerificationCode()
                    {
                        Code = newCode,
                        ExpiresIn = DateTime.UtcNow.AddHours(1),
                        CreatedAt = DateTime.UtcNow,
                        IssuedTo = userId
                    };
                    isUnique = true;
                }
            }

            await _firestoreService.AddRecordAsync(collection, verfCode);
            return verfCode!.Code;
        }



        public async Task ResetPasswordAsync(string token)
        {
            if (!_jwtService.IsJwtValid(_jwtService.DecodeJwt(token)))
                throw new Exception("Jwt is not valid");

            var data = _jwtService.DecryptJwtToken(token, ["code", "user_id", "new_password", "new_password_repeat"]);

            var user = await _firebaseAuthService.GetUserByIdAsync(data["user_id"].ToString());
            if (user is null)
                throw new Exception("User not found");

            var codes = await _firestoreService.GetRecordsByFieldAsync<VerificationCode>("verificationCodes", "IssuedTo", user.Uid);
            var code = codes.FirstOrDefault(x => x.ExpiresIn > DateTime.UtcNow && x.Code == data["code"].ToString());
            if (code is null)
                throw new Exception("Code is not valid");

            if (data["new_password"].ToString() != data["new_password_repeat"].ToString())
                throw new Exception("Passwords are different");

            await _firebaseAuthService.UpdateUserPassword(user.Uid, data["new_password"].ToString());

            await _firestoreService.DeleteRecordAsync("verificationCodes", code.Id);
        }


        public async Task SendForgotUrlAsync(string email)
        {
            var user = await _firebaseAuthService.GetUserByEmailAsync(email);
            if (user is null)
                throw new Exception("User not found");

            var code = await GenerateVerificationCodeAsync(user.Uid);

            var data = new Dictionary<string, object>()
            {
                { "code", code },
                { "user_id", user.Uid }
            };

            var jwt = _jwtService.GenerateJwtToken(data);
            await _firebaseAuthService.SendResetUrlAsync(user.Uid, jwt);
        }


        public async Task SendVerificatoinCodeAsync(string sessionId)
        {
            if (sessionId is null)
                throw new Exception("Session Id is null");

            var session = await _firestoreService.GetRecordAsync<Session>("sessions", sessionId);
            if (session is null)
                throw new Exception("Session is null");

            var user = await _firebaseAuthService.GetUserByIdAsync(session.IssuedTo);
            if (user is null)
                throw new Exception("User not found");

            if (user.EmailVerified)
                throw new Exception("User is already verified");

            var code = await GenerateVerificationCodeAsync(user.Uid);

            await _firebaseAuthService.SendVerificationCodeAsync(user.Uid, code);
        }


        public async Task CheckVerificationCodeAsync(string sessionId, string code)
        {
            if (sessionId is null)
                throw new Exception("Session Id is null");

            var session = await _firestoreService.GetRecordAsync<Session>("sessions", sessionId);
            if (session is null)
                throw new Exception("Session is null");

            var user = await _firebaseAuthService.GetUserByIdAsync(session.IssuedTo);
            if (user is null)
                throw new Exception("User not found");

            var existingUserCodes = await _firestoreService.GetRecordsByFieldAsync<VerificationCode>("verificationCodes", "IssuedTo", user.Uid);
            var validUserCode = existingUserCodes.FirstOrDefault(x => x.ExpiresIn > DateTime.UtcNow && x.Code == code);

            if (validUserCode is null)
                throw new Exception("Code is not valid");

            if (user.EmailVerified)
                throw new Exception("User is already verified");

            await _firebaseAuthService.SetUserEmailVerified(user.Uid);

            await _firestoreService.DeleteRecordAsync("verificationCodes", validUserCode.Id);
        }



        public async Task<Session> LoginAsync(string accessToken)
        {
            var userId = _jwtService.GetJwtClaim(accessToken, "user_id").Value;
            if (!_jwtService.IsJwtValid(_jwtService.DecodeJwt(accessToken)))
                throw new Exception("Jwt is not valid");

            var user = await _firebaseAuthService.GetUserByIdAsync(userId);
            if (user is null)
                throw new Exception("User is null");

            var existingSessions = await _firestoreService.GetRecordsByFieldAsync<Session>("sessions", "IssuedTo", user.Uid);

            if (existingSessions != null && existingSessions.Any())
            {
                var existingSession = existingSessions.OrderByDescending(s => s.CreatedAt).First();
                return existingSession;
            }

            var session = new Session()
            {
                IssuedTo = user.Uid,
                CreatedAt = DateTime.UtcNow,
                ExpiresIn = DateTime.UtcNow.AddDays(3)
            };
            session.Id = await _firestoreService.AddRecordAsync<Session>("sessions", session);

            return session;
        }


        public async Task<object> FetchDataAsync(string sessionId, string fields)
        {
            if (sessionId is null)
                throw new Exception("Session Id is null");

            var session = await _firestoreService.GetRecordAsync<Session>("sessions", sessionId);
            if (session is null)
                throw new Exception("Session is null");

            var user = await _firebaseAuthService.GetUserByIdAsync(session.IssuedTo);
            if (user is null)
                throw new Exception("User is null");

            var requestedFields = fields.Split(';', StringSplitOptions.RemoveEmptyEntries);

            var data = new Dictionary<string, object>();

            foreach (var field in requestedFields)
            {
                switch (field.Trim())
                {
                    case "email":
                        data.Add("email", user.Email);
                        break;
                    case "isVerified":
                        data.Add("isVerified", user.EmailVerified);
                        break;
                    case "displayName":
                        data.Add("displayName", user.DisplayName);
                        break;
                    case "fullName":
                        data.Add("fullName", user.DisplayName);
                        break;
                    case "phone":
                        data.Add("phone", user.PhoneNumber);
                        break;
                    case "id":
                        data.Add("id", user.Uid);
                        break;
                    default:
                        break;
                }
            }

            return data;
        }




        public async Task<(string, List<UserRecord>)> GetAllUsersAsync()
        {
            var users = await _firebaseAuthService.GetAllUsersAsync();
            return ("Success", users);
        }
    }
}