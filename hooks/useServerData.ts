import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import { Category, Product } from "@/lib/types";

export const useNewDrops = (limit = 4) => {
  return useQuery<Product[]>({
    queryKey: ["new-drops", limit],
    queryFn: async () => {
      const { data } = await apiClient.get(`/products?offset=0&limit=${limit}`);
      return data;
    },
  });
};

export const useCategories = () => {
  return useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await apiClient.get("/categories");
      return data;
    },
  });
};
