using Google.Cloud.Firestore;

namespace AsianStoreWebAPI.EF.Models
{
    [FirestoreData]
    public class UserInfo
    {
        [FirestoreDocumentId]
        public string Id { get; set; }

        [FirestoreProperty]
        public string UserId { get; set; }

        [FirestoreProperty]
        public string FirstName { get; set; }

        [FirestoreProperty]
        public string LastName { get; set; }

        [FirestoreProperty]
        public string MiddleName { get; set; }

        [FirestoreProperty]
        public List<string> Phones { get; set; } = new List<string>();

        [FirestoreProperty]
        public bool Sex { get; set; } = false;

        [FirestoreProperty]
        public DateTime Birthday { get; set; } = DateTime.UtcNow;

        [FirestoreProperty]
        public string Language { get; set; }

        [FirestoreProperty]
        public bool DoPrintReceipt { get; set; } = false;

        [FirestoreProperty]
        public List<UserAddress> Addresses { get; set; } = new List<UserAddress> {};

        [FirestoreProperty]
        public ParcelRecipient SelectedParcelRecipient { get; set; } = null;

        [FirestoreProperty]
        public List<ParcelRecipient> ParcelRecipients { get; set; } = new List<ParcelRecipient> {};
    }
}
