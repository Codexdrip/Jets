import React from "react";
import Parallax from "react-rellax";
import "./LandingPage.css";
import logo from "../../../Images/currlogo.png";

const LPLogo = () => {
  return (
    <section className="container">
      <div className="container-fluid LP-Pic">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5 d-flex justify-content-center">
            <img className="img-fluid" src={logo} alt=":(" />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5 d-flex justify-content-center">
            <h3>We turn instrumentals and weed into gold.</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LPLogo;
