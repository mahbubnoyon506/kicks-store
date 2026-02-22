import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="container mx-auto max-w-7xl px-4">
      {/* Brand Slogan*/}
      <div className="mb-8 overflow-hidden">
        <h2 className="text-[11vw] md:text-[14vw] font-black leading-[0.8] tracking-wide uppercase text-center md:py-8">
          <span className="text-secondary">Do It</span>
          <span className="text-primary"> Right</span>
        </h2>
      </div>

      {/* Main Promotional Banner */}
      <div className="relative w-full aspect-4/5 md:aspect-21/9 rounded-[32px] md:rounded-[48px] overflow-hidden group">
        <Image
          src="/assets/images/banner.png"
          alt="movie-cover"
          fill
          placeholder="blur"
          blurDataURL="/assets/images/logo-footer.png"
          className="object-cover object-center"
          priority
        />

        {/* Content Overlay */}
        <div className="absolute inset-0  p-6 md:p-12 flex flex-col justify-end">
          {/* Vertical Badge */}
          <div className="absolute left-0 top-12 bg-[#232321] text-white px-4 py-3 rounded-r-xl origin-left">
            <p className="text-xs font-semibold uppercase tracking-widest [writing-mode:vertical-lr] rotate-180">
              Nike product of the year
            </p>
          </div>

          <div className="max-w-lg space-y-4 relative z-10">
            <h1 className="text-white text-2xl md:text-7xl uppercase font-semibold leading-none tracking-wide">
              NIKE AIR MAX
            </h1>
            <p className="text-white/90 font-sans font-semibold text-sm md:text-xl max-w-56 md:max-w-md leading-tight">
              Nike introducing the new air max for everyone&apos;s comfort
            </p>
            <Button
              size="sm"
              className="bg-primary hover:bg-[#3b54b5] text-white font-medium uppercase px-6 py-5 rounded-lg text-sm shadow-lg transition-all active:scale-95"
            >
              Shop Now
            </Button>
          </div>
        </div>

        <div className="absolute right-8 bottom-8 flex flex-col gap-4">
          {[
            "/assets/images/sub-banner.png",
            "/assets/images/sub-banner-2.png",
          ].map((i) => (
            <div
              key={i}
              className="w-24 md:w-32 h-24 md:h-32 rounded-[24px] backdrop-blur-md cursor-pointer transition-colors"
            >
              <Image
                src={i}
                alt="movie-cover"
                width={200}
                height={200}
                placeholder="blur"
                blurDataURL="/assets/images/logo-footer.png"
                className="object-contain"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
