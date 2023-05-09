import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import Head from "next/head";

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/blh0nax.css" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
