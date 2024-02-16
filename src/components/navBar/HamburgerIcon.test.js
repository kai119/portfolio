import React from "react";
import { render, screen } from "@testing-library/react";
import HamburgerIcon from "./HamburgerIcon";

it("renders with default props", () => {
  const { container } = render(<HamburgerIcon />);
  const { firstChild } = container;
  expect(firstChild).toMatchSnapshot();

  expect(screen.getByTestId("hamburger-svg")).toHaveClass("inactive");
});

it("className should change from 'active' to 'inactive' depending on the open prop", () => {
  const { rerender } = render(<HamburgerIcon open={false} />);
  expect(screen.getByTestId("icons-container")).toMatchSnapshot();
  expect(screen.getByTestId("hamburger-svg")).toHaveClass("inactive");

  rerender(<HamburgerIcon open={true} />);
  expect(screen.getByTestId("icons-container")).toMatchSnapshot();
  expect(screen.getByTestId("hamburger-svg")).toHaveClass("active");
});
