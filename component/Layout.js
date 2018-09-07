import Link from "next/link";
import Head from "next/head";
import SvgLoader from "bv-react-svgloader";
import Menu from "./Menu";
import Footer from "./footer/Footer";

export default ({ children }) => (
  <div>
    <Head>
      <title>PH</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
        crossorigin="anonymous"
      />
    </Head>
    <div className="container-fluid">
      <header>
        <div
          className="container"
          style={{
            padding: "15px 0px",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <Link>
            <a>
              <SvgLoader src="/static/images/phlogo.svg" />
            </a>
          </Link>
          <Link href="/support">
            <a className="btn btn-link support">
              SUPPORT <SvgLoader src="/static/images/supportIcon.svg" />
            </a>
          </Link>
        </div>
        <Menu />
      </header>

      {children}

      <Footer />
    </div>
    <style jsx>
      {`
        .support {
          color: #000;
          border: 1px solid #12890e;
          padding-left: 30px;
          border-radius: 50px;
          padding-right: 30px;
          line-height: 30px;
          font-size: 15px;
          font-weight: bold;
          margin-top: 10px;
          background-color: #efefef;
        }

        .support:hover {
          color: #000;
          background-color: #e5e5e5;
        }
      `}
    </style>
  </div>
);
