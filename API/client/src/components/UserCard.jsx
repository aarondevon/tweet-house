/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';

function UserCard() {
  return (
    <div className="card">
      <div className="row">
        <div className="col-6">
          <img className="profile-picture" src={props.profileImage} alt="twitter profile" />
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-12">
              <div className="card-body">
                <h5 className="card-title">{props.screenName}</h5>
                <p className="card-text">
                  {props.name}
                </p>
                <button className="btn btn-primary">View Tweet</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
