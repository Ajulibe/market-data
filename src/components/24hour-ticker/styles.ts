import styled from "styled-components";

export const TwentyFourTableWrapper = styled.div`
  height: 175px;
  position: relative;
`;

export const Header = styled.header`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 8px;
  margin-left: 4px;
  color: ${({ theme }) => theme.colors.white};
`;

export const SymbolHeaderStyle = styled.div`
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
