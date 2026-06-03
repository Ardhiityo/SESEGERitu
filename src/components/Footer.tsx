"use client";

import Link from "next/link";
import { Leaf } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 font-display text-xl font-bold">
            <span className="grid place-items-center w-9 h-9 rounded-full bg-white/15">
              <Leaf className="w-5 h-5"></Leaf>
            </span>
            <Image
              src="/assets/brand.webp"
              width={400}
              height={400}
              alt="brands"
              className="w-[200px] h-[40px]"
            />
          </div>
          <p className="mt-4 text-sm text-primary-foreground/80 max-w-xs">
            Produk minuman dari racikan asli dan diberi nama sesuai dengan kesan
            per-tama yang sering ter-lontar dari konsumen saat meminumnya,
            {"sesegar itu."}
            Frasa tersebut menggambarkan betapa segarnya rasa yang didapatkan
            saat meneguk minuman ini.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Tautan Cepat</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li>
              <Link href="#hero" className="hover:text-white">
                Beranda
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-white">
                Tentang
              </Link>
            </li>
            <li>
              <Link href="#products" className="hover:text-white">
                Produk
              </Link>
            </li>
            <li>
              <Link href="#order" className="hover:text-white">
                Pesan
              </Link>
            </li>
            <li>
              <Link href="#faq" className="hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-white">
                Kontak
              </Link>
            </li>
            <li>
              <a
                href="https://linktr.ee/sesegeritu"
                className="hover:text-white"
              >
                Linktree
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Produk</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li>Hibiscus</li>
            <li>Summer Time</li>
            <li>Tropical Purple</li>
            <li>Tropical Blue</li>
            <li>Tropical Sunset</li>
            <li>Sweet Tamarind</li>
            <li>Coconut Water</li>
            <li>Seggerlatte</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Kontak</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li>
              Jalan Raya Taktakan Komplek Makmur Jaya Gg. Edelwis No. 34 Rt/Rw
              002, 009, Drangong, Kec. Taktakan, Kota Serang, Banten 42148
            </li>
            <li>
              <a
                href="https://wa.me/6289521220642"
                target="_blank"
                aria-label="Telepon ke nomor 0895 2122 0642"
              >
                +62 895-212-206-42
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-primary-foreground/70">
        © {new Date().getFullYear()} SESEGERitu. Semua hak cipta dilindungi.
      </div>
    </footer>
  );
}
