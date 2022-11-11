import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PaginationControls from "./PaginationControls";

describe("PaginationControls", () => {
  test("WHEN the user is on the first page of the products page, THEN the previous/back button of the pagination control will be disabled", () => {
    const onPrev = jest.fn();
    render(
      <PaginationControls
        onNext={() => {}}
        onPrev={onPrev}
        currentPage={1}
        totalPages={5}
      />
    );
    const previousButton = screen.getByRole("button", {
      name: "Previous page",
    });
    expect(previousButton).toBeDisabled();
    userEvent.click(previousButton);
    expect(onPrev).not.toHaveBeenCalled();
  });

  test.todo(
    "WHEN the user is on the second page of the main product page, THEN the previous/back button of the pagination control will be enabled."
  );

  test.todo(
    "WHEN the user is on the last page of the main product page, THEN next button of the pagination control will be disabled."
  );
});
