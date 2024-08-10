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
        Task<Session> RegisterSellerAsync(string token);
        Task<Session> LoginAsync(string token);
        Task CheckVerificationCodeAsync(string sessionId, string code);
        Task SendVerificatoinCodeAsync(string sessionId);
        Task SendForgotUrlAsync(string email);
        Task UpdatePasswordAsync(string sessionId, string token);
        Task ResetPasswordAsync(string token);
        Task<object> FetchDataAsync(string sessionId, string fields);

        Task UpdateUserAsync(string sessionId, string token);
    }
}