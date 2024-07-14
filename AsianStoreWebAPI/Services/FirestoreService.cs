using Google.Cloud.Firestore;

namespace AsianStoreWebAPI.Services
{
    public class FirestoreService
    {
        private readonly FirestoreDb _firestoreDb;

        public FirestoreService(IConfiguration configuration)
        {
            string jsonPath = Path.Combine(Directory.GetCurrentDirectory(), "service.json");
            Environment.SetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS", jsonPath);

            var projectId = configuration["Firebase:project_id"];
            _firestoreDb = FirestoreDb.Create(projectId);
        }

        public async Task<string> AddRecordAsync<T>(string collectionName, T document)
        {
            var collection = _firestoreDb.Collection(collectionName);
            var result = await collection.AddAsync(document);
            return result.Id;
        }

        public async Task<T> GetRecordAsync<T>(string collectionName, string documentId) where T : class
        {
            var docRef = _firestoreDb.Collection(collectionName).Document(documentId);
            var snapshot = await docRef.GetSnapshotAsync();
            if (snapshot.Exists)
            {
                return snapshot.ConvertTo<T>();
            }
            return null!;
        }

        public async Task<List<T>> GetAllRecordsAsync<T>(string collectionName) where T : class
        {
            var collection = _firestoreDb.Collection(collectionName);
            var snapshot = await collection.GetSnapshotAsync();
            var documents = new List<T>();
            foreach (var document in snapshot.Documents)
            {
                if (document.Exists)
                {
                    documents.Add(document.ConvertTo<T>());
                }
            }
            return documents;
        }

        public async Task<List<T>> GetRecordsByFieldAsync<T>(string collectionName, string fieldName, object value) where T : class
        {
            var collection = _firestoreDb.Collection(collectionName);
            var query = collection.WhereEqualTo(fieldName, value);
            var snapshot = await query.GetSnapshotAsync();
            return snapshot.Documents.Select(doc => doc.ConvertTo<T>()).ToList();
        }

        public async Task UpdateRecordAsync<T>(string collectionName, string documentId, T document)
        {
            var docRef = _firestoreDb.Collection(collectionName).Document(documentId);
            await docRef.SetAsync(document, SetOptions.Overwrite);
        }

        public async Task DeleteRecordAsync(string collectionName, string documentId)
        {
            var docRef = _firestoreDb.Collection(collectionName).Document(documentId);
            await docRef.DeleteAsync();
        }
    }
}
