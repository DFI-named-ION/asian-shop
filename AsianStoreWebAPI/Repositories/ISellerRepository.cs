namespace AsianStoreWebAPI.Repositories
{
    public interface ISellerRepository
    {
        Task<object> UploadProductImageAsync(string sessionId, IFormFile file);
        Task RemoveProductImageAsync(string sessionId, string token);
        Task AddProductAsync(string sessionId, string token);
    }
}
