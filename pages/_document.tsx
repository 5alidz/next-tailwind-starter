import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

function Things() {
  return (
    <>
      <link rel='manifest' href='/manifest.json' />
      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='msapplication-starturl' content='/' />
      <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
    </>
  );
}

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel='stylesheet' type='text/css' href='/css/nprogress.css' />
          <Things />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
