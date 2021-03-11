import React from 'react';
import Tweet from './Tweet';

function RandomTweetPage() {
  return (
    <main id="random-tweet-page" className="flex center-y column">
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </main>
  );
}

export default RandomTweetPage;
