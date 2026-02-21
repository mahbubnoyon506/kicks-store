"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import {
  removeFromCart,
  toggleWishlist,
  updateQuantity,
} from "@/store/cartSlice";
import { Heart, Trash2, ChevronDown, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const { items } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  // Financial Calculations
  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const delivery = subtotal > 0 ? 6.99 : 0;
  const total = subtotal + delivery;

  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 font-body bg-[#F2F2F2]">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Your Bag Section */}
        <div className="flex-1 bg-white rounded-[24px] p-6 md:p-10 shadow-sm">
          <h2 className="text-3xl font-display font-black uppercase mb-2">
            Your Bag
          </h2>
          <p className="text-sm text-[#232321]/60 mb-10">
            Items in your bag are not reserved — check out now to make them
            yours.
          </p>

          <div className="space-y-10">
            {items.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="flex flex-col sm:flex-row gap-6"
              >
                {/* Product Image */}
                <div className="relative w-full sm:w-48 aspect-square bg-[#ECEEF0] rounded-[24px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1 space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-display font-black uppercase text-[#232321]">
                      {item.title}
                    </h3>
                    <p className="text-[#4A69E2] text-xl font-display font-black">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  <p className="text-sm font-bold text-[#232321]/60 uppercase">
                    {item.color}
                  </p>

                  <div className="flex items-center gap-8 pt-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold uppercase text-[#232321]/60">
                        Size:
                      </span>
                      <span className="text-sm font-black">{item.size}</span>
                    </div>

                    {/* Quantity Selector Logic */}
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-bold uppercase text-[#232321]/60">
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
                        <span className="px-3 font-black text-sm">
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

                  {/* Actions */}
                  <div className="flex gap-4 pt-6">
                    <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                      <Heart
                        onClick={() => dispatch(toggleWishlist(item.id))}
                        size={22}
                        className="text-[#232321]"
                      />
                    </button>
                    <button
                      onClick={() =>
                        dispatch(
                          removeFromCart({ id: item.id, size: item.size }),
                        )
                      }
                      className="p-2 hover:bg-red-50 rounded-xl transition-colors text-red-500"
                    >
                      <Trash2 size={22} />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {items.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-xl font-display font-black uppercase opacity-20">
                  Your bag is empty
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right: Order Summary */}
        <div className="w-full lg:w-[400px] space-y-6">
          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-[24px] space-y-6">
            <h2 className="text-2xl font-display font-black uppercase">
              Order Summary
            </h2>

            <div className="space-y-4 font-bold uppercase text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  {items.length} ITEM
                </span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Delivery</span>
                <span>${delivery.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sales Tax</span>
                <span>-</span>
              </div>
              <div className="flex justify-between pt-4 border-t border-black/10 text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <Button className="w-full bg-[#232321] hover:bg-black text-white h-14 font-display font-black uppercase rounded-xl">
              Checkout
            </Button>

            <button className="w-full text-xs font-bold uppercase underline text-center">
              Use a promo code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
