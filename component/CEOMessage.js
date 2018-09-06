import React, { Component, Fragment } from "react";

export default class CustomCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <div className="card">
          <div className="card-header">A Message From the CEO</div>
          <div className="card-body">
            <img
              src="http://placehold.it/150x150"
              alt=""
              class="img-fluid rounded-circle float-left float-sm-right float-md-left float-lg-right float-xl-left p-4"
            />
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
              libero est obcaecati atque culpa, sequi reiciendis nostrum cumque
              magnam nulla in molestias nesciunt illo? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Numquam perferendis maiores
              obcaecati labore, quaerat, pariatur provident nemo autem
              reiciendis debitis laboriosam facilis eius consectetur fugiat
              veritatis deserunt itaque magnam amet? Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Qui temporibus aliquid dignissimos
              dolor aut at, libero est obcaecati atque culpa, sequi reiciendis
              nostrum cumque magnam nulla in molestias nesciunt illo? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Numquam
              perferendis maiores obcaecati labore, quaerat, pariatur provident
              nemo autem reiciendis debitis laboriosam facilis eius consectetur
              fugiat veritatis deserunt itaque magnam amet?
            </p>
          </div>
        </div>
        <style jsx>
          {`
            .card-header {
              color: #fff;
              font-size: 30px;
              text-transform: uppercase;
              background-color: #003da1;
              font-weight: bold;
            }
            ul li {
              font-size: 25px;
            }
            .card-body {
              background-color: #e5e5e5;
            }
          `}
        </style>
      </Fragment>
    );
  }
}
