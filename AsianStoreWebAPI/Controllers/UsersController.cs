using AsianStoreWebAPI.EF;
using AsianStoreWebAPI.EF.DTO;
using AsianStoreWebAPI.EF.Models;
using AsianStoreWebAPI.Repositories;
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
    }
}
