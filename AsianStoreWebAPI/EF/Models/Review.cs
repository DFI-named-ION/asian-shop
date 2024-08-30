using Google.Cloud.Firestore;

namespace AsianStoreWebAPI.EF.Models
{
    [FirestoreData]
    public class Review
    {
        [FirestoreDocumentId]
        public string Id { get; set; }

        [FirestoreProperty]
        public string UserId { get; set; }

        [FirestoreProperty]
        public string ProductId { get; set; }

        [FirestoreProperty]
        public double Rating { get; set; }

        [FirestoreProperty]
        public string Comment { get; set; }

        [FirestoreProperty]
        public string PhotoUrl { get; set; }

        [FirestoreProperty]
        public DateTime CreatedAt { get; set; }
    }
}