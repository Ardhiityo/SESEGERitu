
"use client";

import { MessageCircle } from "lucide-react";

const products = [
  {
    name: "Ginger Glow",
    image: "/assets/ginger glow.webp",
    description:
      "A warming herbal infusion featuring ginger and selected spices, inspired by Indonesia's rich botanical traditions.",
    color: "bg-[#E8EBDD]",
  },
  {
    name: "Golden Tamarind",
    image: "/assets/golden tamarind.webp",
    description:
      "A distinctive herbal infusion combining tamarind and selected spices for a memorable Indonesian-inspired flavor.",
    color: "bg-[#F5E7C5]",
  },
  {
    name: "Ruby Blow",
    image: "/assets/ruby blow.webp",
    description:
      "A botanical-inspired infusion featuring hibiscus, red ginger, and lemongrass with a vibrant ruby-red character.",
    color: "bg-[#F1DEDC]",
  },
  {
    name: "Tropical Blue",
    image: "/assets/tropical blue.webp",
    description:
      "A unique herbal infusion inspired by tropical botanicals, featuring butterfly pea, ginger, and lemongrass.",
    color: "bg-[#DDE8F4]",
  },
];

export default function Products() {
  const whatsappNumber = "6289521220642";

  return (
    <section
      id="products"
      className="bg-[#FBF7ED] px-5 py-20 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#A82D3B]">
              Discover HERBAROSA
            </p>

            <h2 className="text-4xl font-bold leading-tight text-[#173D2D] md:text-5xl">
              Explore Our Four Signature Blends
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-[#5F665D]">
            Discover distinctive herbal infusions inspired by
            Indonesia&apos;s botanical traditions and crafted
            for a memorable beverage experience.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.name}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E9E3D6] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className={`flex h-64 items-center justify-center overflow-hidden ${product.color}`}
              >
                <img
                  src={product.image}
                  alt={`${product.name} HERBAROSA herbal infusion packaging`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-3 text-xl font-bold text-[#173D2D]">
                  {product.name}
                </h3>

                <p className="mb-6 flex-1 text-sm leading-6 text-[#62675F]">
                  {product.description}
                </p>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    `Hello HERBAROSA Team, I would like to learn more about ${product.name}, including product specifications, pricing, and bulk order options.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-[#1D632F] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#173D2D]"
                >
                  <MessageCircle size={17} />
                  Inquire About Product
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-[#173D2D] px-6 py-8 text-center md:px-10">
          <h3 className="mb-3 text-2xl font-bold text-[#FBF7ED]">
            Interested in HERBAROSA Products?
          </h3>

          <p className="mx-auto mb-6 max-w-2xl leading-7 text-[#E5E9DE]">
            Contact our team to request product information,
            discuss bulk orders, or explore potential
            international distribution and export partnerships.
          </p>

          <a
            href="#kontak"
            className="inline-flex items-center justify-center rounded-full bg-[#FBF7ED] px-6 py-3 font-semibold text-[#173D2D] transition hover:bg-white"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
