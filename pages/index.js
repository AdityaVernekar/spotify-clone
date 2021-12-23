import Head from "next/head";
import Image from "next/image";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Spotify 2.0</title>
        <meta name="SpotifyClone" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black h-screen overflow-hidden">
        {/* sidebar */}

        <Sidebar />

        {/* main content */}

        <div>{/* Player */}</div>
      </main>
    </div>
  );
}
