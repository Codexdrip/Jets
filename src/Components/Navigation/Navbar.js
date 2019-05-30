import React from "react";
import jetlifelogo from "../../Images/jetlifelogo.jpg";
import "../../CSS/Navbar.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TopOfPage: true
    };
  }
  on = () => {
    const el = document.getElementById("overlay");
    el.classList.toggle("hide-overlay");
    el.classList.toggle("fade-in-overlay");
  };
  off = () => {
    const el = document.getElementById("overlay");
    el.classList.toggle("fade-in-overlay");
    el.classList.toggle("hide-overlay");
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 500;
      if (isTop) {
        var links = document.getElementsByClassName("fs-link");
        for (var i = 0; i < links.length; i++) {
          links[i].style.color = "white";
        }
      } else {
        var links = document.getElementsByClassName("fs-link");
        for (var i = 0; i < links.length; i++) {
          links[i].style.color = "rgba(101, 153, 255)";
        }
      }
    });
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-lignt ml-auto shadow fixed-top nav-start overlay ">
        <div className="container">
          <a className="navbar-brand" href="#">
            <span>
              <img src={jetlifelogo} alt=":(" />
            </span>
          </a>

          {/**
          This controls the overlay links
        */}
          <div id="overlay" class="hide-overlay">
            <div id="text">
              <div className="row x-btn">
                <span id="x-btn" onClick={this.off}>
                  &times;
                </span>
              </div>
              <div className="row">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      <span>
                        {" "}
                        <u>HOME</u>{" "}
                      </span>
                      <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#services">
                      <span>
                        {" "}
                        <u>SERVICES</u>
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">
                      <span>
                        <u>ABOUT</u>
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#clients">
                      <span>
                        <u>CLIENTS</u>
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact-form">
                      <span>
                        <u>LET'S TALK</u>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <button
            className="navbar-toggler navbar-dark custom-toggler"
            type="button"
            data-toggle="collapse"
          >
            <span className="navbar-toggler-icon" onClick={this.on} />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  <span className="fs-link">HOME</span>
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  <span className="fs-link">SERVICES</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  <span className="fs-link">ABOUT</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#clients">
                  <span className="fs-link">CLIENTS</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact-form">
                  <span className="fs-link">LET'S TALK</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
