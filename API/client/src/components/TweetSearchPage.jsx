/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tweet from './Tweet';

function TweetSearchPage(props) {
  // eslint-disable-next-line no-unused-vars
  const [tweetSearch, setTweetSearch] = useState('');
  const [tweets, setTweets] = useState([]);
  const [searchSelector, setSearchSelector] = useState('Keyword');

  const resetTweets = () => {
    setTweets([]);
  };

  const handelTweetSearchSubmit = async (event) => {
    event.preventDefault();
    resetTweets();
    const url = searchSelector === 'Keyword' ? `https://localhost:44322/api/keyword/${tweetSearch}` : `https://localhost:44322/api/user/${tweetSearch}`;

    const response = await axios.get(url);

    if (searchSelector === 'Keyword' && response.data.statuses.length > 0) {
      setTweets(response.data.statuses);
    } else if (searchSelector === 'Username' && response.data.length > 0) {
      setTweets(response.data);
    }
  };

  const handleSearchSelectorChange = (event) => {
    const trimmedSearch = tweetSearch.replace(/\s/g, '');
    setTweetSearch(trimmedSearch);
    setSearchSelector(event.target.value);
  };

  const handleSearchChange = (event) => {
    if (searchSelector === 'Username') {
      const trimmedSearch = event.target.value.replace(/\s/g, '');
      setTweetSearch(trimmedSearch);
      return;
    }
    setTweetSearch(event.target.value);
  };

  const displayTweets = () => {
    return tweets.map((tweet) => {
      return (
        <Tweet
          tweetData={tweet}
          checkForMedia={props.checkForMedia}
          getMedia={props.getMedia}
        />
      );
    });
  };

  useEffect(() => {
  }, [tweets]);

  return (
    <main className="flex center-y column">
      <div id="search-page-container">
        <form
          className="my-2 my-lg-0"
          onSubmit={handelTweetSearchSubmit}
        >
          <div className="row">
            <div className="col-sm-4">
              <div className="form-group">
                <select
                  id="search-select"
                  className="form-control"
                  onChange={handleSearchSelectorChange}
                >
                  <option>Keyword</option>
                  <option>Username</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-9 input-container">
              <div className="form-group">
                <input
                  id="search-input"
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  name="search"
                  aria-label="Search"
                  value={tweetSearch}
                  onChange={handleSearchChange}
                />
              </div>
            </div>
            <div className="col-sm-3 button-container">
              <button
                id="search-button"
                className="btn btn-outline-primary"
                type="submit"
              >
                Search
              </button>
            </div>
          </div>

        </form>
        {tweets.length > 1 ? displayTweets(tweets) : <h3>No tweets to display</h3>}
      </div>

    </main>
  );
}

export default TweetSearchPage;
