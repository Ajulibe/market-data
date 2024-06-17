import styled from "styled-components";

export const TwentyFourTableWrapper = styled.div`
  height: 210px;
  position: relative;
`;

export const Header = styled.header`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 8px;
  margin-left: 4px;
  color: ${({ theme }) => theme.colors.white};
`;
