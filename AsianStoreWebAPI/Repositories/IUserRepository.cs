using AsianStoreWebAPI.EF.DTO;
using AsianStoreWebAPI.Responses;
using Microsoft.AspNetCore.Mvc;

namespace AsianStoreWebAPI.Repositories
{
    public interface IUserRepository
    {
        Task<ServiceResponses.GeneralResponse> RegisterUser(RegisterUserDTO user);
        Task<ServiceResponses.AuthenticationResponse> LoginUser(LoginUserDTO user);
    }
}