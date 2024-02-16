import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

jest.mock("./pages/HomePage", () => {
  const HomePage = () => <div />;
  return HomePage;
});

it("renders the app with default props", () => {
  const { container } = render(<App />);
  const { firstChild } = container;
  expect(firstChild).toMatchSnapshot();
});
