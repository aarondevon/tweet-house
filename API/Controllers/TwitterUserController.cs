using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TwitterShowcaseLibrary.Services;

namespace API.Controllers
{
    [Route("api/user/{user}")]
    [ApiController]
    public class TwitterUserController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IUserTweetService _userTweet;

        public TwitterUserController(IConfiguration configuration, IUserTweetService userTweet)
        {
            _configuration = configuration;
            _userTweet = userTweet;
        }

        public async Task<IActionResult> getUserTweet(string user)
        {
            string bearerToken = _configuration.GetValue<string>("TwitterSettings:BearerToken");

            var result = await _userTweet.GetTweetDataBasedOnUser(bearerToken, user);

            return Ok(result);
        }
    }
}
