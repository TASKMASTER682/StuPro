import Document, { Html, Head, Main, NextScript } from 'next/document'
import getConfig from 'next/config';
const {publicRuntimeConfig}=getConfig();
class MyDocument extends Document {
  setGoogleTags(){
    if(publicRuntimeConfig.PRODUCTION){
      return {
        
        __html:`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-Y27GY802BM');

        `
        
      }
    }
  }
  

  render() {
    return (
      <Html lang="en">
        <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.1/css/all.css" 
         integrity="sha384-xxzQGERXS00kBmZW/6qxqJPyxW3UR0BPsL4c8ILaIWXva5kFi7TxkIIaMiKtqV1Q" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@500&family=Source+Serif+Pro:wght@600&display=swap" rel="stylesheet"></link>
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" 
        crossOrigin="anonymous" />

          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
           <link rel="icon" href="/favicon.ico" type="image/x-icon"/>

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Y27GY802BM"></script>
        <script dangerouslySetInnerHTML={this.setGoogleTags()}></script>

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument