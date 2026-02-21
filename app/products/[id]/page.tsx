"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

import { useDispatch } from "react-redux";
import { addToCart, toggleWishlist } from "@/store/cartSlice";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Image from "next/image";
import { useGetProductByIdQuery } from "@/store/service/api";
import SizeSelector from "../components/SizeSelector";
import { toast } from "sonner";

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductByIdQuery(id as string);

  const [selectedSize, setSelectedSize] = useState(38);
  const [selectedColor, setSelectedColor] = useState("Shadow Navy");
  console.log(product);

  if (isLoading)
    return (
      <div className="p-20 text-center font-display font-black">
        LOADING PRODUCT...
      </div>
    );
  if (isError || !product)
    return (
      <div className="p-20 text-center text-red-500">Product not found.</div>
    );

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.images[0],
        size: selectedSize,
        color: selectedColor,
        quantity: 1,
      }),
    );
    toast.success(`${product.title} added to cart!`, {
      description: `Size: ${selectedSize}, Color: ${selectedColor}`,
      icon: "👟",
    });
  };

  return (
    <div className="container mx-auto max-w-7xl px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Gallery Grid: Displays 4 angles of the shoe */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          {product.images.slice(0, 4).map((img, i) => (
            <div
              key={i}
              className="relative aspect-square bg-[#E7E7E3] rounded-[32px] overflow-hidden"
            >
              <Image
                src={img.replace(/[\[\]"]/g, "")}
                alt={product.title}
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>

        {/* Product Configuration Sidebar */}
        <div className="w-full lg:w-105 space-y-8">
          <header className="space-y-4">
            <span className="bg-[#4A69E2] text-white text-[10px] font-bold px-3 py-1.5 rounded-lg uppercase">
              New Release
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-black uppercase leading-[1.1]">
              {product.title}
            </h1>
            <p className="text-[#4A69E2] text-2xl font-black">
              ${product.price.toFixed(2)}
            </p>
          </header>

          {/* Color Selector with Design Hex codes */}
          <div className="space-y-4">
            <h3 className="font-display font-black uppercase text-sm">
              Color - {selectedColor}
            </h3>
            <div className="flex gap-3">
              <button
                onClick={() => setSelectedColor("Shadow Navy")}
                className={`w-8 h-8 rounded-full bg-[#232321] border-2 ${selectedColor === "Shadow Navy" ? "border-[#4A69E2]" : "border-transparent"}`}
              />
              <button
                onClick={() => setSelectedColor("Army Green")}
                className={`w-8 h-8 rounded-full bg-[#707a64] border-2 ${selectedColor === "Army Green" ? "border-[#4A69E2]" : "border-transparent"}`}
              />
            </div>
          </div>

          {/* Integrated Size Selector */}
          <SizeSelector
            selectedSize={selectedSize}
            onSizeSelect={(size) => setSelectedSize(size)}
          />

          {/* Action Buttons: Add to Cart & Wishlist */}
          <div className="flex gap-3 pt-4">
            <Button
              onClick={handleAddToCart}
              className="flex-1 bg-[#232321] text-white h-16 font-display font-black uppercase rounded-xl hover:bg-black"
            >
              Add to Cart
            </Button>
            <Button
              variant="outline"
              onClick={() => dispatch(toggleWishlist(product.id))}
              className="h-16 w-16 rounded-xl border-2 border-[#232321]"
            >
              <Heart size={24} />
            </Button>
          </div>

          <Button className="w-full bg-[#4A69E2] text-white h-16 font-display font-black uppercase rounded-xl">
            Buy It Now
          </Button>

          {/* Product Description Section */}
          <div className="pt-10 border-t border-black/10">
            <h3 className="font-display font-black uppercase mb-4">
              About the product
            </h3>
            <p className="font-body text-[#232321]/70 leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
