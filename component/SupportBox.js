import React, { Component, Fragment } from "react";
export default class SupportBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <div className="col-md-4 text-center mb-5">
          <div
            className="card m-auto"
            style={{
              width: "18rem",
              borderRadius: "0"
            }}
          >
            <img
              className="card-img-top"
              src="https://via.placeholder.com/350x250/#C4C4C4"
              alt="Card image cap"
            />
            <div className="card-body" style={{ backgroundColor: "#DBD9DC" }}>
              <h6 className="text-success">
                {this.props.title || "Individual"}
              </h6>
              <p className="" style={{ fontSize: "10px" }}>
                {this.props.body ||
                  "Make a one off donation online by credit or debit card."}
              </p>
            </div>
          </div>
          <a style={{ fontSize: "12px" }}>
            {this.props.linkText || "MAKE A DONATION"}
          </a>
        </div>
      </Fragment>
    );
  }
}
