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
      <div className="mx-auto max-w-7xl rounded-[30px] bg-white p-5 shadow-[0_28px_80px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <span className="mb-3 inline-flex rounded-full bg-[#eef3ff] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#0046FF]">
              How It Works
            </span>
            <h2 className="m-0 text-2xl font-extrabold leading-tight tracking-tight text-[#101828] sm:text-4xl">
              Simple booking flow for a clearer Bali trip
            </h2>
          </div>
          <p className="m-0 max-w-2xl text-sm leading-relaxed text-[#667085] sm:text-base lg:justify-self-end">
            From choosing a package to confirming the final route, each step is designed to keep the planning process easy to understand.
          </p>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <article key={step.title} className="rounded-[24px] border border-[#dbe6ff] bg-[#f8fbff] p-5">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0046FF] text-sm font-extrabold text-white shadow-[0_16px_30px_rgba(0,70,255,0.22)]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="m-0 text-lg font-extrabold leading-snug text-[#101828]">{step.title}</h3>
              <p className="m-0 mt-3 text-sm leading-relaxed text-[#667085]">{step.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/paket-tour"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#0046FF] px-7 text-sm font-bold text-white no-underline shadow-[0_16px_34px_rgba(0,70,255,0.24)]"
          >
            View Packages
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#dbe6ff] bg-white px-7 text-sm font-bold text-[#0046FF] no-underline"
          >
            Contact Team
          </Link>
        </div>
      </div>
    </section>
  );
}
