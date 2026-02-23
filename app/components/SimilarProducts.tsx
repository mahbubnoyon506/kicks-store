import SliderComponent from "@/components/shared/SliderComponent";
import React from "react";
import ProductItem from "./ProductItem";
import { useGetProductsQuery } from "@/store/service/api";
import { Skeleton } from "@/components/ui/skeleton";
import { useIsMobile } from "@/hooks/useIsMobile";

const SimilarProducts = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();
  const isSmallScreen = useIsMobile();
  if (isLoading)
    return (
      <div className=" p-20">
        <Skeleton className="h-125 w-full bg-white/5 rounded-[48px]" />
      </div>
    );
  if (isError) return null;

  return (
    <section className=" pt-8 md:pt-12">
      <div className="">
        <SliderComponent
          title="You may also like"
          slidesToShow={isSmallScreen ? 2 : 4}
          slidesToScroll={isSmallScreen ? 2 : 4}
          isEnableNavigation={true}
          isEnablePagination={true}
          isMultiRow={isSmallScreen ? true : false}
          titleClassName="text-2xl md:text-3xl text-secondary"
        >
          {products?.map((product) => (
            <div key={product.id} className="px-2 py-3 md:py-0">
              <ProductItem product={product} />
            </div>
          ))}
        </SliderComponent>
      </div>
    </section>
  );
};

export default SimilarProducts;
