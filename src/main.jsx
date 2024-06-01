import App from "./App";
import ReactDOM from "react-dom/client";
import React from "react";

const root = document.getElementById("app");
console.log(root);
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);