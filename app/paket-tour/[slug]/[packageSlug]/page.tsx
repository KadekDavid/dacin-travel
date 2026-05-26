import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import packagesDetail from "@/data/packages-detail.json";
import PackageGallerySlider from "@/components/paket-tour/PackageGallerySlider";
import { getPackageGalleryImages } from "@/lib/package-gallery";

type PackageDetailParams = Promise<{ slug: string; packageSlug: string }>;

const planningChecklist = [
  {
    title: "Share your travel date",
    description: "Availability and pickup timing can be checked more clearly when the date and hotel area are known.",
  },
  {
    title: "Confirm group size",
    description: "Guest count helps match the vehicle option and per-pax selling price to your group.",
  },
  {
    title: "Review inclusions first",
    description: "Check what is included and excluded before confirming so the final plan stays transparent.",
  },
];

const faqItems = [
  {
    question: "Can this package be customized?",
    answer:
      "Yes. The route, pickup time, hotel area, and several activities can be adjusted based on your group schedule and travel style.",
  },
  {
    question: "Is airport pickup included?",
    answer:
      "Most packages include airport or hotel pickup as listed in the included facilities. The final pickup point will be confirmed before the trip.",
  },
  {
    question: "Are meals and entrance tickets included?",
    answer:
      "Please check the Included and Excluded sections on this page. We keep these details clear so you can understand what is covered before booking.",
  },
  {
    question: "How do I confirm a booking?",
    answer:
      "You can contact the team through the booking button, share your travel date and group size, then confirm the final package details.",
  },
];

function getPackageEntry(slug: string, packageSlug: string) {
  const destination = packagesDetail[slug as keyof typeof packagesDetail];
  const packageData = destination?.packages.find((pkg) => pkg.slug === packageSlug);

  return { destination, packageData };
}

function getNumericPrice(price: string) {
  return price.replace(/\D/g, "");
}

function formatIdr(value: number) {
  return `Rp ${value.toLocaleString("id-ID")}`;
}

type PricingRate = {
  vehicle: string;
  pax: string;
  sellingPrice: number;
  unit: string;
};

function getPaxNumber(pax: string) {
  const match = pax.match(/\d+/);
  return match ? Number(match[0]) : 0;
}

function formatPaxLabel(pax: string) {
  const paxNumber = getPaxNumber(pax);

  return paxNumber ? `${paxNumber} Pax` : pax;
}

function getSortedPricing<T extends PricingRate>(pricing: T[]) {
  const vehicleOrder: Record<string, number> = {
    "AVANZA/SIMILAR": 1,
    "VAN HIACE": 2,
    MINIBUS: 3,
  };

  return [...pricing].sort((a, b) => {
    const vehicleDiff = (vehicleOrder[a.vehicle] ?? 99) - (vehicleOrder[b.vehicle] ?? 99);

    return vehicleDiff || getPaxNumber(a.pax) - getPaxNumber(b.pax);
  });
}

function getPaxRangeLabel(rows: PricingRate[]) {
  const paxNumbers = rows.map((rate) => getPaxNumber(rate.pax)).filter(Boolean);

  if (paxNumbers.length === 0) return "Custom pax";

  const minPax = Math.min(...paxNumbers);
  const maxPax = Math.max(...paxNumbers);

  return minPax === maxPax ? `${minPax} Pax` : `${minPax}-${maxPax} Pax`;
}

function getPricingGroups<T extends PricingRate>(pricing: T[]) {
  const groups = getSortedPricing(pricing).reduce<Array<{ vehicle: string; rows: T[] }>>((result, rate) => {
    const group = result.find((item) => item.vehicle === rate.vehicle);

    if (group) {
      group.rows.push(rate);
    } else {
      result.push({ vehicle: rate.vehicle, rows: [rate] });
    }

    return result;
  }, []);

  return groups.map((group) => ({
    ...group,
    paxRange: getPaxRangeLabel(group.rows),
    fromPrice: Math.min(...group.rows.map((rate) => rate.sellingPrice)),
  }));
}

function buildPackageDescription(packageData: { name: string; duration: string; location: string; overview: string }) {
  return `${packageData.name} in ${packageData.location}. ${packageData.duration}. ${packageData.overview}`;
}

function buildPackageWhatsAppUrl(packageData: { name: string; duration: string; location: string; price: string }) {
  const message = [
    "Hello, I'd like to ask about this Bali tour package:",
    `Package: ${packageData.name}`,
    `Duration: ${packageData.duration}`,
    `Area: ${packageData.location}`,
    `Starting price: ${packageData.price}`,
    "Travel date:",
    "Group size:",
    "Hotel / pickup area:",
  ].join("\n");

  return `https://wa.me/6281337373852?text=${encodeURIComponent(message)}`;
}

function getPackageSeoSections(packageData: { name: string; type: string; duration: string; location: string; overview: string }) {
  return [
    {
      title: `About ${packageData.name}`,
      body: `${packageData.name} is arranged as a ${packageData.duration.toLowerCase()} around ${packageData.location}. The route is designed to help travelers understand the main stops, transport flow, and package inclusions before asking for availability.`,
    },
    {
      title: "Who this package is for",
      body: `This package is suitable for guests who want a ${packageData.type.toLowerCase()} option with clearer timing, pickup planning, and a route that can be discussed before confirmation. It works best when travelers share their date, hotel area, and group size early.`,
    },
    {
      title: "Planning notes",
      body: "For the smoothest trip, keep the pickup point realistic, leave enough time between major stops, and review what is included and excluded before booking. The final route can be checked through WhatsApp so the travel day feels more organized.",
    },
  ];
}

function ItineraryIcon() {
  return (
    <svg aria-hidden="true" className="h-10 w-10 shrink-0 text-blue-700" viewBox="0 0 48 48" fill="none">
      <rect x="11" y="15" width="26" height="24" rx="5" stroke="currentColor" strokeWidth="3" />
      <path d="M18 15v-3c0-2 1.5-3.5 3.5-3.5h5c2 0 3.5 1.5 3.5 3.5v3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M15 27c3.5-3 6.5-3 9 0s5.5 3 9 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function PriceIcon() {
  return (
    <svg aria-hidden="true" className="h-10 w-10 shrink-0 text-blue-700" viewBox="0 0 48 48" fill="none">
      <path d="M10 21 21 10c1.2-1.2 2.8-1.7 4.5-1.4l9 1.6c1.8.3 3.2 1.7 3.5 3.5l1.6 9c.3 1.7-.2 3.3-1.4 4.5L27 38.5c-1.9 1.9-5 1.9-6.9 0L10 28.9c-2.1-2.1-2.1-5.6 0-7.9Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M29 17.5h.1" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M19 24.5c0-2 1.8-3.4 4-3.4s4 1.4 4 3.4-1.8 3.4-4 3.4-4 1.4-4 3.4 1.8 3.4 4 3.4 4-1.4 4-3.4" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

function FacilityIcon() {
  return (
    <svg aria-hidden="true" className="h-10 w-10 shrink-0 text-blue-700" viewBox="0 0 48 48" fill="none">
      <rect x="10" y="16" width="28" height="23" rx="7" stroke="currentColor" strokeWidth="3" />
      <path d="M18 16v-3c0-2 1.5-3.5 3.5-3.5h5c2 0 3.5 1.5 3.5 3.5v3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M16 28h16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg aria-hidden="true" className="package-detail-chevron h-5 w-5 shrink-0 transition-transform duration-200" viewBox="0 0 20 20" fill="none">
      <path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BreadcrumbHomeIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4 shrink-0" viewBox="0 0 16 16" fill="none">
      <path d="M2.5 7.1 8 2.8l5.5 4.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 6.9v5.3c0 .8.6 1.4 1.4 1.4h5.2c.8 0 1.4-.6 1.4-1.4V6.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M6.7 13.6V9.4h2.6v4.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BreadcrumbChevronIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4 shrink-0" viewBox="0 0 16 16" fill="none">
      <path d="m6 3.8 4.2 4.2L6 12.2" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HighlightsIcon() {
  return (
    <svg aria-hidden="true" className="h-10 w-10 shrink-0 text-blue-700" viewBox="0 0 48 48" fill="none">
      <path d="M24 7 29 18.2 41 19.5 32 27.7 34.5 39.5 24 33.4 13.5 39.5 16 27.7 7 19.5 19 18.2 24 7Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="m20 25 3 3 6-7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 16 16" fill="none">
      <path d="M13 6.9c0 3.8-5 7-5 7s-5-3.2-5-7a5 5 0 0 1 10 0Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 8.5a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 16 16" fill="none">
      <rect x="2.4" y="3.2" width="11.2" height="10.4" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5.3 2v2.4M10.7 2v2.4M2.8 6.4h10.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 16 16" fill="none">
      <path d="M3 8h9.5M8.8 4.3 12.5 8l-3.7 3.7" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HighlightCheckIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 16 16" fill="none">
      <path d="m3.5 8.3 3 3 6-6.6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function getActivityRow(activity: string, index: number) {
  const timeMatch = activity.match(/^(\d{1,2}[:.]\d{2}\s*-\s*\d{1,2}[:.]\d{2})\s+(.+)$/);

  if (timeMatch) {
    return {
      time: timeMatch[1].replaceAll(".", ":"),
      text: timeMatch[2],
    };
  }

  return {
    time: `Session ${String(index + 1).padStart(2, "0")}`,
    text: activity,
  };
}

export async function generateStaticParams() {
  const params = [];
  for (const [destSlug, destData] of Object.entries(packagesDetail)) {
    for (const pkg of destData.packages) {
      params.push({ slug: destSlug, packageSlug: pkg.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: PackageDetailParams }): Promise<Metadata> {
  const { slug, packageSlug } = await params;
  const { packageData } = getPackageEntry(slug, packageSlug);

  if (!packageData) {
    return {
      title: "Package Not Found | Dacin Travel",
    };
  }

  const description = buildPackageDescription(packageData);

  return {
    title: `${packageData.name} | Dacin Travel`,
    description,
    keywords: [
      packageData.name,
      `${packageData.location} Bali tour`,
      `${packageData.duration} Bali package`,
      "Bali tour package",
      "private Bali tour",
      "Dacin Travel",
    ],
    openGraph: {
      title: `${packageData.name} | Dacin Travel`,
      description,
      type: "website",
      images: [
        {
          url: packageData.image,
          width: 1200,
          height: 630,
          alt: packageData.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${packageData.name} | Dacin Travel`,
      description,
      images: [packageData.image],
    },
  };
}

export default async function PackageDetailPage({
  params,
}: {
  params: PackageDetailParams;
}) {
  const { slug, packageSlug } = await params;
  const { destination, packageData } = getPackageEntry(slug, packageSlug);

  if (!destination) notFound();

  if (!packageData) notFound();

  const galleryImages = getPackageGalleryImages(packageData.slug, packageData.image);
  const packageDescription = buildPackageDescription(packageData);
  const packageWhatsAppUrl = buildPackageWhatsAppUrl(packageData);
  const packageSeoSections = getPackageSeoSections(packageData);
  const pricingGroups = getPricingGroups(packageData.pricing);
  const packageJsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: packageData.name,
    description: packageDescription,
    image: galleryImages,
    touristType: packageData.type,
    itinerary: packageData.itinerary.map((day) => ({
      "@type": "ItemList",
      name: `Day ${day.day}: ${day.title}`,
      itemListElement: day.activities.map((activity, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: activity,
      })),
    })),
    offers: {
      "@type": "Offer",
      price: getNumericPrice(packageData.price),
      priceCurrency: "IDR",
      availability: "https://schema.org/InStock",
    },
    provider: {
      "@type": "TravelAgency",
      name: "Dacin Travel",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(packageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto w-full max-w-[1280px] px-4 pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-10 lg:px-8 lg:pb-20 lg:pt-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-5 sm:mb-6">
          <ol className="inline-flex max-w-full flex-wrap items-center gap-1 rounded-lg border border-slate-200 bg-white/95 p-1.5 text-xs shadow-sm backdrop-blur sm:rounded-lg sm:text-sm">
            <li className="shrink-0">
              <Link
                href="/"
                className="inline-flex min-h-9 items-center gap-2 rounded-lg px-3 font-extrabold text-blue-700 no-underline transition hover:bg-slate-50"
              >
                <BreadcrumbHomeIcon />
                Home
              </Link>
            </li>
            <li className="flex shrink-0 items-center text-slate-400">
              <BreadcrumbChevronIcon />
            </li>
            <li className="shrink-0">
              <Link
                href="/paket-tour"
                className="inline-flex min-h-9 items-center rounded-lg px-3 font-extrabold text-blue-700 no-underline transition hover:bg-slate-50"
              >
                Packages
              </Link>
            </li>
            <li className="flex shrink-0 items-center text-slate-400">
              <BreadcrumbChevronIcon />
            </li>
            <li className="min-w-0">
              <span
                aria-current="page"
                className="inline-flex min-h-9 max-w-[210px] items-center truncate rounded-lg bg-slate-50 px-3 font-bold text-slate-950 sm:max-w-[420px]"
              >
                {packageData.name}
              </span>
            </li>
          </ol>
        </nav>

        {/* Header Package */}
        <section className="ui-card mb-8 overflow-hidden p-3 sm:mb-12 sm:p-6 lg:p-8">
          <div className="grid gap-7 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] lg:items-stretch">
            <div className="relative min-h-[240px] overflow-hidden rounded-lg bg-slate-50 sm:min-h-[360px] lg:min-h-[420px]">
              <Image
                src={packageData.image}
                alt={packageData.name}
                fill
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent p-5 sm:p-7">
                <span className="inline-flex rounded-md border border-white/30 bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wide text-blue-700 shadow-sm">
                  {packageData.type}
                </span>
              </div>
            </div>

            <div className="flex min-w-0 flex-col justify-center px-1 pb-2 sm:px-0 sm:pb-0">
              <span className="ui-eyebrow mb-4 w-fit">
                Package Details
              </span>

              <h1 className="m-0 text-2xl font-bold leading-tight text-slate-950 sm:text-4xl" style={{ fontFamily: "inherit" }}>
                {packageData.name}
              </h1>

              <div className="mt-5 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-blue-700">
                  <LocationIcon />
                  {packageData.location}
                </span>
                <span className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-blue-700">
                  <CalendarIcon />
                  {packageData.duration}
                </span>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:mt-6 sm:text-base">
                {packageData.overview}
              </p>

              <div className="mt-5 border-t border-slate-200 pt-5 sm:mt-6 sm:pt-6">
                <span className="text-xs font-bold uppercase tracking-wide text-slate-500">
                  Starting from
                </span>
                <p className="m-0 mt-1 text-3xl font-black text-blue-700 sm:text-4xl">
                  {packageData.price}
                </p>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={packageWhatsAppUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="ui-btn ui-btn-primary w-full gap-2 sm:w-auto"
                >
                  Book Now
                  <ArrowRightIcon />
                </a>
                <a
                  href="#package-itinerary"
                  className="ui-btn ui-btn-secondary w-full sm:w-auto"
                >
                  View Itinerary
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Package Gallery */}
        <section className="ui-card mb-8 p-3 sm:mb-12 sm:p-5">
          <div className="mb-5 flex flex-col gap-3 px-1 sm:flex-row sm:items-end sm:justify-between sm:px-2">
            <div>
              <span className="ui-eyebrow mb-3">
                Package Gallery
              </span>
              <h2 className="m-0 text-2xl font-extrabold leading-tight text-slate-950 sm:text-[28px]">
                A closer look at your Bali experience
              </h2>
            </div>
            <p className="m-0 max-w-xl text-sm leading-7 text-slate-600">
              Preview the kind of beaches, routes, culture, and relaxing moments that can be part of this package.
            </p>
          </div>

          <PackageGallerySlider images={galleryImages} packageName={packageData.name} />
        </section>

        {/* Highlights */}
        {packageData.highlights && packageData.highlights.length > 0 && (
          <section className="ui-card mb-8 p-4 sm:mb-12 sm:p-7">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <HighlightsIcon />
                <h2 className="text-2xl font-extrabold text-slate-950 sm:text-[28px]" style={{ fontFamily: "inherit" }}>
                  Highlights
                </h2>
              </div>
              <span className="w-fit rounded-md border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-bold uppercase tracking-wide text-blue-700">
                {packageData.highlights.length} featured moments
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {packageData.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex min-h-[88px] items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 shadow-sm sm:p-6 lg:p-7"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-blue-700 text-white shadow-sm">
                    <HighlightCheckIcon />
                  </span>
                  <div className="min-w-0">
                    {/* <span className="mb-1 block text-[11px] font-bold uppercase tracking-wide text-blue-700">
                      Highlight {String(idx + 1).padStart(2, "0")}
                    </span>*/}
                    <p className="m-0 text-sm font-semibold leading-7 text-slate-700 sm:text-base">
                      {highlight}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <style>{`
          .package-detail-accordion summary::-webkit-details-marker {
            display: none;
          }

          .package-detail-accordion summary::marker {
            content: "";
          }

          .package-detail-accordion[open] .package-detail-chevron {
            transform: rotate(180deg);
          }
        `}</style>

        {/* Itinerary & Benefits */}
        <section id="package-itinerary" className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-[minmax(0,1.42fr)_minmax(330px,0.95fr)]">
          <div className="ui-card min-w-0 p-4 sm:p-8">
            <div className="mb-5 flex items-center gap-3 sm:mb-7">
              <ItineraryIcon />
              <h2 className="text-2xl font-extrabold text-slate-950 sm:text-[28px]" style={{ fontFamily: "inherit" }}>
                Itinerary
              </h2>
            </div>

            {packageData.itinerary && packageData.itinerary.length > 0 ? (
              <div className="space-y-5">
                {packageData.itinerary.map((day, idx) => (
                  <details key={idx} className="package-detail-accordion group" open={idx < 2}>
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-lg bg-gradient-to-r from-slate-50 to-slate-200 px-4 py-4 text-blue-800 shadow-sm sm:gap-4 sm:px-6">
                      <span className="min-w-0 text-sm leading-snug sm:text-lg">
                        <span className="font-bold">Day #{day.day}</span>
                        <span className="ml-2 break-words font-medium text-blue-800">{day.title}</span>
                      </span>
                      <ChevronDownIcon />
                    </summary>

                    <div className="px-1 pb-1 pt-5 sm:px-2">
                      <div className="grid grid-cols-[76px_minmax(0,1fr)] px-1 pb-2 text-[11px] font-bold uppercase tracking-wide text-slate-500 sm:grid-cols-[150px_minmax(0,1fr)] sm:text-sm">
                        <span>Time / Session</span>
                        <span>Activities</span>
                      </div>

                      <div>
                        {day.activities.map((activity, actIdx) => {
                          const row = getActivityRow(activity, actIdx);

                          return (
                            <div
                              key={actIdx}
                              className={`grid grid-cols-[76px_minmax(0,1fr)] gap-2 px-1 py-2.5 text-xs leading-6 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-3 sm:text-base ${
                                actIdx % 2 === 0 ? "bg-slate-50" : "bg-white"
                              }`}
                            >
                              <span className="font-bold text-slate-500">{row.time}</span>
                              <span className="text-slate-900">{row.text}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            ) : (
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-5 text-slate-600">
                The activity schedule will be provided soon.
              </div>
            )}
          </div>

          <aside className="min-w-0 space-y-5 sm:space-y-6">
            <div className="ui-card p-4 sm:p-7">
              <div className="mb-5 flex items-center gap-3 sm:mb-7">
                <PriceIcon />
                <h2 className="text-2xl font-extrabold text-slate-950 sm:text-[28px]" style={{ fontFamily: "inherit" }}>
                  Pricing
                </h2>
              </div>

              {pricingGroups.length > 0 ? (
                <div>
                  <div className="mb-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <span className="text-[11px] font-bold uppercase tracking-wide text-slate-600">
                      Starting from
                    </span>
                    <p className="m-0 mt-1 text-2xl font-black text-blue-700">
                      {packageData.price}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {pricingGroups.map((group, index) => (
                      <details
                        key={group.vehicle}
                        className="package-detail-accordion overflow-hidden rounded-lg border border-slate-200 bg-slate-50"
                        open={index === 0}
                      >
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-4">
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="text-sm font-black uppercase text-slate-950">
                                {group.vehicle}
                              </span>
                              <span className="rounded-lg bg-white px-3 py-1 text-[11px] font-bold text-blue-700">
                                {group.paxRange}
                              </span>
                            </div>
                            <p className="m-0 mt-2 text-xs font-bold text-slate-600">
                              From <span className="text-blue-700">{formatIdr(group.fromPrice)}</span> / pax
                            </p>
                          </div>
                          <ChevronDownIcon />
                        </summary>

                        <div className="border-t border-slate-200 px-3 pb-3 pt-2">
                          <div className="grid grid-cols-[0.62fr_minmax(112px,1fr)_0.62fr] gap-x-3 px-2 pb-2 text-[11px] font-bold uppercase tracking-wide text-slate-500">
                            <span>Guests</span>
                            <span>Selling Price</span>
                            <span>Unit</span>
                          </div>

                          <div className="space-y-1.5">
                            {group.rows.map((rate) => (
                              <div
                                key={`${rate.vehicle}-${rate.pax}`}
                                className="grid grid-cols-[0.62fr_minmax(112px,1fr)_0.62fr] items-center gap-x-3 rounded-lg bg-white px-2 py-2 text-xs font-semibold text-slate-950"
                              >
                                <span>{formatPaxLabel(rate.pax)}</span>
                                <span className="whitespace-nowrap font-black text-blue-700">
                                  {formatIdr(rate.sellingPrice)}
                                </span>
                                <span className="text-slate-600">{rate.unit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="grid gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-semibold text-slate-950 sm:grid-cols-[0.85fr_minmax(132px,1.35fr)_1.1fr] sm:items-center sm:gap-x-3 sm:px-3 sm:text-base">
                  <span>Package</span>
                  <span className="whitespace-nowrap">{packageData.price}</span>
                  <span>{packageData.duration}</span>
                </div>
              )}
            </div>

            <div className="ui-card p-4 sm:p-7">
              <div className="mb-5 flex items-center gap-3 sm:mb-7">
                <FacilityIcon />
                <h2 className="text-2xl font-extrabold text-slate-950 sm:text-[28px]" style={{ fontFamily: "inherit" }}>
                  Facilities
                </h2>
              </div>

              {packageData.included && packageData.included.length > 0 ? (
                <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-slate-800 sm:p-5">
                  <h3 className="mb-3 text-base font-bold sm:text-lg">Included</h3>
                  <ul className="m-0 list-none space-y-1 p-0 text-sm leading-7 sm:text-base">
                    {packageData.included.map((item, idx) => (
                      <li key={idx}>- {item}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-slate-600 sm:p-5">
                  Included facility details will be provided soon.
                </div>
              )}

              {packageData.excluded && packageData.excluded.length > 0 && (
                <div className="mt-3 rounded-lg border border-slate-200 bg-slate-100 p-4 text-slate-600 sm:p-5">
                  <h3 className="mb-3 text-base font-bold sm:text-lg">Excluded</h3>
                  <ul className="m-0 list-none space-y-1 p-0 text-sm leading-7 sm:text-base">
                    {packageData.excluded.map((item, idx) => (
                      <li key={idx}>- {item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </aside>
        </section>

        {/* SEO package content */}
        <section className="mt-8 grid gap-4 sm:mt-12 lg:grid-cols-3">
          {packageSeoSections.map((section) => (
            <article key={section.title} className="ui-card p-5 sm:p-6">
              <p className="m-0 text-xs font-bold uppercase tracking-wide text-blue-700">Package Guide</p>
              <h2 className="m-0 mt-2 text-xl font-extrabold leading-snug text-slate-950">{section.title}</h2>
              <p className="m-0 mt-3 text-sm leading-7 text-slate-600">{section.body}</p>
            </article>
          ))}
        </section>

        <section className="mt-6 rounded-lg border border-blue-900/20 bg-blue-800 p-6 text-white shadow-sm sm:p-8">
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="m-0 text-sm font-bold uppercase tracking-wide text-white/75">Ready to check availability?</p>
              <h2 className="m-0 mt-2 text-2xl font-extrabold leading-tight sm:text-3xl">
                Send this package detail to WhatsApp and confirm your date.
              </h2>
            </div>
            <a
              href={packageWhatsAppUrl}
              target="_blank"
              rel="noreferrer"
              className="ui-btn w-full border-white bg-white text-blue-700 hover:bg-slate-50 sm:w-fit"
            >
              Ask About This Package
            </a>
          </div>
        </section>

        {/* FAQ & planning notes */}
        <section className="mt-8 grid gap-6 sm:mt-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(330px,0.95fr)]">
          <div className="ui-card p-4 sm:p-8">
            <div className="mb-6">
              <span className="ui-eyebrow mb-3">
                FAQ
              </span>
              <h2 className="m-0 text-2xl font-extrabold leading-tight text-slate-950 sm:text-[28px]">
                Frequently asked questions
              </h2>
            </div>

            <div className="space-y-3">
              {faqItems.map((item, index) => (
                <details key={item.question} className="package-detail-accordion rounded-lg border border-slate-200 bg-slate-50 p-4" open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-slate-950">
                    <span>{item.question}</span>
                    <ChevronDownIcon />
                  </summary>
                  <p className="m-0 mt-3 text-sm leading-7 text-slate-600 sm:text-base">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="ui-card p-4 sm:p-8">
            <div className="mb-6">
              <span className="ui-eyebrow mb-3">
                Before Booking
              </span>
              <h2 className="m-0 text-2xl font-extrabold leading-tight text-slate-950 sm:text-[28px]">
                Planning checklist
              </h2>
            </div>

            <div className="space-y-4">
              {planningChecklist.map((item, index) => (
                <article key={item.title} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-blue-700 text-sm font-extrabold text-white">
                    {index + 1}
                  </span>
                  <h3 className="m-0 mt-4 text-base font-extrabold leading-snug text-slate-950">{item.title}</h3>
                  <p className="m-0 mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
