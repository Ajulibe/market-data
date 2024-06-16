import Head from "next/head";
import { Inter } from "next/font/google";
import MarketData from "./_components/market-data";
import React from "react";
import { RootLayout } from "../layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <RootLayout>
      <Head>
        <title>Market Data</title>
        <meta name="description" content="Fetch market data from Binance" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <MarketData />
      </main>
    </RootLayout>
  );
}
