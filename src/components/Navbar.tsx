
"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Why HERBAROSA", href: "#why" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#kontak" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e5eadf] bg-white/95 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {/* LOGO HR DAN NAMA BRAND */}
        <a
          href="#hero"
          className="flex shrink-0 items-center gap-3"
          aria-label="HERBAROSA home"
          onClick={() => setMenuOpen(false)}
        >
          <Image
  src="/assets/herbal-rosa-emblem.png"
  alt="HERBAROSA HR emblem"
  width={52}
  height={52}
  priority
  className="h-10 w-10 object-contain sm:h-12 sm:w-12"
/>

          <span className="font-serif text-2xl font-bold tracking-tight text-[#173d2b] sm:text-3xl">
            HERBAROSA
          </span>
        </a>

        {/* MENU DESKTOP */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm font-medium text-gray-700 transition-colors hover:text-[#39734b]"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#products"
            className="whitespace-nowrap rounded-full bg-[#245638] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#173d2b]"
          >
            Explore Products
          </a>
        </div>

        {/* TOMBOL MENU HP */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[#173d2b] transition hover:bg-[#f0f5ed] lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div className="border-t border-[#e5eadf] bg-white px-4 pb-5 pt-3 shadow-md lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-[#f0f5ed] hover:text-[#245638]"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#products"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-[#245638] px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#173d2b]"
            >
              Explore Products
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
