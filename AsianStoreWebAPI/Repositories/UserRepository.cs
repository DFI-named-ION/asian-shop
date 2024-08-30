using AsianStoreWebAPI.EF.Models;
using AsianStoreWebAPI.Services;
using Azure.Core;
using FirebaseAdmin.Auth;
using Google.Cloud.Firestore.V1;
using Google.Rpc;
using Microsoft.AspNetCore.Identity;
using System;
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


        public async Task RemoveUserAsync(string sessionId)
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

            var userInfos = await _firestoreService.GetRecordsByFieldAsync<UserInfo>("users_infos", "UserId", user.Uid);
            foreach (var userInfo in userInfos)
            {
                await _firestoreService.DeleteRecordAsync("users_infos", userInfo.Id);
            }

            var sellerInfos = await _firestoreService.GetRecordsByFieldAsync<SellerInfo>("sellers_infos", "UserId", user.Uid);
            foreach (var sellerInfo in sellerInfos)
            {
                await _firestoreService.DeleteRecordAsync("sellers_infos", sellerInfo.Id);
            }

            var codes = await _firestoreService.GetRecordsByFieldAsync<VerificationCode>("verificationCodes", "IssuedTo", user.Uid);
            foreach (var code in codes)
            {
                await _firestoreService.DeleteRecordAsync("verificationCodes", code.Id);
            }

            var companies = await _firestoreService.GetRecordsByFieldAsync<CompanyInfo>("companies", "UserId", user.Uid);
            foreach (var company in companies)
            {
                await _firestoreService.DeleteRecordAsync("companies", company.Id);
            }

            var products = await _firestoreService.GetRecordsByFieldAsync<Product>("products", "UserId", user.Uid);
            foreach (var product in products)
            {
                await _firestoreService.DeleteRecordAsync("products", product.Id);
            }

            var sessions = await _firestoreService.GetRecordsByFieldAsync<Session>("sessions", "IssuedTo", user.Uid);
            foreach (var sess in sessions)
            {
                await _firestoreService.DeleteRecordAsync("sessions", sess.Id);
            }

            // offers and other stuff

            await _firebaseAuthService.DeleteUserAsync(user.Uid);
        }


        public async Task UpdateEmailAsync(string sessionId, string token)
        {
            if (!_jwtService.IsJwtValid(_jwtService.DecodeJwt(token)))
                throw new Exception("Jwt is not valid");

            var data = _jwtService.DecryptJwtToken(token, ["email"]);

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

            var existingUser = (await _firebaseAuthService.GetAllUsersAsync()).FirstOrDefault(x => x.Email == data["email"].ToString());
            if (existingUser != null)
                throw new Exception("auth/email-already-in-use");

            await _firebaseAuthService.UpdateUserEmail(user.Uid, data["email"].ToString());
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


        public async Task<Session> LoginSellerAsync(string token)
        {
            if (!_jwtService.IsJwtValid(_jwtService.DecodeJwt(token)))
                throw new Exception("Jwt is not valid");

            var data = _jwtService.DecryptJwtToken(token, ["accessToken"]);

            var userId = _jwtService.GetJwtClaim(data["accessToken"].ToString(), "user_id").Value;
            var user = await _firebaseAuthService.GetUserByIdAsync(userId);
            if (user is null)
                throw new Exception("User not found");

            if (user.CustomClaims["role"].ToString() != "seller")
                throw new Exception("not-seller-error");

            var session = await AssignSession(user.Uid);
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
            var requestedFieldsWithValues = fields.Split(';', StringSplitOptions.RemoveEmptyEntries);
            var data = new Dictionary<string, object>();

            var requestData = new Dictionary<string, List<string>>();
            var requestedFields = new List<string>();

            foreach (var field in requestedFieldsWithValues)
            {
                var parts = field.Split(':', StringSplitOptions.RemoveEmptyEntries);

                if (parts.Length == 1)
                {
                    requestedFields.Add(parts[0]);
                }
                else if (parts.Length == 2)
                {
                    if (!requestData.ContainsKey(parts[0]))
                    {
                        requestData[parts[0]] = new List<string>();
                    }
                    requestData[parts[0]].Add(parts[1]);
                    requestedFields.Add(parts[0]);
                }
                else if (parts.Length > 2)
                {
                    if (!requestData.ContainsKey(parts[0]))
                    {
                        requestData[parts[0]] = new List<string>();
                    }
                    requestData[parts[0]].Add(string.Join(":", parts.Skip(1)));
                    requestedFields.Add(parts[0]);
                }
            }

            var generalMap = new string[]
            {
                "allProducts", "product"
            };

            var userRelatedMap = new string[]
            {
                "isVerified", "isSeller", "email"
            };

            var userInfoRelatedMap = new string[]
            {
                "firstName", "middleName", "lastName",
                "birthday", "language", "sex", "phones", 
                "addresses", "doPrint", "recipients",
                "displayName", "selectedRecipient"
            };

            var sellerInfoRelatedMap = new string[]
            {
                "sellerFirstName", "sellerLastName", "sellerMiddleName", 
                "sellerPhone", "sellerId"
            };

            var generalFields = new List<string>();
            var userRelatedFields = new List<string>();
            var userInfoRelatedFields = new List<string>();
            var sellerInfoRelatedFields = new List<string>();

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
                else if (sellerInfoRelatedMap.Contains(field))
                {
                    sellerInfoRelatedFields.Add(field);
                }
            }

            if (userRelatedFields.Any() || userInfoRelatedFields.Any() || sellerInfoRelatedFields.Any())
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

                if (userRelatedFields.Any())
                {
                    await ProcessUserRelatedFields(data, user, userRelatedFields);
                }
                if (userInfoRelatedFields.Any())
                {
                    await ProcessUserInfoRelatedFieldsAsync(data, user, userInfoRelatedFields);
                }
                if (sellerInfoRelatedFields.Any())
                {
                    await ProcessSellerInfoRelatedFieldsAsync(data, user, sellerInfoRelatedFields);
                }
            }

            await ProcessGeneralFieldsAsync(data, generalFields, requestData);

            return data;
        }

        private async Task ProcessGeneralFieldsAsync(Dictionary<string, object> data, List<string> fields, Dictionary<string, List<string>> requestData)
        {
            foreach (var field in fields)
            {
                switch (field)
                {
                    case "allProducts":
                        var products = await _firestoreService.GetAllRecordsAsync<Product>("products");
                        data.Add("allProducts", products);
                        break;
                    case "product":
                        var productIds = requestData.ContainsKey("product") ? requestData["product"] : new List<string>();
                        var productsList = new List<Product>();

                        foreach (var productId in productIds)
                        {
                            var product = (await _firestoreService.GetRecordsByFieldAsync<Product>("products", "Article", productId)).FirstOrDefault();
                            if (product == null)
                                throw new Exception($"Product with ID {productId} not found");
                            productsList.Add(product);
                        }

                        data.Add("product", productsList);
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
                    case "email":
                        data.Add("email", user.Email);
                        break;
                    case "isVerified":
                        data.Add("isVerified", user.EmailVerified);
                        break;
                    case "isSeller":
                        data.Add("isSeller", user.CustomClaims["role"].ToString() == "seller");
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

        private async Task ProcessSellerInfoRelatedFieldsAsync(Dictionary<string, object> data, UserRecord user, List<string> fields)
        {
            var info = (await _firestoreService.GetRecordsByFieldAsync<SellerInfo>("sellers_infos", "UserId", user.Uid)).FirstOrDefault();
            foreach (var field in fields)
            {
                switch (field)
                {
                    case "sellerFirstName":
                        data.Add("sellerFirstName", info.FirstName);
                        break;
                    case "sellerMiddleName":
                        data.Add("sellerMiddleName", info.MiddleName);
                        break;
                    case "sellerLastName":
                        data.Add("sellerLastName", info.LastName);
                        break;
                    case "sellerId":
                        data.Add("sellerId", info.UniqueId);
                        break;
                    case "sellerPhone":
                        data.Add("sellerPhone", info.Phone);
                        break;
                }
            }
        }


        public async Task UpdateSellerInfoAsync(string sessionId, string token)
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

            var info = (await _firestoreService.GetRecordsByFieldAsync<SellerInfo>("sellers_infos", "UserId", user.Uid)).FirstOrDefault();

            if (info is null)
            {
                var infoId = await _firestoreService.AddRecordAsync("sellers_infos", new SellerInfo { UserId = user.Uid });
                info = await _firestoreService.GetRecordAsync<SellerInfo>("sellers_infos", infoId);
            }

            var data = _jwtService.DecryptJwtToken(token, ["sellerFirstName", "sellerMiddleName", "sellerLastName", "sellerPhone"]);

            info.FirstName = data["sellerFirstName"].ToString();
            info.MiddleName = data["sellerMiddleName"].ToString();
            info.LastName = data["sellerLastName"].ToString();
            info.Phone = data["sellerPhone"].ToString();

            await _firestoreService.UpdateRecordAsync<SellerInfo>("sellers_infos", info.Id, info);
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
                info.LastName = "";
                info.MiddleName = "";
                info.Phone = "";
                var rand = new Random();
                var code = "";
                SellerInfo sellerInfo = null;

                do
                {
                    code = rand.Next(1000000, 10000000).ToString();
                    sellerInfo = (await _firestoreService.GetRecordsByFieldAsync<SellerInfo>("sellers_infos", "UniqueId", code.ToString())).FirstOrDefault();

                } while (sellerInfo != null);

                info.UniqueId = code;
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






        // new stuff
        public async Task<object> Me(string sessionId)
        {
            // sessionId = "CfY9X9LHSqfsCpkybtFqHH6hqfS2";
            var session = (await _firestoreService.GetRecordsByFieldAsync<Session>("sessions", "IssuedTo", sessionId)).FirstOrDefault(x => x.ExpiresIn > DateTime.UtcNow);
            if (session is null)
                throw new Exception("session-not-valid");

            var user = await _firebaseAuthService.GetUserByIdAsync(session.IssuedTo);
            if (user is null)
                throw new Exception("user-not-found");

            var data = new Dictionary<string, string>()
            {
                { "email", user.Email },
                { "isVerified", user.EmailVerified.ToString() }
            };

            var role = user.CustomClaims["role"].ToString();
            var collectionName = role == "seller" ? "users_infos" : "sellers_infos";

            var info = (await _firestoreService.GetRecordsByFieldAsync<dynamic>(collectionName, "UserId", user.Uid)).FirstOrDefault();

            data.Add("displayName", $"{info["FirstName"]} {info["LastName"]}");
            data.Add("role", user.CustomClaims["role"].ToString());

            return data;
        }
    }
}