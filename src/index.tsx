import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello React + Typescript with working ci/cd workflow</h1>;
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
