using Firebase.Storage;
using Google.Apis.Storage.v1.Data;

namespace AsianStoreWebAPI.Services
{
    public class FirebaseStorageService
    {
        private readonly string _bucketName = "asianstoreauthtest.appspot.com";

        public FirebaseStorageService() { }

        public async Task RemoveFileAsync(string userId, string fileName)
        {
            var filePath = new FirebaseStorage(_bucketName)
                .Child("products")
                .Child("users")
                .Child(userId)
                .Child(fileName);

            await filePath.DeleteAsync();
        }

        public async Task<string> UploadFileAsync(string userId, Stream fileStream, string fileName)
        {
            var task = new FirebaseStorage(_bucketName)
                .Child("products")
                .Child("users")
                .Child(userId)
                // .Child(productId)
                .Child($"{DateTime.UtcNow:yyyyMMddHHmmssfff}-{Guid.NewGuid()}-{fileName}")
                .PutAsync(fileStream);

            task.Progress.ProgressChanged += (s, e) => Console.WriteLine($"Progress: {e.Percentage} %");

            var downloadUrl = await task;

            return downloadUrl;
        }
    }
}
