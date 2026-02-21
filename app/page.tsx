import HeroSection from "@/app/components/HeroSection";
import Image from "next/image";
import ProductsSection from "./components/ProductsSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <ProductsSection />
    </div>
  );
}
