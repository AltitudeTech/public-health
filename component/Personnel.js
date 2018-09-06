import React, { Component, Fragment } from "react";
export default class Personnel extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <div className="col-md-4">
          <div className="card mb-5" style={{ border: "0", width: "18rem" }}>
            <img
              className="card-img-top"
              src="https://via.placeholder.com/350x350"
              alt="Card image cap"
            />
            <div className="card-body text-center">
              <h4 className="card-title mb-0">Name of Personnel</h4>
              <p className="card-text ">Expertise</p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
