using Google.Cloud.Firestore;

namespace AsianStoreWebAPI.EF.Models
{
    [FirestoreData]
    public class CompanyInfo
    {
        [FirestoreDocumentId]
        public string Id { get; set; }

        [FirestoreProperty]
        public string UserId { get; set; }

        [FirestoreProperty]
        public string Name { get; set; }

        [FirestoreProperty]
        public string Website { get; set; }

        [FirestoreProperty]
        public string Email { get; set; }

        [FirestoreProperty]
        public string Contact { get; set; }

        [FirestoreProperty]
        public string Phone { get; set; }

        [FirestoreProperty]
        public string Comment { get; set; }

        [FirestoreProperty]
        public string About { get; set; }

        [FirestoreProperty]
        public string EmployeesAmount { get; set; }

        [FirestoreProperty]
        public string FoundationYear { get; set; }

        [FirestoreProperty]
        public string TargetClients { get; set; }

        [FirestoreProperty]
        public string SalesPerYear { get; set; }

        [FirestoreProperty]
        public string RequestsPerYear { get; set; }

        [FirestoreProperty]
        public string Address { get; set; }
    }
}
