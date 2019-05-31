import React from "react";
import wraith from "../../Images/CurrXwraith.jpg";
import vid from "../../Images/wholevids/spittaFullLPV.mp4";
import "../../CSS/LandingPage.css";

const LandingPagePic = props => {
  return (
    <section>
      <div className="App-header" />
      <div className="container-fluid">
        <div className="row">
          <div className="LP-Pic">
            <h1>Curren$y</h1>
            <h3>We turn instrumentals and weed into gold.</h3>
            <button className="butn">Contact Me</button>
            <i class="fas fa-angle-double-down App-logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPagePic;
