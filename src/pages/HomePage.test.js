import React from "react";
import { render } from "@testing-library/react";
import HomePage from "./HomePage";
import { ThemeProvider, createTheme } from "@mui/material";

jest.mock("../components/navBar/NavBar", () => {
  const NavBar = () => <div />;
  return NavBar;
});

it("renders with default props", () => {
  const theme = createTheme({ palette: { card: { main: "black" } } });
  const { container } = render(
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>,
  );
  const { firstChild } = container;
  expect(firstChild).toMatchSnapshot();
});
