import Layout from "@/components/Layout";
import "@/styles/globals.css";

// Global context
import AuthContextProvider from "@/lib/stores/auth-context";

export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  );
}
