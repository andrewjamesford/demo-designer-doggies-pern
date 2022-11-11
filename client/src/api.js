const api = {
  getProducts: async (sort, order) =>
    await fetch(`${process.env.REACT_APP_API_URL}/products?sortOrder=${sort}&direction=${order}`),
  getReports: async (accessToken) =>
    await fetch(`${process.env.REACT_APP_API_URL}/reports`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }),
};

export default api;
