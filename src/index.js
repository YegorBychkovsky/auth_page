import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App/App";
import "normalize.css";
import "./styles/App.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
