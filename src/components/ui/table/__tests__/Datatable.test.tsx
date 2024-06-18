import { render, screen } from "@testing-library/react";

import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../index";
import { ISymbolTicker } from "@/types";
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";

const mockData: ISymbolTicker[] = [
  {
    symbol: "BTCUSDT",
    price: "546730000",
  },
];

const columns: ColumnDef<ISymbolTicker>[] = [
  {
    accessorKey: "symbol",
    header: "Symbol",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
];

describe("Components: DataTable.tsx", () => {
  jest.mock("@tanstack/react-query", () => ({
    useSuspenseQuery: jest.fn().mockReturnValue({ data: mockData }),
  }));

  beforeEach(() => {
    return render(
      <ThemeProvider theme={theme}>
        <DataTable columns={columns} data={mockData} />
      </ThemeProvider>,
    );
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it("renders the DataTable with data", () => {
    columns.forEach((col) => {
      if (typeof col.header === "string") {
        expect(screen.getByText(col.header)).toBeInTheDocument();
      }
    });

    mockData.forEach((row) => {
      expect(screen.getByText(row.symbol)).toBeInTheDocument();
      expect(screen.getByText(row.price)).toBeInTheDocument();
    });
  });
});
