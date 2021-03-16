using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using TwitterShowcaseLibrary.Models;

namespace TwitterShowcaseLibrary.Twitter
{
    public class GetUserTweet : IGetUserTweet
    {
        public async Task<List<TweetModel>> ReturnTweetDataBasedOnUser(string user)
        {
            using(var client = new HttpClient())
            {
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", "AAAAAAAAAAAAAAAAAAAAAO38NQEAAAAAqz8J%2Ftc4okmjz15zL5eoiEuEciM%3D7oNtpMEQEvYpRZAZICpBAma9UvlsaP1jENIYMN53xySkm9yc7O");

                var url = new Uri($"https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name={user}&count=25&tweet_mode=extended");
                var response = await client.GetAsync(url);

                string json;

                using (var content = response.Content)
                {
                    json = await content.ReadAsStringAsync();
                }

                List<TweetModel> tweetData = JsonConvert.DeserializeObject<List<TweetModel>>(json);

                return tweetData;
            }
        
        }
    }
}
