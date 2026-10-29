"use client";

import { ArrowRight, MessageCircle, Leaf, Truck } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="overflow-hidden bg-[#FBF7ED]"
    >
      <div className="mx-auto grid min-h-[560px] max-w-[1440px] grid-cols-1 items-center gap-10 px-6 py-12 md:px-10 lg:grid-cols-2 lg:gap-12 lg:px-14 lg:py-0">
        {/* Hero text */}
        <div className="relative z-10 py-4">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DDE5D0] bg-[#EDF2E5] px-4 py-2 text-xs font-semibold tracking-wide text-[#245C31]">
            <Leaf size={15} />
            INDONESIAN HERBAL INFUSION
          </div>

          <h1 className="mb-6 max-w-2xl font-serif text-5xl font-bold leading-[1.08] tracking-tight text-[#173D2D] md:text-6xl xl:text-7xl">
            Discover the
            <span className="block text-[#28743A]">
              Essence of
            </span>
            Indonesian Herbs.
          </h1>

          <p className="mb-8 max-w-xl text-base leading-8 text-[#5F665D] md:text-lg">
            Herbal Rosa brings together herbal beverage blends inspired by
            Indonesia&apos;s rich botanical heritage. Discover distinctive
            flavors crafted around selected herbs and spices for a unique
            drinking experience.
          </p>

          <div className="mb-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#kontak"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1D632F] px-7 py-4 font-semibold text-white transition hover:bg-[#173D2D]"
            >
              Discuss Business Opportunities
              <ArrowRight size={18} />
            </a>

            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#C8D6B9] px-7 py-4 font-semibold text-[#245C31] transition hover:bg-[#EDF2E5]"
            >
              Explore Our Products
            </a>
          </div>

          <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-[#5F665D]">
            <div className="flex items-center gap-2">
              <Leaf size={17} className="text-[#28743A]" />
              Indonesian Herbal Inspiration
            </div>

            <div className="flex items-center gap-2">
              <Truck size={18} className="text-[#28743A]" />
              Business Inquiries Welcome
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative">
          <div className="absolute -inset-5 rounded-[40px] bg-[#DCE8CF] blur-2xl opacity-70" />

          <div className="relative h-[390px] overflow-hidden rounded-[30px] md:h-[500px] lg:h-[560px]">
            <img
              src="/assets/hero-herbal-rosa.webp"
              alt="Herbal Rosa Indonesian herbal infusion products"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}