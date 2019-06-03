import React from "react";
import wraith from "../../Images/CurrXwraith.jpg";
import vid from "../../Images/wholevids/spittaFullLPV.mp4";
import Parallax from "react-rellax";
import "../../CSS/LandingPage.css";
import smoke from "../../Images/smokebg5.png";

const LandingPagePic = props => {
  return (
    <section>
      <Parallax className="App-header" speed={0} style={{ zIndex: 0 }}>
        <Parallax speed={-4} style={{ zIndex: 1 }} percentage={0.1}>
          <img className="smoke-bg" src={smoke} alt=":(" />
        </Parallax>
      </Parallax>
      <div className="container-fluid">
        <div className="row">
          <Parallax
            className="LP-Pic"
            speed={8}
            percentage={0.3}
            style={{ zIndex: 2 }}
          >
            <h1>Curren$y</h1>
            <h3>We turn instrumentals and weed into gold.</h3>
            <i class="fas fa-angle-double-down App-logo" />
          </Parallax>
        </div>
      </div>
    </section>
  );
};

export default LandingPagePic;
