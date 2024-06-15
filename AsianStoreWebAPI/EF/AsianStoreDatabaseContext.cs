using AsianStoreWebAPI.EF.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace AsianStoreWebAPI.EF
{
    public class AsianStoreDatabaseContext : IdentityDbContext<User, IdentityRole<long>, long>
    {
        public AsianStoreDatabaseContext() : base() { }

        public AsianStoreDatabaseContext(DbContextOptions<AsianStoreDatabaseContext> options)
            : base(options) { }

        public DbSet<UserInfo> UserInfos { get; set; }
        public DbSet<UserAddress> UserAddresses { get; set; }
        public DbSet<AuthorizationCode> AuthorizationCodes { get; set; }
        public DbSet<FacebookToken> FacebookTokens { get; set; }
        public DbSet<GoogleToken> GoogleTokens { get; set; }
        public DbSet<AppleToken> AppleTokens { get; set; }

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
                .HasOne(u => u.AuthorizationCode)
                .WithOne(ac => ac.User)
                .HasForeignKey<AuthorizationCode>(ac => ac.UserId)
                .IsRequired()
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<User>()
                .HasOne(u => u.AppleToken)
                .WithOne(at => at.User)
                .HasForeignKey<AppleToken>(at => at.UserId)
                .IsRequired()
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<User>()
                .HasOne(u => u.FacebookToken)
                .WithOne(ft => ft.User)
                .HasForeignKey<FacebookToken>(ft => ft.UserId)
                .IsRequired()
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<User>()
                .HasOne(u => u.GoogleToken)
                .WithOne(gt => gt.User)
                .HasForeignKey<GoogleToken>(gt => gt.UserId)
                .IsRequired()
                .OnDelete((DeleteBehavior.Cascade));

            modelBuilder.Entity<AppleToken>()
                .HasIndex(at => at.UserId)
                .IsUnique();

            modelBuilder.Entity<FacebookToken>()
                .HasIndex(ft => ft.UserId)
                .IsUnique();

            modelBuilder.Entity<GoogleToken>()
                .HasIndex(gt => gt.UserId)
                .IsUnique();

            modelBuilder.Entity<User>()
                .HasIndex(u => u.InfoId)
                .IsUnique();

            modelBuilder.Entity<UserInfo>()
                .HasIndex(ui => ui.AddressId)
                .IsUnique();

        }

    }
}
