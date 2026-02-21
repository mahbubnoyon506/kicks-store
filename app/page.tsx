import HeroSection from "@/app/components/HeroSection";
import Image from "next/image";
import ProductsSection from "./components/ProductsSection";
import CategoriesSection from "./components/CategorySection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <ProductsSection />
      <CategoriesSection />
    </div>
  );
}
