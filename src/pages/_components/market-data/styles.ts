import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const TableSpacer = styled.div`
  margin-top: 24px;
`;

export const Form = styled.form`
  display: flex;
`;

export const SvgWrapper = styled.div`
  width: 10px;
  height: 10px;
`;

export const Header = styled.header`
  font-size: 3rem;
  font-weight: 500;
  letter-spacing: -3px;
  margin-right: 6px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 420px) {
    font-size: 3rem;
  }
`;
