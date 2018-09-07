import React, { Component } from "react";

export default class News extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      //   <div className="row">
      //     <div className="media">
      //       <img
      //         className="mr-3"
      //         src="https://via.placeholder.com/250x150"
      //         alt="Generic placeholder image"
      //       />
      //       <div className="media-body">
      //         <h5 className="mt-0 text-success" style={{ fontWeight: "bold" }}>
      //           {this.props.name}
      //         </h5>
      //         <p>
      //           Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
      //           scelerisque ante sollicitudin. Cras purus odio, vestibulum in
      //           vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
      //           nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      //         </p>
      //         <p>
      //           Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
      //           scelerisque ante sollicitudin. Cras purus odio, vestibulum in
      //           vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
      //           nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      //         </p>
      //       </div>
      //     </div>
      //   </div>
      <ul className="list-unstyled">
        <li className="media">
          <img
            className="mr-3"
            src="https://via.placeholder.com/350x150"
            alt="Generic placeholder image"
          />
          <div className="media-body">
            <h5 className="mt-0 mb-1 text-success">List-based media object</h5>
            <small className="mt-0 mb-1 d-block">10th August, 2018</small>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
            vulputate fringilla. Donec lacinia congue felis in faucibus.
          </div>
        </li>
        <li className="media my-4">
          <img
            className="mr-3"
            src="https://via.placeholder.com/350x150"
            alt="Generic placeholder image"
          />
          <div className="media-body">
            <h5 className="mt-0 mb-1 text-success">List-based media object</h5>
            <small className="mt-0 mb-1 d-block">10th August, 2018</small>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
            vulputate fringilla. Donec lacinia congue felis in faucibus.
          </div>
        </li>
        <li className="media">
          <img
            className="mr-3"
            src="https://via.placeholder.com/350x150"
            alt="Generic placeholder image"
          />
          <div className="media-body">
            <h5 className="mt-0 mb-1 text-success">List-based media object</h5>
            <small className="mt-0 mb-1 d-block">10th August, 2018</small>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
            vulputate fringilla. Donec lacinia congue felis in faucibus.
          </div>
        </li>
      </ul>
    );
  }
}
