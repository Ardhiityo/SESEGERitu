"use client";

import { Mail, MapPin, Clock, Phone, Link } from "lucide-react";

export default function Contact() {
  /**
   *
   */
  return (
    <section id="contact" className="py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Lokasi
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
            Kunjungi kami.
          </h2>
          <div className="mt-8 space-y-5">
            <div className="flex items-start gap-4">
              <div className="grid place-items-center w-11 h-11 rounded-xl bg-primary/10 text-primary shrink-0">
                <MapPin className="w-5 h-5"></MapPin>
              </div>
              <div>
                <div className="font-semibold">Alamat</div>
                <div className="text-sm text-muted-foreground">
                  Jalan Raya Taktakan Komplek Makmur Jaya Gg. Edelwis No. 34
                  Rt/Rw 002, 009, Drangong, Kec. Taktakan, Kota Serang, Banten
                  42148
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="grid place-items-center w-11 h-11 rounded-xl bg-primary/10 text-primary shrink-0">
                <Clock className="w-5 h-5"></Clock>
              </div>
              <div>
                <div className="font-semibold">Jam Operasional</div>
                <div className="text-sm text-muted-foreground">
                  Senin – Jumat · 09.00 – 17.00 WIB <br />
                  Sabtu · 09.00 – 15.00 WIB
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="grid place-items-center w-11 h-11 rounded-xl bg-primary/10 text-primary shrink-0">
                <Phone className="w-5 h-5"></Phone>
              </div>
              <div>
                <div className="font-semibold">Telepon / WA</div>
                <div className="text-sm text-muted-foreground">
                  <a
                    href="https://wa.me/6289521220642"
                    target="_blank"
                    aria-label="Telepon ke nomor 0895 2122 0642"
                  >
                    +62 895-212-206-42
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="grid place-items-center w-11 h-11 rounded-xl bg-primary/10 text-primary shrink-0">
                <Link className="w-5 h-5"></Link>
              </div>
              <div>
                <div className="font-semibold">Linktree</div>
                <div className="text-sm text-muted-foreground">
                  <a
                    href="https://linktr.ee/sesegeritu"
                    className="underline"
                    target="_blank"
                  >
                    https://linktr.ee/sesegeritu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-card border border-border/40 min-h-[360px]">
          <iframe
            title="Lokasi SESEGERitu"
            src="https://maps.google.com/maps?q=Sesegeritu+Produsen+Minuman+Sehat+Serang=UTF8&iwloc=&output=embed"
            className="w-full h-full min-h-[360px] border-0"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
