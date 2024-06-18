import styled from "styled-components";

export const RecentTradesTableWrapper = styled.div`
  min-height: 742px;
`;

export const Header = styled.header`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 8px;
  margin-left: 4px;
  letter-spacing: -0.5px;
  color: ${({ theme }) => theme.colors.white};
`;

export const PriceCell = styled.div<{ isbuyermaker: string }>`
  color: ${({ isbuyermaker, theme }) =>
    isbuyermaker === "true" ? theme.colors.red : theme.colors.green};
`;
