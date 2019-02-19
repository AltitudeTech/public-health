import React, { Component, Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
import SvgLoader from "bv-react-svgloader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faBars } from "@fortawesome/free-solid-svg-icons";

export default class extends Component {
  state = {};
  handleToggle(event) {
    // this.setState(state => ({
    //   isToggleOn: !state.isToggleOn
    // }));
    console.log(event);
    event.preventDefault();
    alert(12345678);
  }
  render() {
    return (
      <Fragment>
        <Head>
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
            integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
            crossOrigin="anonymous"
          />
        </Head>
        <div className="container-fluid wrapper">
          <div className="container">
            <nav>
              <a href="" onClick={this.handleToggle}>
                <FontAwesomeIcon style={{ fontSize: "25px" }} icon={faBars} />
              </a>
              <Link href="/">
                <a>Home</a>
              </Link>
              <Link href="about">
                <a>About</a>
              </Link>
              <Link href="/services">
                <a>
                  <SvgLoader src="/static/images/services.svg" /> Services
                </a>
              </Link>
              <Link href="/partners">
                <a>Partners</a>
              </Link>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </nav>
          </div>
          <style jsx>
            {`
              nav {
                display: flex;
                justify-content: space-around;
                vertical-align: middle;
              }
              nav > *:first-child {
                display: none;
              }
              nav a {
                color: #fff;
                padding: 20px 0px;
                font-weight: 600;
                letter-spacing: 2px;
                transition: all linear 200ms;
              }
              nav a:hover {
                color: #e5e5e5;
              }
              .wrapper {
                background: -moz-linear-gradient(
                  306deg,
                  rgba(18, 137, 14, 1) 0%,
                  rgba(2, 73, 137, 1) 84%,
                  rgba(0, 61, 161, 1) 100%
                );
                background: -webkit-gradient(
                  linear,
                  left top,
                  right bottom,
                  color-stop(0%, rgba(18, 137, 14, 1)),
                  color-stop(84%, rgba(2, 73, 137, 1)),
                  color-stop(100%, rgba(0, 61, 161, 1))
                );
                background: -webkit-linear-gradient(
                  306deg,
                  rgba(18, 137, 14, 1) 0%,
                  rgba(2, 73, 137, 1) 84%,
                  rgba(0, 61, 161, 1) 100%
                );
                background: -o-linear-gradient(
                  306deg,
                  rgba(18, 137, 14, 1) 0%,
                  rgba(2, 73, 137, 1) 84%,
                  rgba(0, 61, 161, 1) 100%
                );
                background: -ms-linear-gradient(
                  306deg,
                  rgba(18, 137, 14, 1) 0%,
                  rgba(2, 73, 137, 1) 84%,
                  rgba(0, 61, 161, 1) 100%
                );
                background: linear-gradient(
                  144deg,
                  rgba(18, 137, 14, 1) 0%,
                  rgba(2, 73, 137, 1) 84%,
                  rgba(0, 61, 161, 1) 100%
                );
              }

              @media only screen and (max-width: 768px) {
                nav {
                  flex-direction: column;
                }
                nav > *:not(:first-child) {
                  display: none;
                  align-item: right;
                }
                nav > *:first-child {
                  display: block;
                }
              }
            `}
          </style>
        </div>
      </Fragment>
    );
  }
}
