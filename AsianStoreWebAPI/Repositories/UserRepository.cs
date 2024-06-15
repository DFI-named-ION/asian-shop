using AsianStoreWebAPI.EF;
using AsianStoreWebAPI.EF.DTO;
using AsianStoreWebAPI.EF.Models;
using AsianStoreWebAPI.Responses;
using AsianStoreWebAPI.Services;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace AsianStoreWebAPI.Repositories
{
    public class UserRepository : IUserRepository
    {
        private bool _disposed = false;
        private AsianStoreDatabaseContext _context;
        private UserManager<User> _userManager;
        private RoleManager<IdentityRole<long>> _roleManager;
        private IConfiguration _config;

        public UserRepository(AsianStoreDatabaseContext context, UserManager<User> userManager, RoleManager<IdentityRole<long>> roleManager, IConfiguration config) 
        { 
            _context = context;
            _userManager = userManager;
            _roleManager = roleManager;
            _config = config;
        }

        public async Task<ServiceResponses.GeneralResponse> RegisterUser(RegisterUserDTO dto)
        {
            if (dto is null) 
                return new ServiceResponses.GeneralResponse("User is null");
            if (dto.Password != dto.ConfirmPassword) 
                return new ServiceResponses.GeneralResponse("User passwords do not match");
            if (await _userManager.FindByEmailAsync(dto.Email) is not null) 
                return new ServiceResponses.GeneralResponse("User is registered already");

            var newUser = new User
            {
                Email = dto.Email,
                UserName = dto.Email,
                PasswordHash = dto.Password,
                Role = "User"
            };

            var result = await _userManager.CreateAsync(newUser, dto.Password);
            if (!result.Succeeded)
                return new ServiceResponses.GeneralResponse($"Error occurred: {string.Join(", ", result.Errors.Select(e => e.Description))}");

            if (await _roleManager.FindByNameAsync("User") is null)
                await _roleManager.CreateAsync(new IdentityRole<long>() { Name = "User" });
            await _userManager.AddToRoleAsync(newUser, "User");

            if (await _roleManager.FindByNameAsync("Admin") is null)
            {
                await _roleManager.CreateAsync(new IdentityRole<long>() { Name = "Admin" });
                await _userManager.AddToRoleAsync(newUser, "Admin");
                newUser.Role = "Admin";
                if (!(await _userManager.UpdateAsync(newUser)).Succeeded)
                    return new ServiceResponses.GeneralResponse($"Error occurred while update: {string.Join(", ", result.Errors.Select(e => e.Description))}");
            }

            return new ServiceResponses.GeneralResponse("Success");
        }

        public async Task<ServiceResponses.AuthenticationResponse> LoginUser(LoginUserDTO dto)
        {
            if (dto is null)
                return new ServiceResponses.AuthenticationResponse("Empty credentials", null);
            
            var user = await _userManager.FindByEmailAsync(dto.Email);
            if (user is null)
                return new ServiceResponses.AuthenticationResponse("User not found", null);

            bool checkPassword = await _userManager.CheckPasswordAsync(user, dto.Password);
            if (!checkPassword)
                return new ServiceResponses.AuthenticationResponse("Invalid credentials", null);

            var token = IdentityService.GenerateToken(user, _config);
            return new ServiceResponses.AuthenticationResponse("Success", token);
        }
    }
}