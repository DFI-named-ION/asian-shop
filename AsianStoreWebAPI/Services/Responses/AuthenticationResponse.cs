namespace AsianStoreWebAPI.Responses
{
    public partial class ServiceResponses
    {
        public record class AuthenticationResponse(string message, string token);
    }
}
