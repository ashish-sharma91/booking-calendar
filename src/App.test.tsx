import { render, screen } from "@testing-library/react";
import App from "./App";

describe("AdContainer", () => {
  it("should render date input", () => {
    render(<App />);
    expect(screen.queryByTestId("calendar")).toBeInTheDocument();
  });

  it("should not render slots", () => {
    render(<App />);
    expect(screen.queryByTestId("slots")).not.toBeInTheDocument();
  });

  it("should not render reason input", () => {
    render(<App />);
    expect(screen.queryByTestId("reasonInput")).not.toBeInTheDocument();
  });

  it("should not render book button", () => {
    render(<App />);
    expect(screen.queryByTestId("bookSlotBtn")).not.toBeInTheDocument();
  });
});

describe("AdContainer", () => {
  it("should not render book button", () => {
    render(<App />);
    expect(screen.queryByTestId("slots")).not.toBeInTheDocument();
  });
});
