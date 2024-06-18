import styled from "styled-components";

export const SymbolTickerTableWrapper = styled.div`
  height: 175px;
`;

export const Header = styled.header`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 8px;
  margin-left: 4px;
  letter-spacing: -0.5px;
  color: ${({ theme }) => theme.colors.white};
`;
