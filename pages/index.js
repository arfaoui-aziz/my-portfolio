import Head from "next/head";
import About from "../components/About";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto max-w-screen-lg px-3">
        <Navbar />
        <Hero />
        <About />
        <Projects />
      </div>
    </>
  );
}
