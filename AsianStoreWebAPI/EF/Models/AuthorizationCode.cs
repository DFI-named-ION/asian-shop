using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace AsianStoreWebAPI.EF.Models
{
    [Table("AuthorizationCodes")]
    [Index(nameof(UserId), IsUnique = true)]
    public class AuthorizationCode
    {
        [Key]
        [Column(TypeName = "bigint")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long ID { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(6)")]
        public string Code { get; set; }

        [Required]
        [Column(TypeName = "datetime2(2)")]
        public DateTime ExpirationDate { get; set; } = DateTime.Now.AddHours(1);

        [Required]
        [Column(TypeName = "bigint")]
        public long UserId { get; set; }

        [ForeignKey("UserId")]
        public virtual User User { get; set; }
    }
}
