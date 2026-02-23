"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import ProductItem from "./ProductItem";
import { useGetProductsQuery } from "@/store/service/api";

export default function ProductsSection() {
  const { data: products, isLoading, isError } = useGetProductsQuery();

  if (isLoading) {
    return (
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-16">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="aspect-square rounded-[32px] bg-card" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-10 w-full rounded-xl" />
          </div>
        ))}
      </div>
    );
  }

  // Error State
  if (isError) {
    return (
      <div className="container mx-auto py-20 text-center">
        <p className="text-destructive font-bold">
          Failed to load new arrivals. Please try again.
        </p>
      </div>
    );
  }

  return (
    <section className="container mx-auto max-w-7xl px-4 py-8 md:py-16">
      <div className="flex justify-between items-end mb-10">
        <h2 className="text-secondary text-2xl md:text-7xl font-semibold capitalize md:uppercase leading-[0.9]">
          Don&apos;t Miss Out <br /> New Drops
        </h2>
        <Button
          size="sm"
          className="bg-primary hover:bg-[#3b54b5] text-white font-medium uppercase px-6 py-5 rounded-lg text-sm shadow-lg transition-all active:scale-95"
        >
          Shop New Drops
        </Button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-4 gap-2">
        {products?.slice(0, 4).map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
