using Google.Cloud.Firestore;

namespace AsianStoreWebAPI.EF.Models
{
    [FirestoreData]
    public class UserAddress
    {
        [FirestoreProperty]
        public string City { get; set; }

        [FirestoreProperty]
        public string Street { get; set; }

        [FirestoreProperty]
        public string HouseNumber { get; set; }

        [FirestoreProperty]
        public string ApartmentNumber { get; set; }
    }
}
