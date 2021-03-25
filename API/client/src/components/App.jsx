/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import '../styles/components/_app.css';
import Header from './Header';
import Home from './Home';
import RandomTweetPage from './RandomTweetPage';
import TweetSearchPage from './TweetSearchPage';

function checkForMedia(tweetData) {
  return tweetData.extendedEntities;
}

function getMedia(tweetData) {
  if (tweetData.extendedEntities.media[0].type === 'photo') {
    return <img className="img-fluid rounded" src={tweetData.extendedEntities.media[0].media_url_https} alt="media from tweet" />;
  }
  if (tweetData.extendedEntities.media[0].type === 'video') {
    return (
      <video className="embed-responsive rounded " src={tweetData.extendedEntities.media[0].video_info.variants[0].url} controls />
      // <video>
      //   <source src="mov_bbb.mp4" />
      //   Your browser does not support HTML video.
      // </video>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Router>

        <div className="container">
          <Header />

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/random-tweet">
              <RandomTweetPage checkForMedia={checkForMedia} getMedia={getMedia} />
            </Route>
            <Route path="/tweet-search">
              <TweetSearchPage checkForMedia={checkForMedia} getMedia={getMedia} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
