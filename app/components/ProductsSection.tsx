"use client";

import { Button } from "@/components/ui/button";
import ProductItem from "./ProductItem";
import { useGetProductsQuery } from "@/store/service/api";
import ProductsSkeleton from "@/components/ProductsSkeleton";

export default function ProductsSection() {
  const { data: products, isLoading } = useGetProductsQuery();

  return (
    <section className="container mx-auto max-w-7xl px-4 py-8 md:py-16">
      <div className="flex justify-between items-end mb-10">
        <h2 className="text-secondary text-2xl md:text-7xl font-semibold capitalize md:uppercase leading-[0.9]">
          Don&apos;t Miss Out <br /> New Drops
        </h2>
        <Button
          size="sm"
          className="bg-primary hover:bg-primary text-white font-medium uppercase px-6 py-5 rounded-lg text-sm shadow-lg transition-all active:scale-95"
        >
          Shop New Drops
        </Button>
      </div>

      {isLoading ? (
        <ProductsSkeleton />
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-4 gap-2">
          {products?.length ? (
            products
              ?.slice(0, 4)
              .map((product) => (
                <ProductItem key={product.id} product={product} />
              ))
          ) : (
            <div className="container mx-auto py-20 text-center">
              <p className="text-destructive font-bold">
                Failed to load new arrivals. Please try again.
              </p>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
