
"use client";

import {
  ShieldCheck,
  Leaf,
  ClipboardCheck,
  Globe2,
} from "lucide-react";

export default function Why() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Halal Certification",
      description:
        "Halal certification information can be provided to buyers upon confirmation of certification status.",
    },
    {
      icon: Leaf,
      title: "Indonesian Herbal Inspiration",
      description:
        "Discover four Herbal Rosa varieties inspired by Indonesian botanicals: Ginger Glow, Golden Tamarind, Ruby Blow, and Tropical Blue.",
    },
    {
      icon: ClipboardCheck,
      title: "Product Information",
      description:
        "Clear product details help buyers review ingredients, packaging, specifications, and suitability for their markets.",
    },
    {
      icon: Globe2,
      title: "Export Partnership",
      description:
        "We welcome inquiries from international buyers, importers, and distributors interested in exploring business opportunities.",
    },
  ];

  return (
    <section
      id="why"
      className="bg-[#FBF7ED] py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#A82D3B]">
            Why Choose Herbal Rosa
          </p>

          <h2 className="mt-3 font-display text-4xl font-bold text-[#173D2D] sm:text-5xl">
            Your Partner in Indonesian Herbal Products
          </h2>

          <p className="mt-5 leading-relaxed text-[#5D665D]">
            Explore our herbal product range and connect with us to discuss
            potential business and export opportunities.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                className="group rounded-2xl border border-[#E7DFCF] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#E4EBDD] text-[#28583B] transition-colors group-hover:bg-[#28583B] group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 font-display text-xl font-semibold text-[#173D2D]">
                  {reason.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-[#5D665D]">
                  {reason.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a
  href="https://wa.me/6289521220642?text=Hello%20Herbal%20Rosa%20Team%2C%20I%20am%20interested%20in%20your%20herbal%20products%20for%20potential%20business%20cooperation.%20Could%20you%20please%20share%20your%20product%20catalog%2C%20pricing%2C%20MOQ%2C%20and%20export%20information%3F"
  target="_blank"
  rel="noreferrer"
  className="inline-flex items-center justify-center rounded-full bg-[#1D632F] px-7 py-3.5 font-semibold text-white transition-colors hover:bg-[#174D26]"
>
  Discuss Export Partnership
</a>
        </div>
      </div>
    </section>
  );
}
