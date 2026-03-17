import {
  render,
  screen,
} from "@testing-library/react";
import ProductPage from "./ProductPage";


describe("ProductPage", () => {
  test("Expect the combo box sort to render", () => {
    render(<ProductPage />);
    const combo = screen.getByRole("combobox", { name: "Sort" });
    expect(combo).toBeInTheDocument();
  });

  test("Expect the combo box order to render", () => {
    render(<ProductPage />);
    const combo = screen.getByRole("combobox", { name: "Order" });
    expect(combo).toBeInTheDocument();
  });
});
