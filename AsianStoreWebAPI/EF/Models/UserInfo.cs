using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace AsianStoreWebAPI.EF.Models
{
    [Table("UserInfos")]
    [Index(nameof(AddressId), IsUnique = true)]
    public class UserInfo
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column(TypeName = "bigint")]
        public long ID { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Name { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Surname { get; set; }

        [Column(TypeName = "bigint")]
        public long? AddressId { get; set; }

        [Required]
        [Column(TypeName = "datetime2(2)")]
        public DateTime Birthday { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(20)")]
        public string PhoneNumber { get; set; }


        [ForeignKey("AddressId")]
        public virtual UserAddress UserAddress { get; set; }

        public virtual User User { get; set; }
    }
}
