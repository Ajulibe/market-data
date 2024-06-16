import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/table";
import { Header } from "./styles";
import { ISymbolTicker } from "@/types";
import React from "react";
import { createHeader } from "@/utils/createHeader";
import { getSymbolTicker } from "@/services";
import { useSuspenseQuery } from "@tanstack/react-query";

export interface ISymbolTickerProps {
  symbolPair: string;
}

const columns: ColumnDef<ISymbolTicker>[] = [
  { accessorKey: "symbol", header: "Symbol" },
  {
    accessorKey: "price",
    header: ({ column }) => createHeader(column, "Price"),
    enableSorting: true,
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
      <Header>Symbol Ticker</Header>
      <DataTable columns={columns} data={tickerData} />
    </>
  );
}

export default SymbolTicker;
