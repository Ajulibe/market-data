import { Header, SymbolHeaderStyle } from "./styles";

import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/table";
import { ITwentyFourHourTicker } from "@/types";
import React from "react";
import { createHeader } from "@/utils/createHeader";
import { get24HourTicker } from "@/services";
import { useSuspenseQuery } from "@tanstack/react-query";

export interface ITwentyFourHourTickerProps {
  symbolPair: string;
}

const SymbolHeader: React.FC = () => {
  return <SymbolHeaderStyle>Symbol</SymbolHeaderStyle>;
};

const columns: ColumnDef<ITwentyFourHourTicker>[] = [
  { accessorKey: "symbol", header: () => <SymbolHeader /> },
  {
    accessorKey: "priceChange",
    header: ({ column }) => createHeader(column, "Price Change"),
    enableSorting: true,
  },
  {
    accessorKey: "priceChangePercent",
    header: ({ column }) => createHeader(column, "Price Change %"),
    enableSorting: true,
  },
  {
    accessorKey: "weightedAvgPrice",
    header: ({ column }) => createHeader(column, "Weighted Avg Price"),
    enableSorting: true,
  },
  {
    accessorKey: "prevClosePrice",
    header: ({ column }) => createHeader(column, "Previous Close Price"),
    enableSorting: true,
  },
  {
    accessorKey: "lastPrice",
    header: ({ column }) => createHeader(column, "Last Price"),
    enableSorting: true,
  },
  {
    accessorKey: "lastQty",
    header: ({ column }) => createHeader(column, "Last Quantity"),
    enableSorting: true,
  },
  {
    accessorKey: "bidPrice",
    header: ({ column }) => createHeader(column, "Bid Price"),
    enableSorting: true,
  },
  {
    accessorKey: "bidQty",
    header: ({ column }) => createHeader(column, "Bid Quantity"),
    enableSorting: true,
  },
  {
    accessorKey: "askPrice",
    header: ({ column }) => createHeader(column, "Ask Price"),
    enableSorting: true,
  },
  {
    accessorKey: "askQty",
    header: ({ column }) => createHeader(column, "Ask Quantity"),
    enableSorting: true,
  },
  {
    accessorKey: "openPrice",
    header: ({ column }) => createHeader(column, "Open Price"),
    enableSorting: true,
  },
  {
    accessorKey: "highPrice",
    header: ({ column }) => createHeader(column, "High Price"),
    enableSorting: true,
  },
  {
    accessorKey: "lowPrice",
    header: ({ column }) => createHeader(column, "Low Price"),
    enableSorting: true,
  },
  {
    accessorKey: "volume",
    header: ({ column }) => createHeader(column, "Volume"),
    enableSorting: true,
  },
  {
    accessorKey: "quoteVolume",
    header: ({ column }) => createHeader(column, "Quote Volume"),
    enableSorting: true,
  },
  {
    accessorKey: "openTime",
    header: ({ column }) => createHeader(column, "Open Time"),
    enableSorting: true,
  },
  {
    accessorKey: "closeTime",
    header: ({ column }) => createHeader(column, "Close Time"),
    enableSorting: true,
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
