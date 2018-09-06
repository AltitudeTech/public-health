import React, { Component, Fragment } from "react";
export default class Facebook extends Component {
  render() {
    return (
      <Fragment>
        <a className="" href="#">
          <svg
            width="51"
            height="51"
            viewBox="0 0 51 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="25.125" cy="25.125" r="25.125" fill="#C4C4C4" />
            <path
              d="M33.1669 14.7931L30.2818 14.7943C28.0197 14.7943 27.5817 15.8599 27.5817 17.4237V20.8717H32.9768L32.9749 26.2725H27.5817V40.1312H21.9545V26.2725H17.25V20.8717H21.9545V16.8892C21.9545 12.267 24.803 9.75 28.9628 9.75L33.1672 9.75663L33.1669 14.7931Z"
              id="facebook"
            />
          </svg>
        </a>

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
            #facebook {
              fill: #3d5998;
              stroke: #344c82;
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
            #facebook:hover {
              fill: #344c82;
              stroke-dashoffset: 0;
              stroke-dasharray: 125;
            }
          `}
        </style>
      </Fragment>
    );
  }
}
