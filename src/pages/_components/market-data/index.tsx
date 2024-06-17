import { Header, HeaderWrapper, TableSpacer } from "./styles";
import React, { Suspense, useRef } from "react";

import CustomSelect from "@/components/ui/select";
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

const options = [
  "ETHBTC",
  "GitHub",
  "Instagram",
  "Facebook",
  "LinkedIn",
  "Twitter",
  "Reddit",
];

function MarketData() {
  const symbolPair = useRef("ETHBTC");
  const pair = symbolPair.current;

  return (
    <div>
      <HeaderWrapper>
        <Header>Market data</Header>
        <CustomSelect
          defaultValue={"ETHBTC"}
          options={options}
          defaultOption="Open this select menu"
          onChange={(e) => console.log(e.target.value)}
          name="symbolPair"
        />
      </HeaderWrapper>

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
