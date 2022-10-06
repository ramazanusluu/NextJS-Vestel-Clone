import "../styles/globals.css";
import "../styles/app.css";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../components/Layout/Layout";
import { AuthProvider } from "../contexts/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Layout>
  );
}

export default MyApp;
