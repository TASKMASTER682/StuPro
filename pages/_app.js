import Layout from '../components/Layout';
import "../styles/global.css";
import Script from 'next/script';
import NextNProgress from 'nextjs-progressbar';
import 'react-quill/dist/quill.snow.css';



function MyApp({ Component, pageProps }) {
  
  return (
  <>
    <Layout>
        <NextNProgress color='#0f1317' />
        <Component {...pageProps} />
    </Layout>
    <Script strategy='afterInteractive'
        src="https://www.googletagmanager.com/gtag/js?id=G-Y27GY802BM"
      />
    <Script id="g-analytics" strategy="afterInteractive">
 { `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-Y27GY802BM'); `
  }
    </Script>
  </> 
    

  ); 
}
export default MyApp;