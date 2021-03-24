using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace TwitterShowcaseLibrary.Models
{
    [DataContract]
    public class TweetModel
    {
        [DataMember(Name = "full_text")]
        public string FullText { get; set; }
        [DataMember(Name = "display_text_range")]
        public int[] DisplayTextRange { get; set; }
        [DataMember(Name = "source")]
        public string Source { get; set; }
        [DataMember(Name = "user")]
        public TwitterUserModel User { get; set; }
        [DataMember(Name = "retweet_count")]
        public int RetweetCount { get; set; }
        [DataMember(Name = "favorite_count")]
        public int FavoriteCount { get; set; }
    }
}
