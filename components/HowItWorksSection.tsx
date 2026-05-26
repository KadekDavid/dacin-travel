import Link from "next/link";

const steps = [
  {
    title: "Choose a package",
    description: "Start from a travel style that fits your time, group, and preferred Bali area.",
  },
  {
    title: "Chat with our team",
    description: "Share your dates, guest count, pickup area, and any custom requests you want to add.",
  },
  {
    title: "Confirm the itinerary",
    description: "Review route details, inclusions, pricing, and timing before your booking is finalized.",
  },
  {
    title: "Enjoy your Bali trip",
    description: "Travel with a clear schedule, arranged pickup, and support for a smoother day.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="px-4 py-10 sm:px-6 sm:py-14 md:px-8 lg:px-12">
      <div className="ui-card mx-auto max-w-7xl p-5 sm:p-8 lg:p-10">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <span className="ui-eyebrow mb-3">
              How It Works
            </span>
            <h2 className="m-0 text-2xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl">
              Simple booking flow for a clearer Bali trip
            </h2>
          </div>
          <p className="m-0 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base lg:justify-self-end">
            From choosing a package to confirming the final route, each step is designed to keep the planning process easy to understand.
          </p>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <article key={step.title} className="ui-card-muted p-5">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-blue-700 text-sm font-extrabold text-white shadow-sm">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="m-0 text-lg font-extrabold leading-snug text-slate-950">{step.title}</h3>
              <p className="m-0 mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/paket-tour"
            className="ui-btn ui-btn-primary"
          >
            View Packages
          </Link>
          <Link
            href="/contact"
            className="ui-btn ui-btn-secondary"
          >
            Contact Team
          </Link>
        </div>
      </div>
    </section>
  );
}
