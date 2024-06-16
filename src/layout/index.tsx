import GlobalStyles, {
  BlurBackground,
  ChildrenWrapper,
} from "@/styles/GlobalStyles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode } from "react";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import StyledComponentsRegistry from "@/lib/registry";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";

interface Props {
  readonly children: ReactNode;
}

const queryClient = new QueryClient();

export function RootLayout({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <ChildrenWrapper>
            <BlurBackground>{children}</BlurBackground>
          </ChildrenWrapper>
          <ReactQueryDevtools initialIsOpen={false} />
        </ThemeProvider>
      </StyledComponentsRegistry>
    </QueryClientProvider>
  );
}
