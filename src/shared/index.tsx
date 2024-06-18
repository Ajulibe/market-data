/* eslint-disable react/display-name */
import { Row } from "@tanstack/react-table";
import styled from "styled-components";

export const GradientFill = styled.span`
  background: ${({ theme }) => theme.colors.primary};
  padding: 4px 6px;
`;

export const GradientText = styled.span`
  background: ${({ theme }) => theme.colors.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const QtyCell = styled.div<{ qty: string }>`
  color: ${({ qty, theme }) => Number(qty) > 5 && theme.colors.purple};
`;

const SymbolHeaderStyle = styled.div`
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.tableBorder};
  & td {
    background-color: ${({ theme }) => theme.colors.black};
    border: 1px solid red;
  }
`;

export const PriceChangeCell = styled.div<{ value: number }>`
  color: ${({ value, theme }) =>
    value > 0
      ? theme.colors.green
      : value < 0
        ? theme.colors.red
        : theme.colors.white};
`;

export const PercentChangeCell = styled.div<{ value: number }>`
  color: ${({ value, theme }) =>
    value > 0
      ? theme.colors.green
      : value < 0
        ? theme.colors.red
        : theme.colors.white};
`;

export const LastPriceCell = styled.div<{ value: number; openprice: number }>`
  color: ${({ value, openprice, theme }) =>
    value > openprice
      ? theme.colors.green
      : value < openprice
        ? theme.colors.red
        : theme.colors.white};
`;

function formatFigures(value: string) {
  return value.slice(0, 7);
}

export function cellRenderer<T>(key: keyof T, preFixSymbol = "") {
  return function ({ row }: { row: Row<T> }) {
    return (
      <div>
        {preFixSymbol}
        {formatFigures(row.original[key] as string)}
      </div>
    );
  };
}

export const SymbolHeader: React.FC = () => {
  return <SymbolHeaderStyle>Symbol</SymbolHeaderStyle>;
};
