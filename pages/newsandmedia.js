import React, { Component } from "react";
import Head from "next/head";
import News from "../component/News";
import Layout from "../component/Layout";

export default class Services extends Component {
  render() {
    return (
      <Layout>
        <Head>
          <title>PH :: News and Media</title>
        </Head>
        <div
          className="jumbotron"
          style={{
            backgroundImage: "url('/static/images/indexBanner.svg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "0 0",
            height: "80vh"
          }}
        />
        <div className="container">
          <div className="row">
            <News name="School Health" />
            <News name="Pregnancy & Contraception" />
          </div>
        </div>
      </Layout>
    );
  }
}
