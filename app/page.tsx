import HeroSection from "@/app/components/HeroSection";
import Image from "next/image";
import ProductsSection from "./components/ProductsSection";
import CategoriesSection from "./components/CategorySection";
import ReviewsSection from "./components/ReviewsSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <ProductsSection />
      <CategoriesSection />
      <ReviewsSection />
    </div>
  );
}
