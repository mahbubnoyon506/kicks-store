"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ReusableSliderProps {
  title: string;
  children: React.ReactNode;
  slidesToShow?: number;
  slidesToScroll?: number;
  rounded?: boolean;
}

const SliderComponent = ({
  title,
  children,
  slidesToShow = 2,
  slidesToScroll = 2,

  rounded = false,
}: ReusableSliderProps) => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="w-full">
      {/* Header with Title and Arrows */}
      {title ? (
        <div className="container mx-auto px-4 md:px-0 flex justify-between items-center mb-8 md:mb-12">
          <h2 className="text-white text-2xl md:text-6xl font-semibold uppercase">
            {title}
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="p-1 bg-white/10 rounded-lg text-white hover:bg-primary transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="p-1 bg-white/10 rounded-lg text-white hover:bg-primary transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      ) : null}
      <div
        className={`${rounded ? "rounded-tl-[48px]" : ""} w-full overflow-hidden`}
      >
        <Slider ref={sliderRef} {...settings}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default SliderComponent;
