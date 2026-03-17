import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import ProductSortOrder from "./ProductSortOrder";

describe("ProductSortOrder", () => {
  test("WHEN the user changes the sort select box the sort change function is called", async () => {
    const changeSort = vi.fn();
    const user = userEvent.setup();

    render(
      <ProductSortOrder onSortChange={changeSort} onOrderChange={() => {}} />
    );

    await user.selectOptions(
      screen.getByRole("combobox", { name: "Sort" }),
      screen.getByRole("option", {
        name: "Description",
      })
    );
    expect(changeSort).toHaveBeenCalled();
  });

  test("WHEN the user changes the order select box the order change function is called", async () => {
    const changeOrder = vi.fn();
    const user = userEvent.setup();

    render(
      <ProductSortOrder onSortChange={() => {}} onOrderChange={changeOrder} />
    );

    await user.selectOptions(
      screen.getByRole("combobox", { name: "Order" }),
      screen.getByRole("option", {
        name: "⬆️ Ascending",
      })
    );
    expect(changeOrder).toHaveBeenCalled();
  });
});
