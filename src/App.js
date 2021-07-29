import { Component, createElement } from "react";

export function App() {
  return (
    <div className="App">
      <header className="App-header"> Hello! Function </header>
    </div>
  );
}

export class AppClass extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"> Hello! Class </header>
      </div>
    );
  }
}

export const AppWithoutJSX = () =>
  createElement(
    "div",
    { className: "App" },
    createElement("header", { className: "App-header" }, "Hello! Vanila")
  );
