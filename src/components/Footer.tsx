
"use client";

import Link from "next/link";
import {
  Leaf,
  MapPin,
  Phone,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="kontak"
      className="bg-[#173D2D] text-[#FBF7ED]"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        <div>
          <Link
            href="#hero"
            className="inline-flex items-center gap-2 text-xl font-bold"
          >
            <Leaf className="h-7 w-7 text-[#D6B66D]" />
            <span>Herbal Rosa</span>
          </Link>

          <p className="mt-5 max-w-xs text-sm leading-7 text-[#FBF7ED]/75">
            Discover Indonesian-inspired herbal products
            and connect with us to explore opportunities
            for a greener, more connected world.
          </p>

          <p className="mt-5 text-xs font-medium uppercase tracking-[0.16em] text-[#D6B66D]">
            Inspired by Nature. Rooted in Indonesia.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white">
            Quick Links
          </h4>

          <ul className="mt-5 space-y-3 text-sm text-[#FBF7ED]/75">
            <li>
              <Link href="#hero" className="transition hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="transition hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#products" className="transition hover:text-white">
                Our Products
              </Link>
            </li>
            <li>
              <Link href="#why" className="transition hover:text-white">
                Why Herbal Rosa
              </Link>
            </li>
            <li>
              <Link href="#testimoni" className="transition hover:text-white">
                Customer Stories
              </Link>
            </li>
            <li>
              <Link href="#faq" className="transition hover:text-white">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">
            Our Collection
          </h4>

          <ul className="mt-5 space-y-3 text-sm text-[#FBF7ED]/75">
            <li>Ginger Glow</li>
            <li>Golden Tamarind</li>
            <li>Ruby Blow</li>
            <li>Tropical Blue</li>
          </ul>

          <Link
            href="#products"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#D6B66D] transition hover:text-white"
          >
            Explore Products
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div>
          <h4 className="font-semibold text-white">
            Contact Our Team
          </h4>

          <ul className="mt-5 space-y-4 text-sm text-[#FBF7ED]/75">
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#D6B66D]" />
              <span>
                Jalan Raya Taktakan, Komplek Makmur Jaya,
                Gg. Edelwis No. 34, Drangong, Taktakan,
                Kota Serang, Banten 42148, Indonesia
              </span>
            </li>

            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-[#D6B66D]" />
              <a
                href="https://wa.me/6289521220642"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                WhatsApp Business
              </a>
            </li>
          </ul>

          <p className="mt-5 text-sm leading-6 text-[#FBF7ED]/75">
            Interested in bulk orders or export partnerships?
            Get in touch with our team.
          </p>
        </div>
      </div>

      <div className="border-t border-white/15 px-5 py-6 text-center text-xs text-[#FBF7ED]/60">
        © {new Date().getFullYear()} Herbal Rosa.
        All rights reserved.
      </div>
    </footer>
  );
}
