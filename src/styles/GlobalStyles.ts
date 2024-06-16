import styled, { createGlobalStyle, css } from "styled-components";

const styles = css`
  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 14px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export const ChildrenWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    120deg,
    ${({ theme }) => theme.colors.background} 20%,
    rgba(106, 17, 203, 0.2) 50%,
    ${({ theme }) => theme.colors.background} 80%
  );
`;

export const BlurBackground = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  padding: 2rem;
  backdrop-filter: blur(10px);
`;

const GlobalStyles = createGlobalStyle`
  ${styles}
`;

export default GlobalStyles;
