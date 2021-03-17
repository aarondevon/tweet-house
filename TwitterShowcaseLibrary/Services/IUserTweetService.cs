using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TwitterShowcaseLibrary.Models;

namespace TwitterShowcaseLibrary.Services
{
    public interface IUserTweetService
    {
        Task<List<TweetModel>> GetTweetDataBasedOnUser(string bearerToken, string user);
    }
}
