import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import { deepPurple } from "@material-ui/core/colors";

import App from "./App";
import { globalStyle } from "./index.style";
import reportWebVitals from "./reportWebVitals";

const theme = createTheme({
  typography: {
    fontFamily: "Raleway, Arial",
  },
  overrides: {
    MuiCssBaseline: globalStyle,
  },
  palette: {
    primary: { main: deepPurple[500] },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
