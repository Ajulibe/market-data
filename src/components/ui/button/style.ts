import styled, { DefaultTheme, css } from "styled-components";

import { ButtonProps } from ".";

const buttonVariants = (theme: DefaultTheme) => ({
  primary: css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.black};
      border-color: ${theme.colors.primaryHover};
      color: ${theme.colors.black};
    }
  `,
  secondary: css`
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};

    &:hover {
      background-color: ${theme.colors.black};
      border-color: ${theme.colors.primary};
    }
  `,
  tertiary: css`
    background-color: ${theme.colors.tertiary};
    color: ${theme.colors.white};
    border: 0.5px solid ${theme.colors.white};

    &:hover {
      background-color: ${theme.colors.white};
      color: ${theme.colors.black};
    }
  `,
  invisible: css`
    background-color: transparent;
    color: ${theme.colors.white};
    height: 100%;
    width: 100%;
    border-radius: 0px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: ${theme.colors.black};
      border-color: ${theme.colors.primary};
    }
  `,
});

const buttonSizes = {
  small: css`
    padding: 0.35rem 0.7rem;
    font-size: 0.875rem;
    height: 30px;
  `,
  medium: css`
    padding: 0.5rem 1rem;
    font-size: 1rem;
    height: 40px;
  `,
  large: css`
    padding: 0.75rem 1.5rem;
    font-size: 1.25rem;
    height: 40px;
  `,
};

export const StyledButton = styled.button<ButtonProps>`
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  border-radius: 0.25rem;
  transition:
    color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

  ${(props) => props.size && buttonSizes[props.size]}
  ${(props) => props.variant && buttonVariants(props.theme)[props.variant]}


  &:disabled {
    background: ${(props) => props.theme.colors.mutedForeground};
    color: ${(props) => props.theme.colors.mutedColor};
    cursor: not-allowed;
  }
`;
