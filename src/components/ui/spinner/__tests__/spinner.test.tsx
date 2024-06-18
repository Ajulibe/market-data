import { render, screen } from "@testing-library/react";

import { Spinner } from "..";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";

describe("Components: Spinner.tsx", () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <Spinner />
      </ThemeProvider>,
    );
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  test("should render correctly", () => {
    const spinner = screen.getByTestId("spinner");
    expect(spinner).toBeInTheDocument();
  });
});
