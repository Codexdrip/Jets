import React from "react";
import wraith from "../../../Images/CurrXwraith.jpg";
import logo from "../../../Images/currlogo.png";
import vid from "../../../Images/wholevids/spittaFullLPV.mp4";
import Parallax from "react-rellax";
import "./LandingPage.css";
import smoke from "../../../Images/smokebg5.png";

const LandingPagePic = props => {
  return (
    <section>
      <div>
        <div
          className="App-header"
          speed={0}
          style={{ zIndex: 0, backgroundAttachment: "scroll" }}
        >
          <div speed={-2} style={{ zIndex: 1 }} percentage={0.1}>
            <img className="smoke-bg" src={smoke} alt=":(" />
            <div className="LP-Pic">
              <i
                className="fas fa-angle-double-down App-logo vert-move"
                style={{ color: "blue" }}
              />
            </div>
          </div>
        </div>
      </div>{" "}
    </section>
  );
};

export default LandingPagePic;
