import { Button } from "@/components/ui/button";
import { Product } from "@/lib/types";
import Image from "next/image";
import React from "react";

interface ProductProp {
  product: Product;
}

const ProductItem = ({ product }: ProductProp) => {
  return (
    <div key={product.id} className="group cursor-pointer">
      <div className="bg-card rounded-[28px] mb-4 border-[6px] border-white overflow-hidden aspect-8/10 relative shadow-sm">
        <div className="absolute top-0 left-0 z-20">
          <span className="flex justify-center items-center bg-primary text-white text-xs font-semibold px-4 py-3 rounded-tl-[24px] rounded-br-[24px] uppercase">
            New
          </span>
        </div>
        <Image
          src={product.images[0].replace(/[\[\]"]/g, "")}
          alt={product.title}
          width={250}
          height={300}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 rounded-[24px]"
        />
      </div>
      <div className="space-y-3">
        <h3 className="text-secondary font-semibold md:text-2xl uppercase leading-tight line-clamp-2">
          {product.title}
        </h3>
        <Button
          size="sm"
          className="w-full bg-secondary hover:bg-primary text-white font-medium uppercase px-6 py-5 rounded-lg text-sm shadow-lg transition-all active:scale-95"
        >
          <span className="text-accent">
            View Product - <span className="text-white">${product.price}</span>
          </span>
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;
