import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductSortOrder from "./ProductSortOrder";

describe("ProductSortOrder", () => {
  test("WHEN the user changes the sort select box the sort change function is called", () => {
    const changeSort = jest.fn();

    render(
      <ProductSortOrder onSortChange={changeSort} onOrderChange={() => {}} />
    );

    userEvent.selectOptions(
      screen.getByRole("combobox", { name: "Sort" }),
      screen.getByRole("option", {
        name: "Description",
      })
    );
    expect(changeSort).toHaveBeenCalled();
  });

  test("WHEN the user changes the order select box the order change function is called", () => {
    const changeOrder = jest.fn();

    render(
      <ProductSortOrder onSortChange={() => {}} onOrderChange={changeOrder} />
    );

    userEvent.selectOptions(
      screen.getByRole("combobox", { name: "Order" }),
      screen.getByRole("option", {
        name: "⬆️ Ascending",
      })
    );
    expect(changeOrder).toHaveBeenCalled();
  });
});
