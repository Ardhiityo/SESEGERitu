import { Star } from "lucide-react";

export default function Testimonial() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Testimoni
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
            Cerita dari pelanggan setia.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          <figure className="rounded-3xl bg-card p-7 border border-border/40 hover:shadow-card hover:-translate-y-1 transition-all">
            <div className="flex gap-1 text-accent">
              <Star className="w-4 h-4 fill-current"></Star>
              <Star className="w-4 h-4 fill-current"></Star>
              <Star className="w-4 h-4 fill-current"></Star>
              <Star className="w-4 h-4 fill-current"></Star>
              <Star className="w-4 h-4 fill-current"></Star>
            </div>
            <blockquote className="mt-4 text-foreground/90 leading-relaxed">
              {
                "Rasanya autentik, terasa rempahnya. Jadi rutin minum tiap pagi!"
              }
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <div className="grid place-items-center w-11 h-11 rounded-full bg-primary text-primary-foreground font-display font-bold">
                A
              </div>
              <div>
                <div className="font-semibold text-sm">Anisa Pramudita</div>
                <div className="text-xs text-muted-foreground">
                  Pelanggan SESEGERitu
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="rounded-3xl bg-card p-7 border border-border/40 hover:shadow-card hover:-translate-y-1 transition-all">
            <div className="flex gap-1 text-accent">
              <Star className="w-4 h-4 fill-current"></Star>
              <Star className="w-4 h-4 fill-current"></Star>
              <Star className="w-4 h-4 fill-current"></Star>
              <Star className="w-4 h-4 fill-current"></Star>
              <Star className="w-4 h-4 fill-current"></Star>
            </div>
            <blockquote className="mt-4 text-foreground/90 leading-relaxed">
              {"Pengiriman cepat dan kemasan rapi. Jahe lemonnya juara!"}
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <div className="grid place-items-center w-11 h-11 rounded-full bg-primary text-primary-foreground font-display font-bold">
                R
              </div>
              <div>
                <div className="font-semibold text-sm">Rizky Ananda</div>
                <div className="text-xs text-muted-foreground">
                  Pelanggan SESEGERitu
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="rounded-3xl bg-card p-7 border border-border/40 hover:shadow-card hover:-translate-y-1 transition-all">
            <div className="flex gap-1 text-accent">
              <Star className="w-4 h-4 fill-current"></Star>
              <Star className="w-4 h-4 fill-current"></Star>
              <Star className="w-4 h-4 fill-current"></Star>
              <Star className="w-4 h-4 fill-current"></Star>
              <Star className="w-4 h-4 fill-current"></Star>
            </div>
            <blockquote className="mt-4 text-foreground/90 leading-relaxed">
              {"Bantu banget waktu lagi nggak enak badan. Recommended!"}
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <div className="grid place-items-center w-11 h-11 rounded-full bg-primary text-primary-foreground font-display font-bold">
                M
              </div>
              <div>
                <div className="font-semibold text-sm">Maya Kusuma</div>
                <div className="text-xs text-muted-foreground">
                  Pelanggan SESEGERitu
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
