using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TwitterShowcaseLibrary.Models;

namespace TwitterShowcaseLibrary.Services
{
    public interface IKeywordTweetService
    {
        Task<StatusModel> GetTweetDataBasedOnKeyword(string bearerToken, string keyword);
    }
}
