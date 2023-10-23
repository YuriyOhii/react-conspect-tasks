import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

const theme = {
  colors: {},
  spacing: (value) => `${value * 4}px`,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyles />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
