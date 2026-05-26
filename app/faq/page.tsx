import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Dacin Travel",
  description: "Frequently asked questions about Dacin Travel Bali tour packages, booking, pickup, customization, and payment.",
};

const faqs = [
  {
    question: "Can I customize a Bali tour package?",
    answer:
      "Yes. Package routes, pickup time, hotel area, and selected activities can be adjusted based on your schedule and group needs.",
  },
  {
    question: "Is airport or hotel pickup included?",
    answer:
      "Most packages include pickup based on the package details. The final pickup point and time will be confirmed before your tour date.",
  },
  {
    question: "What is included in the package price?",
    answer:
      "Each package page lists included and excluded facilities clearly, such as transport, guide, hotel, meals, entrance tickets, or personal expenses.",
  },
  {
    question: "Can I book for a family or private group?",
    answer:
      "Yes. Dacin Travel can help arrange private trips for families, couples, company groups, and small travel groups.",
  },
  {
    question: "How do I confirm availability?",
    answer:
      "Contact us through WhatsApp with your travel date, number of guests, preferred package, and hotel area. The team will confirm availability and details.",
  },
  {
    question: "Are the prices fixed?",
    answer:
      "Prices may depend on travel dates, group size, hotel selection, and requested customization. We will confirm the final quote before booking.",
  },
];

function ExpandIcon() {
  return (
    <svg
      aria-hidden="true"
      className="faq-chevron h-5 w-5 shrink-0 text-blue-700 transition-transform duration-200"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FAQPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <style>{`
        .faq-item summary::-webkit-details-marker {
          display: none;
        }

        .faq-item summary::marker {
          content: "";
        }

        .faq-item[open] .faq-chevron {
          transform: rotate(180deg);
        }
      `}</style>
      <section className="mx-auto max-w-5xl px-4 pb-16 pt-8 sm:px-6 sm:pt-12 lg:px-8 lg:pt-16">
        <div className="mb-8 text-center">
          <span className="ui-eyebrow mb-4">
            Help Center
          </span>
          <h1 className="m-0 text-3xl font-extrabold leading-tight text-slate-950 sm:text-5xl">
            Frequently asked questions
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Quick answers about booking, customization, package inclusions, and how your Bali tour is arranged.
          </p>
        </div>

        <div className="ui-card p-4 sm:p-6">
          <div className="space-y-3">
            {faqs.map((item, index) => (
              <details key={item.question} className="faq-item rounded-lg border border-slate-200 bg-slate-50 p-5" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-slate-950 sm:text-lg">
                  <span>{item.question}</span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-white">
                    <ExpandIcon />
                  </span>
                </summary>
                <p className="m-0 mt-3 text-sm leading-7 text-slate-600 sm:text-base">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-lg border border-blue-900/20 bg-blue-800 p-6 text-center text-white shadow-sm sm:p-8">
          <h2 className="m-0 text-2xl font-extrabold">Still have questions?</h2>
          <p className="mx-auto mt-3 max-w-4xl text-sm leading-7 text-white/80 sm:text-base">
            Send us your travel date and group size. We will help you choose the package that fits best.
          </p>
          <Link
            href="/contact"
            className="ui-btn mt-5 border-white bg-white text-blue-700 hover:bg-slate-50"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
