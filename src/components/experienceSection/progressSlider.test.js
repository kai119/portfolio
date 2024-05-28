import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider, createTheme, Box } from "@mui/material";
import ProgressSlider from "./progressSlider.jsx";

it("renders with default props", () => {
  const theme = createTheme({ palette: { card: { main: "black" } } });
  const { container } = render(
    <ThemeProvider theme={theme}>
      <ProgressSlider />
    </ThemeProvider>,
  );
  const { firstChild } = container;
  expect(firstChild).toMatchSnapshot();
});

it("renders children within component", () => {
  const theme = createTheme({ palette: { card: { main: "black" } } });
  const { container } = render(
    <ThemeProvider theme={theme}>
      <ProgressSlider
        content={
          <Box data-testid="progress-contentBox" sx={{ height: "1000px" }} />
        }
      />
    </ThemeProvider>,
  );
  const { firstChild } = container;
  expect(firstChild).toMatchSnapshot();
  expect(screen.getByTestId("progress-contentBox")).toBeInTheDocument();
});
