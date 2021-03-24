using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace TwitterShowcaseLibrary.Models
{
    public class EntityModel
    {
        public object[] hashtags { get; set; }
        public object[] symbols { get; set; }
        public object[] user_mentions { get; set; }
        public List<UrlModel> urls { get; set; }
    }
}
