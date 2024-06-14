using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace AsianStoreWebAPI.EF.Models
{
    [Table("UserAddresses")]
    public class UserAddress
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column(TypeName = "bigint")]
        public long ID { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Country { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string City { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Province { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(10)")]
        public string PostalCode { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Street { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(10)")]
        public string ApartmentNumber { get; set; }


        public virtual UserInfo UserInfo { get; set; }
    }
}
