import { render, screen, waitFor } from "@testing-library/react";

import Button from "..";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import userEvent from "@testing-library/user-event";

describe("component: Button.tsx", () => {
  const handleOnclick = jest.fn();
  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <Button onClick={handleOnclick} variant="primary">
          test me
        </Button>
      </ThemeProvider>,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should render custom input", () => {
    const button = screen.getAllByRole("button");
    expect(button).toHaveLength(1);
  });

  test("should call onClick handler when clicked", async () => {
    const button = screen.getByRole("button");
    await waitFor(() => userEvent.click(button));
    expect(handleOnclick).toHaveBeenCalled();
  });

  test("should take in props", async () => {
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("variant", "primary");
  });
});
