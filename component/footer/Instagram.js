import React, { Component, Fragment } from "react";
export default class Instagram extends Component {
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
              d="M13.7318 9.75H36.7902C38.98 9.75 40.7716 11.357 40.7716 13.6966V36.5534C40.7716 38.893 38.98 40.5 36.7902 40.5H13.7318C11.5413 40.5 9.75 38.893 9.75 36.5534V13.6966C9.75 11.357 11.5413 9.75 13.7318 9.75ZM32.3481 13.1665C31.5799 13.1665 30.9521 13.7891 30.9521 14.5509V17.8644C30.9521 18.626 31.5799 19.2489 32.3481 19.2489H35.8544C36.6226 19.2489 37.2511 18.626 37.2511 17.8644V14.5509C37.2511 13.7891 36.6226 13.1665 35.8544 13.1665H32.3481ZM37.2657 22.7541H34.5354C34.7937 23.5901 34.9335 24.4757 34.9335 25.3919C34.9335 30.5067 30.6157 34.6528 25.2904 34.6528C19.9655 34.6528 15.6483 30.5067 15.6483 25.3919C15.6483 24.4751 15.7878 23.5898 16.0464 22.7541H13.1973V35.7433C13.1973 36.4155 13.7522 36.9658 14.4306 36.9658H36.033C36.7115 36.9658 37.2663 36.4158 37.2663 35.7433V22.7541H37.2657ZM25.2901 19.0743C21.8495 19.0743 19.0599 21.7532 19.0599 25.0582C19.0599 28.3632 21.8495 31.0422 25.2901 31.0422C28.731 31.0422 31.5209 28.3632 31.5209 25.0582C31.5209 21.7532 28.7314 19.0743 25.2901 19.0743Z"
              id="instagram"
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
            #instagram {
              fill: #c32d68;
              stroke: #a02354;
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
            #instagram:hover {
              fill: #a02354;
              stroke-dashoffset: 0;
              stroke-dasharray: 125;
            }
          `}
        </style>
      </Fragment>
    );
  }
}
