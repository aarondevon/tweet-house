using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TwitterShowcaseLibrary.Models
{
    public class StatusModel
    {
        public IEnumerable<TweetModel> statuses { get; set; }
    }
}
