import React, { Component, Fragment } from "react";
import SvgLoader from "bv-react-svgloader";
import Twitter from "./Twitter";
import Facebook from "./Facebook";
import Instagram from "./Instagram";
export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <div style={{ backgroundColor: "#FFD164", height: "20px" }} />
        <div style={{ backgroundColor: "#505050" }}>
          <footer
            className="container py-5"
            style={{ backgroundColor: "#505050" }}
          >
            <div className="row">
              <div className="col-12 col-md-2">
                <ul className="list-unstyled text-small">
                  <li>
                    <a className="" href="#">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="" href="#">
                      Services
                    </a>
                  </li>
                  <li>
                    <a className="" href="#">
                      Partners
                    </a>
                  </li>
                  <li>
                    <a className="" href="#">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a className="" href="#">
                      Publications
                    </a>
                  </li>
                  <li>
                    <a className="" href="#">
                      Last time
                    </a>
                  </li>
                </ul>
                <small className="d-block mb-3 ">&copy; 2018</small>
              </div>
              <div className="col-6 col-md-2">
                <ul className="list-unstyled text-small">
                  <li>
                    <a className="" href="#">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a className="" href="#">
                      Terms of Use
                    </a>
                  </li>
                  <li>
                    <a className="" href="#">
                      News & Media
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-4 text-center">
                <SvgLoader src="/static/images/newsletter.svg" />
                <ul className="list-unstyled text-small">
                  <li>Sign up for our free newsletter</li>
                  <li>
                    <a className="btn btn-success" href="#">
                      CLICK HERE
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-4">
                <ul className="list-unstyled text-small">
                  <li className="socials">
                    <Twitter />
                    <Instagram />
                    <Facebook />
                    <br />
                  </li>
                  <li>
                    <br />
                    <a className="" href="#">
                      Call us : XXXX XXX XXXX
                    </a>
                  </li>
                  <li>
                    <br />
                    <a className="" href="#">
                      2018 Public Health International. All Rights Reserved.
                    </a>
                  </li>
                  <li>
                    <br />
                    <a className="" href="#">
                      2018 Public Health International. All Rights Reserved.
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
          <style jsx>
            {`
              * {
                color: #fff;
              }
              a {
                text-decoration: none;
                color: #fff;
              }
              a:hover {
                text-decoration: none;
                color: #fff;
              }
              li {
                line-height: 35px;
              }
              li.socials {
                display: flex;
                justify-content: space-between;
              }
              #bird {
                fill: #059ee8;
                stroke: #0291d6;
                stroke-width: 1px;
                stroke-dasharray: 125;
                stroke-dashoffset: -125;
                stroke-linecap: butt;
                -webkit-transition: all 2s ease-out;
                -moz-transition: all 2s ease-out;
                -ms-transition: all 2s ease-out;
                -o-transition: all 2s ease-out;
                transition: all 2s ease-out;
              }
              #bird:hover {
                fill: #0291d6;
                stroke-dashoffset: 0;
                stroke-dasharray: 125;
              }
            `}
          </style>
        </div>
      </Fragment>
    );
  }
}
