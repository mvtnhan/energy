import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";
import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";
import App from "./App";

const GlobalStyle = createGlobalStyle`
${normalize}
  html{
    font-size: 62.5%;
  }

  @media (max-width: 1440px) {
    font-size: 55.2%
  }

  @media (max-width: 700px) {
    font-size: 28.8%
  }
  @media (max-width: 590rem) {
    font-size: 23.5%
  }

  @media (max-width: 430px) {
    font-size: 17.7%unset;
  }



  body, img, div, h3, h2, h1, p, ul, input {
    margin: 0;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-weight: 300;
    font-size: 19px;
    padding: 0;
    list-style: none;
  }

  h1{
    font-weight: 500;
  }
  li, button{
    cursor: pointer;
  }
`;

const theme = {
  fontStyle: {
    Regular: 400,
    Medium: 500,
    SemiBold: 600,
    Bold: 700,
  },
  color: {
    Orange: "#FF6E5D",
    Gray: "#EFEFEF",
    xanh: "#003556",
  },
};

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
