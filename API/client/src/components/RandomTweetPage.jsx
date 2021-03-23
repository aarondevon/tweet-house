/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './UserCard';
// import Tweet from './Tweet';

function RandomTweetPage() {
  const [screenNames] = useState(['npmjs', 'freeCodeCamp', 'ClassicalMPR', 'BBCScienceNews', 'NASA']);
  const [userProfileData, setUserProfileData] = useState([]);

  const getUserProfileData = async (screenName) => {
    const response = await axios.get(`https://localhost:44322/api/twitter-user/${screenName}`);
    return response.data;
  };

  const setUserProfileDataToState = async () => {
    const profileData = screenNames.map((screenName) => {
      return getUserProfileData(screenName);
    });
    console.log(profileData);
    setUserProfileData(await Promise.all(profileData));
  };

  const getRandomTweetOnClick = () => {

  };

  const displayUsers = () => {
    return userProfileData.map((userData) => {
      return (
        <UserCard
          userData={userData}
          getRandomTweet={getRandomTweetOnClick}
        />
      );
    });
  };

  useEffect(() => {
    setUserProfileDataToState();
  }, []);

  return (
    <main id="random-tweet-page" className="flex center-y column">
      {displayUsers()}
    </main>
  );
}

export default RandomTweetPage;
