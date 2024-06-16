using AsianStoreWebAPI.EF;
using AsianStoreWebAPI.EF.DTO;
using AsianStoreWebAPI.EF.Models;
using AsianStoreWebAPI.Repositories;
using AsianStoreWebAPI.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace AsianStoreWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private IUserRepository _repo;

        public UsersController(IConfiguration config, UserManager<User> userManager, 
            RoleManager<IdentityRole<long>> roleManager, AsianStoreDatabaseContext context)
        { _repo = new UserRepository(context, userManager, roleManager, config); }

        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterUserDTO user)
        {
            var response = await _repo.RegisterUser(user);
            return Ok(response);
        }


        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginUserDTO user)
        {
            var response = await _repo.LoginUser(user);
            return Ok(response);
        }


        [HttpPost("authorizeGoogleUser")]
        public async Task<IActionResult> AuthorizeGoogleUser(GoogleUserDTO user)
        {
            var response = await _repo.AuthorizeGoogleUser(user);
            return Ok(response);
        }


        [HttpGet("getWeatherForecast")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> WeatherForecast()
        {
            var rand = new Random();
            var response = new ServiceResponses.GeneralResponse($"Todays temperature will be: {rand.Next(-5, 25)}");
            return Ok(response);
        }
    }
}
