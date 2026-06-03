"use client";

import { MessageCircle } from "lucide-react";
import React from "react";

export default function OrderForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = e.currentTarget;
    const formData = new FormData(f);
    const msg = `Halo SESEGERitu. Saya lihat dari web SESEGERitu, ingin pesan:
    
        *Nama:* ${formData.get("name")}
        *Produk:* ${formData.get("product")}
        *Jumlah:* ${formData.get("qty")}
        *Alamat:* ${formData.get("address")}
        *Catatan:* ${formData.get("notes") || "-"}`;

    window.open(
      `https://wa.me/6289521220642?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  };

  return (
    <section id="order" className="py-24 bg-secondary/40">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Pesan Online
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
            Form pemesanan praktis.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Isi data berikut, pesanan akan langsung diteruskan ke WhatsApp kami.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mt-12 grid sm:grid-cols-2 gap-5 bg-card p-8 sm:p-10 rounded-3xl shadow-card border border-border/40"
        >
          <label className="block">
            <span className="text-sm font-medium text-foreground/80">
              Nama Lengkap <span className="text-accent">*</span>
            </span>
            <div className="mt-1.5">
              <input
                name="name"
                required
                className="input"
                placeholder="Mis. Arya Adhi Prasetyo"
              />
            </div>
          </label>
          <label className="block">
            <span className="text-sm font-medium text-foreground/80">
              Pilih Produk <span className="text-accent">*</span>
            </span>
            <div className="mt-1.5">
              <select name="product" className="input">
                <option>Hibiscus</option>
                <option>Summer Time</option>
                <option>Tropical Purple</option>
                <option>Tropical Blue</option>
                <option>Tropical Sunset</option>
                <option>Sweet Tamarind</option>
                <option>Coconut Water</option>
                <option>Seggerlatte Matcha Latte</option>
                <option>Seggerlatte Choco Latte</option>
                <option>Seggerlatte Cofee Latte</option>
                <option>Seggerlatte Blue Latte</option>
              </select>
            </div>
          </label>
          <label className="block">
            <span className="text-sm font-medium text-foreground/80">
              Jumlah (botol) <span className="text-accent">*</span>
            </span>
            <div className="mt-1.5">
              <input
                name="qty"
                type="number"
                min="1"
                defaultValue="1"
                required
                className="input"
              />
            </div>
          </label>
          <label className="block sm:col-span-2">
            <span className="text-sm font-medium text-foreground/80">
              Alamat Pengiriman <span className="text-accent">*</span>
            </span>
            <div className="mt-1.5">
              <textarea
                name="address"
                required
                className="input min-h-[90px]"
                placeholder="Alamat lengkap & patokan"
              ></textarea>
            </div>
          </label>
          <label className="block sm:col-span-2">
            <span className="text-sm font-medium text-foreground/80">
              Catatan (opsional)
            </span>
            <div className="mt-1.5">
              <textarea
                name="notes"
                className="input min-h-[70px]"
                placeholder="Mis. less sugar, jam pengiriman..."
              ></textarea>
            </div>
          </label>
          <button
            type="submit"
            className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 font-semibold hover:bg-primary-glow transition-all shadow-soft"
          >
            <MessageCircle className="w-5 h-5"></MessageCircle> Kirim Pesanan
            via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
