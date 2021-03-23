/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';
import UserCard from './UserCard';
import Tweet from './Tweet';

function RandomTweetPage() {
  const [screenNames] = useState(['npmjs', 'freeCodeCamp', 'ClassicalMPR', 'BBCScienceNews', 'NASA']);
  const [userProfileData, setUserProfileData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  // const [modalUser, setModalUser] = useState('');
  const [randomTweet, setRandomTweet] = useState([]);

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

  const handleClose = () => setShowModal(false);

  const handleShow = () => setShowModal(true);

  const getRandomTweetBasedOnScreenName = async (screenName) => {
    const response = await axios.get(`https://localhost:44322/api/random-tweet/${screenName}`);
    return response.data;
  };

  const handleRandomTweetOnClick = async (screenName) => {
    // setModalUser(screenName);
    const tweetData = await getRandomTweetBasedOnScreenName(screenName);
    setRandomTweet(tweetData);
    handleShow();
  };

  // const showRandomTweet = async () => {

  // };

  const displayUsers = () => {
    return userProfileData.map((userData) => {
      return (
        <UserCard
          userData={userData}
          getRandomTweet={handleRandomTweetOnClick}
        />
      );
    });
  };

  useEffect(() => {
    setUserProfileDataToState();
  }, []);

  return (
    <main
      id="random-tweet-page"
      className="flex center-y column"
    >
      {displayUsers()}

      <Button variant="primary" onClick={handleShow}>

        Open Demo Model

      </Button>

      <Modal size="lg" show={showModal} onHide={handleClose}>

        <Modal.Header closeButton>
          Tweet
        </Modal.Header>

        <Modal.Body>
          <Tweet tweetData={randomTweet} />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>

      </Modal>
    </main>
  );
}

export default RandomTweetPage;
