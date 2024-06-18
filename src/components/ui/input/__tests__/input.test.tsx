import { render, screen, waitFor } from "@testing-library/react";

import CustomInput from "..";
import userEvent from "@testing-library/user-event";

describe("Component: CustomInput.tsx", () => {
  beforeEach(() => {
    render(<CustomInput type="text" />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should render correctly", () => {
    const Input = screen.getByRole("textbox");
    expect(Input).toBeInTheDocument();
  });

  test("should correctly show typed value", async () => {
    const Input = screen.getByRole("textbox");
    await waitFor(() => userEvent.type(Input, "testInput"));
    expect(Input).toHaveValue("testInput");
  });

  test("should render props correctly", () => {
    const Input = screen.getByRole("textbox");
    expect(Input).toHaveAttribute("type", "text");
  });
});
