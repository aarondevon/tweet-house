import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import '../styles/components/_app.css';
import Header from './Header';
import Home from './Home';
import RandomTweetPage from './RandomTweetPage';
import TweetSearchPage from './TweetSearchPage';

function App() {
  return (
    <div className="App">
      <Router>

        <div className="container">
          <Header />

        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/random-tweet">
            <RandomTweetPage />
          </Route>
          <Route path="/tweet-search">
            <TweetSearchPage />
          </Route>
        </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
