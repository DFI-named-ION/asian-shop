using Google.Cloud.Firestore;

namespace AsianStoreWebAPI.EF.Models
{
    [FirestoreData]
    public class VerificationCode
    {
        [FirestoreDocumentId]
        public string Id { get; set; }

        [FirestoreProperty]
        public string Code { get; set; }

        [FirestoreProperty]
        public DateTime? ExpiresIn { get; set; }

        [FirestoreProperty]
        public DateTime? CreatedAt { get; set; }

        [FirestoreProperty]
        public string IssuedTo { get; set; }
    }
}
