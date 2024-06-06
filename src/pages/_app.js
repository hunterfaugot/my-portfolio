import '../../styles/globals.css';
import Layout from '../components/layout';

console.log('Layout Component Path:', require.resolve('../components/Layout'));

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
