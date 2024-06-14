using AsianStoreWebAPI.EF.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace AsianStoreWebAPI.EF
{
    public class AsianStoreDatabaseContext : IdentityDbContext<User>
    {
        public AsianStoreDatabaseContext() : base() { }

        public AsianStoreDatabaseContext(DbContextOptions<AsianStoreDatabaseContext> options)
            : base(options) { }
    }
}
