using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TwitterShowcaseLibrary.Models;

namespace TwitterShowcaseLibrary.Twitter
{
    public interface IGetUserTweet
    {
        Task<List<TweetModel>> ReturnTweetDataBasedOnUser(string user);
    }
}
