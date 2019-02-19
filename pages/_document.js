import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
          />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta charSet="utf-8" />
          <meta name="description" content="" />
          <meta name="keywords" content="" />

          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style global jsx>{`
          * {
            box-sizing: border-box;
            font-family: "Montserrat", sans-serif !important;
          }
          body, html{
            padding: 0px;
            margin: 0px;
          }
          .container-fluid{
            margin: 0px;
            padding: 0px !important;
          }
          .row{
            margin : 50px 0px;
          }
          a{
            text-decoration : none !important ;
            color : #fff ;
          }
          a:hover{
            text-decoration : none ;
            color : #fff ;
          }
        `}</style>
      </html>
    );
  }
}
