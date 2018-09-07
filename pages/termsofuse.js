import React, { Component } from "react";
import Head from "next/head";
import Layout from "../component/Layout";
import SvgLoader from "bv-react-svgloader";
import Form from "../component/Form";

export default class Index extends Component {
  render() {
    return (
      <Layout>
        <Head>
          <title>PH :: Terms of Nigeria</title>
        </Head>
        <div className="container">
          <div
            className="mt-5 pt-4"
            style={{ height: "1700px", backgroundColor: "#b2b2b2" }}
          >
            <h4 style={{ textAlign: "center" }}>TERMS OF USE</h4>
          </div>
          <div className="row mt-0">
            <div className="col-md-6 offset-md-3 text-center">
              <SvgLoader src="/static/images/heartImage.svg" />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
