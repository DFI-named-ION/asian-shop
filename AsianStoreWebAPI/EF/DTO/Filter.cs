namespace AsianStoreWebAPI.EF.DTO
{
    public class Filter
    {
        public string[]? Categories { get; set; }
        public string[]? SubCategories { get; set; }
        public string? Weight { get; set; }
        public string[]? Ratings { get; set; }
        public string? BottomPrice { get; set; }
        public string? TopPrice { get; set; }
    }
}
