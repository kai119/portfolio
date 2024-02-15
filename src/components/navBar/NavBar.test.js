import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider, createTheme } from "@mui/material";
import NavBar from "./NavBar";

jest.mock("./HamburgerIcon", () => {
  const HamburgerIcon = () => <div />;
  return HamburgerIcon;
});

it("renders with default props", () => {
  const theme = createTheme({
    palette: {
      card: {
        main: "black",
      },
      menu: {
        main: "#16171f",
      },
    },
  });

  const { container } = render(
    <ThemeProvider theme={theme}>
      <NavBar />
    </ThemeProvider>,
  );

  const { firstChild } = container;

  expect(firstChild).toMatchSnapshot();
});
