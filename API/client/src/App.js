import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import RandomTweetPage from './components/RandomTweetPage';
import TweetSearchPage from './components/TweetSearchPage';

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
