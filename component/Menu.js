import React, { Component } from "react";
import Link from "next/link";
import SvgLoader from "bv-react-svgloader";

export default class extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid wrapper">
        <div className="container">
          <nav>
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
          `}
        </style>
      </div>
    );
  }
}
