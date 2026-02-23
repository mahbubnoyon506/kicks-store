import SliderComponent from "@/components/shared/SliderComponent";
import React from "react";
import ProductItem from "./ProductItem";
import { useGetProductsQuery } from "@/store/service/api";
import { useIsMobile } from "@/hooks/useIsMobile";
import ProductsSkeleton from "@/components/ProductsSkeleton";

const SimilarProducts = () => {
  const { data: products, isLoading } = useGetProductsQuery();
  const isSmallScreen = useIsMobile();

  return (
    <section className="pt-8 md:pt-12">
      {isLoading ? (
        <ProductsSkeleton />
      ) : products?.length ? (
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
      ) : null}
    </section>
  );
};

export default SimilarProducts;
