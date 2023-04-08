// import necessary react testing library helpers here
import { render, screen, fireEvent } from "@testing-library/react";
// import the Counter component here
import Counter from "../components/Counter";

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
});

test("renders counter message", () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test("should render initial count with value of 0", () => {
  // Complete the unit test below based on the objective in the line above
  const intialCount = screen.getByTestId("count");
  expect(intialCount).toHaveTextContent("0");
});

test("clicking + increments the count", () => {
  // Complete the unit test below based on the objective in the line above
  const plus = screen.getByText("+");
  const currentCount = screen.getByTestId("count");

  fireEvent.click(plus);
  expect(currentCount).toHaveTextContent("1");
});

test("clicking - decrements the count", () => {
  // Complete the unit test below based on the objective in the line above
  const minus = screen.getByText("-");
  const currentCount = screen.getByTestId("count");

  fireEvent.click(minus);
  expect(currentCount).toHaveTextContent("-1");
});
