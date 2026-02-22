"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, toggleWishlist } from "@/store/cartSlice";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Image from "next/image";
import { useGetProductByIdQuery } from "@/store/service/api";
import SizeSelector from "../components/SizeSelector";
import { toast } from "sonner";
import { RootState } from "@/store";
import SimilarProducts from "@/app/components/SimilarProducts";

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const wishlistIds = useSelector((state: RootState) => state.cart.wishlist);

  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductByIdQuery(id as string);

  const [selectedSize, setSelectedSize] = useState(38);
  const [selectedColor, setSelectedColor] = useState("Shadow Navy");

  if (isLoading)
    return (
      <div className="p-20 text-center font-semibold">LOADING PRODUCT...</div>
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
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-6 md:gap-12">
        {/* Gallery Grid: Displays 4 angles of the shoe */}
        <div className="flex-1 grid md:grid-cols-2 gap-4 rounded-xl md:rounded-[48px] overflow-hidden">
          {product.images.slice(0, 4).map((img, i) => (
            <div key={i} className="">
              <Image
                src={img.replace(/[\[\]"]/g, "")}
                alt={product.title}
                width={500}
                height={500}
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>

        {/* Product Configuration Sidebar */}
        <div className="w-full lg:w-105 space-y-4 md:space-y-8">
          <div className="space-y-4">
            <div className="inline-block bg-primary text-white font-medium uppercase px-4 py-3 rounded-xl text-xs">
              New Release
            </div>
            <h1 className="text-secondary text-xl md:text-3xl font-semibold uppercase">
              {product.title}
            </h1>
            <p className="text-primary text-2xl font-semibold">
              ${product.price.toFixed(2)}
            </p>
          </div>

          {/* Color Selector with Design Hex codes */}
          <div className="space-y-4">
            <h3 className="text-secondary font-semibold">
              Color - {selectedColor}
            </h3>
            <div className="flex gap-3">
              <div
                className={`rounded-full p-1 cursor-pointer  border-3 ${selectedColor === "Shadow Navy" ? "border-secondary" : "border-transparent"}`}
              >
                <div
                  onClick={() => setSelectedColor("Shadow Navy")}
                  className={`w-7 h-7 rounded-full bg-[#253043] `}
                />
              </div>
              <div
                className={`rounded-full p-1 cursor-pointer  border-3 ${selectedColor === "Army Green" ? "border-secondary" : "border-transparent"}`}
              >
                <div
                  onClick={() => setSelectedColor("Army Green")}
                  className={`w-7 h-7 rounded-full bg-[#707E6E] `}
                />
              </div>
            </div>
          </div>

          {/* Integrated Size Selector */}
          <SizeSelector
            selectedSize={selectedSize}
            onSizeSelect={(size) => setSelectedSize(size)}
          />

          {/* Action Buttons: Add to Cart & Wishlist */}
          <div className="space-y-3">
            <div className="flex gap-3 pt-4">
              <div className="w-full">
                <Button
                  onClick={handleAddToCart}
                  size="sm"
                  className="w-full bg-secondary text-white font-medium uppercase px-6 py-5 rounded-lg text-sm"
                >
                  Add to Cart
                </Button>
              </div>
              <Button
                variant={
                  wishlistIds.includes(product.id) ? "secondary" : "outline"
                }
                onClick={() => dispatch(toggleWishlist(product.id))}
                className="h-10 w-10 rounded-lg border-2 border-[#232321]"
              >
                <Heart size={24} />
              </Button>
            </div>

            <Button
              size="sm"
              className="w-full bg-primary hover:bg-secondary text-white font-medium uppercase px-6 py-5 rounded-lg text-sm"
            >
              Buy It Now
            </Button>
          </div>

          {/* Product Description Section */}
          <div className="">
            <h3 className="text-secondary font-semibold uppercase mb-2">
              About the product
            </h3>
            <p className="font-sans text-secondary leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>
      </div>
      <SimilarProducts />
    </div>
  );
}
