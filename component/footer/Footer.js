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
                    <a className="" href="/about">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="" href="/services">
                      Services
                    </a>
                  </li>
                  <li>
                    <a className="" href="/partners">
                      Partners
                    </a>
                  </li>
                  <li>
                    <a className="" href="/contact">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a className="" href="#">
                      Publications
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-2">
                <ul className="list-unstyled text-small">
                  <li>
                    <a className="" href="/privacypolicy">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a className="" href="/termsofuse">
                      Terms of Use
                    </a>
                  </li>
                  <li>
                    <a className="" href="newsandmedia">
                      News & Media
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-4 text-center">
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
                  <li className="socials mb-2">
                    <Twitter />
                    <Instagram />
                    <Facebook />
                    <br />
                  </li>
                  <li>
                    <a className="" href="#">
                      Call us : XXXX XXX XXXX
                    </a>
                  </li>
                  <li>
                    <a className="" href="#">
                      2018 Public Health International. All Rights Reserved.
                    </a>
                  </li>
                  {/* <li>
                    <a className="" href="#">
                      2018 Public Health International. All Rights Reserved.
                    </a>
                  </li> */}
                </ul>
                <small className="d-block mb-3 ">2018 Public Health International. All Rights Reserved.</small>
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
