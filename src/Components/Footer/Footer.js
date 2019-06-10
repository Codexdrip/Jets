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
                  <i class="fab fa-facebook-f" />{" "}
                </a>
              </li>
              <li className="list-inline-item">
                <a href="javascript:void();">
                  <i class="fab fa-twitter" />{" "}
                </a>
              </li>
              <li className="list-inline-item">
                <a href="javascript:void();">
                  <i class="fab fa-instagram" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="javascript:void();">
                  <i class="fab fa-google-plus-g" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="javascript:void();" target="_blank">
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
              <span style={{ color: "orange" }}>
                {" "}
                &copy; All right Reversed.
              </span>
              <a
                className="text-green ml-2"
                href="https://www.sunlimetech.com"
                target="_blank"
              >
                The Never Die Corporation
              </a>
            </p>
          </div>
          <hr />
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
            <p className="h6">
              <a
                className="text-green ml-2"
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
