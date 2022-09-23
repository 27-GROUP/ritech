import Head from "next/head";
import Layout from "../components/Layout/Layout";
import T_section from "../components/T_section";

export default function Contact() {
  return (
    <>
      <Head>
        <title>RITech</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <T_section />
      </Layout>
    </>
  );
}
