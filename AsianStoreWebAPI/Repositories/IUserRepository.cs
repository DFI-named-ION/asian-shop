using AsianStoreWebAPI.EF.DTO;
using AsianStoreWebAPI.EF.Models;
using AsianStoreWebAPI.Responses;
using FirebaseAdmin.Auth;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace AsianStoreWebAPI.Repositories
{
    public interface IUserRepository
    {
        Task<Session> LoginAsync(string accessToken);
        Task CheckVerificationCodeAsync(string sessionId, string code);
        Task SendVerificatoinCodeAsync(string sessionId);
        Task SendForgotUrlAsync(string email);
        Task ResetPasswordAsync(string token);
        Task<object> FetchDataAsync(string sessionId, string fields);

        Task<(string, List<UserRecord>)> GetAllUsersAsync();
    }
}