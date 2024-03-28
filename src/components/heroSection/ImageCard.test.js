import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider, createTheme } from "@mui/material";
import ImageCard from "./ImageCard";

it("renders with default props", () => {
  const theme = createTheme({ palette: { card: { main: "black" } } });
  const { container } = render(
    <ThemeProvider theme={theme}>
      <ImageCard />
    </ThemeProvider>,
  );
  const { firstChild } = container;
  expect(firstChild).toMatchSnapshot();
  expect(screen.getByTestId("image-card-container")).toHaveStyle(
    "height: 52vh",
  );
});

it("renders as expected when props are supplied", () => {
  const theme = createTheme({ palette: { card: { main: "black" } } });
  const { container } = render(
    <ThemeProvider theme={theme}>
      <ImageCard
        imgHeight={100}
        boxJustify="flex-end"
        width="90px"
        maxWidth="100px"
        cardHeight="30px"
      />
    </ThemeProvider>,
  );
  const { firstChild } = container;
  expect(firstChild).toMatchSnapshot();
  expect(screen.getByTestId("image-card-container")).toHaveStyle({
    height: "75px",
  });
});
