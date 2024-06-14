using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AsianStoreWebAPI.EF.Models
{
    [Table("Users")]
    [Index(nameof(InfoId), IsUnique = true)]
    public class User : IdentityUser
    {
        [Required]
        [Column(TypeName = "bit")]
        public bool IsVerified { get; set; } = false;

        [Column(TypeName = "bigint")]
        public long? InfoId { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Role { get; set; }
    }
}
