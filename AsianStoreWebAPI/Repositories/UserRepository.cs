using AsianStoreWebAPI.EF.Models;
using AsianStoreWebAPI.Services;
using Azure.Core;
using FirebaseAdmin.Auth;
using Google.Cloud.Firestore.V1;
using Microsoft.AspNetCore.Identity;
using System.Collections;

namespace AsianStoreWebAPI.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly FirebaseAuthService _firebaseAuthService;
        private readonly FirestoreService _firestoreService;
        private readonly JwtService _jwtService;

        public UserRepository(FirebaseAuthService fas, FirestoreService fs, JwtService js)
        { _firebaseAuthService = fas; _firestoreService = fs; _jwtService = js; }



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



        public async Task UpdatePasswordAsync(string sessionId, string token)
        {
            if (!_jwtService.IsJwtValid(_jwtService.DecodeJwt(token)))
                throw new Exception("Jwt is not valid");

            var data = _jwtService.DecryptJwtToken(token, ["newPassword", "newPasswordRepeat"]);

            if (sessionId is null)
                throw new Exception("Session Id is null");

            var session = await _firestoreService.GetRecordAsync<Session>("sessions", sessionId);
            if (session is null)
                throw new Exception("Session not found");
            if (session.ExpiresIn < DateTime.UtcNow)        // populate
                throw new Exception("Session is not valid");

            var user = await _firebaseAuthService.GetUserByIdAsync(session.IssuedTo);
            if (user is null)
                throw new Exception("User not found");

            var newPassword = data["newPassword"].ToString();
            var newPasswordRepeat = data["newPasswordRepeat"].ToString();
            if (newPassword != newPasswordRepeat)
                throw new Exception("Passwords are different");

            await _firebaseAuthService.UpdateUserPassword(user.Uid, newPassword);
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
                throw new Exception("Session not found");
            if (session.ExpiresIn < DateTime.UtcNow)        // populate
                throw new Exception("Session is not valid");

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
                throw new Exception("Session not found");

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



        public async Task<Session> LoginAsync(string token)
        {
            if (!_jwtService.IsJwtValid(_jwtService.DecodeJwt(token)))
                throw new Exception("Jwt is not valid");

            var data = _jwtService.DecryptJwtToken(token, ["accessToken", "name"]);

            var userId = _jwtService.GetJwtClaim(data["accessToken"].ToString(), "user_id").Value;
            var user = await _firebaseAuthService.GetUserByIdAsync(userId);
            if (user is null)
                throw new Exception("User not found");

            var existingSessions = await _firestoreService.GetRecordsByFieldAsync<Session>("sessions", "IssuedTo", user.Uid);

            if (existingSessions != null && existingSessions.Any())
            {
                var validSessions = existingSessions.Where(s => s.ExpiresIn > DateTime.UtcNow).ToList();

                if (validSessions.Any())
                {
                    var availableSession = validSessions.OrderByDescending(s => s.CreatedAt).First();
                    return availableSession;
                }
            }

            var session = new Session()
            {
                IssuedTo = user.Uid,
                CreatedAt = DateTime.UtcNow,
                ExpiresIn = DateTime.UtcNow.AddDays(3)
            };
            session.Id = await _firestoreService.AddRecordAsync<Session>("sessions", session);

            var infos = await _firestoreService.GetRecordsByFieldAsync<UserInfo>("users_infos", "UserId", user.Uid);
            var info = infos.FirstOrDefault();

            if (info == null)
            {
                var infoId = await _firestoreService.AddRecordAsync("users_infos", new UserInfo { UserId = user.Uid });

                info = await _firestoreService.GetRecordAsync<UserInfo>("users_infos", infoId);

                info.FirstName = data["name"].ToString();
                await _firestoreService.UpdateRecordAsync("users_infos", infoId, info);
            }

            var claims = new Dictionary<string, object>()
            {
                { "role", "user" }
            };
            await _firebaseAuthService.SetClaims(user.Uid, claims);

            return session;
        }


        public async Task<Session> RegisterSellerAsync(string token)
        {
            if (!_jwtService.IsJwtValid(_jwtService.DecodeJwt(token)))
                throw new Exception("Jwt is not valid");

            var data = _jwtService.DecryptJwtToken(token, ["accessToken", "name", "companyName"]);

            var userId = _jwtService.GetJwtClaim(data["accessToken"].ToString(), "user_id").Value;
            var user = await _firebaseAuthService.GetUserByIdAsync(userId);
            if (user is null)
                throw new Exception("User not found");

            var session = await AssignSession(user.Uid);
            await AssignUserInfo(user.Uid, data["name"].ToString());
            await AssignSellerInfo(user.Uid, data["name"].ToString());
            await AssignCompanyInfo(user.Uid, data["companyName"].ToString());

            var claims = new Dictionary<string, object>()
            {
                { "role", "seller" }
            };
            await _firebaseAuthService.SetClaims(user.Uid, claims);

            return session;
        }


        public async Task<object> FetchDataAsync(string sessionId, string fields)
        {
            var requestedFields = fields.Split(';', StringSplitOptions.RemoveEmptyEntries);
            var data = new Dictionary<string, object>();

            var generalMap = new string[]
            {
                "allProducts"
            };

            var userRelatedMap = new string[]
            {
                "isVerified", "isSeller", "email",
                "products"
            };

            var userInfoRelatedMap = new string[]
            {
                "firstName", "middleName", "lastName",
                "birthday", "language", "sex", "phones", 
                "addresses", "doPrint", "recipients",
                "displayName", "selectedRecipient"
            };

            var generalFields = new List<string>();
            var userRelatedFields = new List<string>();
            var userInfoRelatedFields = new List<string>();

            foreach (var field in requestedFields)
            {
                if (generalMap.Contains(field))
                {
                    generalFields.Add(field);
                }
                else if (userRelatedMap.Contains(field))
                {
                    userRelatedFields.Add(field);
                }
                else if (userInfoRelatedMap.Contains(field))
                {
                    userInfoRelatedFields.Add(field);
                }
            }

            if (userRelatedFields.Any() || userInfoRelatedFields.Any())
            {
                if (sessionId is null)
                    throw new Exception("Session Id is null");

                var session = await _firestoreService.GetRecordAsync<Session>("sessions", sessionId);
                if (session is null)
                    throw new Exception("Session not found");
                if (session.ExpiresIn < DateTime.UtcNow)
                    throw new Exception("Session is not valid");

                var user = await _firebaseAuthService.GetUserByIdAsync(session.IssuedTo);
                if (user is null)
                    throw new Exception("User not found");

                await ProcessUserRelatedFields(data, user, userRelatedFields);
                await ProcessUserInfoRelatedFieldsAsync(data, user, userInfoRelatedFields);
            }

            ProcessGeneralFields(data, generalFields);

            return data;
        }

        private async void ProcessGeneralFields(Dictionary<string, object> data, List<string> fields)
        {
            foreach (var field in fields)
            {
                switch (field)
                {
                    case "allProducts":
                        var products = await _firestoreService.GetAllRecordsAsync<Product>("products");
                        data.Add("allProducts", products);
                        break;
                }
            }
        }

        private async Task ProcessUserRelatedFields(Dictionary<string, object> data, UserRecord user, List<string> fields)
        {
            foreach (var field in fields)
            {
                switch (field)
                {
                    case "displayName":
                        data.Add("displayName", user.DisplayName);
                        break;
                    case "email":
                        data.Add("email", user.Email);
                        break;
                    case "isVerified":
                        data.Add("isVerified", user.EmailVerified);
                        break;
                    case "isSeller":
                        data.Add("isSeller", user.CustomClaims["role"].ToString() == "seller");
                        break;
                    case "products":
                        var products = await _firestoreService.GetRecordsByFieldAsync<Product>("products", "UserId", user.Uid);
                        data.Add("products", products);
                        break;
                }
            }
        }

        private async Task ProcessUserInfoRelatedFieldsAsync(Dictionary<string, object> data, UserRecord user, List<string> fields)
        {
            var info = (await _firestoreService.GetRecordsByFieldAsync<UserInfo>("users_infos", "UserId", user.Uid)).FirstOrDefault();
            foreach (var field in fields)
            {
                switch (field)
                {
                    case "displayName":
                        data.Add("displayName", info.FirstName);
                        break;
                    case "firstName":
                        data.Add("firstName", info.FirstName);
                        break;
                    case "middleName":
                        data.Add("middleName", info.MiddleName);
                        break;
                    case "lastName":
                        data.Add("lastName", info.LastName);
                        break;
                    case "birthday":
                        data.Add("birthday", $"{info.Birthday.Year}-{info.Birthday.Month:D2}-{info.Birthday.Day:D2}");
                        break;
                    case "language":
                        data.Add("language", info.Language);
                        break;
                    case "sex":
                        data.Add("sex", info.Sex);
                        break;
                    case "phones":
                        data.Add("phones", info.Phones);
                        break;
                    case "addresses":
                        data.Add("addresses", info.Addresses);
                        break;
                    case "doPrint":
                        data.Add("doPrint", info.DoPrintReceipt);
                        break;
                    case "recipients":
                        data.Add("recipients", info.ParcelRecipients);
                        break;
                    case "selectedRecipient":
                        data.Add("selectedRecipient", info.SelectedParcelRecipient);
                        break;
                }
            }
        }



        public async Task UpdateUserAsync(string sessionId, string token)
        {
            if (sessionId is null)
                throw new Exception("Session Id is null");

            var session = await _firestoreService.GetRecordAsync<Session>("sessions", sessionId);
            if (session is null)
                throw new Exception("Session not found");
            if (session.ExpiresIn < DateTime.UtcNow)
                throw new Exception("Session is not valid");

            var user = await _firebaseAuthService.GetUserByIdAsync(session.IssuedTo);
            if (user is null)
                throw new Exception("User not found");

            var infos = await _firestoreService.GetRecordsByFieldAsync<UserInfo>("users_infos", "UserId", user.Uid);
            var info = infos.FirstOrDefault();

            if (info is null)
            {
                var infoId = await _firestoreService.AddRecordAsync("users_infos", new UserInfo { UserId = user.Uid });
                info = await _firestoreService.GetRecordAsync<UserInfo>("users_infos", infoId);
            }

            var data = _jwtService.DecryptJwtToken(token, ["firstName", "middleName", "lastName", "sex", "birthday", "doPrint", "language", "phones", "addresses", "recipients", "selectedRecipient"]);

            info.FirstName = data["firstName"].ToString();
            info.MiddleName = data["middleName"].ToString();
            info.LastName = data["lastName"].ToString();
            info.Phones = data["phones"].ToString()
                .Trim('[', ']')
                .Split(new[] { "\",\"" }, StringSplitOptions.None)
                .Select(s => s.Trim('"'))
                .Where(s => !string.IsNullOrEmpty(s))
                .ToList();
            info.Sex = Convert.ToBoolean(data["sex"].ToString());
            info.Birthday = Convert.ToDateTime(data["birthday"].ToString()).ToUniversalTime();
            info.Language = data["language"].ToString();
            info.DoPrintReceipt = Convert.ToBoolean(data["doPrint"]);
            info.Addresses = data["addresses"].ToString().Trim('[', ']').Split(new[] { "},{" }, StringSplitOptions.None).Where(s => !string.IsNullOrWhiteSpace(s))
                .Select(s => {
                    var parts = s.Trim('{', '}', ' ').Split(',');
                    return new UserAddress
                    {
                        City = parts.ElementAtOrDefault(0)?.Split(':')[1].Trim('"') ?? string.Empty,
                        Street = parts.ElementAtOrDefault(1)?.Split(':')[1].Trim('"') ?? string.Empty,
                        HouseNumber = parts.ElementAtOrDefault(2)?.Split(':')[1].Trim('"') ?? string.Empty,
                        ApartmentNumber = parts.ElementAtOrDefault(3)?.Split(':')[1].Trim('"') ?? string.Empty
                    };
                })
                .ToList();
            info.ParcelRecipients = data["recipients"].ToString().Trim('[', ']').Split(new[] { "},{" }, StringSplitOptions.None).Where(s => !string.IsNullOrWhiteSpace(s))
                .Select(s => {
                    var parts = s.Trim('{', '}', ' ').Split(',');
                    return new ParcelRecipient
                    {
                        FirstName = parts.ElementAtOrDefault(0)?.Split(':')[1].Trim('"') ?? string.Empty,
                        LastName = parts.ElementAtOrDefault(1)?.Split(':')[1].Trim('"') ?? string.Empty,
                        MiddleName = parts.ElementAtOrDefault(2)?.Split(':')[1].Trim('"') ?? string.Empty,
                        Phone = parts.ElementAtOrDefault(3)?.Split(':')[1].Trim('"') ?? string.Empty
                    };
                })
                .ToList();
            info.SelectedParcelRecipient = data["selectedRecipient"].ToString() == "null" ? null :
                new ParcelRecipient
                {
                    FirstName = data["selectedRecipient"].ToString().Trim('{', '}').Split(',').Select(p => p.Split(':', 2)).FirstOrDefault(p => p[0].Trim().Trim('"') == "firstName")?[1].Trim().Trim('"'),
                    LastName = data["selectedRecipient"].ToString().Trim('{', '}').Split(',').Select(p => p.Split(':', 2)).FirstOrDefault(p => p[0].Trim().Trim('"') == "lastName")?[1].Trim().Trim('"'),
                    MiddleName = data["selectedRecipient"].ToString().Trim('{', '}').Split(',').Select(p => p.Split(':', 2)).FirstOrDefault(p => p[0].Trim().Trim('"') == "middleName")?[1].Trim().Trim('"'),
                    Phone = data["selectedRecipient"].ToString().Trim('{', '}').Split(',').Select(p => p.Split(':', 2)).FirstOrDefault(p => p[0].Trim().Trim('"') == "phone")?[1].Trim().Trim('"')
                };

            await _firestoreService.UpdateRecordAsync<UserInfo>("users_infos", info.Id, info);
        }



        private async Task<Session> AssignSession(string userId)
        {
            var existingSessions = await _firestoreService.GetRecordsByFieldAsync<Session>("sessions", "IssuedTo", userId);

            if (existingSessions != null && existingSessions.Any())
            {
                var validSessions = existingSessions.Where(s => s.ExpiresIn > DateTime.UtcNow).ToList();

                if (validSessions.Any())
                {
                    var availableSession = validSessions.OrderByDescending(s => s.CreatedAt).First();
                    return availableSession;
                }
            }

            var session = new Session()
            {
                IssuedTo = userId,
                CreatedAt = DateTime.UtcNow,
                ExpiresIn = DateTime.UtcNow.AddDays(3)
            };
            session.Id = await _firestoreService.AddRecordAsync("sessions", session);

            return session;
        }

        private async Task<UserInfo> AssignUserInfo(string userId, string firstName)
        {
            var info = (await _firestoreService.GetRecordsByFieldAsync<UserInfo>("users_infos", "UserId", userId)).FirstOrDefault();

            if (info == null)
            {
                var infoId = await _firestoreService.AddRecordAsync("users_infos", new UserInfo { UserId = userId });

                info = await _firestoreService.GetRecordAsync<UserInfo>("users_infos", infoId);

                info.FirstName = firstName;
                await _firestoreService.UpdateRecordAsync("users_infos", infoId, info);
            }

            return info;
        }

        private async Task<SellerInfo> AssignSellerInfo(string userId, string firstName)
        {
            var info = (await _firestoreService.GetRecordsByFieldAsync<SellerInfo>("sellers_infos", "UserId", userId)).FirstOrDefault();

            if (info == null)
            {
                var infoId = await _firestoreService.AddRecordAsync("sellers_infos", new SellerInfo { UserId = userId });

                info = await _firestoreService.GetRecordAsync<SellerInfo>("sellers_infos", infoId);
                info.FirstName = firstName;
                await _firestoreService.UpdateRecordAsync("sellers_infos", infoId, info);
            }

            return info;
        }

        private async Task<CompanyInfo> AssignCompanyInfo(string userId, string companyName)
        {
            var info = (await _firestoreService.GetRecordsByFieldAsync<CompanyInfo>("companies", "UserId", userId)).FirstOrDefault();

            if (info == null)
            {
                var infoId = await _firestoreService.AddRecordAsync("companies", new CompanyInfo { UserId = userId });

                info = await _firestoreService.GetRecordAsync<CompanyInfo>("companies", infoId);
                info.Name = companyName;
                await _firestoreService.UpdateRecordAsync("companies", infoId, info);
            }

            return info;
        }
    }
}