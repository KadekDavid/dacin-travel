import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Dacin Travel",
  description: "Learn about Dacin Travel and how we design Bali travel experiences.",
};

const values = [
  {
    title: "Local-first planning",
    description: "Each route is shaped around real travel time, local context, and the kind of Bali experience guests want to feel.",
  },
  {
    title: "Clear communication",
    description: "We keep package details, inclusions, timing, and expectations easy to understand before the trip starts.",
  },
  {
    title: "Comfort with character",
    description: "Our itineraries balance smooth transport and reliable support with beaches, temples, food, and cultural stops.",
  },
];

const steps = [
  "Choose your preferred travel style and destination focus.",
  "Review the suggested package, inclusions, and trip rhythm.",
  "Confirm your schedule with our team and enjoy Bali with support along the way.",
];

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-12 lg:px-8 lg:pt-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="min-w-0">
            <span className="mb-4 inline-flex rounded-full bg-[#eef3ff] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#0046FF]">
              About Dacin Travel
            </span>
            <h1 className="m-0 text-3xl font-bold leading-tight text-[#111827] sm:text-5xl">
              We design Bali trips that feel easy, warm, and memorable
            </h1>
            <p className="mt-5 text-sm leading-relaxed text-[#5b6472] sm:text-base">
              Dacin Travel helps guests explore Bali through curated packages that combine comfort, destination highlights, and practical local planning.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#0046FF] px-7 text-sm font-bold text-white no-underline sm:w-auto"
              >
                View Packages
              </Link>
              <Link
                href="/artikel"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-[#cbd8ff] bg-white px-7 text-sm font-bold text-[#0046FF] no-underline sm:w-auto"
              >
                Read Articles
              </Link>
            </div>
          </div>

          <div className="relative min-h-[280px] overflow-hidden rounded-[26px] bg-[#eef3ff] shadow-[0_28px_80px_rgba(15,23,42,0.10)] sm:min-h-[420px]">
            <Image
              src="https://res.cloudinary.com/dh1vnkssv/image/upload/f_auto,q_auto/hero_tllhfl"
              alt="Bali landscape for Dacin Travel"
              fill
              priority
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:mt-14">
          {[
            ["3+", "Curated travel styles"],
            ["Bali", "Main destination focus"],
            ["2026", "Active travel season"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-[22px] bg-white p-5 text-center shadow-[0_18px_44px_rgba(15,23,42,0.07)]">
              <p className="m-0 text-3xl font-black text-[#0046FF]">{value}</p>
              <p className="m-0 mt-2 text-sm font-semibold text-[#5b6472]">{label}</p>
            </div>
          ))}
        </div>

        <section className="mt-10 rounded-[26px] bg-white p-5 shadow-[0_28px_80px_rgba(15,23,42,0.08)] sm:p-8 lg:mt-14">
          <div className="mb-6 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wide text-[#0046FF]">What guides us</span>
            <h2 className="m-0 mt-2 text-2xl font-bold text-[#111827] sm:text-3xl">Travel values that shape each package</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-[18px] border border-[#dbe6ff] bg-[#f8fbff] p-5">
                <h3 className="m-0 text-lg font-bold text-[#111827]">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5b6472]">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-wide text-[#0046FF]">How it works</span>
            <h2 className="m-0 mt-2 text-2xl font-bold text-[#111827] sm:text-3xl">Simple planning from first idea to travel day</h2>
          </div>
          <div className="space-y-3">
            {steps.map((step, index) => (
              <div key={step} className="flex gap-4 rounded-[18px] bg-white p-4 shadow-[0_14px_34px_rgba(15,23,42,0.07)]">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0046FF] text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="m-0 text-sm font-semibold leading-relaxed text-[#2f3437] sm:text-base">{step}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
