import React from "react";
import { Skeleton } from "./ui/skeleton";

const ProductsSkeleton = () => {
  return (
    <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-16">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="space-y-4">
          <Skeleton className="aspect-square rounded-[32px] bg-card" />
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-10 w-full rounded-xl" />
        </div>
      ))}
    </div>
  );
};

export default ProductsSkeleton;
