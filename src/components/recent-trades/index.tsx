import { Header, PriceCell } from "./styles";

import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/table";
import { IRecentTrades } from "@/types";
import { QtyCell } from "@/shared";
import React from "react";
import { createHeader } from "@/utils/createHeader";
import { getRecentTrades } from "@/services";
import { useSuspenseQuery } from "@tanstack/react-query";

export interface IRecentTradesProps {
  symbolPair: string;
}

const columns: ColumnDef<IRecentTrades>[] = [
  { accessorKey: "id", header: "ID" },
  {
    accessorKey: "price",
    header: ({ column }) => createHeader(column, "Price"),
    enableSorting: true,
    cell: ({ row }) => (
      <PriceCell isbuyermaker={row.original.isBuyerMaker.toString()}>
        {row.original.price}
      </PriceCell>
    ),
  },
  {
    accessorKey: "qty",
    header: ({ column }) => createHeader(column, "Quantity"),
    enableSorting: true,
    cell: ({ row }) => (
      <QtyCell qty={row.original.quoteQty}>{row.original.quoteQty}</QtyCell>
    ),
  },
  { accessorKey: "quoteQty", header: "Quote Quantity" },
  {
    accessorKey: "time",
    header: ({ column }) => createHeader(column, "Time"),
    enableSorting: true,
  },
  { accessorKey: "isBuyerMaker", header: "Is Buyer Maker" },
  { accessorKey: "isBestMatch", header: "Is Best Match" },
];

function RecentTrades({ symbolPair }: IRecentTradesProps) {
  const { data } = useSuspenseQuery({
    queryKey: ["recentTrades", symbolPair],
    queryFn: () =>
      symbolPair ? getRecentTrades(symbolPair) : Promise.resolve(null),
  });

  const tradesData: IRecentTrades[] = data ? data : [];

  return (
    <>
      <Header>Recent Trades</Header>
      <DataTable columns={columns} data={tradesData} />
    </>
  );
}

export default RecentTrades;
