const BASE_URL_LOCAL = process.env.REACT_APP_API_URI_LOCAL;
console.log("base", BASE_URL_LOCAL);
export const PathApi = {
  BASE_URL: BASE_URL_LOCAL,
  login: "/login",
  category: "/product/categories",
  posts: "/posts",
  product:
    "/products?filter=%7B%0A%22include%22%3A%5B%0A%7B%0A%22relation%22%3A%22categories%22%2C%0A%22scope%22%3A%7B%0A%22fields%22%3A%5B%22id%22%2C%22title%22%5D%0A%7D%0A%7D%0A%5D%0A%7D",
};
