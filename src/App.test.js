import { render, screen } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  // First render compnent
  render(<App />);

  // Find the element we're interested in
  // Find an element with a role of button and text of 'change to blue'
  const colorButton = screen.getByRole('button', { name: /change to blue/i });

  // Expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
});

test("button turns blue when clicked", () => {
  render(<App />);
  
  // Find element you want to click
  const colorButton = screen.getByRole('button', { name: /change to blue/i });

  // TODO: repeating lines of code -> refactor
});