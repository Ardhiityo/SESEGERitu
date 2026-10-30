
export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#173d2b] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#315b40]/30 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#78916a]/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl text-center">
        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="h-px w-9 bg-[#d7bd83]" />

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e5cc98]">
            About HERBAROSA
          </p>

          <span className="h-px w-9 bg-[#d7bd83]" />
        </div>

        <h2 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
          Indonesian Herbal Heritage,
          <span className="mt-2 block text-[#d9e2c8]">
            Inspired by Nature.
          </span>
        </h2>

        <div className="mx-auto mt-8 max-w-3xl space-y-5 text-base leading-8 text-white/80 sm:mt-10 sm:text-lg">
          <p>
            <strong className="font-semibold text-white">
              HERBAROSA
            </strong>{" "}
            is an Indonesian herbal infusion brand inspired by the
            country&apos;s rich botanical heritage and traditional
            ingredients. We bring distinctive Indonesian herbal flavors
            into convenient products designed for modern lifestyles.
          </p>

          <p>
            Rooted in Indonesia, HERBAROSA is committed to introducing
            local botanical ingredients to a wider global audience.
            We welcome opportunities to connect with international
            importers, distributors, and business partners to build
            lasting collaborations.
          </p>
        </div>

        <div className="mt-9 flex justify-center sm:mt-10">
          <a
            href="#products"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#e1c991] px-8 py-4 text-sm font-bold text-[#173d2b] transition duration-300 hover:bg-white"
          >
            Explore Our Products
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
