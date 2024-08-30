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

        public async Task UpdateUserEmail(string userId, string email)
        {
            var app = FirebaseApp.DefaultInstance;
            await FirebaseAuth.GetAuth(app).UpdateUserAsync(new UserRecordArgs()
            {
                Uid = userId,
                Email = email,
                EmailVerified = false
            });
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

        public async Task DeleteUserAsync(string userId)
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
                    <!DOCTYPE html>
                    <html lang=""en"">
                        <head>
                            <meta charset=""UTF-8"">
                            <meta name=""viewport"" content=""width=device-width, initial-scale=1.0"">
                            <meta http-equiv=""X-UA-Compatible"" content=""ie=edge"">
                            <title>HTML 5 Boilerplate</title>
                            <link rel=""stylesheet"" href=""style.css"">
                            <link rel=""preconnect"" href=""https://fonts.googleapis.com"">
                            <link rel=""preconnect"" href=""https://fonts.gstatic.com"" crossorigin>
                            <link href=""https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"" rel=""stylesheet"">
                        </head>
                        <body style=""width: 1810px; height: 800px; background-color: #EAE5D9; font-family: Montserrat, sans-serif;"">
                            <h1 style=""font-size: 180px; font-weight: 700; color: #951717; position: relative; text-align: center; margin-top: 290px; line-height: 50px;"">Ласкаво просимо</h1>
                            <img src=""https://i.imgur.com/ml33hUx.png"" style=""position: absolute; top: 90px; left: 0px;"">
                            <img src=""https://i.imgur.com/9ONHP0O.png"" style=""position: absolute; top: 0px; right: 0px;"">
                            <div style=""width: 635px; background: radial-gradient(circle, rgba(186,33,33,0.1) 0%, rgba(255,250,120,0.1) 100%); backdrop-filter: blur(5px); border-radius: 20px; margin-left: 620px; margin-top: -50px; padding-left: 78px; padding-right: 78px; padding-top: 55px; padding-bottom: 55px;"">
                                <p style=""color: #951717; font-size: 27px; font-weight: 500; font-family: Montserrat, sans-serif;"">Ми раді, що ви можете розпочати роботу. 
                                Вам потрібно підтвердити свій обліковий запис. 
                                Введіть код нижче.</p>
                                <h2 style=""font-size: 64px; font-weight: 600; color: #951717; font-family: Montserrat, sans-serif; text-align: center;"">731806</h2>
                                <p style=""font-size: 16px; color: #951717; font-family: Montserrat, sans-serif; font-weight: 500;"">У разі виникненні запитань, дайте відповідь на цей електронний лист – ми завжди раді вам допомогти.</p>
                            </div>
                        </body>
                    </html>";
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
