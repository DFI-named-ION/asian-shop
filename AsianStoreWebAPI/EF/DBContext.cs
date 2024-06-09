using System;
using System.Collections.Generic;
using AsianStoreWebAPI.EF.Models;
using Microsoft.EntityFrameworkCore;

namespace AsianStoreWebAPI.EF;

public partial class DBContext : DbContext
{
    public DBContext()
    {
    }

    public DBContext(DbContextOptions<DBContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Picture> Pictures { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Picture>(entity =>
        {
            entity.HasNoKey();

            entity.HasIndex(e => e.ImageUrl, "UQ__Pictures__372CE60D90BDB19A").IsUnique();

            entity.HasIndex(e => e.StorageName, "UQ__Pictures__E185C16AD245A2EE").IsUnique();

            entity.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .HasColumnName("ID");
            entity.Property(e => e.ImageUrl).HasMaxLength(500);
            entity.Property(e => e.OriginName).HasMaxLength(500);
            entity.Property(e => e.StorageName).HasMaxLength(500);
            entity.Property(e => e.UploadDate).HasPrecision(2);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
