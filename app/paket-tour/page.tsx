import type { Metadata } from "next";
import Link from "next/link";
import packagesDetail from "@/data/packages-detail.json";
import PackagesListing from "@/components/paket-tour/PackagesListing";
import { flattenPackageDetails, getInitialPackageType, type RawPackagesDetail } from "@/lib/package-utils";

export const metadata: Metadata = {
  title: "Bali Tour Packages | Dacin Travel",
  description:
    "Browse Bali tour packages from Dacin Travel, including luxury relaxation, adventure culture routes, and short escape packages.",
  keywords: ["Bali tour packages", "private Bali tour", "Bali holiday package", "Dacin Travel", "Bali itinerary"],
};

const packageFaqs = [
  {
    question: "Can I customize these packages?",
    answer: "Yes. Pickup area, timing, route order, hotel options, and selected activities can be adjusted before confirmation.",
  },
  {
    question: "Do packages include transport?",
    answer: "Most packages include private air-conditioned transportation. Please check each package detail for exact inclusions.",
  },
  {
    question: "How do I check availability?",
    answer: "Send your travel date, guest count, preferred package, and hotel area through WhatsApp so the team can confirm the details.",
  },
];

type PackagesPageProps = {
  searchParams?: Promise<{
    type?: string | string[];
  }>;
};

export default async function PackagesPage({ searchParams }: PackagesPageProps) {
  const packages = flattenPackageDetails(packagesDetail as RawPackagesDetail);
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const initialType = getInitialPackageType(resolvedSearchParams.type, packages);

  return (
    <main className="overflow-x-hidden">
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pt-12 lg:px-8 lg:pt-16">
        <div className="mb-8 overflow-hidden rounded-[32px] bg-white p-5 shadow-[0_28px_80px_rgba(15,23,42,0.08)] sm:p-8 lg:p-9">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,0.85fr)] lg:items-center">
            <div>
              <span className="mb-4 inline-flex rounded-full bg-[#eef3ff] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#0046FF]">
                Bali Tour Packages
              </span>
              <h1 className="m-0 max-w-2xl text-3xl font-extrabold leading-tight text-[#101828] sm:text-4xl lg:text-[46px]">
                Choose the Bali package that fits your travel style
              </h1>
            </div>
            <div className="rounded-[24px] border border-[#dbe6ff] bg-[#f8fbff] p-5">
              <p className="m-0 text-sm leading-relaxed text-[#667085] sm:text-base">
                Compare luxury relaxation, adventure culture, and short escape packages in one place. Each package links directly to complete itinerary, pricing, inclusions, gallery, and FAQ details.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[22px] border border-[#dbe6ff] bg-[#f8fbff] p-5">
              <p className="m-0 text-3xl font-black text-[#0046FF]">{packages.length}</p>
              <p className="m-0 mt-1 text-sm font-bold text-[#101828]">Available packages</p>
            </div>
            <div className="rounded-[22px] border border-[#dbe6ff] bg-[#f8fbff] p-5">
              <p className="m-0 text-3xl font-black text-[#0046FF]">3</p>
              <p className="m-0 mt-1 text-sm font-bold text-[#101828]">Travel styles</p>
            </div>
            <div className="rounded-[22px] border border-[#dbe6ff] bg-[#f8fbff] p-5">
              <p className="m-0 text-3xl font-black text-[#0046FF]">Bali</p>
              <p className="m-0 mt-1 text-sm font-bold text-[#101828]">Curated routes</p>
            </div>
          </div>
        </div>

        <PackagesListing key={initialType} packages={packages} initialType={initialType} />

        <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="flex min-h-[320px] flex-col rounded-[28px] bg-[#0046FF] p-6 text-white shadow-[0_24px_70px_rgba(0,70,255,0.2)] sm:p-8">
            <div>
              <p className="m-0 text-sm font-bold uppercase tracking-wide text-white/75">Need help choosing?</p>
              <h2 className="m-0 mt-3 text-2xl font-extrabold leading-tight sm:text-3xl">
                Tell us your date and group size, then we will suggest the best package.
              </h2>
            </div>
            <a
              href="https://wa.me/6281337373852?text=Hello%2C%20I%27d%20like%20to%20ask%20about%20Bali%20tour%20packages."
              target="_blank"
              rel="noreferrer"
              className="mt-auto inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-7 text-sm font-bold text-[#0046FF] no-underline sm:w-fit"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="rounded-[28px] bg-white p-5 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-6">
            <p className="m-0 text-sm font-bold uppercase tracking-wide text-[#0046FF]">Package FAQ</p>
            <div className="mt-4 space-y-3">
              {packageFaqs.map((faq, index) => (
                <details key={faq.question} className="rounded-2xl border border-[#dbe6ff] bg-[#f8fbff] p-4" open={index === 0}>
                  <summary className="cursor-pointer list-none text-sm font-extrabold text-[#101828]">{faq.question}</summary>
                  <p className="m-0 mt-2 text-sm leading-relaxed text-[#667085]">{faq.answer}</p>
                </details>
              ))}
            </div>
            <Link href="/faq" className="mt-5 inline-flex text-sm font-bold text-[#0046FF] no-underline">
              Read full FAQ
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
