/* eslint-disable react/prop-types */
// eslint-disable react/destructuring-assignment
import React from 'react';
import Linkify from 'react-linkify';
import { FaRetweet, FaRegHeart } from 'react-icons/fa';

function Tweet(props) {
  return (
    // style="width: 18rem;"
    <div className="card">
      <div className="row">
        <div className="col-1">
          {console.log(props)}
          <img className="profile-picture" src={props.tweetData.user.profileImageUrl} alt="twitter profile" />
        </div>
        <div className="col-11">
          <div className="row">
            <div className="col-12">
              <div className="card-body">
                <h5 className="card-title">{props.tweetData.user.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {`@${props.tweetData.user.screenName}`}
                </h6>
                <p className="card-text">
                  <Linkify>{props.tweetData.fullText}</Linkify>
                </p>
                {props.checkForMedia(props.tweetData) && props.getMedia(props.tweetData)}
                <div className="flex">
                  <div className="col-4">
                    <div className="row space-between-x">
                      <div>
                        <FaRetweet className="icon" />
                        {props.tweetData.retweetCount}
                      </div>
                      <div>
                        <FaRegHeart className="icon" />
                        {props.tweetData.favoriteCount}
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
