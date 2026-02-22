"use client";
import SliderComponent from "@/components/shared/SliderComponent";
import { Skeleton } from "@/components/ui/skeleton";
import { useCategories } from "@/hooks/useServerData";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

// --- Single Category Item Component ---
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
        className={`relative  group cursor-pointer ${isOddItem ? "rounded-tl-[48px] bg-gray-200" : "rounded-none bg-white"}`}
      >
        <div className="flex justify-center items-center">
          <Image
            // src={
            //   image
            //     ? image.replace(/[\[\]"]/g, "")
            //     : "/assets/images/placeholder-category.jpg"
            // }
            src="/assets/images/placeholder-category.png"
            alt={name}
            placeholder="blur"
            blurDataURL="/assets/images/placeholder-category.png"
            width={480}
            height={600}
            className="object-contain aspect-8/6 transition-transform duration-700 group-hover:scale-110 opacity-80"
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
  const { data: categories, isLoading, isError } = useCategories();

  if (isLoading)
    return (
      <div className="bg-secondary p-20">
        <Skeleton className="h-125 w-full bg-white/5 rounded-[48px]" />
      </div>
    );
  if (isError) return null;

  return (
    <section className="bg-secondary pt-8 md:pt-12">
      <div className="md:pl-4 flex justify-end">
        <SliderComponent
          title="Categories"
          slidesToShow={2}
          slidesToScroll={2}
          rounded={true}
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
