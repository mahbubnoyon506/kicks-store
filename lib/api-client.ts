import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
  headers: { "Content-Type": "application/json" },
});

export const getProducts = async () => {
  const { data } = await apiClient.get("/products");
  return data;
};
