/* eslint-disable react/prop-types */
// eslint-disable react/destructuring-assignment
import React from 'react';

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
                  {props.tweetData.fullText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
