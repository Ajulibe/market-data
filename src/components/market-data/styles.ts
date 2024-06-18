import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const TableSpacer = styled.div`
  margin-top: 24px;
`;
export const TableSpacerBottom = styled.div`
  margin-bottom: 48px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  margin-left: 16px;
  margin-top: 5px;
  & > button {
    height: 35px;
    margin-left: 6px;
  }
`;

export const SvgWrapper = styled.div`
  width: 16px;
  height: 16px;
  transition: all 0.3s ease-in;
  &:hover {
    transform: scale(0.8);
  }
`;

export const Header = styled.header`
  font-size: 3rem;
  font-weight: 500;
  letter-spacing: -4px;
  margin-right: 6px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 496px) {
    font-size: 1.5rem;
    letter-spacing: -3px;
  }
`;
