import Layout from '../components/Layout';
import "../public/css/style.css";
import '../node_modules/react-quill/dist/quill.snow.css';
import Script from 'next/script';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar'




function MyApp({ Component, pageProps }) {
  const head = () => (
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
);
  return (
  
    <Layout>
        {head()}
        <NextNProgress color='#0f1317' />
      <Component {...pageProps} />
      <Script strategy='afterInteractive'
        src="https://www.googletagmanager.com/gtag/js?id=G-Y27GY802BM"
      />
    <Script strategy="afterInteractive">
 { `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-Y27GY802BM'); `
  }
    </Script>
    </Layout>
    

  );
}
export default MyApp;