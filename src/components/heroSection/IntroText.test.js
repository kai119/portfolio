import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider, createTheme } from "@mui/material";
import IntroText from "./IntroText";

it("renders with default props", () => {
  const theme = createTheme({ palette: { card: { main: "black" } } });
  const { container } = render(
    <ThemeProvider theme={theme}>
      <IntroText />
    </ThemeProvider>,
  );
  const { firstChild } = container;
  expect(firstChild).toMatchSnapshot();

  expect(screen.getByTestId("intro-hello-world-text")).toHaveClass(
    "MuiTypography-subtitle1",
  );
});

it("changes typography size if the screen is a tablet", () => {
  const theme = createTheme({ palette: { card: { main: "black" } } });

  const { container } = render(
    <ThemeProvider theme={theme}>
      <IntroText isTablet />
    </ThemeProvider>,
  );
  const { firstChild } = container;
  expect(firstChild).toMatchSnapshot();

  expect(screen.getByTestId("intro-hello-world-text")).toHaveClass(
    "MuiTypography-subtitle2",
  );
});

it("changes typography size if the screen is a mobile", () => {
  const theme = createTheme({ palette: { card: { main: "black" } } });

  const { container } = render(
    <ThemeProvider theme={theme}>
      <IntroText isMobile />
    </ThemeProvider>,
  );
  const { firstChild } = container;
  expect(firstChild).toMatchSnapshot();

  expect(screen.getByTestId("intro-hello-world-text")).toHaveClass(
    "MuiTypography-subtitle3",
  );
});
