import { http, HttpResponse } from "msw";

const productsPageOneMock = {
  products: [
    {
      id: 1,
      name: "Angel Wings Harness",
      description:
        "The purrrfect accessory to take your kitty to the next level.",
      price: "$10.00",
      discountAmount: "$1.00",
      categoryName: "Costumes",
      imageName: "dog-photo_0000.jpg",
      imageDescription: "Wings harness",
      discountValue: null,
      discountType: null,
    },
  ],
  currentPage: 1,
  totalPages: 2,
  itemsPerPage: 1,
  totalItems: 2,
};

const productsPageTwoMock = {
  products: [
    {
      id: 2,
      name: "Deluxe Carry Bag Orange",
      description: "Backpack-style carry bag with dome.",
      price: "$20.00",
      discountAmount: "$5.00",
      categoryName: "Accessories",
      imageName: "dog-photo_0001.jpg",
      imageDescription: "Deluxe Carry Bag Orange",
      discountValue: 1,
      discountType: "fixed amount off",
    },
  ],
  currentPage: 2,
  totalPages: 2,
  itemsPerPage: 1,
  totalItems: 2,
};

const reportsMock = {
  categoryReport: [
    {
      categoryName: "Accessories",
      totalProducts: 20,
      discountedProducts: 2,
    },
  ],
  discountReport: [
    {
      discountType: "fixed amount off",
      totalProducts: 2,
    },
  ],
};

export const handlers = [
  http.get(`${import.meta.env.VITE_API_URL}/products`, ({ request }) => {
    const query = new URL(request.url).searchParams;
    const limit = query.get("limit");
    const page = query.get("page");
    if (!(limit && page) || page === "1") {
      return HttpResponse.json(productsPageOneMock);
    } else {
      return HttpResponse.json(productsPageTwoMock);
    }
  }),
  http.get(`${import.meta.env.VITE_API_URL}/reports`, () => {
    return HttpResponse.json(reportsMock);
  }),
];
