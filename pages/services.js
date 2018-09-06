import React, { Component } from "react";
import Head from "next/head";
import Service from '../component/Service'
import Layout from "../component/Layout";

export default class Services extends Component {
  render() {
    return (
      <Layout>
        <Head>
          <title>PH :: Service</title>
        </Head>
        <div className="container">
          <Service name="School Health" />
          <Service name="Pregnancy & Contraception" />
          <Service name="Cancer Prevention" />
          <Service name="Obesity in Women" />
          <Service name="Drug Abuse" />
          <Service name="Communicable Diseases" />
        </div>
      </Layout>
    );
  }
}
