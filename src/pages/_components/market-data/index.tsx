import React, { Suspense, useRef } from "react";

import ErrorBoundary from "@/components/error-boundary";
import { IRecentTradesProps } from "@/components/recent-trades";
import { ISymbolTickerProps } from "@/components/symbol-ticker";
import { ITwentyFourHourTickerProps } from "@/components/24hour-ticker";
import { Spinner } from "@/components/ui/spinner";
import dynamic from "next/dynamic";

/**
 * dynamic imports to enable code splitting and better performance
 */
const RecentTrades = dynamic<IRecentTradesProps>(
  () => import("@/components/recent-trades").then((mod) => mod.default),
  {
    ssr: false,
  },
);

const SymbolTicker = dynamic<ISymbolTickerProps>(
  () => import("@/components/symbol-ticker").then((mod) => mod.default),
  {
    ssr: false,
  },
);

const TwentyFourHourTicker = dynamic<ITwentyFourHourTickerProps>(
  () => import("@/components/24hour-ticker").then((mod) => mod.default),
  {
    ssr: false,
  },
);

function MarketData() {
  const symbolPair = useRef("ETHBTC");
  const pair = symbolPair.current;

  return (
    <div>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <TwentyFourHourTicker symbolPair={pair} />
        </Suspense>
      </ErrorBoundary>
      {/* <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <RecentTrades symbolPair={pair} />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <SymbolTicker symbolPair={pair} />
        </Suspense>
      </ErrorBoundary> */}
    </div>
  );
}

export default MarketData;
