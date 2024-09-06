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
    public class DataController : ControllerBase
    {
        private readonly IUserRepository _userRepo;
        private readonly ISellerRepository _sellerRepo;

        private readonly FirestoreService _firestoreService;
        private readonly FirebaseAuthService _firebaseAuthService;

        public DataController(FirebaseAuthService fas, FirestoreService fs, ISellerRepository sr, IUserRepository ur)
        {_firebaseAuthService = fas; _firestoreService = fs; _sellerRepo = sr; _userRepo = ur; }


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

        [HttpPost("updateSellerInfo")]
        public async Task<IActionResult> UpdateSellerInfoAsync([FromBody] JwtTokenDTO token)
        {
            try
            {
                var sessionId = Request.Cookies["sessionId"];
                await _userRepo.UpdateSellerInfoAsync(sessionId, token.Token);
                return Ok();
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
            }
            catch (Exception ex)
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

        [HttpPost("getProducts")]
        public async Task<IActionResult> GetProducts([FromBody] Filter dto, [FromQuery] int pageSize = 8, [FromQuery] int pageNumber = 1)
        {
            try
            {
                var (products, totalCount, minPrice, maxPrice) = await _firestoreService.GetFilteredRecordsAsync<Product>("products", dto, pageSize, pageNumber);

                var response = new
                {
                    Products = products,
                    TotalCount = totalCount,
                    PageSize = pageSize,
                    PageNumber = pageNumber,
                    MinPrice = minPrice,
                    MaxPrice = maxPrice
                };

                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpGet("getProduct/{article}")]
        public async Task<IActionResult> GetProduct([FromRoute] string article)
        {
            try
            {
                var product = (await _firestoreService.GetRecordsByFieldAsync<Product>("products", "Article", article)).FirstOrDefault();
                if (product == null)
                    throw new Exception("not-found");

                var category = "";
                switch (product.Category)
                {
                    case "category1":
                        category = "Заморожені";
                        break;
                    case "category2":
                        category = "Солодощі";
                        break;
                    case "category3":
                        category = "Закуски";
                        break;
                    case "category4":
                        category = "Страви";
                        break;
                    case "category5":
                        category = "Соуси";
                        break;
                    case "category6":
                        category = "Напої";
                        break;
                };

                var subCategory = "";
                switch (product.SubCategory)
                {
                    case "subCategory1":
                        subCategory = "Морепродукти";
                        break;
                    case "subCategory2":
                        subCategory = "Випічка";
                        break;
                    case "subCategory3":
                        subCategory = "Шоколад";
                        break;
                    case "subCategory4":
                        subCategory = "Моті";
                        break;
                    case "subCategory5":
                        subCategory = "Печиво";
                        break;
                    case "subCategory6":
                        subCategory = "Торти";
                        break;
                    case "subCategory7":
                        subCategory = "Мармеладки";
                        break;
                    case "subCategory8":
                        subCategory = "Чипси";
                        break;
                    case "subCategory9":
                        subCategory = "Крекери";
                        break;
                    case "subCategory10":
                        subCategory = "Горіхи";
                        break;
                    case "subCategory11":
                        subCategory = "Гострі";
                        break;
                    case "subCategory12":
                        subCategory = "Локшина";
                        break;
                    case "subCategory13":
                        subCategory = "Каррі";
                        break;
                    case "subCategory14":
                        subCategory = "Рис";
                        break;
                    case "subCategory15":
                        subCategory = "Токпоккі";
                        break;
                    case "subCategory16":
                        subCategory = "Місо";
                        break;
                    case "subCategory17":
                        subCategory = "Гострі";
                        break;
                    case "subCategory18":
                        subCategory = "Соєвий";
                        break;
                    case "subCategory19":
                        subCategory = "Оцти";
                        break;
                    case "subCategory20":
                        subCategory = "Газованка";
                        break;
                    case "subCategory21":
                        subCategory = "Сік";
                        break;
                    case "subCategory22":
                        subCategory = "Фітнес";
                        break;
                    case "subCategory23":
                        subCategory = "Вода";
                        break;
                    case "subCategory24":
                        subCategory = "Чай";
                        break;
                    case "subCategory25":
                        subCategory = "Кава";
                        break;
                    case "subCategory26":
                        subCategory = "Молоко";
                        break;
                };

                var data = product.GetType()
                    .GetProperties(System.Reflection.BindingFlags.Public | System.Reflection.BindingFlags.Instance)
                    .ToDictionary(prop => prop.Name.ToLower(), prop => prop.GetValue(product));

                data.Remove("id");
                data.Remove("userid");
                data.Remove("visibility");

                data.Remove("category");
                data.Add("category", category);
                data.Remove("subcategory");
                data.Add("subcategory", subCategory);

                return Ok(data);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpGet("beSeller")]
        public async Task<IActionResult> BeSeller()
        {
            var user = await _firebaseAuthService.GetUserByIdAsync("CfY9X9LHSqfsCpkybtFqHH6hqfS2");
            await _firebaseAuthService.SetClaims(user.Uid, new Dictionary<string, object>
            {
                { "role", "seller" }
            });
            return Ok();
        }
    }
}
