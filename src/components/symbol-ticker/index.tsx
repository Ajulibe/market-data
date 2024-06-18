import { GradientFill, SymbolHeader } from "@/shared";

import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/table";
import { Header } from "./styles";
import { ISymbolTicker } from "@/types";
import React from "react";
import { getSymbolTicker } from "@/services";
import { useSuspenseQuery } from "@tanstack/react-query";

export interface ISymbolTickerProps {
  symbolPair: string;
}

export const columns: ColumnDef<ISymbolTicker>[] = [
  {
    accessorKey: "symbol",
    header: () => <SymbolHeader />,
    cell: ({ row }) => <GradientFill>{row.original.symbol}</GradientFill>,
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => <div>${row.original.price.slice(0, 7)}</div>,
  },
];

function SymbolTicker({ symbolPair }: ISymbolTickerProps) {
  const { data } = useSuspenseQuery<ISymbolTicker>({
    queryKey: ["symbolTicker", symbolPair],
    queryFn: () => getSymbolTicker(symbolPair),
  });

  const tickerData: ISymbolTicker[] = data ? [data] : [];

  return (
    <>
      <Header>Ticker</Header>
      <DataTable columns={columns} data={tickerData} />
    </>
  );
}

export default SymbolTicker;
