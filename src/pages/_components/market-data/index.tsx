import { Header, TableSpacer } from "./styles";
import React, { Suspense, useRef } from "react";

import ErrorBoundary from "@/components/error-boundary";
import { IRecentTradesProps } from "@/components/recent-trades";
import { ISymbolTickerProps } from "@/components/symbol-ticker";
import { ITwentyFourHourTickerProps } from "@/components/24hour-ticker";
import { RecentTradesTableWrapper } from "@/components/recent-trades/styles";
import { Spinner } from "@/components/ui/spinner";
import { SymbolTickerTableWrapper } from "@/components/symbol-ticker/styles";
import { TwentyFourTableWrapper } from "@/components/24hour-ticker/styles";
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
      <Header>Market data</Header>

      <SymbolTickerTableWrapper>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <SymbolTicker symbolPair={pair} />
          </Suspense>
        </ErrorBoundary>
      </SymbolTickerTableWrapper>

      <TableSpacer />

      <TwentyFourTableWrapper>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <TwentyFourHourTicker symbolPair={pair} />
          </Suspense>
        </ErrorBoundary>
      </TwentyFourTableWrapper>

      <TableSpacer />

      <RecentTradesTableWrapper>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <RecentTrades symbolPair={pair} />
          </Suspense>
        </ErrorBoundary>
      </RecentTradesTableWrapper>

      <TableSpacer />
    </div>
  );
}

export default MarketData;
