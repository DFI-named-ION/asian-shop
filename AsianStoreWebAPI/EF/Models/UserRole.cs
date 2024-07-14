using Google.Cloud.Firestore;

namespace AsianStoreWebAPI.EF.Models
{
    [FirestoreData]
    public class UserRole
    {
        [FirestoreDocumentId]
        public string Id { get; set; }

        [FirestoreProperty]
        public string UserId { get; set; }

        [FirestoreProperty]
        public string RoleId { get; set; }

        [FirestoreProperty]
        public DateTime? AssignedAt { get; set; }
    }
}
