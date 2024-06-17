import { Form, Header, HeaderWrapper, SvgWrapper, TableSpacer } from "./styles";
import React, { Suspense, useState } from "react";

import Button from "@/components/ui/button";
import CustomSelect from "@/components/ui/select";
import ErrorBoundary from "@/components/error-boundary";
import { IRecentTradesProps } from "@/components/recent-trades";
import { ISymbolTickerProps } from "@/components/symbol-ticker";
import { ITwentyFourHourTickerProps } from "@/components/24hour-ticker";
import { RecentTradesTableWrapper } from "@/components/recent-trades/styles";
import { Spinner } from "@/components/ui/spinner";
import { SymbolTickerTableWrapper } from "@/components/symbol-ticker/styles";
import { TwentyFourTableWrapper } from "@/components/24hour-ticker/styles";
import { binanceSymbolPairs } from "./data";
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

interface FormElements extends HTMLFormControlsCollection {
  symbolPair: HTMLSelectElement;
}

export interface PairFormElements extends HTMLFormElement {
  readonly elements: FormElements;
}

function MarketData() {
  const [symbolPair, setSymbolPair] = useState("ETHBTC");

  const handleSelectPair = (e: React.FormEvent<PairFormElements>) => {
    e.preventDefault();
    const value = e.currentTarget.elements.symbolPair.value;
    setSymbolPair(value);
  };

  return (
    <div>
      <HeaderWrapper>
        <Header>Market data</Header>
        <Form onSubmit={handleSelectPair}>
          <CustomSelect
            defaultValue={symbolPair}
            options={binanceSymbolPairs}
            name="symbolPair"
          />
          <Button type="submit">
            <SvgWrapper>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-search"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </SvgWrapper>
          </Button>
        </Form>
      </HeaderWrapper>

      <SymbolTickerTableWrapper>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <SymbolTicker symbolPair={symbolPair} />
          </Suspense>
        </ErrorBoundary>
      </SymbolTickerTableWrapper>

      <TableSpacer />

      <TwentyFourTableWrapper>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <TwentyFourHourTicker symbolPair={symbolPair} />
          </Suspense>
        </ErrorBoundary>
      </TwentyFourTableWrapper>

      <TableSpacer />
      <TableSpacer />
      <RecentTradesTableWrapper>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <RecentTrades symbolPair={symbolPair} />
          </Suspense>
        </ErrorBoundary>
      </RecentTradesTableWrapper>

      <TableSpacer />
    </div>
  );
}

export default MarketData;
