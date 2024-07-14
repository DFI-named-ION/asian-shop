using AsianStoreWebAPI.EF.DTO;
using AsianStoreWebAPI.EF.Models;
using AsianStoreWebAPI.Repositories;
using AsianStoreWebAPI.Responses;
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
            } catch (Exception ex)
            {
                return Ok(ex.Message);
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
                return Ok(ex.Message);
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
                return Ok(ex.Message);
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
                return Ok(ex.Message);
            }
        } 


        [HttpGet("users")]
        public async Task<IActionResult> GetUserAsync()
        {
            var result = await _userRepo.GetAllUsersAsync();
            var response = new ServiceResponses.DataResponse(result.Item1, result.Item2);
            return Ok(response);
        }


        [HttpPost("login")]
        public async Task<IActionResult> LoginAsync(AccessTokenDTO dto) // change to JwtTokenDTO
        {
            try
            {
                var session = await _userRepo.LoginAsync(dto.AccessToken);

                Response.Cookies.Append("sessionId", session.Id, new CookieOptions()
                {
                    Path = "/",
                    Domain = "localhost",
                    Secure = true,
                    HttpOnly = true,
                    Expires = session.ExpiresIn
                });
                return Ok();
            } catch (Exception ex)
            {
                return Ok(ex.Message);
            }
        }


        [HttpGet("fetchData")]
        public async Task<IActionResult> FetchDataAsync([FromQuery] string fields)
        {
            try
            {
                var sessionId = Request.Cookies["sessionId"];
                var data = await _userRepo.FetchDataAsync(sessionId, fields);

                return Ok(new ServiceResponses.DataResponse("Success", data));
            }
            catch (Exception ex)
            {
                return Ok(ex.Message);
            }
        }


        [HttpGet("logout")]
        public async Task<IActionResult> LogoutAsync()
        {
            Response.Cookies.Delete("sessionId");
            // remove session!
            return Ok();
        }
    }
}
