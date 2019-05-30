import React from "react";
import "../../CSS/TwitterPage.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton
} from "react-twitter-embed";

const twitterPost = () => {
  return (
    <section>
      <div className="tweet-header">
        <h3>Latest tweets from Spitta</h3>
      </div>

      <div className="tweet-line">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="CurrenSy_Spitta"
          options={{ height: 200, width: 100 }}
        />
        <div>
          <TwitterFollowButton screenName={"CurrenSy_Spitta"} />
        </div>
      </div>
    </section>
  );
};

export default twitterPost;
