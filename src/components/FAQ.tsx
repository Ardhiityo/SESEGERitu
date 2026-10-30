
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const questions = [
  {
    question: "What is HERBAROSA?",
    answer:
      "HERBAROSA is an Indonesian herbal infusion brand inspired by the country's rich botanical heritage. Our collection features distinctive varieties inspired by Indonesian herbal traditions.",
  },
  {
    question: "What products does HERBAROSA offer?",
    answer:
      "Our collection includes four signature varieties: Ginger Glow, Golden Tamarind, Ruby Blow, and Tropical Blue. Contact our team for product ingredients, packaging details, and specifications.",
  },
  {
    question: "Can I request a product catalog?",
    answer:
      "Yes. Prospective buyers and business partners can contact our team to request product information, catalog details, ingredients, packaging options, and available specifications.",
  },
  {
    question: "Do you accept bulk and wholesale inquiries?",
    answer:
      "We welcome inquiries about bulk purchases and wholesale opportunities. Please contact our team to discuss your required quantities, product selection, and potential business arrangements.",
  },
  {
    question: "Can international buyers become HERBAROSA distributors?",
    answer:
      "We welcome inquiries from international importers, distributors, wholesalers, and potential business partners. Contact us to discuss your target market and explore possible distribution and export opportunities.",
  },
  {
    question: "How can I contact HERBAROSA?",
    answer:
      "You can reach our team through the business contact details and WhatsApp link provided on this website. We look forward to discussing your product inquiries and potential business cooperation.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-[#FBF7ED] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A82D3B]">
            FAQ
          </p>

          <h2 className="mt-4 font-display text-3xl font-bold text-[#173D2D] sm:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-base leading-7 text-[#526456]">
            Find answers to common questions about HERBAROSA
            products, wholesale inquiries, and international
            business opportunities.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-[#E8E0CF] bg-white transition-shadow hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold text-[#173D2D] sm:p-6"
                >
                  <span>{item.question}</span>

                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[#A82D3B] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 text-sm leading-7 text-[#526456] sm:px-6">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-[#526456]">
            Have another question?
          </p>

          <a
            href="#kontak"
            className="mt-3 inline-flex items-center justify-center rounded-full bg-[#1D632F] px-7 py-3.5 font-semibold text-white transition-colors hover:bg-[#174D26]"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
