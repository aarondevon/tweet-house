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
  if (tweetData.extendedEntities === null) {
    return false;
  }
}

function getMedia(tweetData) {
  if (tweetData.tweetData.extendedEntities.media[0].type === 'photo') {
    return <img src={tweetData.extendedEntities.media[0].media_url_https} alt="media from tweet" />;
  }
  if (tweetData.tweetData.extendedEntities.media[0].type === 'video') {
    return (
      <video>
        <source src={tweetData.extendedEntities.media[0].media_url_https} alt="media from tweet" />
      </video>
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
