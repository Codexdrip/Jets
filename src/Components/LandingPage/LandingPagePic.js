import React from "react";
import wraith from "../../Images/CurrXwraith.jpg";
import vid from "../../Images/wholevids/spittaFullLPV.mp4";
import "../../CSS/LandingPage.css";

const LandingPagePic = props => {
  return (
    <section className="container-fluid App-header">
      <div className="row">
        <video width="100%" height="450px" autoPlay muted loop>
          <source src={vid} type="video/mp4" />
          Your browser do""es not support the video tag.
        </video>
        <div className="LP-Pic">
          <h1>Curren$y</h1>
          <h3>We turn instrumentals and weed into gold.</h3>
          <button className="btn btn-primary">Contact Me</button>
          <i class="fas fa-angle-double-down App-logo" />
        </div>
      </div>
    </section>
  );
};

export default LandingPagePic;
