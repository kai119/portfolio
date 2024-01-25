import * as React from "react";
import "./styles.css"
import {createTheme, ThemeProvider} from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#66fcf1"
    },
    secondary: {
      main: "#45a29e"
    },
    card: {
      main: "linear-gradient(to right, #07080a 0%, #16171f 100%)",
    },
    menu: {
      main: "#16171f"
    },
    text: {
      primary: "#ECEDEE"
    },
    divider: {
      main: "#252634"
    },
  },
  shadows: [
    "none",
    "#181a1d -1px -1px 3px, rgba(0, 0, 0, 0.25) 2px 2px 4px",
    ...Array(23).fill("none")
  ]
})

function App() {
    return (

      <ThemeProvider theme={theme}>
        <div />
      </ThemeProvider>

  );
}

export default App;
