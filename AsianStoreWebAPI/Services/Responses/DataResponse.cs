namespace AsianStoreWebAPI.Responses
{
    public partial class ServiceResponses
    {
        public record class DataResponse(string message, object data);
    }
}
