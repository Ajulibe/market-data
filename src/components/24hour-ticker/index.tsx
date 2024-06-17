import { Header, SymbolHeaderStyle } from "./styles";

import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/table";
import { GradientFill } from "@/shared";
import { ITwentyFourHourTicker } from "@/types";
import React from "react";
import { get24HourTicker } from "@/services";
import { useSuspenseQuery } from "@tanstack/react-query";

export interface ITwentyFourHourTickerProps {
  symbolPair: string;
}

const SymbolHeader: React.FC = () => {
  return <SymbolHeaderStyle>Symbol</SymbolHeaderStyle>;
};

const columns: ColumnDef<ITwentyFourHourTicker>[] = [
  {
    accessorKey: "symbol",
    header: () => <SymbolHeader />,
    cell: ({ row }) => <GradientFill>{row.original.symbol}</GradientFill>,
  },
  {
    accessorKey: "priceChange",
    header: "Price Change",
  },
  {
    accessorKey: "priceChangePercent",
    header: "Price Change %",
  },
  {
    accessorKey: "weightedAvgPrice",
    header: "Weighted Avg Price",
  },
  {
    accessorKey: "prevClosePrice",
    header: "Previous Close Price",
  },
  {
    accessorKey: "lastPrice",
    header: "Last Price",
  },
  {
    accessorKey: "lastQty",
    header: "Last Quantity",
  },
  {
    accessorKey: "bidPrice",
    header: "Bid Price",
  },
  {
    accessorKey: "bidQty",
    header: "Bid Quantity",
  },
  {
    accessorKey: "askPrice",
    header: "Ask Price",
  },
  {
    accessorKey: "askQty",
    header: "Ask Quantity",
  },
  {
    accessorKey: "openPrice",
    header: "Open Price",
  },
  {
    accessorKey: "highPrice",
    header: "High Price",
  },
  {
    accessorKey: "lowPrice",
    header: "Low Price",
  },
  {
    accessorKey: "volume",
    header: "Volume",
  },
  {
    accessorKey: "quoteVolume",
    header: "Quote Volume",
  },
  {
    accessorKey: "openTime",
    header: "Open Time",
  },
  {
    accessorKey: "closeTime",
    header: "Close Time",
  },
  { accessorKey: "firstId", header: "First ID" },
  { accessorKey: "lastId", header: "Last ID" },
  { accessorKey: "count", header: "Count" },
];

function TwentyFourHourTicker({ symbolPair }: ITwentyFourHourTickerProps) {
  const { data } = useSuspenseQuery({
    queryKey: ["24HourTickerData", symbolPair],
    queryFn: () =>
      symbolPair ? get24HourTicker(symbolPair) : Promise.resolve(null),
  });

  const tickerData: ITwentyFourHourTicker[] = data
    ? [
        {
          symbol: data.symbol,
          priceChange: data.priceChange,
          priceChangePercent: data.priceChangePercent,
          weightedAvgPrice: data.weightedAvgPrice,
          prevClosePrice: data.prevClosePrice,
          lastPrice: data.lastPrice,
          lastQty: data.lastQty,
          bidPrice: data.bidPrice,
          bidQty: data.bidQty,
          askPrice: data.askPrice,
          askQty: data.askQty,
          openPrice: data.openPrice,
          highPrice: data.highPrice,
          lowPrice: data.lowPrice,
          volume: data.volume,
          quoteVolume: data.quoteVolume,
          openTime: data.openTime,
          closeTime: data.closeTime,
          firstId: data.firstId,
          lastId: data.lastId,
          count: data.count,
        },
      ]
    : [];

  return (
    <>
      <Header>24 Hours Ticker</Header>
      <DataTable columns={columns} data={tickerData} />
    </>
  );
}

export default TwentyFourHourTicker;
