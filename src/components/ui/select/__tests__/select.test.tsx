import { render, screen } from "@testing-library/react";

import CustomSelect from "..";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";

const options = ["test", "exams", "job"];

describe("Components: Select.tsx", () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <CustomSelect options={options} />
      </ThemeProvider>,
    );
  });

  test("should render correctly", () => {
    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();
  });

  test("should render options correctly", () => {
    const options = screen.getAllByRole("option")[0];
    expect(options).toHaveValue("test");
  });
});
