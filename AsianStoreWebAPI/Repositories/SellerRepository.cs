using AsianStoreWebAPI.EF.Models;
using AsianStoreWebAPI.Services;
using System;

namespace AsianStoreWebAPI.Repositories
{
    public class SellerRepository: ISellerRepository
    {
        private readonly FirebaseAuthService _firebaseAuthService;
        private readonly FirestoreService _firestoreService;
        private readonly FirebaseStorageService _firestoreStorageService;
        private readonly JwtService _jwtService;

        public SellerRepository(FirebaseStorageService fss, FirebaseAuthService fas, FirestoreService fs, JwtService js)
        { _firestoreStorageService = fss; _firebaseAuthService = fas; _firestoreService = fs; _jwtService = js; }

        public async Task AddProductAsync(string sessionId, string token)
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

            var data = _jwtService.DecryptJwtToken(token, [
                "title", "description", "price", "category", "subCategory", "article", "visibility", "photoUrls",
                "isGlutenFree", "isOrganic", "isVegan", "isGMOFree", "isLactoseFree", "isSugarFree", "isLowCalories", "isDyesFree",
                "height", "width", "length", "weight"]);

            var newProduct = new Product()
            {
                Title = data["title"].ToString(),
                Description = data["description"].ToString(),
                Price = Convert.ToDouble(data["price"].ToString()),
                Category = data["category"].ToString(),
                SubCategory = data["subCategory"].ToString(),
                Article = data["article"].ToString(),
                Visibility = data["visibility"].ToString(),
                PhotoUrls = data["photoUrls"].ToString()
                    .Substring(1, data["photoUrls"].ToString().Length - 2)
                    .Split(new string[] { "\",\"" }, StringSplitOptions.None)
                    .Select(url => url.Trim('"')).ToList(),
                IsGlutenFree = Convert.ToBoolean(data["isGlutenFree"].ToString()),
                IsOrganic = Convert.ToBoolean(data["isOrganic"].ToString()),
                IsVegan = Convert.ToBoolean(data["isVegan"].ToString()),
                IsGMOFree = Convert.ToBoolean(data["isGMOFree"].ToString()),
                IsLactoseFree = Convert.ToBoolean(data["isLactoseFree"].ToString()),
                IsSugarFree = Convert.ToBoolean(data["isSugarFree"].ToString()),
                IsLowCalories = Convert.ToBoolean(data["isLowCalories"].ToString()),
                IsDyesFree = Convert.ToBoolean(data["isDyesFree"].ToString()),
                Height = data["height"].ToString(),
                Width = data["width"].ToString(),
                Length = data["length"].ToString(),
                Weight = Convert.ToDouble(data["weight"]),
                InStock = 1,
                Rating = 1,
                UserId = user.Uid
            };

            await _firestoreService.AddRecordAsync<Product>("products", newProduct);
        }

        public async Task RemoveProductImageAsync(string sessionId, string token)
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

            var data = _jwtService.DecryptJwtToken(token, ["file"]);
            var file = data["file"].ToString();
            var fileName = Uri.UnescapeDataString(file).Split('?')[0].Split('/').Last();

            await _firestoreStorageService.RemoveFileAsync(user.Uid, fileName);
        }

        public async Task<object> UploadProductImageAsync(string sessionId, IFormFile file)
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

            var fileUrl = await _firestoreStorageService.UploadFileAsync(user.Uid, file.OpenReadStream(), file.FileName);

            return fileUrl;
        }
    }
}
