"use client";

import Link from "next/link";
import { Leaf, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        isScrolled
          ? "bg-background/85 backdrop-blur-lg shadow-card"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link
          href="#"
          className="flex items-center gap-2 font-display text-xl font-bold text-primary"
        >
          <span className="grid place-items-center w-9 h-9 rounded-full bg-primary text-primary-foreground">
            <Leaf className="w-5 h-5"></Leaf>
          </span>
          <Image
            src="/assets/brand.webp"
            width={400}
            height={400}
            alt="brands"
            className="w-[200px] h-[40px]"
          />
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li>
            <Link
              href="#hero"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Beranda
            </Link>
          </li>
          <li>
            <a
              href="#about"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Tentang
            </a>
          </li>
          <li>
            <Link
              href="#products"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Produk
            </Link>
          </li>
          <li>
            <Link
              href="#order"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Pesan
            </Link>
          </li>
          <li>
            <Link
              href="#faq"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Kontak
            </Link>
          </li>
        </ul>
        <Link
          href="#order"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:bg-primary-glow transition-colors shadow-soft"
        >
          Pesan Sekarang
        </Link>
        <button
          className="md:hidden text-foreground"
          aria-label="menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu></Menu>
        </button>
      </nav>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <ul className="flex flex-col px-5 py-4 gap-3">
            <li>
              <Link
                href="#hero"
                className="block py-2 text-foreground/80"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="block py-2 text-foreground/80"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tentang
              </Link>
            </li>
            <li>
              <Link
                href="#products"
                className="block py-2 text-foreground/80"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Produk
              </Link>
            </li>
            <li>
              <Link
                href="#order"
                className="block py-2 text-foreground/80"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pesan
              </Link>
            </li>
            <li>
              <Link
                href="#faq"
                className="block py-2 text-foreground/80"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="block py-2 text-foreground/80"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Kontak
              </Link>
            </li>
            <Link
              href="#order"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pesan Sekarang
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
}
