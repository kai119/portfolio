import React from "react";
import "./styles.css";
import { createTheme, ThemeProvider } from "@mui/material";
import HomePage from "./pages/HomePage";

let theme = createTheme({
  palette: {
    primary: {
      main: "#66fcf1",
    },
    secondary: {
      main: "#45a29e",
    },
    card: {
      main: "linear-gradient(to right, #07080a 0%, #16171f 100%)",
    },
    menu: {
      main: "#16171f",
    },
    text: {
      primary: "#ECEDEE",
      secondary: "#C6C6C8",
      disabled: "#9A9A9C",
    },
    divider: {
      main: "#252634",
    },
  },
  shadows: [
    "none",
    "#181a1d -1px -1px 3px, rgba(0, 0, 0, 0.25) 2px 2px 4px",
    "#24272C -1px -1px 3px, rgba(0, 0, 0, 0.25) 2px 2px 4px",
    ...Array(22).fill("none"),
  ],
  transitions: {
    duration: {
      enteringScreen: 600,
      leavingScreen: 600,
    },
  },
  typography: {
    h1: {
      fontSize: 72,
      fontWeight: 500,
    },
    h2: {
      fontSize: 48,
      fontWeight: 500,
    },
    h3: {
      fontSize: 30,
      fontWeight: 500,
    },
    h4: {
      fontSize: 50,
      fontWeight: 500,
    },
    h5: {
      fontSize: 36,
      fontWeight: 500,
    },
    h6: {
      fontSize: 14,
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: 24,
    },
    subtitle2: {
      fontsize: 18,
    },
    subtitle3: {
      fontsize: 12,
    },
    body_large: {
      fontSize: 18,
    },
    body_medium: {
      fontSize: 16,
    },
    body_small: {
      fontSize: 11,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
