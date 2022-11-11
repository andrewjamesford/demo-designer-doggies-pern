const request = require("supertest");
const path = require("path");
const jestOpenAPI = require("jest-openapi").default;
const app = require("../app");
const db = require("../db");
const productRepository = require("./product.repository");

jestOpenAPI(path.join(__dirname, "../apispec.yaml"));

describe("GIVEN that the GET /products route exist", () => {
  afterAll(() => {
    db.end();
  });

  test("WHEN there are products THEN return status 200 and an array of products", async () => {
    const totalProducts = await productRepository.getTotalProducts();
    const defaultLimit = 10;

    const expectedResponseData = {
      products: await productRepository.getProducts(defaultLimit, 1),
      currentPage: 1,
      totalPages: Math.ceil(parseInt(totalProducts) / defaultLimit),
      itemsPerPage: defaultLimit,
      totalItems: totalProducts,
    };

    const response = await request(app)
      .get("/api/products")
      .set("Accept", "application/json");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedResponseData);
    expect(response).toSatisfyApiSpec();
  });

  test("WHEN there are no products THEN return status 200 and an empty array", async () => {
    const totalProducts = await productRepository.getTotalProducts();
    const defaultLimit = 10;
    const page = 1000;

    const expectedResponseData = {
      products: [],
      currentPage: page,
      totalPages: Math.ceil(parseInt(totalProducts) / defaultLimit),
      itemsPerPage: defaultLimit,
      totalItems: totalProducts,
    };

    const response = await request(app)
      .get(`/api/products?page=${page}`)
      .set("Accept", "application/json");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedResponseData);
    expect(response).toSatisfyApiSpec();
  });

  describe("WHEN the client sends a request for a specific number of products", () => {
    test("WHEN the limit query parameter is valid as per the API spec THEN return status 200 and an array of products", async () => {
      const totalProducts = await productRepository.getTotalProducts();
      const limit = 1;

      const expectedResponseData = {
        products: await productRepository.getProducts(limit, 0),
        currentPage: 1,
        totalPages: Math.ceil(parseInt(totalProducts) / limit),
        itemsPerPage: limit,
        totalItems: totalProducts,
      };

      const response = await request(app)
        .get(`/api/products?limit=${limit}`)
        .set("Accept", "application/json");

      expect(response.status).toBe(200);
      expect(response.body).toEqual(expectedResponseData);
      expect(response).toSatisfyApiSpec();
    });

    test("WHEN the limit query parameter is not valid as per the API spec THEN return status 400 and an appropriate error message", async () => {
      const response = await request(app)
        .get("/api/products?limit=a")
        .set("Accept", "application/json");

      expect(response.status).toBe(400);
      expect(response.body.message).toBe('"limit" must be a number');
      expect(response).toSatisfyApiSpec();
    });
  });

  describe("WHEN the client sends a request for a specific page of products", () => {
    test.todo(
      "WHEN the page query parameter is valid as per the API spec THEN return 200 status code and an array of products"
    );


    
    test.todo(
      "WHEN the page query parameter is not valid as per the API spec THEN return status 400 and an appropriate error message"
    );
  });
});
