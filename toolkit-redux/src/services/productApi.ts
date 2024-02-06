import axios from "axios";

const productApi = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const fetchProducts = async (): Promise<string> => {
  try {
    const response = await productApi.get("/products");
    return response.data;
  } catch (error) {
    throw error;
  }
};
