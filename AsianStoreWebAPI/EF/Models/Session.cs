using Google.Cloud.Firestore;

namespace AsianStoreWebAPI.EF.Models
{
    [FirestoreData]
    public class Session
    {
        [FirestoreDocumentId]
        public string Id { get; set; }

        [FirestoreProperty]
        public string IssuedTo { get; set; }

        [FirestoreProperty]
        public DateTime? ExpiresIn { get; set; }

        [FirestoreProperty]
        public DateTime? CreatedAt { get; set; }
    }
}
