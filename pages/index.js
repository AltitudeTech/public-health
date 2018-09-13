import React, { Component } from "react";
import Head from "next/head";
import Layout from "../component/Layout";
import CustomCard from "../component/CustomCard";
import CEOMessage from "../component/CEOMessage";

export default class Index extends Component {
  render() {
    return (
      <Layout>
        <Head>
          <title>PH :: Home</title>
        </Head>
        <div
          className="jumbotron"
          style={{
            backgroundImage: "url('/static/images/indexBanner.svg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "0 0",
            height: "50vh",
            borderRadius: "0px"
          }}
        />
        <div className="container">
          <h2 className="text-success">
            Nulla pulvinar eleifend sem. Aliquam erat volutpat. Aenean placerat.
            Integer imperdiet lectus quis justo. Nulla turpis magna.
          </h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <CustomCard title="CHALLENGES" />
            </div>
            <div className="col-md-6">
              <CustomCard title="SOLUTIONS" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <CustomCard title="OUR  FUTURE" />
            </div>
            <div className="col-md-6">
              <CustomCard title="SUPPORT US" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <CEOMessage />
            </div>
          </div>
        </div>
        <style jsx>{`
          h2 {
            font-weight: bolder;
            text-align: center;
            transition: all linear 150px;
          }
          @media (max-width: 578px) {
            h2 {
              font-weight: bold;
              text-align: left;
              font-size: 25px;
            }
          }
        `}</style>
      </Layout>
    );
  }
}
