import React from "react";
import ReactDOM from "react-dom";
import { App, AppClass, AppWithoutJSX } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <AppClass />
    <AppWithoutJSX />
  </React.StrictMode>,

  document.getElementById("root")
);
