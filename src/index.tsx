import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello React + TS with CI/CD workflow that works!</h1>;
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
