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
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
