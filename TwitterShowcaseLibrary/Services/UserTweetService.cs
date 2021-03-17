using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TwitterShowcaseLibrary.Models;
using TwitterShowcaseLibrary.Twitter;

namespace TwitterShowcaseLibrary.Services
{
    public class UserTweetService : IUserTweetService
    {
        private readonly IGetUserTweet _getUserTweet;

        public UserTweetService(IGetUserTweet getUserTweet)
        {
            _getUserTweet = getUserTweet;
        }

        public async Task<List<TweetModel>> GetTweetDataBasedOnUser(string bearerToken, string user)
        {
            return await _getUserTweet.ReturnTweetDataBasedOnUser(bearerToken, user);
        }
    }
}
