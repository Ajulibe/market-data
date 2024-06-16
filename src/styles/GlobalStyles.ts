import { createGlobalStyle, css } from "styled-components";

const styles = css`
  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid red;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    padding: 2rem;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${styles}
`;

export default GlobalStyles;
