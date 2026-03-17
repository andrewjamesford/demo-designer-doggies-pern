module.exports = [
  {
    ignores: ["build/**", "node_modules/**"],
  },
  {
    files: ["src/**/*.js", "src/**/*.jsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        document: "readonly",
        fetch: "readonly",
        navigator: "readonly",
        process: "readonly",
        window: "readonly",
      },
    },
  },
  {
    files: ["src/**/*.test.jsx", "src/**/*.test.js", "src/setupTests.js"],
    languageOptions: {
      globals: {
        afterAll: "readonly",
        afterEach: "readonly",
        beforeAll: "readonly",
        beforeEach: "readonly",
        describe: "readonly",
        expect: "readonly",
        global: "readonly",
        jest: "readonly",
        test: "readonly",
      },
    },
  },
];
