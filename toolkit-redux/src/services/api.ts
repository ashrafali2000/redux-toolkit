import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const fetchData = async (): Promise<string> => {
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (error) {
    throw error;
  }
};
