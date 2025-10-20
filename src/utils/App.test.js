import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders restaurant name", () => {
  render(<App />);
  const heading = screen.getByText(/Delicious Bites Restaurant/i);
  expect(heading).toBeInTheDocument();
});