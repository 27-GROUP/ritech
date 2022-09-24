import Head from "next/head";
import Approach from "../components/Approach";
import Layout from "../components/Layout/Layout";
import About from "../components/About";
import Whatwedo from "../components/whatwedo";
import P_section from "../components/P_section";

export default function Home() {
  return (
    <>
      <Head>
        <title>RITech</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <About />
        <Approach />
        <Whatwedo />
        <P_section />
      </Layout>
    </>
  );
}
