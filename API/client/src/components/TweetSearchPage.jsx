import React from 'react';
import Tweet from './Tweet';

const testTweets = [
  {
    profileImage: 'https://pbs.twimg.com/profile_images/1253313775610089472/ORgz4LwP_normal.jpg',
    screenName: 'NASA',
    tweetText: 'Did you hear? \n\nThe @esa signed an international agreement with @NASA to contribute expanded living and working spaces for #Artemis astronauts aboard the Gateway. Check out this animation of @NASA_Orion delivering the module and docking with Gateway: https://t.co/BPkfUbJiZj',
  },
  {
    profileImage: 'https://pbs.twimg.com/profile_images/1253313775610089472/ORgz4LwP_normal.jpg',
    screenName: 'NASA',
    tweetText: 'For the first time, scientists using @Hubble_Space have found evidence of volcanic activity reforming the atmosphere on a rocky planet around a distant star. \n\n🔗 https://t.co/QljAfyXDlO\n\nIllustration credit: @NASA / @ESA &amp; R. Hurt ( @caltechipac ) https://t.co/izlv3QQyLP',
  },
  {
    profileImage: 'https://pbs.twimg.com/profile_images/1253313775610089472/ORgz4LwP_normal.jpg',
    screenName: 'NASA',
    tweetText: "We're looking for university teams to help @NASA explore the Moon and Mars—share your ideas in the 2022 X-Hab Academic Innovation Challenge &gt;&gt; https://t.co/6Mrz49ezz2 https://t.co/osudIwcKjN",
  },
  {
    profileImage: 'https://pbs.twimg.com/profile_images/1253313775610089472/ORgz4LwP_normal.jpg',
    screenName: 'NASA',
    tweetText: 'Роскосмос возвращается к практике международных запусков, и ближайший 👉 9 апреля. Вместе с О.Новицким и П.Дубровым к МКС полетит астронавт @NASA Марк Ванде Хай.\n\n🔗 Традиция международных экипажей, существующая более 20 лет, вновь будет продолжена: https://t.co/2VFAhQNdA7 https://t.co/nkTUIwUOUB',
  },
  {
    profileImage: 'https://pbs.twimg.com/profile_images/1253313775610089472/ORgz4LwP_normal.jpg',
    screenName: 'NASA',
    tweetText: "Last week, @NASAPersevere took its first trip on Mars—here's what's next for @NASA's newest rover &gt;&gt; https://t.co/ZBNIOkcF12 https://t.co/tMAAivcB7H",
  },
];

// eslint-disable-next-line arrow-body-style
const displayTweets = () => {
  return testTweets.map((tweet) => {
    // eslint-disable-next-line no-console
    console.log(tweet);
    return (
      <Tweet
        profileImage={tweet.profileImage}
        screenName={tweet.screenName}
        tweetText={tweet.tweetText}
      />
    );
  });
};

function TweetSearchPage() {
  return (
    <main className="flex center-y column">
      <div id="search-page-container">
        <form className="form-inline my-2 my-lg-0 flex space-between-x">
          <input id="search" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
        </form>
        {displayTweets()}
      </div>

    </main>
  );
}

export default TweetSearchPage;
