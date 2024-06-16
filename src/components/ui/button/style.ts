import styled, { DefaultTheme, css } from "styled-components";

import { ButtonProps } from ".";

const buttonVariants = (theme: DefaultTheme) => ({
  primary: css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    border: 1px solid ${theme.colors.white};

    &:hover {
      background-color: ${theme.colors.primaryHover};
      border-color: ${theme.colors.primaryHover};
    }
  `,
  secondary: css`
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};

    &:hover {
      background-color: ${theme.colors.secondaryHover};
      border-color: ${theme.colors.primary};
    }
  `,
  tertiary: css`
    background-color: ${theme.colors.tertiary};
    color: ${theme.colors.primary};
    border: none;

    &:hover {
      background-color: ${theme.colors.tertiaryHover};
    }
  `,
});

const buttonSizes = {
  small: css`
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
  `,
  medium: css`
    padding: 0.5rem 1rem;
    font-size: 1rem;
  `,
  large: css`
    padding: 0.75rem 1.5rem;
    font-size: 1.25rem;
  `,
};

export const StyledButton = styled.button<ButtonProps>`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 0.25rem;
  transition:
    color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

  ${(props) => props.variant && buttonVariants(props.theme)[props.variant]}
  ${(props) => props.size && buttonSizes[props.size]}
`;
