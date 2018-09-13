import React, { Component } from "react";
import Head from "next/head";
import Layout from "../component/Layout";
import CustomCard from "../component/CustomCard";
import CEOMessage from "../component/CEOMessage";
import Form from "../component/Form";

export default class Index extends Component {
  render() {
    return (
      <Layout>
        <Head>
          <title>PH :: Contact</title>
        </Head>
        <div
          className="jumbotron"
          style={{
            backgroundImage: "url('/static/images/contact.svg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "0 0",
            height: "50vh",
            borderRadius: "0px"
          }}
        />
        <div className="container">
          <div className="row">
            <h2 className="text-success">Phones</h2>
          </div>
          <div className="row">
            <h2 className="text-success">Email</h2>
          </div>
          <div className="row">
            <h2 className="text-success">Office Address</h2>
          </div>
          <div className="row">
            <h2 className="text-success">General Enquiries</h2>
          </div>
          <div className="row">
            <Form />
          </div>
        </div>
      </Layout>
    );
  }
}
