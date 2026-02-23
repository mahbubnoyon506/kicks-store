"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import {
  removeFromCart,
  toggleWishlist,
  updateQuantity,
} from "@/store/cartSlice";
import {
  Heart,
  Trash2,
  ChevronDown,
  Minus,
  Plus,
  HeartIcon,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SimilarProducts from "../components/SimilarProducts";

export default function CartPage() {
  const { items } = useSelector((state: RootState) => state.cart);
  const wishlistIds = useSelector((state: RootState) => state.cart.wishlist);
  const dispatch = useDispatch();

  // Financial Calculations
  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const delivery = subtotal > 0 ? 6.99 : 0;
  const total = subtotal + delivery;

  return (
    <div className="container mx-auto px-4">
      <div>
        <h2 className="text-2xl md:text-3xl text-secondary font-semibold mb-2">
          Saving to celebrate{" "}
        </h2>
        <p className="font-sans text-xs md:text-sm text-secondary/60 mb-5 md:mb-10">
          Enjoy up to 60% off thousands of styles during the End of Year sale -
          while suppiles last. No code needed. <br /> Join us or Sign-in
        </p>
        <div className="flex flex-col lg:flex-row gap-4 md:gap-8">
          {/* Left: Your Bag Section */}
          <div className="flex-1 bg-white rounded-md md:rounded-3xl p-4 md:p-6">
            <h2 className="text-2xl md:text-3xl text-secondary font-semibold mb-2">
              Your Bag
            </h2>
            <p className="font-sans text-xs md:text-sm text-secondary/60 mb-5 md:mb-10">
              Items in your bag are not reserved — check out now to make them
              yours.
            </p>

            <div className="space-y-5 md:space-y-10">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="flex gap-3 md:gap-6"
                >
                  {/* Product Image */}
                  <div className="relative min-w-32 aspect-square bg-[#ECEEF0] rounded-[24px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 space-y-1 md:space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="md:text-2xl font-semibold uppercase text-secondary">
                        {item.title}
                      </h3>
                      <p className="hidden md:block text-primary md:text-2xl font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                    <p className="text-sm md:text-xl font-sans font-semibold text-secondary/80 capitalize">
                      {item.color}
                    </p>

                    <div className="flex flex-col md:flex-row md:items-center md:gap-8 pt-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm md:text-xl font-sans font-semibold text-secondary/80 capitalize">
                          Size:
                        </span>
                        <span className="text-sm md:text-xl font-sans font-semibold font-secondary">
                          {item.size}
                        </span>
                      </div>

                      {/* Quantity Selector Logic */}
                      <div className="flex items-center gap-4">
                        <span className="text-sm md:text-xl font-sans font-semibold text-secondary/80 capitalize">
                          Quantity:
                        </span>
                        <div className="flex items-center border border-black/10 rounded-lg overflow-hidden">
                          <button
                            onClick={() =>
                              dispatch(
                                updateQuantity({
                                  id: item.id,
                                  size: item.size,
                                  quantity: item.quantity - 1,
                                }),
                              )
                            }
                            className="p-2 hover:bg-gray-100 transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 text-sm md:text-xl font-sans font-semibold font-secondary">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              dispatch(
                                updateQuantity({
                                  id: item.id,
                                  size: item.size,
                                  quantity: item.quantity + 1,
                                }),
                              )
                            }
                            className="p-2 hover:bg-gray-100 transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                    <p className="block md:hidden text-primary md:text-2xl font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button
                        className="cursor-pointer p-2 hover:bg-gray-100 rounded-full transition-colors"
                        onClick={() => dispatch(toggleWishlist(item.id))}
                      >
                        <Heart
                          size={22}
                          className="text-secondary"
                          fill={
                            wishlistIds.includes(item.id) ? "#17181A" : "none"
                          }
                        />
                      </button>
                      <button
                        onClick={() =>
                          dispatch(
                            removeFromCart({ id: item.id, size: item.size }),
                          )
                        }
                        className="cursor-pointer p-2 hover:bg-red-50 rounded-xl transition-colors text-red-500"
                      >
                        <Trash2 size={22} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {items.length === 0 && (
                <div className="py-20 text-center">
                  <p className="text-xl font-sans font-semibold uppercase opacity-20">
                    Your bag is empty
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className=" bg-white md:bg-background rounded-md">
            <div className=" backdrop-blur-sm p-4 md:p-6 rounded-[24px] space-y-3 md:space-y-6">
              <h2 className="text-xl md:text-3xl text-secondary font-semibold">
                Order Summary
              </h2>

              <div className="space-y-4 font-bold uppercase text-sm">
                <div className="flex justify-between">
                  <span className="md:text-xl font-sans font-semibold text-secondary capitalize">
                    {items.length} ITEM
                  </span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="md:text-xl font-sans font-semibold text-secondary capitalize">
                    Delivery
                  </span>
                  <span>${delivery.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="md:text-xl font-sans font-semibold text-secondary capitalize">
                    Sales Tax
                  </span>
                  <span>-</span>
                </div>
                <div className="flex justify-between pt-4 md:text-xl font-semibold text-secondary capitalize">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <Button
                size="sm"
                className="w-full bg-secondary text-white font-medium uppercase px-6 py-5 rounded-lg text-sm"
              >
                Checkout
              </Button>

              <button className="md:text-xl font-sans font-semibold text-secondary underline">
                Use a promo code
              </button>
            </div>
          </div>
        </div>
      </div>
      <SimilarProducts />
    </div>
  );
}
