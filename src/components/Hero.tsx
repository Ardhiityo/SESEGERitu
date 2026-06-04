"use client";

import Image from "next/image";
import Link from "next/link";
import { Sparkles, ShieldCheck, Truck } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-28 md:pt-36 pb-20 overflow-hidden bg-gradient-soft"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-1.5 text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" /> 100% Alami · Tanpa Pengawet
          </span>
          <h1 className="mt-5 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-foreground">
            Sehat dimulai dari <span className="text-primary">seteguk</span>{" "}
            rempah nusantara.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-lg">
            <strong>SESEGERitu</strong> meracik minuman herbal segar dari bunga
            telang, bunga rosella yang dipadukan dengan berbagai rempah pilihan
            dan menggunakan gula singkong sebagai pemanis alami yang rendah
            kalori.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#order"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-semibold hover:bg-primary-glow transition-all shadow-soft hover:scale-[1.02]"
            >
              Pesan Sekarang
            </Link>
            <Link
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary/20 text-primary px-7 py-3.5 font-semibold hover:bg-primary/5 transition-colors"
            >
              Pelajari Lebih Lanjut
            </Link>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary"></ShieldCheck> BPOM
              Terdaftar
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-primary"></Truck> Pengiriman
              Seluruh Indonesia
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-[2.5rem] blur-3xl opacity-40 bg-gradient-hero"></div>
          <Image
            src="/assets/hero.webp"
            alt="Botol minuman herbal SESEGERitu dengan jahe, kunyit, dan lemon"
            className="relative rounded-4xl shadow-soft w-full object-cover h-auto aspect-square"
            width={1280}
            height={854}
          />
        </div>
      </div>
    </section>
  );
}
