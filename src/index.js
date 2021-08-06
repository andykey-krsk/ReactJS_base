import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { Message } from "./components/Message";

const message = "Сообщение передано через константу";

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <App />
      <Message message={message} />
    </div>
  </React.StrictMode>,

  document.getElementById("root")
);
