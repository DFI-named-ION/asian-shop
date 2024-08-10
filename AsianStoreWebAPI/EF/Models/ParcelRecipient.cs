using Google.Cloud.Firestore;

namespace AsianStoreWebAPI.EF.Models
{
    [FirestoreData]
    public class ParcelRecipient
    {
        [FirestoreProperty]
        public string FirstName { get; set; }

        [FirestoreProperty]
        public string LastName { get; set; }

        [FirestoreProperty]
        public string MiddleName { get; set; }

        [FirestoreProperty]
        public string Phone { get; set; }
    }
}
