import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

beforeEach(() => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
});

describe("Header", () => {
  test("The header renders", () => {
    expect(screen.getByText(/products/i)).toBeInTheDocument();
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/Designer Doggies/i)).toBeInTheDocument();
  });
});
