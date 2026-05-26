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
      className="terms-chevron h-5 w-5 shrink-0 text-blue-700 transition-transform duration-200"
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
          <span className="ui-eyebrow mb-4">
            Terms
          </span>
          <h1 className="m-0 text-3xl font-extrabold leading-tight text-slate-950 sm:text-5xl">
            Terms & Conditions
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
            Please read these terms before confirming a tour package. They help keep booking details, inclusions, and travel expectations clear.
          </p>
        </div>

        <div className="ui-card p-4 sm:p-8">
          <div className="space-y-4">
            {terms.map((item, index) => (
              <details key={item.title} className="terms-item rounded-lg border border-slate-200 bg-slate-50 p-5" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-extrabold text-slate-950">
                  <span>{item.title}</span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-white">
                    <ExpandIcon />
                  </span>
                </summary>
                <p className="m-0 mt-2 text-sm leading-7 text-slate-600 sm:text-base">{item.body}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-lg border border-blue-900/20 bg-blue-800 p-6 text-center text-white shadow-sm sm:flex-row sm:text-left">
          <div>
            <h2 className="m-0 text-2xl font-extrabold">Need clarification?</h2>
            <p className="m-0 mt-2 text-sm leading-7 text-white/80">
              Contact us before booking and we will explain the package terms clearly.
            </p>
          </div>
          <Link
            href="/contact"
            className="ui-btn w-full border-white bg-white text-blue-700 hover:bg-slate-50 sm:w-auto"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
