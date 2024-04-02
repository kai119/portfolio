import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";
import * as mediaQueryHooks from "react-responsive";
import { ThemeProvider, createTheme } from "@mui/material";

jest.mock("../components/navBar/NavBar", () => {
  const NavBar = () => <div />;
  return NavBar;
});
jest.mock("../components/heroSection/ImageCard", () => {
  const ImageCard = () => <div />;
  return ImageCard;
});
jest.mock("../components/heroSection/IntroText", () => {
  const IntroText = () => <div />;
  return IntroText;
});

describe("Large screen testing", () => {
  beforeEach(() => {
    jest
      .spyOn(mediaQueryHooks, "useMediaQuery")
      .mockImplementation(() => false);
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

    expect(
      screen.getByTestId("homePage-largeScreen-container"),
    ).toBeInTheDocument();
    expect(
      screen.queryByTestId("homePage-mobile-container"),
    ).not.toBeInTheDocument();
    expect(screen.getByTestId("homePage-largeScreen-linksBox")).toHaveStyle({
      marginTop: "18vh",
    });
  });
});

describe("Small desktop screen testing", () => {
  beforeEach(() => {
    jest.spyOn(mediaQueryHooks, "useMediaQuery").mockImplementation((query) => {
      if (
        JSON.stringify(query) ===
        JSON.stringify({ minWidth: 1072, maxHeight: 900 })
      ) {
        return true;
      } else {
        return false;
      }
    });
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

    expect(
      screen.getByTestId("homePage-largeScreen-container"),
    ).toBeInTheDocument();
    expect(
      screen.queryByTestId("homePage-mobile-container"),
    ).not.toBeInTheDocument();
    expect(screen.getByTestId("homePage-largeScreen-linksBox")).toHaveStyle({
      marginTop: "13vh",
    });
  });
});

describe("Mobile screen testing", () => {
  beforeEach(() => {
    jest.spyOn(mediaQueryHooks, "useMediaQuery").mockImplementation((query) => {
      if (JSON.stringify(query) === JSON.stringify({ maxWidth: 1000 })) {
        return true;
      } else {
        return false;
      }
    });
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

    expect(screen.getByTestId("homePage-mobile-container")).toBeInTheDocument();
    expect(
      screen.queryByTestId("homePage-largeScreen-container"),
    ).not.toBeInTheDocument();
  });
});
