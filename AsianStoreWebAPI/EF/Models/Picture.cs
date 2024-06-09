using System;
using System.Collections.Generic;

namespace AsianStoreWebAPI.EF.Models;

public partial class Picture
{
    public long Id { get; set; }

    public string OriginName { get; set; } = null!;

    public string StorageName { get; set; } = null!;

    public DateTime UploadDate { get; set; }

    public string ImageUrl { get; set; } = null!;
}
