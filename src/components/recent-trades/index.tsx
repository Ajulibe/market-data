import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/table";
import { IRecentTrades } from "@/types";
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
  },
  {
    accessorKey: "qty",
    header: ({ column }) => createHeader(column, "Quantity"),
    enableSorting: true,
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
    <div>
      <DataTable columns={columns} data={tradesData} />
    </div>
  );
}

export default RecentTrades;
