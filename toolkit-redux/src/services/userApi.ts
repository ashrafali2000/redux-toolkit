import axios from "axios";

const userApi = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const fetchUsers = async (): Promise<string> => {
  try {
    const response = await userApi.get("/users");
    return response.data;
  } catch (error) {
    throw error;
  }
};
