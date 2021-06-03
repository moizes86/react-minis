import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.scss";
import App from "./App";
import MyNavbar from "./components/my-navbar/my-navbar";
import Container from "react-bootstrap/esm/Container";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MyNavbar />
        <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
