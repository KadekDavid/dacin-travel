import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | Dacin Travel",
  description: "Terms and conditions for Dacin Travel Bali tour packages, bookings, inclusions, changes, and cancellations.",
};

const terms = [
  {
    title: "Booking Confirmation",
    body:
      "Bookings are confirmed after package details, travel dates, pickup location, guest count, and payment terms have been agreed by both parties.",
  },
  {
    title: "Package Inclusions",
    body:
      "Included and excluded facilities are shown on each package page. Any additional request outside the package may affect the final price.",
  },
  {
    title: "Schedule Changes",
    body:
      "Itinerary timing may change due to traffic, weather, local conditions, ceremony access, attraction availability, or other operational needs.",
  },
  {
    title: "Guest Responsibility",
    body:
      "Guests are responsible for personal belongings, travel documents, personal expenses, and following local rules during the tour.",
  },
  {
    title: "Cancellation and Refund",
    body:
      "Cancellation and refund terms may vary depending on hotel, transport, ticket, and activity partner policies. Final terms will be confirmed before booking.",
  },
  {
    title: "Custom Requests",
    body:
      "Custom routes, hotel upgrades, special meals, private arrangements, or additional stops can be requested and will be quoted separately when needed.",
  },
];

function ExpandIcon() {
  return (
    <svg
      aria-hidden="true"
      className="terms-chevron h-5 w-5 shrink-0 text-[#0046FF] transition-transform duration-200"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function TermsPage() {
  return (
    <main className="overflow-x-hidden">
      <style>{`
        .terms-item summary::-webkit-details-marker {
          display: none;
        }

        .terms-item summary::marker {
          content: "";
        }

        .terms-item[open] .terms-chevron {
          transform: rotate(180deg);
        }
      `}</style>
      <section className="mx-auto max-w-5xl px-4 pb-16 pt-8 sm:px-6 sm:pt-12 lg:px-8 lg:pt-16">
        <div className="mb-8">
          <span className="mb-4 inline-flex rounded-full bg-[#eef3ff] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#0046FF]">
            Terms
          </span>
          <h1 className="m-0 text-3xl font-extrabold leading-tight text-[#101828] sm:text-5xl">
            Terms & Conditions
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#667085] sm:text-base">
            Please read these terms before confirming a tour package. They help keep booking details, inclusions, and travel expectations clear.
          </p>
        </div>

        <div className="rounded-[28px] bg-white p-4 shadow-[0_28px_80px_rgba(15,23,42,0.08)] sm:p-8">
          <div className="space-y-4">
            {terms.map((item, index) => (
              <details key={item.title} className="terms-item rounded-2xl border border-[#dbe6ff] bg-[#f8fbff] p-5" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-extrabold text-[#101828]">
                  <span>{item.title}</span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eef3ff]">
                    <ExpandIcon />
                  </span>
                </summary>
                <p className="m-0 mt-2 text-sm leading-relaxed text-[#667085] sm:text-base">{item.body}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-[28px] bg-[#0046FF] p-6 text-center text-white shadow-[0_24px_70px_rgba(0,70,255,0.2)] sm:flex-row sm:text-left">
          <div>
            <h2 className="m-0 text-2xl font-extrabold">Need clarification?</h2>
            <p className="m-0 mt-2 text-sm leading-relaxed text-white/80">
              Contact us before booking and we will explain the package terms clearly.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-7 text-sm font-bold text-[#0046FF] no-underline sm:w-auto"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
