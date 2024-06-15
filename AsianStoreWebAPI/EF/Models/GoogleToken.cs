using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace AsianStoreWebAPI.EF.Models
{
    [Table("GoogleTokens")]
    [Index(nameof(UserId), IsUnique = true)]
    public class GoogleToken
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column(TypeName = "bigint")]
        public long ID { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(MAX)")]
        public string Token { get; set; }

        [Required]
        [Column(TypeName = "bigint")]
        public long UserId { get; set; }

        [ForeignKey("UserId")]
        public virtual User User { get; set; }
    }
}
