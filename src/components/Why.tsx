"use client";

import { ShieldCheck, Truck, Leaf, HeartPulse } from "lucide-react";

export default function Why() {
  return (
    <section className="py-20 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Mengapa Herbalita
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
            Lebih dari sekadar minuman.
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* repeated cards  */}
          <div className="group rounded-2xl bg-card p-7 border border-border/40 hover:shadow-soft hover:-translate-y-1 transition-all">
            <div className="grid place-items-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Leaf className="w-6 h-6"></Leaf>
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold">
              100% Alami
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Tanpa pengawet, pewarna, atau pemanis buatan.
            </p>
          </div>
          <div className="group rounded-2xl bg-card p-7 border border-border/40 hover:shadow-soft hover:-translate-y-1 transition-all">
            <div className="grid place-items-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <HeartPulse className="w-6 h-6"></HeartPulse>
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold">
              Manfaat Terbukti
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Diracik berdasarkan resep tradisional & riset modern.
            </p>
          </div>
          <div className="group rounded-2xl bg-card p-7 border border-border/40 hover:shadow-soft hover:-translate-y-1 transition-all">
            <div className="grid place-items-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <ShieldCheck className="w-6 h-6"></ShieldCheck>
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold">
              Higienis
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Diolah di dapur tersertifikasi dengan kontrol mutu ketat.
            </p>
          </div>
          <div className="group rounded-2xl bg-card p-7 border border-border/40 hover:shadow-soft hover:-translate-y-1 transition-all">
            <div className="grid place-items-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Truck className="w-6 h-6"></Truck>
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold">
              Antar Cepat
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Pengiriman ke seluruh Indonesia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
