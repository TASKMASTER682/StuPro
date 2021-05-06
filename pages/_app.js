import Layout from '../components/Layout';
import "../public/css/style.css";
import '../node_modules/react-quill/dist/quill.snow.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />

    </Layout>
  );
}
export default MyApp;