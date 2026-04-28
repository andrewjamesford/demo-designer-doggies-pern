import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App", () => {
  test("The app renders", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Designer Doggies/i)).toBeInTheDocument();
    expect(screen.getByText(/products/i)).toBeInTheDocument();
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
  });

  test("Renders Page Not Found when the route does not exist", () => {
    render(
      <MemoryRouter initialEntries={["/bad-page"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  });
});
