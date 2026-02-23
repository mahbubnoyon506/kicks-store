"use client";

import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import Slider, { Settings } from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SliderProps {
  title?: string;
  children: React.ReactNode;
  slidesToShow?: number;
  slidesToScroll?: number;
  rounded?: boolean;
  isEnablePagination?: boolean;
  isEnableNavigation?: boolean;
  isMultiRow?: boolean;
  titleClassName?: string;
  navButtonClassName?: string;
}

const SliderComponent = forwardRef((props: SliderProps, ref) => {
  const {
    title,
    children,
    slidesToShow = 2,
    slidesToScroll = 1,
    rounded = false,
    isEnablePagination = false,
    isEnableNavigation = false,
    isMultiRow = false,
    titleClassName = "",
    navButtonClassName = "",
  } = props;

  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useImperativeHandle(ref, () => ({
    slickNext: () => sliderRef.current?.slickNext(),
    slickPrev: () => sliderRef.current?.slickPrev(),
  }));

  const settings: Settings = {
    dots: false,
    infinite: true,
    autoplaySpeed: 3000,
    speed: 2000,
    autoplay: true,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    arrows: false,
    rows: isMultiRow ? 2 : 1,
    beforeChange: (_, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: slidesToShow ? slidesToShow : 1,
          slidesToScroll: slidesToScroll ? slidesToScroll : 1,
        },
      },
    ],
  };

  const totalItems = React.Children.count(children);
  const pageCount = Math.ceil(totalItems / slidesToScroll);
  return (
    <div className="w-full">
      {/* Internal Navigation Header */}
      {(title || isEnableNavigation) && (
        <div className="container mx-auto px-4 md:px-0 flex justify-between items-center mb-8 md:mb-12">
          {title && (
            <h2 className={`${titleClassName} font-semibold uppercase`}>
              {title}
            </h2>
          )}

          {isEnableNavigation && (
            <div className="flex gap-2">
              <button
                onClick={() => sliderRef.current?.slickPrev()}
                className={`${navButtonClassName} p-2 rounded-md bg-secondary text-white hover:bg-primary transition-colors cursor-pointer`}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => sliderRef.current?.slickNext()}
                className={`${navButtonClassName} p-2 rounded-md bg-secondary text-white hover:bg-primary transition-colors cursor-pointer`}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Slider Core */}
      <div
        className={`${rounded ? "rounded-tl-[48px]" : ""} w-full overflow-hidden`}
      >
        <Slider ref={sliderRef} {...settings}>
          {children}
        </Slider>
      </div>

      {/* Internal Pagination Dots */}
      {isEnablePagination && (
        <div className="flex justify-center gap-3 mt-5 mb-3">
          {Array.from({ length: pageCount }).map((_, idx) => {
            const goToIndex = idx * slidesToScroll;
            return (
              <button
                key={idx}
                onClick={() => sliderRef.current?.slickGoTo(goToIndex)}
                className={`cursor-pointer h-2 w-10 transition-all duration-300 rounded-full ${
                  currentSlide === goToIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-[#B6B6B3]"
                }`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
});

SliderComponent.displayName = "SliderComponent";
export default SliderComponent;
