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

        public DbSet<UserInfo> UserInfos { get; set; }
        public DbSet<UserAddress> UserAddresses { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<User>()
            .HasOne(u => u.UserInfo)
            .WithOne(ui => ui.User)
            .HasForeignKey<User>(u => u.InfoId)
            .IsRequired(false)
            .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<UserInfo>()
                .HasOne(ui => ui.UserAddress)
                .WithOne(ua => ua.UserInfo)
                .HasForeignKey<UserInfo>(ui => ui.AddressId)
                .IsRequired(false)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<User>()
                .HasIndex(u => u.InfoId)
                .IsUnique();

            modelBuilder.Entity<UserInfo>()
                .HasIndex(ui => ui.AddressId)
                .IsUnique();

        }
    }
}
