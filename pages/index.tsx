import Head from "next/head";
import React from "react";

export default function Home() {

  return (
    <div className="h-full w-screen bg-[#1d1f2b]">
      <Head>
        <title>Coders NFT</title>
      </Head>
      <div className="px-24 flex justify-between items-baseline">
        <h2 className="text-5xl font-bold mt-24 text-white">
          Discover
        </h2>
        <input className="h-12 w-64 p-4 rounded-xl" placeholder="Search item" />
      </div>
      <hr className="w-full border-[#242634]" />
      <div className="flex-col items-start gap-7 px-24 mt-12">
        <h2 className="text-white text-5xl font-bold">
          Popular bid
        </h2>
        <div className="flex flex-wrap items-start gap-7 mt-7 min-h-[50%]">

        </div>

      </div>
    </div>
  )
}
