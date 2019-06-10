import React from "react";
import wraith from "../../../Images/wraith2.png";
import plane from "../../../Images/CurrXplane2.jpg";
import gify from "../../../Images/cs5.gif";
import profile from "../../../Images/currxprofile.jpg";
import Parallax from "react-rellax";
import Fade from "react-reveal/Fade";
import "./WelcomePage.css";

const Welcome = () => {
  return (
    <section className="welcome">
      {
        //<!-- The App Section -->
      }
      <div className="container-fluid container-fluid-bg">
        <div className="row">
          <Parallax
            speed={2}
            className={"column-33 "}
            percentage={0.6}
            style={{ zIndex: 10 }}
          >
            <Fade left>
              <div className="blk-bg">
                <h1 className="xlarge-font" style={{ color: "orange" }}>
                  <b>Experience The Music</b>
                </h1>
                <p className="large-font" style={{ color: "white" }}>
                  Let your ears taste the audio dope.
                </p>

                <button className="button">Download Application</button>
              </div>
            </Fade>
          </Parallax>
          <Parallax
            speed={6}
            style={{ zIndex: 0 }}
            className={"column-66"}
            percentage={0.5}
          >
            <div />
          </Parallax>
        </div>
      </div>

      {
        //<!-- Clarity Section -->
      }
      <div
        style={{
          width: "100%",

          backgroundColor: "#f1f1f1"
        }}
      >
        <div
          className="container-fluid container-fluid-bg"
          style={{
            background: `url(${wraith})`,
            backgroundPositionY: "35%",
            height: "100vh"
          }}
        >
          <div className="row">
            <Parallax
              speed={1}
              className="column-66"
              zIndex={0}
              percentage={0.8}
            >
              <div />
            </Parallax>
            <Parallax
              speed={3}
              className="column-33"
              zIndex={10}
              percentage={0.8}
            >
              <Fade right>
                <div className="blk-bg">
                  <h1 className="xlarge-font" style={{ color: "orange" }}>
                    <b>Expenience the Visuals</b>
                  </h1>
                  <p className="large-font" style={{ color: "white" }}>
                    If a picture is worth a thousand words, what will a video
                    convey?
                  </p>
                  <button
                    className="button"
                    style={{
                      color: "white",
                      backgroundColor: "transparent",
                      borderColor: "blue"
                    }}
                  >
                    Download Application
                  </button>
                </div>
              </Fade>
            </Parallax>
          </div>
        </div>
      </div>
      {
        //<!-- The App Section -->
      }
      <div
        className="container-fluid container-fluid-bg"
        style={{
          background: `url(${profile})`,
          backgroundPositionY: "30%",
          height: "100vh",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundSize: "cover"
        }}
      >
        <div className="row">
          <Parallax
            className="column-33"
            speed={2}
            percentage={0.8}
            style={{ zIndex: 10 }}
          >
            <Fade left>
              <div className="blk-bg">
                <h1 className="xlarge-font" style={{ color: "orange" }}>
                  <b>Experience The Fashion</b>
                </h1>
                <p className="large-font" style={{ color: "white" }}>
                  Feast your eyes on this fashion.
                </p>

                <button
                  className="button"
                  style={{
                    color: "white",
                    backgroundColor: "transparent",
                    borderColor: "blue"
                  }}
                >
                  Download Application
                </button>
              </div>
            </Fade>
          </Parallax>
          <Parallax
            className="column-66"
            speed={1}
            percentage={0.5}
            style={{ zIndex: 0 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
