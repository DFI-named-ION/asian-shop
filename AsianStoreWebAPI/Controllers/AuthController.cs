using AsianStoreWebAPI.EF.DTO;
using AsianStoreWebAPI.Repositories;
using AsianStoreWebAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace AsianStoreWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IUserRepository _userRepo;
        private readonly JwtService _jwtService;

        public AuthController(JwtService js, IUserRepository ur)
        { _jwtService = js; _userRepo = ur; }



        [HttpPost("sendResetUrl")]
        public async Task<IActionResult> SendResetUrl(EmailDTO dto) // change to JwtTokenDTO
        {
            try
            {
                await _userRepo.SendForgotUrlAsync(dto.Email);
                return Ok("Success");
            } catch (FirebaseAdmin.Auth.FirebaseAuthException ex) when (ex.Message.Contains("Failed to get user with email:"))
            {
                return BadRequest("User not found");
            } catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPost("updatePassword")]
        public async Task<IActionResult> UpdatePassword(JwtTokenDTO dto)
        {
            try
            {
                var sessionId = Request.Cookies["sessionId"];
                await _userRepo.UpdatePasswordAsync(sessionId, dto.Token);
                return Ok("Success");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPost("resetPassword")]
        public async Task<IActionResult> ResetPassword(JwtTokenDTO dto)
        {
            try
            {
                await _userRepo.ResetPasswordAsync(dto.Token);
                return Ok("Success");
            } catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpGet("sendVerificationCode")]
        public async Task<IActionResult> SendVerificationCode()
        {
            try
            {
                var sessionId = Request.Cookies["sessionId"];
                await _userRepo.SendVerificatoinCodeAsync(sessionId);
                return Ok("Success");
            } catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPost("checkVerificationCode")]
        public async Task<IActionResult> CheckVerificationCode(VerificationCodeDTO dto) // change to JwtTokenDTO
        {
            try
            {
                var sessionId = Request.Cookies["sessionId"];
                await _userRepo.CheckVerificationCodeAsync(sessionId, dto.Code);
                return Ok("Success");
            } catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPost("login")]
        public async Task<IActionResult> LoginAsync(JwtTokenDTO dto)
        {
            try
            {
                var session = await _userRepo.LoginAsync(dto.Token);

                Response.Cookies.Append("sessionId", session.Id, new CookieOptions()
                {
                    Path = "/",
                    Domain = "localhost", // comment when ready to publish
                    Secure = true,
                    HttpOnly = true,
                    SameSite = SameSiteMode.None,
                    Expires = session.ExpiresIn
                });
                return Ok();
            } catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPost("registerSeller")]
        public async Task<IActionResult> RegisterSellerAsync(JwtTokenDTO dto)
        {
            try
            {
                var session = await _userRepo.RegisterSellerAsync(dto.Token);

                Response.Cookies.Append("sessionId", session.Id, new CookieOptions()
                {
                    Path = "/",
                    Domain = "localhost", // comment when ready to publish
                    Secure = true,
                    HttpOnly = true,
                    SameSite = SameSiteMode.None,
                    Expires = session.ExpiresIn
                });
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpGet("logout")]
        public async Task<IActionResult> LogoutAsync()
        {
            Response.Cookies.Delete("sessionId", new CookieOptions()
            {
                Path = "/",
                Secure = true,
                HttpOnly = true,
                SameSite = SameSiteMode.None
            });
            // remove session!
            return Ok();
        }
    }
}
