using AsianStoreWebAPI.EF.DTO;
using AsianStoreWebAPI.Repositories;
using AsianStoreWebAPI.Responses;
using Microsoft.AspNetCore.Mvc;

namespace AsianStoreWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DataController : ControllerBase
    {
        private readonly IUserRepository _userRepo;
        private readonly ISellerRepository _sellerRepo;

        public DataController(ISellerRepository sr, IUserRepository ur)
        { _sellerRepo = sr; _userRepo = ur; }

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
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("updateUser")]
        public async Task<IActionResult> UpdateUserAsync([FromBody] JwtTokenDTO token)
        {
            try
            {
                var sessionId = Request.Cookies["sessionId"];
                await _userRepo.UpdateUserAsync(sessionId, token.Token);
                return Ok();
            } catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("uploadProductImage")]
        public async Task<IActionResult> UploadProductImage([FromForm] IFormFile image)
        {
            try
            {
                var sessionId = Request.Cookies["sessionId"];
                var data = await _sellerRepo.UploadProductImageAsync(sessionId, image);

                return Ok(new ServiceResponses.DataResponse("Success", data));
            }
            catch (Exception ex)
            {
                switch (ex.Message)
                {
                    case "User not found":
                        return BadRequest("user-not-found-error");
                    case "Session Id is null":
                    case "Session not found":
                    case "Session is not valid":
                        return BadRequest("user-not-authenticated-error");
                    default:
                        return BadRequest("image-remove-error");
                }
            }
        }

        [HttpPost("removeProductImage")]
        public async Task<IActionResult> RemoveProductImage([FromBody] JwtTokenDTO token)
        {
            try
            {
                var sessionId = Request.Cookies["sessionId"];
                await _sellerRepo.RemoveProductImageAsync(sessionId, token.Token);

                return Ok(new ServiceResponses.GeneralResponse("Success"));
            }
            catch (Exception ex)
            {
                switch (ex.Message)
                {
                    case "User not found":
                        return BadRequest("user-not-found-error");
                    case "Session Id is null":
                    case "Session not found":
                    case "Session is not valid":
                        return BadRequest("user-not-authenticated-error");
                    default:
                        return BadRequest("image-remove-error");
                }
            }
        }

        [HttpPost("addProduct")]
        public async Task<IActionResult> AddProduct([FromBody] JwtTokenDTO token)
        {
            try
            {
                var sessionId = Request.Cookies["sessionId"];
                await _sellerRepo.AddProductAsync(sessionId, token.Token);

                return Ok(new ServiceResponses.GeneralResponse("Success"));
            }
            catch (Exception ex)
            {
                switch (ex.Message)
                {
                    case "User not found":
                        return BadRequest("user-not-found-error");
                    case "Session Id is null":
                    case "Session not found":
                    case "Session is not valid":
                        return BadRequest("user-not-authenticated-error");
                    default:
                        return BadRequest("add-product-error");
                }
            }
        }
    }
}
