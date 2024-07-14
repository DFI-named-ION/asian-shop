using AsianStoreWebAPI.EF;
using AsianStoreWebAPI.EF.Models;
using AsianStoreWebAPI.Repositories;
using AsianStoreWebAPI.Services;
using FirebaseAdmin;
using Google.Api;
using Google.Apis.Auth.OAuth2;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Newtonsoft.Json;
using Swashbuckle.AspNetCore.Filters;
using System.Text;

namespace AsianStoreWebAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            // Firebase + Services
            FirebaseApp.Create(new AppOptions()
            {
                Credential = GoogleCredential.FromFile(Directory.GetCurrentDirectory() + "/service.json"),
            });
            builder.Services.AddSingleton<JwtService>();
            builder.Services.AddSingleton<FirestoreService>();
            builder.Services.AddSingleton<FirebaseAuthService>();

            // Scopes
            builder.Services.AddScoped<IUserRepository, UserRepository>();
            builder.Services.AddScoped<IRoleRepository, RoleRepository>();

            builder.Services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder
                        .WithOrigins("http://localhost:3000", "https://localhost:3000", "https://asian-shop.vercel.app/", "https://asian-shop-dev.vercel.app/") // Replace with your React app's URL
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .AllowCredentials());
            });

            var app = builder.Build();

            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.UseCors("CorsPolicy");

            app.MapControllers();

            app.Run();
        }
    }
}
