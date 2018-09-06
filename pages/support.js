import React, { Component } from "react";
import Head from "next/head";
import Layout from "../component/Layout";
import SvgLoader from "bv-react-svgloader";
import SupportBox from "../component/SupportBox";

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
            backgroundSize: "contain",
            backgroundPosition: "0 0",
            height: "80vh"
          }}
        />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="text-success mb-5" style={{ fontWeight: "bold" }}>
                Ulla pulvinar eleifend sem. Aliquam erat volutpat. Aenean
                placerat.
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                eius nobis inventore aperiam porro tempore ab magnam recusandae
                culpa excepturi nemo quam natus ipsam commodi, eveniet maxime
                quos, reiciendis cumque.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                eius nobis inventore aperiam porro tempore ab magnam recusandae
                culpa excepturi nemo quam natus ipsam commodi, eveniet maxime
                quos, reiciendis cumque.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                eius nobis inventore aperiam porro tempore ab magnam recusandae
                culpa excepturi nemo quam natus ipsam commodi, eveniet maxime
                quos, reiciendis cumque.
              </p>
            </div>
            <div className="col-md-6">
              <SvgLoader src="/static/images/supportMeter.svg" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <h2 className="text-success text-center">Ways to support us</h2>
              <p className="text-center">
                There are a number of ways you can support us, either by making
                a donation online or getting in touch to invest on a larger
                scale.
              </p>
            </div>
          </div>
          <div className="row">
            <SupportBox
              title="Individuals"
              body="Make a one off donation online by credit or debit card."
              linkText="MAKE A DONATION"
            />
            <SupportBox
              title="Philantropy"
              body="Whether you give time, money or expertise, your generous investment will benefit women and families for generations to come."
              linkText="PHILANTHROPIC PARTNERSHIP"
            />
            <SupportBox
              title="Corporate Partnerships"
              body="Strategic corporate partnerships mean you can help us reach more women while also helping your business."
              linkText="BECOME A CORPORATE PARTNER"
            />
            <SupportBox
              title="Government Agencies"
              body="Make a one off donation online by credit or debit card."
              linkText="GOVERNMENTAL PARTNERSHIP"
            />
            <SupportBox
              title="Educational Institutions "
              body="Make a one off donation online by credit or debit card."
              linkText="EDUCATIONAL PARTNERSHIP"
            />
            <SupportBox
              title="Religious Institutions "
              body="Make a one off donation online by credit or debit card."
              linkText="RELIGIOUS PARTNERSHIP"
            />
          </div>
        </div>
      </Layout>
    );
  }
}
