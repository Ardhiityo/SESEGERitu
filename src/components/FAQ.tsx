"use client";

import { ChevronDown } from "lucide-react";

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-secondary/40">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            FAQ
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
            Pertanyaan umum.
          </h2>
        </div>
        <div className="mt-12 space-y-3">
          <div className="faq rounded-2xl bg-card border border-border/40 overflow-hidden">
            <input type="checkbox" id="faq1" defaultChecked />
            <label
              htmlFor="faq1"
              className="w-full flex items-center justify-between gap-4 p-5 text-left font-semibold cursor-pointer"
            >
              <span>Apakah produk menggunakan bahan pengawet?</span>
              <ChevronDown className="chev w-5 h-5 text-primary transition-transform"></ChevronDown>
            </label>
            <div className="answer text-sm text-muted-foreground">
              Tidak. Semua produk dibuat dari bahan alami seperti bunga telang,
              bunga rosella yang dipadukan dengan berbagai rempah pilihan dan
              menggunakan gula singkong sebagai pemanis alami yang rendah
              kalori. <br /> <br />
              Hadir dari racikan asli dan diberi nama sesuai dengan kesan
              per-tama yang sering ter-lontar dari konsumen saat meminumnya,
              {"sesegar itu"}. Frasa tersebut menggambarkan betapa segarnya rasa
              yang didapatkan saat meneguk minuman ini.
            </div>
          </div>
          <div className="faq rounded-2xl bg-card border border-border/40 overflow-hidden">
            <input type="checkbox" id="faq2" />
            <label
              htmlFor="faq2"
              className="w-full flex items-center justify-between gap-4 p-5 text-left font-semibold cursor-pointer"
            >
              <span>Apakah menggunakan pemanis buatan?</span>
              <ChevronDown className="chev w-5 h-5 text-primary transition-transform"></ChevronDown>
            </label>
            <div className="answer text-sm text-muted-foreground">
              Gula singkong sebagai pemanis alami yang kami gunakan memiliki
              indeks glikemik lebih rendah dari pada gula tebu, sehingga aman
              untuk penderita diabetes ringan.
              <br /> <br />
              Sesuai dengan namanya, gula ini terbuat dari pati singkong yang
              memiliki tingkat kemanisan 2.5x lebih manis dibandingkan gula tebu
              dengan takaran yang lebih rendah. <br /> <br />
              Keunggulan lainnya dibandingkan gula tebu adalah gula singkong
              tidak mengandung pengawet, bebas gluten, rendah glukosa, dan
              rendah kalori. Sehingga pemanis alami gula singkong sangat aman
              untuk dikonsum-si oleh semua kalangan.
            </div>
          </div>
          <div className="faq rounded-2xl bg-card border border-border/40 overflow-hidden">
            <input type="checkbox" id="faq3" />
            <label
              htmlFor="faq3"
              className="w-full flex items-center justify-between gap-4 p-5 text-left font-semibold cursor-pointer"
            >
              <span>Apakah tersedia pengiriman ke luar kota?</span>
              <ChevronDown className="chev w-5 h-5 text-primary transition-transform"></ChevronDown>
            </label>
            <div className="answer text-sm text-muted-foreground">
              Ya. Tersedia pengiriman ke luar kota dengan platform E-Commerce
              seperti Shopee & Tokopedia
            </div>
          </div>
          <div className="faq rounded-2xl bg-card border border-border/40 overflow-hidden">
            <input type="checkbox" id="faq4" />
            <label
              htmlFor="faq4"
              className="w-full flex items-center justify-between gap-4 p-5 text-left font-semibold cursor-pointer"
            >
              <span>Bagaimana cara memesan dalam jumlah besar?</span>
              <ChevronDown className="chev w-5 h-5 text-primary transition-transform"></ChevronDown>
            </label>
            <div className="answer text-sm text-muted-foreground">
              Bisa hubungi kami via{" "}
              <a
                href="https://wa.me/6289521220642"
                target="_blank"
                className="underline font-semibold"
              >
                WhatsApp
              </a>{" "}
              untuk kerjasama bisnis dan keagenan.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
