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
                <link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap' rel='stylesheet' type='text/css'>
                <div style='font-family: Montserrat, sans-serif;
                    font-weight: bold;
                    width: 100%;
                    background-color: #e6d6c8;
                    margin: auto;
                    position: relative;'>
                <div style='font-weight: 700;
                font-size: 1000%;
                color: #951717;
                text-align: center;
                letter-spacing: -2%;

                position: absolute;
                top: 20%; 
                left: 0%;
                right: 0%;
                z-index: 2;'>Ласкаво просимо</div>
                <img src='https://firebasestorage.googleapis.com/v0/b/asianstoreauthtest.appspot.com/o/system%2Fright-message.svg?alt=media&token=4d52365a-3784-4220-a06b-e12ba4a9f144' style='display: block;
                position: absolute;
                width: 55%;
                left: 45%;
                top: 1%;
                z-index: 2;'/>
                <div style='position: absolute;
                top: 37%;
                left: 33%;
                z-index: 3;
                background: linear-gradient(90deg, rgba(186,33,33,0.1) 0%, rgba(255,250,120,0.1) 100%);
                backdrop-filter: blur(5px); 
                border-radius: 20px;
                width: 34%;
                padding-top: 2%;
                padding-bottom: 2%;'>
                    <div style='font-weight: 450;
                    font-size: 110%;
                    color: #951717;
                    padding-left: 12%;'>Ми раді, що ви можете розпочати роботу.</div>
                    <div style='font-weight: 450;
                    font-size: 110%;
                    color: #951717;
                    padding-left: 12%;'>Вам потрібно підтвердити свій обліковий запис.</div>
                    <div style='font-weight: 450;
                    font-size: 110%;
                    color: #951717;
                    padding-left: 12%;'>Введіть код нижче</div>
                    <div style='padding-top: 3%;
                    padding-bottom: 3%;
                    font-weight: 550;
                    font-size: 400%;
                    color: #951717;
                    text-align: center;'>{code}</div>
                    <div style='font-weight: 450;
                    font-size: 97%;
                    color: #951717;
                    padding-left: 12%;
                    padding-right: 10%;'>У разі виникненні запитань, дайте відповідь на цей електронний лист - ми завжди раді вам допомогти.</div>
                </div>
                <img src='https://firebasestorage.googleapis.com/v0/b/asianstoreauthtest.appspot.com/o/system%2Fleft-message.svg?alt=media&token=b380723f-e2c8-40cb-b17d-ca8128f37db9' style='position: relative;
                padding-top: 4%;
                width: 50%;
                display: block;
                z-index: 4;'/>
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
                    <link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap' rel='stylesheet' type='text/css'>
    <div style='font-family: Montserrat, sans-serif;
                font-weight: bold;
                width: 100%;
                background-color: #e6d6c8;
                margin: auto;
                position: relative;'>
        <div style='font-weight: 700;
                    font-size: 1000%;
                    color: #951717;
                    text-align: center;
                    letter-spacing: -2%;
                    position: absolute;
                    top: 20%; 
                    left: 0%;
                    right: 0%;
                    z-index: 2;'>Скидання паролю</div>
        <img src='https://firebasestorage.googleapis.com/v0/b/asianstoreauthtest.appspot.com/o/system%2Fright-message.svg?alt=media&token=4d52365a-3784-4220-a06b-e12ba4a9f144' style='display: block;
                                        position: absolute;
                                        width: 55%;
                                        left: 45%;
                                        top: 1%;
                                        z-index: 2;'/>
        <div style='position: absolute;
                    top: 39%;
                    left: 34%;
                    z-index: 3;
                    background: linear-gradient(90deg, rgba(186,33,33,0.1) 0%, rgba(255,250,120,0.1) 100%);
                    backdrop-filter: blur(5px); 
                    border-radius: 20px;
                    width: 32%;
                    padding-top: 3%;
                    padding-bottom: 3%;'>
            <div style='font-weight: 450;
                        font-size: 110%;
                        color: #951717;
                        padding-left: 12%;'>Будь ласка, натисніть на посилання нижче, щоб скинути пароль:</div>
            <div style='padding-top: 3%;
                        padding-bottom: 3%;
                        font-weight: 650;
                        font-size: 100%;
                        color: #951717;
                        text-align: center;'><a href='{url}' style='color: #951717; text-decoration: none;'>{url}</a></div>
            <div style='font-weight: 450;
                        font-size: 97%;
                        color: #951717;
                        padding-left: 12%;
                        padding-right: 10%;'>Якщо ви не робили цей запит, проігноруйте цей лист</div>
            <div style='font-weight: 450;
                        font-size: 97%;
                        color: #951717;
                        padding-left: 12%;
                        padding-right: 10%;'>У paзi виникненні запитань, дайте відповідь на цей електронний лист - ми завжди раді вам допомогти.</div>
                    </div>
            <img src='https://firebasestorage.googleapis.com/v0/b/asianstoreauthtest.appspot.com/o/system%2Fleft-message.svg?alt=media&token=b380723f-e2c8-40cb-b17d-ca8128f37db9' style='position: relative;
                                    padding-top: 4%;
                                    width: 50%;
                                    display: block;
                                    z-index: 4;'/>
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
