import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.render(
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>,
    rootElement,
  );
} else {
  console.error("Root element not found");
}
