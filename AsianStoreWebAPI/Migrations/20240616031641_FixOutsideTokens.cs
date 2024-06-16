using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AsianStoreWebAPI.Migrations
{
    /// <inheritdoc />
    public partial class FixOutsideTokens : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "AccountId",
                table: "GoogleTokens",
                type: "nvarchar(MAX)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "AccountId",
                table: "FacebookTokens",
                type: "nvarchar(MAX)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "AccountId",
                table: "AppleTokens",
                type: "nvarchar(MAX)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AccountId",
                table: "GoogleTokens");

            migrationBuilder.DropColumn(
                name: "AccountId",
                table: "FacebookTokens");

            migrationBuilder.DropColumn(
                name: "AccountId",
                table: "AppleTokens");
        }
    }
}
