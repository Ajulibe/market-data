import styled from "styled-components";

export const CustomSelectWrapper = styled.div`
  width: 100px;
  position: relative;
  margin-left: 16px;
  margin-top: 8px;
  display: flex;
  justify-content: center;
  border-radius: none;
`;

export const Select = styled.select`
  appearance: none;
  -webkit-appearance: none;
  text-align: center;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  padding: 8px 10px;
  background-color: ${({ theme }) => theme.colors.darkGreen};
  border-radius: 0;
  border: none;
  outline: none !important;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  & > option {
    border: 1px solid red;
  }
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
