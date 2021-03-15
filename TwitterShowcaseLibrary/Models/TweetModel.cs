using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TwitterShowcaseLibrary.Models
{
    public class TweetModel
    {
        public string full_text { get; set; }
        public int[] display_text_range { get; set; }
        public string source { get; set; }
        public TwitterUserModel user { get; set; }
        public int retweet_count { get; set; }
        public int favorite_count { get; set; }
    }
}
