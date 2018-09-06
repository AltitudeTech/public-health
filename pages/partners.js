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
          <title>PH :: Partners</title>
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
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
              quis fugiat, eos omnis doloribus qui error voluptatibus veniam
              accusamus deleniti. At sequi facere nulla est ipsam dolores ipsum,
              commodi repudiandae. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Recusandae eos vitae reiciendis voluptate unde
              sint laudantium eaque ut? Asperiores cum dolorum optio officia
              iure nostrum eum aut quos corporis dolor!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
              quis fugiat, eos omnis doloribus qui error voluptatibus veniam
              accusamus deleniti. At sequi facere nulla est ipsam dolores ipsum,
              commodi repudiandae. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Inventore vel accusamus placeat culpa cum odio
              fuga sit est magni quidem rerum iste ab omnis quae, id tempore
              itaque eaque sequi?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
              quis fugiat, eos omnis doloribus qui error voluptatibus veniam
              accusamus deleniti. At sequi facere nulla est ipsam dolores ipsum,
              commodi repudiandae. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Esse hic cupiditate numquam tenetur molestiae,
              beatae ratione obcaecati nihil maiores saepe nobis, ex porro
              totam, non incidunt iste exercitationem assumenda odio!
            </p>
          </div>
          <div className="row">
            <Form />
          </div>
        </div>
      </Layout>
    );
  }
}
