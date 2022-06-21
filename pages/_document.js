import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />   
          <NextScript />    
        </body>
        {/* <script defer src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> */}
      </Html>
    )
  }
}

export default MyDocument;
