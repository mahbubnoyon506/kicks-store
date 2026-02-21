"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Review } from "@/lib/types";

const imageId = Math.floor(Math.random() * 10 + 1);

const DUMMY_REVIEWS: Review[] = [
  {
    id: 1,
    title: "Good Quality",
    rating: 5.0,
    testimonial:
      "I highly recommend shopping from Kicks. The quality is exceptional.",
    reviewerName: "John Doe",
    reviewerAvatar: `https://i.pravatar.cc/200?img=${imageId + 1}`,
    productImage: "https://placehold.co/600x600",
  },
  {
    id: 2,
    title: "Great Experience",
    rating: 5.0,
    testimonial: "Fast shipping and the sneakers look even better in person!",
    reviewerName: "Jane Smith",
    reviewerAvatar: `https://i.pravatar.cc/200?img=${imageId + 2}`,
    productImage: "https://placehold.co/600x600",
  },
  {
    id: 3,
    title: "Very Comfortable",
    rating: 5.0,
    testimonial: "The Air Max I bought are the most comfortable shoes I own.",
    reviewerName: "Mike Ross",
    reviewerAvatar: `https://i.pravatar.cc/200?img=${imageId + 3}`,
    productImage: "https://placehold.co/600x600",
  },
];

const ReviewCard = ({ review }: { review: Review }) => (
  <div className="px-3">
    <div className="bg-white rounded-[32px] overflow-hidden shadow-sm flex flex-col">
      {/* Review Content */}
      <div className="p-8 space-y-4">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h4 className="text-secondary text-2xl font-semibold appercase">
              {review.title}
            </h4>
            <p className="text-secondary/60 font-sans leading-tight">
              {review.testimonial}
            </p>
          </div>
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-accent shrink-0">
            <Image
              src={review.reviewerAvatar}
              alt={review.reviewerName}
              width={100}
              height={100}
              className="object-cover w-12 h-12"
            />
          </div>
        </div>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill="#FFA52F" color="#FFA52F" />
          ))}
          <span className="ml-2 font-display font-black text-secondary">
            {review.rating.toFixed(1)}
          </span>
        </div>
      </div>

      {/* Product Image */}
      <div className="relative aspect-3/2 w-full">
        <Image
          src="/assets/images/placeholder-category.png"
          alt="Reviewed Product"
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </div>
  </div>
);

export default function ReviewsSection() {
  return (
    <section className="bg-[#E7E7E3] py-20 px-4">
      <div className="container mx-auto ">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-secondary text-2xl md:text-6xl font-semibold uppercase">
            Reviews
          </h2>
          <Button
            size="sm"
            className="bg-primary hover:bg-[#3b54b5] text-white font-medium uppercase px-6 py-5 rounded-lg text-sm shadow-lg transition-all active:scale-95"
          >
            See All
          </Button>
        </div>

        {/* Reusing the custom slick logic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {DUMMY_REVIEWS.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
