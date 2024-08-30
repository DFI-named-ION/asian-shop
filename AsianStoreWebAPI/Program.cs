using AsianStoreWebAPI.Repositories;
using AsianStoreWebAPI.Services;
using FirebaseAdmin;
using Google.Apis.Auth.OAuth2;

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
            builder.Services.AddSingleton<FirebaseStorageService>();

            // Scopes
            builder.Services.AddScoped<IUserRepository, UserRepository>();
            builder.Services.AddScoped<ISellerRepository, SellerRepository>();

            // Configure CORS
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder
                        .WithOrigins("https://asian-shop.vercel.app") // uncomment when ready to publish
                        // .WithOrigins("https://localhost:3000") // comment when ready to publish
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .AllowCredentials());
            });

            var app = builder.Build();

            app.UseCors("CorsPolicy");

            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.MapControllers();

            app.Run();
        }
    }
}