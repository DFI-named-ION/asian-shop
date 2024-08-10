using FirebaseAdmin.Auth;
using System.Net.Mail;
using System.Net;
using AsianStoreWebAPI.EF.Models;
using Google.Cloud.Firestore;
using AsianStoreWebAPI.Responses;
using FirebaseAdmin;
using Google.Rpc;

namespace AsianStoreWebAPI.Services
{
    public class FirebaseAuthService
    {
        private readonly IConfiguration _config;

        public FirebaseAuthService(IConfiguration config)
        { _config = config; }

        public async Task<List<UserRecord>> GetAllUsersAsync()
        {
            var users = new List<UserRecord>();
            var pagedEnumerable = FirebaseAuth.DefaultInstance.ListUsersAsync(null);
            var enumerator = pagedEnumerable.GetAsyncEnumerator();
            while (await enumerator.MoveNextAsync())
            {
                users.Add(enumerator.Current);
            }
            return users;
        }

        public async Task SetUserEmailVerified(string userId)
        {
            var app = FirebaseApp.DefaultInstance;
            await FirebaseAuth.GetAuth(app).UpdateUserAsync(new UserRecordArgs()
            {
                Uid = userId,
                EmailVerified = true
            });
        }

        public async Task SetClaims(string userId, Dictionary<string, object> claims)
        {
            await FirebaseAuth.DefaultInstance.SetCustomUserClaimsAsync(userId, claims);
        }

        public async Task<UserRecord> GetUserByIdAsync(string userId)
        {
            return await FirebaseAuth.DefaultInstance.GetUserAsync(userId);
        }

        public async Task<UserRecord> GetUserByEmailAsync(string email)
        {
            return await FirebaseAuth.DefaultInstance.GetUserByEmailAsync(email);
        }

        public async Task UpdateUserPassword(string userId, string password)
        {
            var app = FirebaseApp.DefaultInstance;
            await FirebaseAuth.GetAuth(app).UpdateUserAsync(new UserRecordArgs()
            {
                Uid = userId, 
                Password = password
            });
        }

        public async void DeleteUserAsync(string userId)
        {
            await FirebaseAuth.DefaultInstance.DeleteUserAsync(userId);
        }

        public async Task SendVerificationCodeAsync(string userId, string code)
        {
            var user = await GetUserByIdAsync(userId);

            var from = new MailAddress("noreply@sakuratails.com");
            var to = new MailAddress(user.Email);
            var subject = "Verification code";
            var body = $@"
                    <div style='margin: 0 auto; border: 1px dashed black; text-align: center; width: 640px; margin-top: 50px; background-color: #951717; font-family: Montserrat, sans-serif;'>
                        <h1 style='padding: 20px; color: #EAE5D9; font-weight: 600;'>Asian store</h1>
                        <hr style='color: #EAE5D9;'/>
                        <h6 style='background-color: #EAE5D9; padding: 20px; font-weight: 400; font-size: 14pt;'>Hi! This is Asian store.<br/>We are sending you this email with verification code that will help you follow the registration process!</h6>
                        <hr style='color: #EAE5D9;'/>
                        <h1 style='letter-spacing: 10px; color: #EAE5D9; padding: 50px; font-weight: 800; font-size: 40pt;'>{code}</h1>
                        <h6 style='background-color: #EAE5D9; margin-bottom: 0px; padding: 20px; font-size: 14pt;'>Best wishes!</h6>
                    </div>";
            await SendEmailAsync(from, to, subject, body);
        }

        public async Task SendResetUrlAsync(string userId, string code)
        {
            var user = await GetUserByIdAsync(userId);

            var url = $"https://asian-shop.vercel.app/reset-password?secret={code}";
            var from = new MailAddress("noreply@sakuratails.com");
            var to = new MailAddress(user.Email);
            var subject = "Password reset";
            var body = $@"
                    <div style='margin: 0 auto; border: 1px dashed black; text-align: center; width: 640px; margin-top: 50px; background-color: #951717; font-family: Montserrat, sans-serif;'>
                        <h1 style='padding: 20px; color: #EAE5D9; font-weight: 600;'>Asian store</h1>
                        <hr style='color: #EAE5D9;'/>
                        <h6 style='background-color: #EAE5D9; padding: 20px; font-weight: 400; font-size: 14pt;'>Hi! This is Asian store.<br/>We are sending you this email that will help you reset your password!</h6>
                        <hr style='color: #EAE5D9;'/>
                        <h1><a style='color: #EAE5D9; padding: 50px; font-weight: 800; font-size: 15pt; text-decoration: none;' href='{url}'>Click on me!</a></h1>
                        <h6 style='background-color: #EAE5D9; margin-bottom: 0px; padding: 20px; font-size: 14pt;'>Best wishes!</h6>
                    </div>";
            await SendEmailAsync(from, to, subject, body);
        }

        private async Task SendEmailAsync(MailAddress from, MailAddress to, string subject, string body)
        {
            var client = new SmtpClient()
            {
                Host = "mail.privateemail.com",
                Credentials = new NetworkCredential(_config.GetValue<string>("SMTP:Credentials:user_name"), _config.GetValue<string>("SMTP:Credentials:password")),
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                Port = 587,
            };

            var mailMessage = new MailMessage
            {
                From = from,
                Subject = subject,
                Body = body,
                IsBodyHtml = true
            };
            mailMessage.To.Add(to);

            await client.SendMailAsync(mailMessage);
        }
    }
}
