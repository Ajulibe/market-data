import Head from "next/head";
import MarketData from "./_components/market-data";
import React from "react";
import { RootLayout } from "../layout";
import { Space_Grotesk } from "next/font/google";

const grotesk = Space_Grotesk({ subsets: ["vietnamese"] });

export default function Home() {
  return (
    <RootLayout>
      <Head>
        <title>Market Data</title>
        <meta name="description" content="Fetch market data from Binance" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className={grotesk.className}>
        <MarketData />
      </main>
    </RootLayout>
  );
}
