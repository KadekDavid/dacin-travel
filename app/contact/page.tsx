import type { Metadata } from "next";
import Link from "next/link";
import ContactPlanningForm from "@/components/ContactPlanningForm";

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
            <span className="ui-eyebrow mb-4">
              Contact
            </span>
            <h1 className="m-0 text-3xl font-extrabold leading-tight text-slate-950 sm:text-5xl">
              Plan your Bali tour with clear support
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Tell us your travel date, group size, preferred area, and the package you like. We will help check availability and arrange the next steps.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/6281337373852?text=Hello%2C%20I%27d%20like%20to%20ask%20about%20Bali%20tour%20packages."
                className="ui-btn ui-btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </a>
              <Link
                href="/faq"
                className="ui-btn ui-btn-secondary"
              >
                Read FAQ
              </Link>
            </div>
          </div>

          <div className="ui-card p-5 sm:p-7">
            <div className="grid gap-4">
              {contactMethods.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-5 no-underline transition hover:border-slate-300 hover:bg-white"
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <p className="m-0 text-xs font-bold uppercase tracking-wide text-blue-700">{item.label}</p>
                  <p className="m-0 mt-2 text-lg font-extrabold text-slate-950">{item.value}</p>
                </a>
              ))}
            </div>
          </div>
        </div>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <ContactPlanningForm />
          <div className="ui-card-muted p-5 sm:p-7">
            <p className="m-0 text-sm font-bold uppercase tracking-wide text-blue-700">Trust Information</p>
            <h2 className="m-0 mt-2 text-2xl font-extrabold leading-tight text-slate-950">
              Clear details before any confirmation
            </h2>
            <div className="mt-5 grid gap-3">
              {[
                "Package inclusions and exclusions are shown before booking.",
                "Pickup area, date, and group size are checked first.",
                "Vehicle and per-pax pricing can be reviewed on package detail pages.",
                "Information is kept factual while the travel service is being prepared.",
              ].map((item) => (
                <div key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold leading-6 text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mt-10 rounded-lg border border-blue-900/20 bg-blue-800 p-6 text-white shadow-sm sm:p-8">
          <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="m-0 text-sm font-bold uppercase tracking-wide text-white/75">Booking Flow</p>
              <h2 className="m-0 mt-2 text-2xl font-extrabold leading-tight sm:text-3xl">Simple steps before your trip starts</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {planningSteps.map((step, index) => (
                <div key={step} className="rounded-md border border-white/15 bg-white/10 p-4">
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
