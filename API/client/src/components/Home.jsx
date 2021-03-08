import React from "react";

function Home() {
  return (
    <main>
      <h4>Search for the most recent tweets of your favorite Twitter user,</h4>
      <h4> or checkout a random tweet
        from one of mine.
      </h4>
      <div className="row">
        <div className=" col-sm-12 col-md-6">
          <img className="img-fluid" src='./images/twitter02.jpg' alt="Man viewing twitter"/>
        </div>
        <div className="col-sm-12 col-md-6">
          <p>Twitter Showcase uses the Twitter API and allows the user to generate a random tweet
            from preselected Twitter users. The app also allows the user to search for a Twitter user and display
            the 5-10 most recent tweets by that user, or the user can search for specific content
            and have the 5-10 most recent tweets display that contain that content.
          </p>
        </div>

      </div>
    </main>
  )
}

export default Home;