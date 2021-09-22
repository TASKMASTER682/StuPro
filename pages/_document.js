import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {

  render() {
    return (
      <Html lang='en'>
        <Head>
           <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
          <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@500;800&display=swap" rel="stylesheet" />
          {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossOrigin="anonymous" /> */}
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        </Head>
        <body>
          <Main />       
        </body>
        <NextScript />
        {/* <script defer src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> */}
      </Html>
    )
  }
}

export default MyDocument;
// &family=Source+Serif+Pro:wght@600