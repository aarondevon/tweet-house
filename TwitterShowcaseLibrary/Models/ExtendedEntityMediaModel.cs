namespace TwitterShowcaseLibrary.Models
{
    public class ExtendedEntityMediaModel
    {
        public string media_url { get; set; }
        public string media_url_https { get; set; }
        public string url { get; set; }
        public string display_url { get; set; }
        public string expanded_url { get; set; }
        public string type { get; set; }
        public VideoInfoModel video_info { get; set; }
    }

}
