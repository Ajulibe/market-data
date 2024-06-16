import styled from "styled-components";

export const LoadingSpinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .spinner {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .spinner div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 30px;
    height: 30px;
    margin: 8px;
    border: 2px solid ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    animation: spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ theme }) => theme.colors.white}transparent transparent
      transparent;
  }
  .spinner div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .spinner div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .spinner div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
