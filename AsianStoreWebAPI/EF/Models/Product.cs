using Google.Api;
using Google.Cloud.Firestore;

namespace AsianStoreWebAPI.EF.Models
{
    [FirestoreData]
    public class Product
    {
        [FirestoreDocumentId]
        public string Id { get; set; }

        [FirestoreProperty]
        public string UserId { get; set; }

        [FirestoreProperty]
        public string Title { get; set; }

        [FirestoreProperty]
        public string Description { get; set; }

        [FirestoreProperty]
        public List<string> PhotoUrls { get; set; } = new List<string>();

        [FirestoreProperty]
        public bool IsGlutenFree { get; set; }

        [FirestoreProperty]
        public bool IsOrganic { get; set; }

        [FirestoreProperty]
        public bool IsVegan { get; set; }

        [FirestoreProperty]
        public bool IsGMOFree { get; set; }

        [FirestoreProperty]
        public bool IsLactoseFree { get; set; }

        [FirestoreProperty]
        public bool IsSugarFree { get; set; }

        [FirestoreProperty]
        public bool IsLowCalories { get; set; }

        [FirestoreProperty]
        public bool IsDyesFree { get; set; }

        [FirestoreProperty]
        public string Height { get; set; }

        [FirestoreProperty]
        public string Width { get; set; }

        [FirestoreProperty]
        public string Length { get; set; }

        [FirestoreProperty]
        public double Weight { get; set; }

        [FirestoreProperty]
        public double Price { get; set; }

        [FirestoreProperty]
        public string Category { get; set; }

        [FirestoreProperty]
        public string SubCategory { get; set; }

        [FirestoreProperty]
        public string Visibility { get; set; }

        [FirestoreProperty]
        public string Article { get; set; }

        [FirestoreProperty]
        public double Rating { get; set; }

        [FirestoreProperty]
        public int InStock { get; set; }
    }
}
