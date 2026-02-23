import Link from "next/link";
import { Facebook, Instagram, Twitter, Music2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "../ui/input";

const FOOTER_LINKS = {
  categories: [
    "Runners",
    "Sneakers",
    "Basketball",
    "Outdoor",
    "Golf",
    "Hiking",
  ],
  company: ["About", "Contact", "Blogs"],
};

export default function Footer() {
  return (
    <footer className="w-full px-4 py-4 md:py-8">
      <div className="container mx-auto">
        <div className="bg-primary rounded-[48px] pt-8 md:pt-12 px-8 md:px-12 pb-20 md:pb-32 flex flex-col md:flex-row items-center gap-5">
          <div className=" flex-1">
            <h2 className="text-3xl md:text-5xl font-black text-primary-foreground leading-tight uppercase mb-4">
              Join our KicksPlus <br /> Club & get 15% off
            </h2>
            <p className="text-primary-foreground/80 font-semibold">
              Sign up for free! Join the community.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-2 max-w-md mx-auto md:mx-0">
              <Input
                id="input-demo-api-key"
                type="email"
                placeholder="Email address"
                className="placeholder:text-white"
              />
              <Button className="bg-secondary text-background font-bold uppercase tracking-wider hover:bg-foreground/90 transition-colors">
                Submit
              </Button>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <Image
              src="/assets/images/logo-full.png"
              alt="Logo"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
        </div>

        {/* Bottom Section: Site Map & Info */}
        <div className="bg-secondary rounded-[48px] pt-8 md:pt-12 px-8 md:px-12 text-background -mt-12 md:-mt-20 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
            {/* About Us */}
            <div className="space-y-3 md:space-y-6">
              <h3 className="text-accent text-xl md:text-2xl font-bold uppercase tracking-tight">
                About us
              </h3>
              <p className="text-sm md:text-lg leading-relaxed opacity-80 max-w-xs font-medium">
                We are the biggest hyperstore in the universe. We got you all
                covered with our exclusive collections and latest drops.
              </p>
            </div>

            {/* Categories */}
            <div className="space-y-3 md:space-y-6">
              <h3 className="text-accent text-xl md:text-2xl font-bold uppercase tracking-tight">
                Categories
              </h3>
              <ul className="space-y-3">
                {FOOTER_LINKS.categories.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm md:text-lg font-semibold opacity-70 hover:opacity-100 transition-opacity"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-3 md:space-y-6">
              <h3 className="text-accent text-xl md:text-2xl font-bold uppercase tracking-tight">
                Company
              </h3>
              <ul className="space-y-3">
                {FOOTER_LINKS.company.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm md:text-lg font-semibold opacity-70 hover:opacity-100 transition-opacity"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Us */}
            <div className="space-y-3 md:space-y-6">
              <h3 className="text-accent text-xl md:text-2xl font-bold uppercase tracking-tight">
                Follow us
              </h3>
              <div className="flex gap-4">
                {[Facebook, Instagram, Twitter, Music2].map((Icon, idx) => (
                  <Link
                    key={idx}
                    href="#"
                    className="hover:text-accent transition-colors"
                  >
                    <Icon size={24} strokeWidth={2.5} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Large Decorative Logo */}
          <div className=" pt-8 md:pt-12 flex flex-col items-center">
            <Image
              src="/assets/images/logo-footer.png"
              alt="Logo"
              width={1400}
              height={300}
              placeholder="blur"
              blurDataURL="/assets/images/logo-footer.png"
              className="object-cover"
            />
          </div>
        </div>
        <p className="mt-8 text-xs font-semibold text-center tracking-wide">
          © All rights reserved
        </p>
      </div>
    </footer>
  );
}
