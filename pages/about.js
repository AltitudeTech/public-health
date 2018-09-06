import React, { Component } from "react";
import Head from "next/head";
import SvgLoader from "bv-react-svgloader";
import Layout from "../component/Layout";

export default class Index extends Component {
  render() {
    return (
      <Layout>
        <Head>
          <title>PH :: Services</title>
        </Head>

        <div className="container">
          <div className="row">
            <h2 className="text-success">Vision & Mission</h2>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus. Temporibus autem quibusdam et aut
              officiis debitis aut rerum necessitatibus saepe eveniet ut et
              voluptates repudiandae sint et molestiae non recusandae. Itaque
              earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores alias consequatur aut perferendis doloribus
              asperiores repellat.
            </p>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus. Temporibus autem quibusdam et aut
              officiis debitis aut rerum necessitatibus saepe eveniet ut et
              voluptates repudiandae sint et molestiae non recusandae. Itaque
              earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores alias consequatur aut perferendis doloribus
              asperiores repellat.
            </p>
          </div>

          <div className="row">
            <h2 className="text-success">Chief Executive Officer</h2>
            <div className="card-body" style={{ padding: "0px" }}>
              <img
                src="/static/images/ceo.PNG"
                className=" img-responsive img-fluid float-left float-sm-right float-md-left float-lg-right float-xl-left mr-3 mb-3"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                temporibus aliquid dignissimos dolor aut at, libero est
                obcaecati atque culpa, sequi reiciendis nostrum cumque magnam
                nulla in molestias nesciunt illo? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Numquam perferendis maiores
                obcaecati labore, quaerat, pariatur provident nemo autem
                reiciendis debitis laboriosam facilis eius consectetur fugiat
                veritatis deserunt itaque magnam amet? Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Qui temporibus aliquid
                dignissimos dolor aut at, libero est obcaecati atque culpa,
                sequi reiciendis nostrum cumque magnam nulla in molestias
                nesciunt illo? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Numquam perferendis maiores obcaecati labore,
                quaerat, pariatur provident nemo autem reiciendis debitis
                laboriosam facilis eius consectetur fugiat veritatis deserunt
                itaque magnam amet? Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Qui temporibus aliquid dignissimos dolor aut
                at, libero est obcaecati atque culpa, sequi reiciendis nostrum
                cumque magnam nulla in molestias nesciunt illo? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Numquam perferendis
                maiores obcaecati labore, quaerat, pariatur provident nemo autem
                reiciendis debitis laboriosam facilis eius consectetur fugiat
                veritatis deserunt itaque magnam amet?
              </p>
            </div>
          </div>

          <div className="row">
            <h2 className="text-success">Board Members</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              temporibus aliquid dignissimos dolor aut at, libero est obcaecati
              atque culpa, sequi reiciendis nostrum cumque magnam nulla in
              molestias nesciunt illo? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Numquam perferendis maiores obcaecati labore,
              quaerat, pariatur provident nemo autem reiciendis debitis
              laboriosam facilis eius consectetur fugiat veritatis deserunt
              itaque magnam amet? Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Qui temporibus aliquid dignissimos dolor aut at,
              libero est obcaecati atque culpa.
            </p>
            <div className="col-md-4">
              <div className="card" style={{ border: "0", width: "18rem" }}>
                <img
                  className="card-img-top"
                  src="https://via.placeholder.com/350x350"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h4 clasName="card-title">Name of Personnel</h4>
                  <p className="card-text text-center">Expertise</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card" style={{ border: "0", width: "18rem" }}>
                <img
                  className="card-img-top"
                  src="https://via.placeholder.com/350x350"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h4 clasName="card-title">Name of Personnel</h4>
                  <p className="card-text text-center">Expertise</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card" style={{ border: "0", width: "18rem" }}>
                <img
                  className="card-img-top"
                  src="https://via.placeholder.com/350x350"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h4 clasName="card-title">Name of Personnel</h4>
                  <p className="card-text text-center">Expertise</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card" style={{ border: "0", width: "18rem" }}>
                <img
                  className="card-img-top"
                  src="https://via.placeholder.com/350x350"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h4 clasName="card-title">Name of Personnel</h4>
                  <p className="card-text text-center">Expertise</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card" style={{ border: "0", width: "18rem" }}>
                <img
                  className="card-img-top"
                  src="https://via.placeholder.com/350x350"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h4 clasName="card-title">Name of Personnel</h4>
                  <p className="card-text text-center">Expertise</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card" style={{ border: "0", width: "18rem" }}>
                <img
                  className="card-img-top"
                  src="https://via.placeholder.com/350x350"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h4 clasName="card-title">Name of Personnel</h4>
                  <p className="card-text text-center">Expertise</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <h2 className="text-success">Team Members</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              temporibus aliquid dignissimos dolor aut at, libero est obcaecati
              atque culpa, sequi reiciendis nostrum cumque magnam nulla in
              molestias nesciunt illo? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Numquam perferendis maiores obcaecati labore,
              quaerat, pariatur provident nemo autem reiciendis debitis
              laboriosam facilis eius consectetur fugiat veritatis deserunt
              itaque magnam amet? Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Qui temporibus aliquid dignissimos dolor aut at,
              libero est obcaecati atque culpa.
            </p>
          </div>

          <div className="row">
            <h2 className="text-success">Annual Report</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              temporibus aliquid dignissimos dolor aut at, libero est obcaecati
              atque culpa, sequi reiciendis nostrum cumque magnam nulla in
              molestias nesciunt illo? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Numquam perferendis maiores obcaecati labore.
            </p>
            <div className="col-md-5">
              <SvgLoader src="/static/images/annualReport.svg" />
            </div>
            <div className="col-md-7">
              <a
                href=""
                className="btn btn-lg btn-success"
                style={{ marginTop: "20vh", borderRadius: "0px" }}
              >
                Download Now
              </a>
            </div>
          </div>
          <style jsx>
            {`
              p {
                line-height: 30px;
              }
            `}
          </style>
        </div>
      </Layout>
    );
  }
}
