import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | Dacin Travel",
  description: "Contact Dacin Travel to ask about Bali tour packages, private trips, itinerary planning, and booking availability.",
};

const contactMethods = [
  {
    label: "WhatsApp",
    value: "Chat with our travel team",
    href: "https://wa.me/6281337373852?text=Hello%2C%20I%27d%20like%20to%20ask%20about%20Bali%20tour%20packages.",
  },
  {
    label: "Tour Area",
    value: "Bali, Indonesia",
    href: "/",
  },
  {
    label: "Response",
    value: "Travel Planning Support",
    href: "/faq",
  },
];

const planningSteps = ["Choose your package", "Share travel dates", "Confirm route and pickup", "Enjoy your Bali trip"];

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden">
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pt-12 lg:px-8 lg:pt-16">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <span className="mb-4 inline-flex rounded-full bg-[#eef3ff] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#0046FF]">
              Contact
            </span>
            <h1 className="m-0 text-3xl font-extrabold leading-tight text-[#101828] sm:text-5xl">
              Plan your Bali tour with clear support
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#667085] sm:text-base">
              Tell us your travel date, group size, preferred area, and the package you like. We will help check availability and arrange the next steps.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/6281337373852?text=Hello%2C%20I%27d%20like%20to%20ask%20about%20Bali%20tour%20packages."
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#0046FF] px-7 text-sm font-bold text-white no-underline shadow-[0_16px_34px_rgba(0,70,255,0.24)]"
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </a>
              <Link
                href="/faq"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#dbe6ff] bg-white px-7 text-sm font-bold text-[#0046FF] no-underline"
              >
                Read FAQ
              </Link>
            </div>
          </div>

          <div className="rounded-[30px] bg-white p-5 shadow-[0_28px_80px_rgba(15,23,42,0.08)] sm:p-7">
            <div className="grid gap-4">
              {contactMethods.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-[22px] border border-[#dbe6ff] bg-[#f8fbff] p-5 no-underline transition hover:border-[#0046FF]"
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <p className="m-0 text-xs font-bold uppercase tracking-wide text-[#0046FF]">{item.label}</p>
                  <p className="m-0 mt-2 text-lg font-extrabold text-[#101828]">{item.value}</p>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[30px] bg-[#0046FF] p-6 text-white shadow-[0_24px_70px_rgba(0,70,255,0.2)] sm:p-8">
          <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="m-0 text-sm font-bold uppercase tracking-wide text-white/75">Booking Flow</p>
              <h2 className="m-0 mt-2 text-2xl font-extrabold leading-tight sm:text-3xl">Simple steps before your trip starts</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {planningSteps.map((step, index) => (
                <div key={step} className="rounded-2xl bg-white/10 p-4">
                  <span className="text-xs font-bold text-white/70">Step {index + 1}</span>
                  <p className="m-0 mt-1 text-sm font-bold">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
