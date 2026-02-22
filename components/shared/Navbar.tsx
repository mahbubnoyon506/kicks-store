"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  User,
  ChevronDown,
  Moon,
  Sun,
  Menu,
  ShoppingCart,
  X,
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const NAV_LINKS = [
  { name: "New Drops 🔥", href: "/new-drops" },
  { name: "Men", href: "/men", hasDropdown: true },
  { name: "Women", href: "/women", hasDropdown: true },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const { items } = useSelector((state: RootState) => state.cart);

  return (
    <header className="py-4 md:py-6">
      <div className=" sticky top-0 z-20 max-w-7xl mx-auto bg-white rounded-2xl md:rounded-[24px] px-4 md:px-8 py-3 md:py-4 flex items-center justify-between">
        {/* Mobile Menu Trigger (Tablet & Mobile) */}
        <div className="flex md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-secondary-foreground"
              >
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-white w-75">
              <SheetHeader className="mb-5">
                <SheetTitle className="text-left font-black text-2xl tracking-tighter uppercase">
                  KICKS
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 px-5">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-bold text-secondary-foreground hover:text-primary transition-colors flex justify-between items-center"
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown size={18} />}
                  </Link>
                ))}
                <hr className="border-muted" />
                <Link
                  href="/profile"
                  className="flex items-center gap-3 font-bold"
                >
                  <User size={20} /> Account
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center gap-1 text-[14px] font-bold text-secondary-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              {link.name}
              {link.hasDropdown && <ChevronDown size={14} strokeWidth={3} />}
            </Link>
          ))}
        </div>

        <Link href="/" className="md:absolute md:left-1/2 md:-translate-x-1/2">
          <h1 className="text-[24px] md:text-[32px] font-black tracking-tighter text-secondary-foreground uppercase">
            KICKS
          </h1>
        </Link>

        {/* Actions Group */}
        <div className="flex items-center gap-2 md:gap-4 lg:gap-6">
          <button className="hidden sm:block cursor-pointer hover:opacity-70 transition-opacity">
            <Search size={20} className="text-secondary-foreground" />
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-muted transition-colors cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5 text-secondary-foreground" />
            ) : (
              <Sun className="w-5 h-5 text-accent" />
            )}
          </button>

          <button className="hidden md:block cursor-pointer hover:opacity-70 transition-opacity">
            <User size={20} fill="" className="text-secondary-foreground" />
          </button>
          <Link href="/cart" className="relative ml-1">
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-accent flex items-center justify-center font-bold text-[12px] text-secondary-foreground shadow-sm hover:scale-105 transition-transform">
              {items ? items.length : 0}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
