"use client";

import { ArrowUpRight } from "lucide-react";

import { Skeleton } from "@/components/ui/skeleton";
import { useCategories } from "@/hooks/useServerData";

import Image from "next/image";
import SliderComponent from "@/components/shared/SliderComponent";
import { useIsMobile } from "@/hooks/useIsMobile";

const CategoryCard = ({
  name,
  image,
  isOddItem,
}: {
  name: string;
  image: string;
  isOddItem: boolean;
}) => {
  return (
    <div className=" ">
      <div
        className={`relative  group cursor-pointer overflow-hidden ${isOddItem ? "rounded-tl-[48px] bg-[#ECEEF0]" : "rounded-none bg-[#F6F6F6]"}`}
      >
        <div className="flex justify-center items-center overflow-hidden">
          <Image
            src={
              isOddItem
                ? "/assets/images/placeholder-category1.png"
                : "/assets/images/placeholder-category.png"
            }
            alt={name}
            placeholder="blur"
            blurDataURL="/assets/images/placeholder-category.png"
            width={480}
            height={600}
            className="object-cover aspect-8/6 transition-transform duration-700 group-hover:scale-110 opacity-80"
          />
        </div>
        {/* <div className="absolute inset-0 bg-linear-to-t from-white/80 via-transparent to-transparent" /> */}
        <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
          <h3 className="text-secondary text-2xl md:text-4xl font-semibold capitalize md:uppercase leading-none">
            {name} <br /> Shoes
          </h3>
          <button className="bg-secondary p-2 rounded-md text-white hover:bg-accent transition-all">
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default function CategoriesSection() {
  const { data: categories, isLoading } = useCategories();
  const isSmallScreen = useIsMobile();

  if (isLoading) return <div className="p-20 text-white">Loading...</div>;

  return (
    <section className="bg-secondary pt-8 md:pt-12">
      <div className="flex justify-end">
        <SliderComponent
          title="Categories"
          slidesToShow={isSmallScreen ? 1 : 2}
          slidesToScroll={isSmallScreen ? 1 : 2}
          rounded={true}
          isEnableNavigation={true}
          isMultiRow={isSmallScreen ? true : false}
          titleClassName="text-white text-2xl md:text-6xl"
          navButtonClassName="bg-white/10"
        >
          {categories?.map((cat, index) => (
            <CategoryCard
              key={cat.id}
              name={cat.name}
              image={cat.image}
              isOddItem={Boolean((index + 1) % 2)}
            />
          ))}
        </SliderComponent>
      </div>
    </section>
  );
}
