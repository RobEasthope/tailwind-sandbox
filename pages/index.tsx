import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <p className="text-clamp">Fluid clamp</p>
        <p className="text-16-21px sm:text-24-48px">Breakpoint fluid clamp</p>
      </main>
    </div>
  );
};

export default Home;
