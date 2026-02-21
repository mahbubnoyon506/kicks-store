import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import { Product } from "@/lib/types";

export const useNewDrops = (limit = 4) => {
  return useQuery<Product[]>({
    queryKey: ["new-drops", limit],
    queryFn: async () => {
      const { data } = await apiClient.get(`/products?offset=0&limit=${limit}`);
      return data;
    },
  });
};
