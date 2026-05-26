import type { Metadata } from "next";
import Link from "next/link";
import packagesDetail from "@/data/packages-detail.json";
import PackagesListing from "@/components/paket-tour/PackagesListing";
import { flattenPackageDetails, getInitialPackageType, type RawPackagesDetail } from "@/lib/package-utils";

export const metadata: Metadata = {
  title: "Bali Tour Packages | Dacin Travel",
  description:
    "Browse final Bali tour packages from Dacin Travel, including day tours, adventure tours, and family-friendly routes with clear selling prices.",
  keywords: ["Bali tour packages", "private Bali tour", "Bali day tour", "Bali adventure tour", "Dacin Travel", "Bali itinerary"],
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
        <div className="ui-card mb-8 overflow-hidden p-5 sm:p-8 lg:p-9">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,0.85fr)] lg:items-center">
            <div>
              <span className="ui-eyebrow mb-4">
                Bali Tour Packages
              </span>
              <h1 className="m-0 max-w-2xl text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl lg:text-[46px]">
                Choose the Bali package that fits your travel style
              </h1>
            </div>
            <div className="ui-card-muted p-5">
              <p className="m-0 text-sm leading-7 text-slate-600 sm:text-base">
                Compare day tours, adventure routes, and family-friendly experiences in one place. Each package links directly to itinerary, selling price rates, inclusions, gallery, and FAQ details.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="ui-card-muted p-5">
              <p className="m-0 text-3xl font-black text-blue-700">{packages.length}</p>
              <p className="m-0 mt-1 text-sm font-bold text-slate-950">Available packages</p>
            </div>
            <div className="ui-card-muted p-5">
              <p className="m-0 text-3xl font-black text-blue-700">3</p>
              <p className="m-0 mt-1 text-sm font-bold text-slate-950">Travel styles</p>
            </div>
            <div className="ui-card-muted p-5">
              <p className="m-0 text-3xl font-black text-blue-700">Bali</p>
              <p className="m-0 mt-1 text-sm font-bold text-slate-950">Curated routes</p>
            </div>
          </div>
        </div>

        <PackagesListing key={initialType} packages={packages} initialType={initialType} />

        <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="flex min-h-[320px] flex-col rounded-lg border border-blue-900/20 bg-blue-800 p-6 text-white shadow-sm sm:p-8">
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
              className="ui-btn mt-auto w-full border-white bg-white text-blue-700 hover:bg-slate-50 sm:w-fit"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="ui-card p-5 sm:p-6">
            <p className="m-0 text-sm font-bold uppercase tracking-wide text-blue-700">Package FAQ</p>
            <div className="mt-4 space-y-3">
              {packageFaqs.map((faq, index) => (
                <details key={faq.question} className="rounded-lg border border-slate-200 bg-slate-50 p-4" open={index === 0}>
                  <summary className="cursor-pointer list-none text-sm font-extrabold text-slate-950">{faq.question}</summary>
                  <p className="m-0 mt-2 text-sm leading-6 text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>
            <Link href="/faq" className="mt-5 inline-flex text-sm font-bold text-blue-700 no-underline">
              Read full FAQ
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
