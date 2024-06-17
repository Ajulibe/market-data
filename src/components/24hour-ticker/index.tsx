import {
  GradientFill,
  LastPriceCell,
  PercentChangeCell,
  PriceChangeCell,
  SymbolHeader,
  cellRenderer,
} from "@/shared";

import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/table";
import { Header } from "./styles";
import { ITwentyFourHourTicker } from "@/types";
import React from "react";
import { formatTimestamp } from "@/utils/formatter";
import { get24HourTicker } from "@/services";
import { useSuspenseQuery } from "@tanstack/react-query";

export interface ITwentyFourHourTickerProps {
  symbolPair: string;
}

const columns: ColumnDef<ITwentyFourHourTicker>[] = [
  {
    accessorKey: "symbol",
    header: () => <SymbolHeader />,
    cell: ({ row }) => <GradientFill>{row.original.symbol}</GradientFill>,
  },
  {
    accessorKey: "priceChange",
    header: "Price Change",
    cell: ({ row }) => (
      <PriceChangeCell value={parseFloat(row.original.priceChange)}>
        {row.original.priceChange.slice(0, 7)}
      </PriceChangeCell>
    ),
  },
  {
    accessorKey: "priceChangePercent",
    header: "Price Change %",
    cell: ({ row }) => (
      <PercentChangeCell value={parseFloat(row.original.priceChangePercent)}>
        {row.original.priceChangePercent.slice(0, 5)}%
      </PercentChangeCell>
    ),
  },
  {
    accessorKey: "weightedAvgPrice",
    header: "Weighted Avg Price",
    cell: cellRenderer("weightedAvgPrice"),
  },
  {
    accessorKey: "prevClosePrice",
    header: "Previous Close Price",
    cell: cellRenderer("prevClosePrice"),
  },
  {
    accessorKey: "lastPrice",
    header: "Last Price",
    cell: ({ row }) => (
      <LastPriceCell
        value={parseFloat(row.original.lastPrice)}
        openPrice={parseFloat(row.original.openPrice)}
      >
        {row.original.lastPrice.slice(0, 7)}
      </LastPriceCell>
    ),
  },
  {
    accessorKey: "lastQty",
    header: "Last Quantity",
    cell: cellRenderer("lastQty"),
  },
  {
    accessorKey: "bidPrice",
    header: "Bid Price",
    cell: cellRenderer("bidPrice"),
  },
  {
    accessorKey: "bidQty",
    header: "Bid Quantity",
    cell: cellRenderer("bidQty"),
  },
  {
    accessorKey: "askPrice",
    header: "Ask Price",
    cell: cellRenderer("askPrice"),
  },
  {
    accessorKey: "askQty",
    header: "Ask Quantity",
    cell: cellRenderer("askQty"),
  },
  {
    accessorKey: "openPrice",
    header: "Open Price",
    cell: cellRenderer("openPrice"),
  },
  {
    accessorKey: "highPrice",
    header: "High Price",
    cell: cellRenderer("highPrice"),
  },
  {
    accessorKey: "lowPrice",
    header: "Low Price",
    cell: cellRenderer("lowPrice"),
  },
  {
    accessorKey: "volume",
    header: "Volume",
    cell: cellRenderer("volume"),
  },
  {
    accessorKey: "quoteVolume",
    header: "Quote Volume",
    cell: cellRenderer("quoteVolume"),
  },
  {
    accessorKey: "openTime",
    header: "Open Time",
    cell: ({ row }) => <div>{formatTimestamp(row.original.openTime)}</div>,
  },
  {
    accessorKey: "closeTime",
    header: "Close Time",
    cell: ({ row }) => <div>{formatTimestamp(row.original.closeTime)}</div>,
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
