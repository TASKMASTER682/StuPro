import Layout from '../components/Layout';
import "../public/css/style.min.css";
import OneSignal from './initOneSignal';
import '../node_modules/react-quill/dist/quill.snow.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    <OneSignal />
      <Component {...pageProps} />

    </Layout>
  );
}
export default MyApp;