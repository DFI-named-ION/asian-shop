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

        public async Task<(List<T> Products, int TotalCount, double MinPrice, double MaxPrice)> GetFilteredRecordsAsync<T>(string collectionName, EF.DTO.Filter filter, int pageSize, int pageNumber) where T : class
        {
            var collection = _firestoreDb.Collection(collectionName);
            Query query = collection;

            // query = query.WhereEqualTo("Visibility", "Published"); // crashes for some reason

            if (filter.Categories != null && filter.Categories.Length > 0)
            {
                query = query.WhereIn("Category", filter.Categories);
            }

            if (filter.SubCategories != null && filter.SubCategories.Length > 0)
            {
                query = query.WhereIn("SubCategory", filter.SubCategories);
            }

            if (filter.Weights != null && filter.Weights.Length > 0)
            {
                foreach (var option in filter.Weights)
                {
                    switch (option)
                    {
                        case "option1":
                            query = query.WhereLessThanOrEqualTo("Weight", 100);
                            break;
                        case "option2":
                            query = query.WhereLessThanOrEqualTo("Weight", 250);
                            break;
                        case "option3":
                            query = query.WhereLessThanOrEqualTo("Weight", 500);
                            break;
                        case "option4":
                            query = query.WhereLessThanOrEqualTo("Weight", 1000);
                            break;
                    }
                }
            }

            if (!string.IsNullOrEmpty(filter.BottomPrice))
            {
                query = query.WhereGreaterThanOrEqualTo("Price", double.Parse(filter.BottomPrice));
            }
            if (!string.IsNullOrEmpty(filter.TopPrice))
            {
                query = query.WhereLessThanOrEqualTo("Price", double.Parse(filter.TopPrice));
            }

            List<DocumentSnapshot> allDocuments = new List<DocumentSnapshot>();
            if (filter.Ratings != null && filter.Ratings.Length > 0)
            {
                foreach (var option in filter.Ratings)
                {
                    Query selection = query;
                    switch (option)
                    {
                        case "option1":
                            selection = selection.WhereGreaterThanOrEqualTo("Rating", 1).WhereLessThanOrEqualTo("Rating", 1.75);
                            break;
                        case "option2":
                            selection = selection.WhereGreaterThanOrEqualTo("Rating", 1.76).WhereLessThanOrEqualTo("Rating", 2.75);
                            break;
                        case "option3":
                            selection = selection.WhereGreaterThanOrEqualTo("Rating", 2.76).WhereLessThanOrEqualTo("Rating", 3.75);
                            break;
                        case "option4":
                            selection = selection.WhereGreaterThanOrEqualTo("Rating", 3.76).WhereLessThanOrEqualTo("Rating", 4.75);
                            break;
                        case "option5":
                            selection = selection.WhereGreaterThanOrEqualTo("Rating", 4.76).WhereLessThanOrEqualTo("Rating", 5);
                            break;
                    }
                    var snapshot = await selection.GetSnapshotAsync();
                    allDocuments.AddRange(snapshot.Documents);
                }
            }
            else
            {
                var snapshot = await query.GetSnapshotAsync();
                allDocuments.AddRange(snapshot.Documents);
            }

            int totalCount = allDocuments.Count;
            double minPrice = 0;
            double maxPrice = 0;
            if (totalCount != 0)
            {
                minPrice = allDocuments.Min(doc => Convert.ToDouble(doc.GetValue<double>("Price")));
                maxPrice = allDocuments.Max(doc => Convert.ToDouble(doc.GetValue<double>("Price")));
            }

            var paginatedDocuments = allDocuments.Skip(pageSize * (pageNumber - 1)).Take(pageSize);

            var products = paginatedDocuments.Select(doc => doc.ConvertTo<T>()).ToList();

            return (products, totalCount, minPrice, maxPrice);
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
