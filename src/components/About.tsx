"use client";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Tentang Kami
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
            Warisan rempah, dikemas modern.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            <strong>SESEGERitu</strong> lahir di Banten dari dapur kecil
            keluarga kami yang sudah turun-temurun meracik produk herbal. Kami
            percaya kebaikan herbal Indonesia layak hadir dalam kemasan praktis
            tanpa kehilangan kemurniannya.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-card p-6 shadow-card border border-border/40">
              <h3 className="font-display text-xl font-semibold text-primary">
                Visi
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Menjadikan minuman herbal pilihan utama gaya hidup sehat
                keluarga Indonesia.
              </p>
            </div>
            <div className="rounded-2xl bg-card p-6 shadow-card border border-border/40">
              <h3 className="font-display text-xl font-semibold text-primary">
                Misi
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Meracik produk berkualitas dari petani lokal dengan proses
                higienis dan berkelanjutan.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl p-6 text-center bg-gradient-soft">
            <div className="font-display text-4xl font-bold text-primary">
              12K+
            </div>
            <div className="mt-1 text-sm text-muted-foreground">
              Pelanggan Setia
            </div>
          </div>
          <div className="rounded-2xl p-6 text-center bg-gradient-soft">
            <div className="font-display text-4xl font-bold text-primary">
              30+
            </div>
            <div className="mt-1 text-sm text-muted-foreground">
              Mitra Petani
            </div>
          </div>
          <div className="rounded-2xl p-6 text-center bg-gradient-soft">
            <div className="font-display text-4xl font-bold text-primary">
              4.9
            </div>
            <div className="mt-1 text-sm text-muted-foreground">
              Rating Pelanggan
            </div>
          </div>
          <div className="rounded-2xl p-6 text-center bg-gradient-soft">
            <div className="font-display text-4xl font-bold text-primary">
              24 Jam
            </div>
            <div className="mt-1 text-sm text-muted-foreground">
              Diolah Segar
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
