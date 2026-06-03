export default function Promo() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="rounded-3xl p-10 sm:p-14 text-primary-foreground relative overflow-hidden bg-gradient-hero">
          <div className="relative max-w-2xl">
            <span className="inline-block rounded-full bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-wider">
              Promo Spesial
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold">
              Penawaran ekslusif untuk kamu yang ingin pesan dalam jumlah yang
              besar.
            </h2>
            <p className="mt-3 text-primary-foreground/90">
              Tunggu apalagi, ayo cek promonya sekarang!
            </p>
            <a
              href={`https://wa.me/6281234567890?text=${encodeURI("Hallo SESEGERitu, saya dari web SESEGERitu, mau cek promo bulan ini")}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-primary px-6 py-3 font-semibold hover:bg-secondary transition-colors"
            >
              Cek Promo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
