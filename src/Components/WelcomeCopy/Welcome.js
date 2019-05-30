import React from "react";
import wraith from "../../Images/CurrXwraith.jpg";
import plane from "../../Images/CurrXplane2.jpg";
import profile from "../../Images/currxprofile.jpg";

import "../../CSS/WelcomePage.css";

const Welcome = () => {
  return (
    <section className="row">
      <div className="copy">
        <h2>Welcome to the offical home of Spitta!</h2>
        <br />
        <blockquote>
          This is the one stop source for all content that is Curren$y. Here you
          can keep with up with Spitta's social media, check out his latest
          tracks and videos, get in touch for interviews or booking, and even
          purchase official JetLife gear. Get a taste of the Curren$y lifestyle.
        </blockquote>
      </div>

      <div className="welcome">
        <div className="card">
          <img src={wraith} alt=":(" />
          <div className="container">
            <h2>Welcome to the offical home of Spitta!</h2>
            <p>
              This is the one stop source for all content that is Curren$y. Here
              you can keep with up with Spitta's social media, check out his
              latest tracks and videos, get in touch for interviews or booking,
              and even purchase official JetLife gear. Get a taste of the
              Curren$y lifestyle.
            </p>
          </div>
        </div>
        <div className="card">
          <img src={plane} alt=":(" />
          <div className="container">
            <h2>Welcome to the offical home of Spitta !</h2>
            <p>
              This is the one stop source for all content that is Curren$y. Here
              you can keep with up with Spitta's social media, check out his
              latest tracks and videos, get in touch for interviews or booking,
              and even purchase official JetLife gear. Get a taste of the
              Curren$y lifestyle.
            </p>
          </div>
        </div>
        <div className="card">
          <img src={profile} alt=":(" />
          <div className="container">
            <h2>Welcome to the offical home of Spitta !</h2>
            <p>
              This is the one stop source for all content that is Curren$y. Here
              you can keep with up with Spitta's social media, check out his
              latest tracks and videos, get in touch for interviews or booking,
              and even purchase official JetLife gear. Get a taste of the
              Curren$y lifestyle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
