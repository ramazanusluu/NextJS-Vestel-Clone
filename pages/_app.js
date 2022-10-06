import "../styles/globals.css";
import "../styles/app.css";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../components/Layout/Layout";
import { AuthProvider } from "../contexts/AuthContext";
import dynamic from "next/dynamic";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </AuthProvider>
  );
}

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});
