import React, { Component, Fragment } from "react";

export default class CustomCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <div className="card">
          <div className="card-header bg-green">{this.props.title}</div>
          <div className="card-body">
            <p className="card-title">
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </li>
                <li>Architecto suscipit qui perspiciatis illo maiores modi,</li>
                <li>
                  enim possimus eos numquam ab, libero totam vel ipsam eum
                </li>
                <li>asperiores sapiente incidunt nisi perferendis?</li>
              </ul>
            </p>
            <br />
            <center>
              <a href="#" className="btn btn-success">
                Learn More
              </a>
            </center>
          </div>
        </div>
        <style jsx>
          {`
            .card-header {
              color: #fff;
              font-size: 30px;
              font-weight: bold;
              text-transform: uppercase;
              background-color: #12890e;
            }
            ul li {
              font-size: 25px;
              list-style:none ;
            }
            ul li::before {
              content : '- ';
              margin-left : -30px ;
              padding-right : 15px ;
              font-weight : bold ;
            }
            a {
              color: #000;
              padding: 10px 40px;
              border-radius: 25px;
              text-transform: uppercase;
              font-weight: bold;
              -webkit-box-shadow: 3px 3px 18px 0px rgba(0, 0, 0, 0.48);
              -moz-box-shadow: 3px 3px 18px 0px rgba(0, 0, 0, 0.48);
              box-shadow: 3px 3px 18px 0px rgba(0, 0, 0, 0.48);
              transition: all linear 250ms;
            }
            a:hover {
              color: #000;
              background-color: #d6d6d6;
            }
            .card-body {
              background-color: #e5e5e5;
            }
            @media (max-width:438px){
              .card-header{
                font-size:18px ;
              }
              .card-title ul li{
                font-size:14px ;
              }
              a {
                padding: 5px 20px;
                font-size:12px ;
              }
              .card{
                margin-top : 20px ;
              }
            }
          `}
        </style>
      </Fragment>
    );
  }
}
