import styled from "styled-components";

export const GradientFill = styled.span`
  background: ${({ theme }) => theme.colors.primary};
  padding: 4px 6px;
`;

export const GradientText = styled.span`
  background: ${({ theme }) => theme.colors.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const QtyCell = styled.div<{ qty: string }>`
  color: ${({ qty, theme }) => Number(qty) > 0.3 && theme.colors.purple};
`;
