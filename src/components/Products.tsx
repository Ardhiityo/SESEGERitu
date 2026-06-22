"use client";

import Image from "next/image";

import { HeartPulse, MessageCircle } from "lucide-react";

export default function Product() {
  const products = [
    {
      image: "/assets/hibiscus.webp",
      title: "Hibiscus",
      description: "Teh Bunga Rosela & Healthy Creamer Gula Singkong.",
      benefit: "Meningkatkan Fungsi Jantung",
      price: "15.000",
    },
    {
      image: "/assets/summer-time.webp",
      title: "Summer Time",
      description:
        "Ekstrak Lemon Serai Selasih & Healthy Creamer Gula Singkong.",
      benefit: "Membantu Relaksasi",
      price: "15.000",
    },
    {
      image: "/assets/tropical-purple.webp",
      title: "Tropical Purple",
      description: "Telang Lemon Serai & Healthy Creamer Gula Singkong",
      benefit: "Meningkatkan Kekebalan Tubuh",
      price: "15.000",
    },
    {
      image: "/assets/tropical-blue.webp",
      title: "Tropical Blue",
      description: "Ekstrak Telang Jahe Serai & Healthy Creamer Gula Singkong.",
      benefit: "Antioksidan",
      price: "15.000",
    },
    {
      image: "/assets/tropical-sunset.webp",
      title: "Tropical Sunset",
      description:
        "Ekstrak Lemon Wortel Chia Seed & Healthy Creamer Gula Singkong.",
      benefit: "Menambah Serat & Omega-3",
      price: "15.000",
    },
    {
      image: "/assets/sweet-tamarind.webp",
      title: "Sweet Tamarind",
      description: "Ekstrak Asam Jawa & Gula Aren Murni.",
      benefit: "Memperlancar Pencernaan",
      price: "15.000",
    },
    {
      image: "/assets/coconut.webp",
      title: "Coconut Water",
      description: "Air kelapa murni 100% Tanpa Pemanis Tambahan.",
      benefit: "Mengembalikan Ion yang hilang",
      price: "15.000",
    },
    {
      image: "/assets/matchalatte.webp",
      title: "Seggerlatte Matchalatte",
      description: "Perpaduan Daun Teh Hijau & Healthy Gula Singkong.",
      benefit: "Meningkatkan Moodbooster",
      price: "15.000",
    },
    {
      image: "/assets/chocolatte.webp",
      title: "Seggerlatte Choco Latte",
      description: "Perpaduan Dark Chocolate & Healthy Creamer Gula Singkong.",
      benefit: "Meningkatkan Moodbooster",
      price: "15.000",
    },
    {
      image: "/assets/coffee-latte.webp",
      title: "Seggerlatte Coffee Latte",
      description: "Perpaduan Kopi & Healthy Creamer Gula Singkong.",
      benefit: "Meningkatkan Moodbooster",
      price: "15.000",
    },
    {
      image: "/assets/blue-latte.webp",
      title: "Seggerlatte Blue Latte",
      description: "Perpaduan Bunga Telang & Healthy Creamer Gula Singkong",
      benefit: "Meningkatkan Moodbooster",
      price: "15.000",
    },
  ];

  return (
    <section id="products" className="py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Produk Kami
            </p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
              Pilih produk favoritmu.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Diracik dari rempah segar pilihan dan pemanis alami yang rendah
            kalori
          </p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <article
              className="group rounded-3xl bg-card border border-border/40 overflow-hidden hover:shadow-soft hover:-translate-y-2 transition-all duration-300"
              key={index}
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <Image
                  src={product.image}
                  alt="Kunyit Asam Madu"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  width={400}
                  height={400}
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold">
                  {product.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                  {product.description}
                </p>
                <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  <HeartPulse className="w-3 h-3"></HeartPulse>
                  {product.benefit}
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-display text-2xl font-bold">
                    Rp {product.price}
                  </span>
                  <a
                    href={`https://wa.me/6289521220642?text=${encodeURI(`Hallo SESEGERitu, saya dari web SESEGERitu ingin pesan ${product.title}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold hover:bg-primary-glow transition-colors"
                  >
                    <MessageCircle className="w-4 h-4"></MessageCircle> Pesan
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
