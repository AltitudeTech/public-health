import React, { Component, Fragment } from "react";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <form autoComplete="off" style={{ width: "100%" }}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="firstname">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                placeholder="John"
              />
            </div>
            <div className="form-group col-md-6">
              <label for="lastname">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                placeholder="Smith"
              />
            </div>
            <div className="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="Email"
              />
            </div>
            <div className="form-group col-md-6">
              <label for="inputState">Service</label>
              <select id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label for="inputState">Country</label>
              <select id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label for="inputState">Company</label>
              <select id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Message</label>
            <textarea
              style={{ resize: "none" }}
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Your message here"
              rows="8"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary float-right pl-5 pr-5 pt-3 pb-3"
            style={{ borderRadius: "0" }}
          >
            SEND MESSAGE
          </button>
        </form>
        <style jsx>{`
          input,
          select,
          textarea {
            border-radius: 0px;
            background-color: #f7fef7;
          }
          input,
          select,
          option {
            height: 60px !important;
          }
          select {
            -webkit-appearance: menulist-button;
          }
          input:focus {
            background-color: #f7fef7;
          }
        `}</style>
      </Fragment>
    );
  }
}
