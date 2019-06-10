import React from "react";
import "./Footer.css";

const FooterPagePro = () => {
  return (
    <section className="foot" id="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
            <ul className="list-unstyled list-inline social text-center">
              <li className="list-inline-item">
                <a href="javascript:void();">
                  <i class="fab fa-facebook-f" style={{}} />{" "}
                </a>
              </li>
              <li className="list-inline-item">
                <a href="javascript:void();" style={{ color: "lightblue" }}>
                  <i class="fab fa-twitter" />{" "}
                </a>
              </li>
              <li className="list-inline-item">
                <a href="javascript:void();" style={{ color: "purple" }}>
                  <i class="fab fa-instagram" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="javascript:void();">
                  <i class="fab fa-google-plus-g" style={{ color: "red" }} />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="javascript:void();"
                  target="_blank"
                  style={{ color: "white" }}
                >
                  <i className="fa fa-envelope" />
                </a>
              </li>
            </ul>
          </div>
          <hr />
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
            <p className="h6">
              <span style={{ color: "#222", textShadow: "none" }}>
                {" "}
                &copy; {new Date().getFullYear() + " "}
                The Never Die Corporation
              </span>
            </p>
          </div>
          <hr />
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
            <p className="h6">
              <a
                style={{ color: "#222", textShadow: "none" }}
                href="https://chrishobdy.herokuapp.com/"
                target="_blank"
              >
                Website designed by:{" "}
                <span style={{ color: "blue" }}>CodeSplash</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterPagePro;
