import React from "react";
import wraith from "../../Images/wraith2.png";
import plane from "../../Images/CurrXplane2.jpg";
import gify from "../../Images/cs5.gif";
import profile from "../../Images/currxprofile.jpg";
import Parallax from "react-rellax";
import Fade from "react-reveal/Fade";
import "../../CSS/WelcomePage.css";

const Welcome = () => {
  return (
    <section>
      <div style={{ textAlign: "center", zIndex: 10 }}>
        <h2>Responsive Zig Zag Layout Example</h2>
        <p>Resize the browser window to see the effect.</p>
      </div>
      {
        //<!-- The App Section -->
      }
      <div className="container">
        <div className="row">
          <Parallax
            speed={3}
            className={"column-33 "}
            percentage={0.7}
            style={{ zIndex: 10 }}
          >
            <Fade left>
              <div data-rellax-speed="7" data-rellax-zindex="5">
                <h1 className="xlarge-font">
                  <b>The App</b>
                </h1>
                <h1 className="large-font" style={{ color: "MediumSeaGreen;" }}>
                  <b>Why buy it?</b>
                </h1>

                <p>
                  <span style={{ fontSize: "36px" }}>
                    Take photos like a pro.
                  </span>{" "}
                  You should buy this app because lorem ipsum consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
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
            <div>
              <img src={plane} width="100%" height="auto" />
            </div>
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
        <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
          <div className="row">
            <Parallax
              speed={1}
              className="column-66"
              zIndex={0}
              percentage={0.8}
            >
              <div>
                <img src={wraith} alt="App" width="100%" height="auto" />
              </div>
            </Parallax>
            <Parallax
              speed={4}
              className="column-33"
              zIndex={10}
              percentage={0.5}
            >
              <Fade right>
                <div>
                  <h1 className="xlarge-font">
                    <b>Clarity</b>
                  </h1>
                  <h1 className="large-font" style={{ color: "red;" }}>
                    <b>Pixels, who?</b>
                  </h1>
                  <p>
                    <span style={{ fontSize: "24px" }}>
                      A revolution in resolution.
                    </span>{" "}
                    Sharp and clear photos with the world's best photo engine,
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquipex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur.
                  </p>
                  <button className="button" style={{ backgroundColor: "red" }}>
                    Read More
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
      <div className="container">
        <div className="row">
          <Parallax className="column-33" speed={3} percentage={0.5}>
            <Fade left>
              <h1 className="xlarge-font">
                <b>The App</b>
              </h1>
              <h1 className="large-font" style={{ color: "MediumSeaGreen;" }}>
                <b>Why buy it?</b>
              </h1>
              <p>
                <span style={{ fontSize: "36px" }}>
                  Take photos like a pro.
                </span>{" "}
                You should buy this app because lorem ipsum consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <button className="button">Download Application</button>
            </Fade>
          </Parallax>
          <Parallax className="column-66" speed={1} percentage={0.5}>
            <img src={gify} width="100%" height="auto" />
          </Parallax>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
