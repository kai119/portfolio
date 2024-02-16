import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { ThemeProvider, createTheme } from "@mui/material";
import * as mediaQueryHooks from "react-responsive";
import NavBar from "./NavBar";

const theme = createTheme({
  palette: {
    text: {
      primary: "red",
      secondary: "blue",
      disabled: "pink",
    },
    card: {
      main: "black",
    },
    menu: {
      main: "#16171f",
    },
  },
});

describe("Desktop screen testing", () => {
  beforeEach(() => {
    jest
      .spyOn(mediaQueryHooks, "useMediaQuery")
      .mockImplementationOnce(() => true);
  });

  it("renders with default props", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>,
    );

    const { firstChild } = container;

    expect(firstChild).toMatchSnapshot();
  });
});

describe("Mobile screen testing", () => {
  beforeEach(() => {
    jest
      .spyOn(mediaQueryHooks, "useMediaQuery")
      .mockImplementationOnce(() => false);
  });

  it("renders with default props", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>,
    );

    const { firstChild } = container;

    expect(firstChild).toMatchSnapshot();
  });

  it("opens the menu drawer when hamburger icon is clicked", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>,
    );
    const { firstChild } = container;

    expect(screen.queryByTestId("navBar-drawer")).not.toBeInTheDocument();

    const hamburgerIcon = screen.getByTestId("hamburger-svg");
    fireEvent.click(hamburgerIcon);

    expect(firstChild).toMatchSnapshot();
    expect(screen.getByTestId("navBar-drawer")).toBeInTheDocument();
  });

  it("changes link colour when link is hovered", () => {
    render(
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>,
    );
    const pageLinks = ["home", "experience", "projects", "contact"];

    const hamburgerIcon = screen.getByTestId("hamburger-svg");
    fireEvent.click(hamburgerIcon);

    pageLinks.forEach((link) => {
      let otherLink = link === "home" ? "experience" : "home";
      const linkComponent = screen.getByTestId(
        "navBar-mobile-pageLink-" + link,
      );
      const otherLinkComponent = screen.getByTestId(
        "navBar-mobile-pageLink-" + otherLink,
      );

      // default colour for links should be text.secondary
      expect(linkComponent).toHaveStyle("color: blue");

      // when hovered over, links should be text.primary
      fireEvent.mouseEnter(linkComponent);
      expect(linkComponent).toHaveStyle("color: red");
      // the other links should also change to text.disabled
      expect(otherLinkComponent).toHaveStyle("color: pink");

      // all links should return to test.secondary on mouseLeave
      fireEvent.mouseLeave(linkComponent);
      expect(linkComponent).toHaveStyle("color: blue");
      expect(otherLinkComponent).toHaveStyle("color: blue");
    });
  });

  it("changes link colour when link is clicked", () => {
    render(
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>,
    );

    const hamburgerIcon = screen.getByTestId("hamburger-svg");
    fireEvent.click(hamburgerIcon);
    const linkComponent = screen.getByTestId("navBar-mobile-pageLink-home");
    expect(linkComponent).toHaveStyle("color: blue");

    fireEvent.click(linkComponent);
    expect(linkComponent).toHaveStyle("color: red");
  });
});
