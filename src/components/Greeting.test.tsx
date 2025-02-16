import React from "react";
import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("renders the greeting message", () => {
  render(<Greeting name="World" />);
  const greetingElement = screen.getByText("Hello, World!");
  expect(greetingElement).toBeInTheDocument();
});
