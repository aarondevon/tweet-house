using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
        private readonly IUserTweetService _userTweet;

        public TwitterUserController(IUserTweetService userTweet)
        {
            _userTweet = userTweet;
        }

        public async Task<IActionResult> getUserTweet(string user)
        {
            var result = await _userTweet.GetTweetDataBasedOnUser(user);

            return Ok(result);
        }
    }
}
