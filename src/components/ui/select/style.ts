import styled from "styled-components";

export const CustomSelectWrapper = styled.div`
  min-width: 350px;
  position: relative;
`;

export const Select = styled.select`
  appearance: none;
  -webkit-appearance: none;
  width: 100%;
  font-size: 1.15rem;
  padding: 0.675em 6em 0.675em 1em;
  background-color: #fff;
  border: 1px solid #caced1;
  border-radius: 0.25rem;
  color: #000;
  cursor: pointer;
`;

export const Arrow = styled.div`
  position: absolute;
  right: 1rem;
  pointer-events: none;

  &::before,
  &::after {
    content: "";
    position: absolute;
  }

  &::before {
    top: 40%;
  }

  &::after {
    top: 55%;
  }
`;
