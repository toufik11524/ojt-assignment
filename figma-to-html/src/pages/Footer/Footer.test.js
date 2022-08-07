import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

it("Find the text", () => {
  render(<Footer />);
  const Element = screen.getByText(/Cross platform courses/i);
  expect(Element).toBeInTheDocument();
});

it("Rendering Multiple Image", async () => {
  render(<Footer />);
  const navbarElement = await screen.findAllByRole("img");
  expect(navbarElement.length).toBe(5);
});
