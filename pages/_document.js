import Document, { Html, Head, Main, NextScript } from 'next/document'
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
class MyDocument extends Document {
  setGoogleTags() {
    if (publicRuntimeConfig.PRODUCTION) {
      return {

        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-Y27GY802BM');

    
        `

      }
    }
  }
  setOneSignal() {
    if (publicRuntimeConfig.PRODUCTION) {
      return {

        __html: `
        window.OneSignal = window.OneSignal || [];
        OneSignal.push(function() {
        OneSignal.init({
        appId: "7744c03d-58bb-4313-a26f-553be5180677"
     })
   }
       
        `

      }
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="content-type" content="text/html; charset=UTF-8"></meta>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@600&family=Source+Serif+Pro:wght@600&display=swap" rel="stylesheet preconnect"></link>
          <link rel="stylesheet preconnect" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
            crossOrigin="anonymous" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        </Head>
        <body>
          <Main />       
          <NextScript />
        </body>
        <script defer src="https://www.googletagmanager.com/gtag/js?id=G-Y27GY802BM"></script>
        <script defer dangerouslySetInnerHTML={this.setGoogleTags()}></script>
        {/* <script defer src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> */}
        <script defer src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" dangerouslySetInnerHTML={this.setOneSignal()} ></script>

      </Html>
    )
  }
}

export default MyDocument;
