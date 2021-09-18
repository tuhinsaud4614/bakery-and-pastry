import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import { teal } from "@material-ui/core/colors";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { globalStyle } from "./index.style";
import reportWebVitals from "./reportWebVitals";
import store from "./store";

const theme = createTheme({
  typography: {
    fontFamily: "Raleway, Arial, sans-serif",
  },
  overrides: {
    MuiCssBaseline: globalStyle,
  },
  palette: {
    primary: { main: teal[500] },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
