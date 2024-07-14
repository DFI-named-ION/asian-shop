namespace AsianStoreWebAPI.EF.DTO
{
    public class ResetPasswordDTO
    {
        public string Code { get; set; }
        public string UserId { get; set; }
        public string CurrentPassword { get; set; }
        public string NewPassword { get; set; }
        public string NewPasswordRepeat { get; set; }
    }
}
