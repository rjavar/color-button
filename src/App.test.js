import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

/**
 * demonstrates functional testing
 */
test("button has correct initial color", () => {
  // First render compnent
  render(<App />);

  // Find the element we're interested in
  // Find an element with a role of button and text of 'change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  // Expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  // Click button
  fireEvent.click(colorButton);

  // Expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  // Expect the button text to be 'change to red'
  expect(colorButton.textContent).toBe('Change to red');
});
