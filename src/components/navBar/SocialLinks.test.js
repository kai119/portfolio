import React from "react";
import { render, screen } from "@testing-library/react";
import SocialLinks from "./SocialLinks";
import { ThemeProvider, createTheme } from "@mui/material";

it("renders with default props", () => {
  const theme = createTheme({ palette: { card: { main: "black" } } });
  const { container } = render(
    <ThemeProvider theme={theme}>
      <SocialLinks />
    </ThemeProvider>,
  );
  const { firstChild } = container;
  expect(firstChild).toMatchSnapshot();
  expect(screen.getByTestId("icon-img0").getAttribute("width")).toBe("24px");
  expect(screen.getByTestId("icon-img1").getAttribute("width")).toBe("24px");
  expect(screen.getByTestId("icon-img2").getAttribute("width")).toBe("24px");
});

it("correctly adjusts the width and height of the icon based on props", () => {
  const theme = createTheme({ palette: { card: { main: "black" } } });
  const { container } = render(
    <ThemeProvider theme={theme}>
      <SocialLinks iconSize="50px" />
    </ThemeProvider>,
  );
  const { firstChild } = container;
  expect(firstChild).toMatchSnapshot();
  expect(screen.getByTestId("icon-img0").getAttribute("width")).toBe("50px");
  expect(screen.getByTestId("icon-img1").getAttribute("width")).toBe("50px");
  expect(screen.getByTestId("icon-img2").getAttribute("width")).toBe("50px");
});
