import React from 'react';
import UserCard from './UserCard';
import Tweet from './Tweet';

function RandomTweetPage() {
  return (
    <main id="random-tweet-page" className="flex center-y column">
      <UserCard />
      {/* <Tweet
        profileImage={tweet.profileImage}
        screenName={tweet.screenName}
        tweetText={tweet.tweetText}
      /> */}
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </main>
  );
}

export default RandomTweetPage;
