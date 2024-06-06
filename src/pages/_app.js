import '../../styles/globals.css';
import Layout from '../components/layout';  // Use the correct case and path

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

