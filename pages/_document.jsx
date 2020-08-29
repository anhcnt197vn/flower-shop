import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8"/>
          <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
          <meta name="description" content=""/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/static/js/vendor/jquery-3.2.1.min.js"></script>
          <script src="/static/js/bootstrap.min.js"></script>
          <script src="/static/js/plugins.js"></script>
          <script src="/static/js/slick.min.js"></script>
          <script src="/static/js/owl.carousel.min.js"></script>
          <script src="/static/js/waypoints.min.js"></script>
          <script src="/static/js/main.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument