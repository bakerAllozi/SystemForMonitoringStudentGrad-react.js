import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Page from "./comApp/Page";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Page />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found. Please check your index.html file.");
}
