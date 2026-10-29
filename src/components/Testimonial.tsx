
import { Star, Quote, MapPin } from "lucide-react";

const testimonials = [
  {
    name: "Amelia Putri",
    country: "Indonesia",
    role: "Herbal Beverage Enthusiast",
    rating: 5,
    product: "Ginger Glow",
    review:
      "I love discovering herbal-inspired beverages from Indonesia. Ginger Glow caught my attention with its Indonesian inspiration and distinctive product concept.",
    initial: "A",
  },
  {
    name: "Daniel Pratama",
    country: "Indonesia",
    role: "Specialty Beverage Buyer",
    rating: 5,
    product: "Golden Tamarind",
    review:
      "The product collection offers an interesting introduction to Indonesian-inspired herbal beverages. I would love to learn more about the ingredients, packaging, and product specifications.",
    initial: "D",
  },
  {
    name: "Sofia Maharani",
    country: "Indonesia",
    role: "Natural Products Enthusiast",
    rating: 5,
    product: "Ruby Blow",
    review:
      "I find the idea of exploring Indonesian botanical inspiration appealing. The variety of products makes Herbal Rosa an interesting brand to discover.",
    initial: "S",
  },
];

export default function Testimonial() {
  return (
    <section
      id="testimoni"
      className="bg-[#FBF7ED] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A82D3B]">
            Customer Testimonials
          </p>

          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[#173D2D] sm:text-5xl">
            Stories Inspired by Nature.
          </h2>

          <p className="mt-5 text-base leading-relaxed text-[#526456]">
            Discover the Herbal Rosa collection and explore
            Indonesian-inspired herbal products.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="rounded-3xl border border-[#E8E0CF] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
            >
              <div className="flex items-center justify-between">
                <div
                  className="flex gap-1 text-[#B58B38]"
                  aria-label={`${item.rating} out of 5 stars`}
                >
                  {Array.from({ length: item.rating }).map(
                    (_, index) => (
                      <Star
                        key={index}
                        className="h-4 w-4 fill-current"
                      />
                    )
                  )}
                </div>

                <Quote className="h-6 w-6 text-[#D9E4D4]" />
              </div>

              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-[#A82D3B]">
                {item.product}
              </p>

              <blockquote className="mt-3 text-sm leading-7 text-[#526456]">
                “{item.review}”
              </blockquote>

              <figcaption className="mt-7 flex items-center gap-3 border-t border-[#E8E0CF] pt-5">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#173D2D] font-semibold text-white">
                  {item.initial}
                </div>

                <div className="min-w-0">
                  <p className="font-semibold text-[#173D2D]">
                    {item.name}
                  </p>

                  <p className="mt-1 text-xs text-[#7A817A]">
                    {item.role}
                  </p>

                  <p className="mt-1 flex items-center gap-1 text-xs text-[#7A817A]">
                    <MapPin className="h-3 w-3" />
                    {item.country}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

       
      </div>
    </section>
  );
}
