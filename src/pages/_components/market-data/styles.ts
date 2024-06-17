import styled from "styled-components";

export const TableSpacer = styled.div`
  margin-top: 24px;
`;

export const Header = styled.header`
  font-size: 3rem;
  margin-bottom: 16px;
  font-weight: 500;
  letter-spacing: -3px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 420px) {
    font-size: 3rem;
  }
`;
