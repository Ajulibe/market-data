import { expect, test } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";

import CustomInput from "@/components/ui/input";
import userEvent from "@testing-library/user-event";

describe("component: CustomInput.tsx", () => {
  beforeEach(() => {
    render(<CustomInput role="search" />);
  });

  test("should render custom input", () => {
    const customInput = screen.getAllByRole("search");
    expect(customInput).toHaveLength(1);
    screen.debug();
  });

  test("should show correct search term", async () => {
    const customInput = screen.getAllByRole("search")[0];
    await waitFor(() => userEvent.type(customInput, "checkers"));
    screen.debug();
  });
});
