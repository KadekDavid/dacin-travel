import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import packagesDetail from "@/data/packages-detail.json";

function ItineraryIcon() {
  return (
    <svg aria-hidden="true" className="h-10 w-10 shrink-0 text-[#0046FF]" viewBox="0 0 48 48" fill="none">
      <rect x="11" y="15" width="26" height="24" rx="5" stroke="currentColor" strokeWidth="3" />
      <path d="M18 15v-3c0-2 1.5-3.5 3.5-3.5h5c2 0 3.5 1.5 3.5 3.5v3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M15 27c3.5-3 6.5-3 9 0s5.5 3 9 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function PriceIcon() {
  return (
    <svg aria-hidden="true" className="h-10 w-10 shrink-0 text-[#0046FF]" viewBox="0 0 48 48" fill="none">
      <path d="M10 21 21 10c1.2-1.2 2.8-1.7 4.5-1.4l9 1.6c1.8.3 3.2 1.7 3.5 3.5l1.6 9c.3 1.7-.2 3.3-1.4 4.5L27 38.5c-1.9 1.9-5 1.9-6.9 0L10 28.9c-2.1-2.1-2.1-5.6 0-7.9Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M29 17.5h.1" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M19 24.5c0-2 1.8-3.4 4-3.4s4 1.4 4 3.4-1.8 3.4-4 3.4-4 1.4-4 3.4 1.8 3.4 4 3.4 4-1.4 4-3.4" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

function FacilityIcon() {
  return (
    <svg aria-hidden="true" className="h-10 w-10 shrink-0 text-[#0046FF]" viewBox="0 0 48 48" fill="none">
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

function HighlightsIcon() {
  return (
    <svg aria-hidden="true" className="h-10 w-10 shrink-0 text-[#0046FF]" viewBox="0 0 48 48" fill="none">
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

export default async function PackageDetailPage({
  params,
}: {
  params: { slug: string; packageSlug: string };
}) {
  const { slug, packageSlug } = await params;
  const destination = packagesDetail[slug as keyof typeof packagesDetail];

  if (!destination) notFound();

  const packageData = destination.packages.find((pkg) => pkg.slug === packageSlug);

  if (!packageData) notFound();

  return (
    <main className="overflow-x-hidden">
      <div className="mx-auto w-full max-w-[1280px] px-4 pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-10 lg:px-8 lg:pb-20 lg:pt-16">
        {/* Breadcrumb */}
        <div className="mb-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#6b7280] sm:mb-6 sm:text-sm">
          <Link href="/" className="font-semibold text-[#0046FF] no-underline">Home</Link>
          <Link href={`/paket-tour/${slug}`} className="text-[#6b7280] no-underline">
          </Link>
          <span>{">"}</span>
          <span className="min-w-0 break-words font-medium text-[#1f2937]">{packageData.name}</span>
        </div>

        {/* Header Package */}
        <section className="mb-8 overflow-hidden rounded-[22px] bg-white p-3 shadow-[0_30px_90px_rgba(15,23,42,0.09)] sm:mb-12 sm:rounded-[28px] sm:p-6 lg:p-8">
          <div className="grid gap-7 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] lg:items-stretch">
            <div className="relative min-h-[240px] overflow-hidden rounded-[18px] bg-[#eef3ff] sm:min-h-[360px] lg:min-h-[420px]">
              <Image
                src={packageData.image}
                alt={packageData.name}
                fill
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent p-5 sm:p-7">
               {/* <span className="mb-3 inline-flex rounded-full bg-[#0046FF] px-4 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-[0_10px_24px_rgba(0,70,255,0.35)]">
                  {packageData.type}
                </span>*/}
               {/* <p className="m-0 max-w-xl text-sm font-semibold text-white/90 sm:text-base">
                  Curated {destination.destination} travel experience
                </p>*/}
              </div>
            </div>

            <div className="flex min-w-0 flex-col justify-center px-1 pb-2 sm:px-0 sm:pb-0">
              <span className="mb-4 w-fit rounded-full border border-[#cbd8ff] bg-[#f8fbff] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#0046FF]">
                Package Details
              </span>

              <h1 className="m-0 text-2xl font-bold leading-tight text-[#111827] sm:text-4xl" style={{ fontFamily: "inherit" }}>
                {packageData.name}
              </h1>

              <div className="mt-5 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#eef3ff] px-4 py-2 text-sm font-semibold text-[#0046FF]">
                  <LocationIcon />
                  {packageData.location}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#eef3ff] px-4 py-2 text-sm font-semibold text-[#0046FF]">
                  <CalendarIcon />
                  {packageData.duration}
                </span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-[#4b5563] sm:mt-6 sm:text-base">
                {packageData.overview}
              </p>

              <div className="mt-5 border-t border-[#dbe6ff] pt-5 sm:mt-6 sm:pt-6">
                <span className="text-xs font-bold uppercase tracking-wide text-[#6b7280]">
                  Starting from
                </span>
                <p className="m-0 mt-1 text-3xl font-black text-[#0046FF] sm:text-4xl">
                  {packageData.price}
                </p>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0046FF] px-7 py-3.5 text-sm font-bold text-white shadow-[0_14px_30px_rgba(0,70,255,0.28)] transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
                >
                  Book Now
                  <ArrowRightIcon />
                </button>
                <a
                  href="#package-itinerary"
                  className="inline-flex w-full items-center justify-center rounded-full border border-[#cbd8ff] bg-white px-7 py-3.5 text-sm font-bold text-[#0046FF] no-underline sm:w-auto"
                >
                  View Itinerary
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        {packageData.highlights && packageData.highlights.length > 0 && (
          <section className="mb-8 rounded-[22px] bg-white p-4 shadow-[0_30px_80px_rgba(15,23,42,0.08)] sm:mb-12 sm:rounded-[24px] sm:p-7">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <HighlightsIcon />
                <h2 className="text-2xl font-bold text-[#737373] sm:text-[28px]" style={{ fontFamily: "inherit" }}>
                  Highlights
                </h2>
              </div>
              <span className="w-fit rounded-full bg-[#eef3ff] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#0046FF]">
                {packageData.highlights.length} featured moments
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {packageData.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex min-h-[88px] items-start gap-3 rounded-lg border border-[#dbe6ff] bg-[#f8fbff] p-4 shadow-[0_12px_28px_rgba(0,70,255,0.08)] sm:p-6 lg:p-7"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0046FF] text-white shadow-[0_8px_16px_rgba(0,70,255,0.28)]">
                    <HighlightCheckIcon />
                  </span>
                  <div className="min-w-0">
                    {/* <span className="mb-1 block text-[11px] font-bold uppercase tracking-wide text-[#0046FF]">
                      Highlight {String(idx + 1).padStart(2, "0")}
                    </span>*/}
                    <p className="m-0 text-sm font-semibold leading-relaxed text-[#2f3437] sm:text-base">
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
          <div className="min-w-0 rounded-[22px] bg-white p-4 shadow-[0_30px_80px_rgba(15,23,42,0.08)] sm:rounded-[24px] sm:p-8">
            <div className="mb-5 flex items-center gap-3 sm:mb-7">
              <ItineraryIcon />
              <h2 className="text-2xl font-bold text-[#737373] sm:text-[28px]" style={{ fontFamily: "inherit" }}>
                Itinerary
              </h2>
            </div>

            {packageData.itinerary && packageData.itinerary.length > 0 ? (
              <div className="space-y-5">
                {packageData.itinerary.map((day, idx) => (
                  <details key={idx} className="package-detail-accordion group" open={idx < 2}>
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-lg bg-gradient-to-r from-[#eef3ff] to-[#dbe6ff] px-4 py-4 text-[#0036c9] shadow-[0_2px_8px_rgba(0,70,255,0.12)] sm:gap-4 sm:px-6">
                      <span className="min-w-0 text-sm leading-snug sm:text-lg">
                        <span className="font-bold">Day #{day.day}</span>
                        <span className="ml-2 break-words font-medium text-[#0036c9]">{day.title}</span>
                      </span>
                      <ChevronDownIcon />
                    </summary>

                    <div className="px-1 pb-1 pt-5 sm:px-2">
                      <div className="grid grid-cols-[76px_minmax(0,1fr)] px-1 pb-2 text-[11px] font-bold uppercase tracking-wide text-[#818181] sm:grid-cols-[150px_minmax(0,1fr)] sm:text-sm">
                        <span>Time / Session</span>
                        <span>Activities</span>
                      </div>

                      <div>
                        {day.activities.map((activity, actIdx) => {
                          const row = getActivityRow(activity, actIdx);

                          return (
                            <div
                              key={actIdx}
                              className={`grid grid-cols-[76px_minmax(0,1fr)] gap-2 px-1 py-2.5 text-xs leading-relaxed sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-3 sm:text-base ${
                                actIdx % 2 === 0 ? "bg-[#f8fbff]" : "bg-white"
                              }`}
                            >
                              <span className="font-bold text-[#7a8490]">{row.time}</span>
                              <span className="text-[#202020]">{row.text}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl bg-[#f8fbff] p-5 text-[#737373]">
                The activity schedule will be provided soon.
              </div>
            )}
          </div>

          <aside className="min-w-0 space-y-5 sm:space-y-6">
            <div className="rounded-[22px] bg-white p-4 shadow-[0_30px_80px_rgba(15,23,42,0.08)] sm:rounded-[24px] sm:p-7">
              <div className="mb-5 flex items-center gap-3 sm:mb-7">
                <PriceIcon />
                <h2 className="text-2xl font-bold text-[#737373] sm:text-[28px]" style={{ fontFamily: "inherit" }}>
                  Pricing
                </h2>
              </div>

              <div className="hidden grid-cols-[0.85fr_minmax(132px,1.35fr)_1.1fr] gap-x-3 px-3 pb-3 text-xs font-bold uppercase tracking-wide text-[#818181] sm:grid sm:text-sm">
                <span>Guests</span>
                <span>Price</span>
                <span>Description</span>
              </div>
              <div className="grid gap-3 rounded-2xl bg-[#f8fbff] px-4 py-4 text-sm font-semibold text-[#111111] sm:grid-cols-[0.85fr_minmax(132px,1.35fr)_1.1fr] sm:items-center sm:gap-x-3 sm:rounded-none sm:px-3 sm:text-base">
                <span>
                  <span className="mb-1 block text-[11px] font-bold uppercase tracking-wide text-[#818181] sm:hidden">Guests</span>
                  Package
                </span>
                <span className="whitespace-nowrap">
                  <span className="mb-1 block text-[11px] font-bold uppercase tracking-wide text-[#818181] sm:hidden">Price</span>
                  {packageData.price}
                </span>
                <span>
                  <span className="mb-1 block text-[11px] font-bold uppercase tracking-wide text-[#818181] sm:hidden">Description</span>
                  {packageData.duration}
                </span>
              </div>
            </div>

            <div className="rounded-[22px] bg-white p-4 shadow-[0_30px_80px_rgba(15,23,42,0.08)] sm:rounded-[24px] sm:p-7">
              <div className="mb-5 flex items-center gap-3 sm:mb-7">
                <FacilityIcon />
                <h2 className="text-2xl font-bold text-[#737373] sm:text-[28px]" style={{ fontFamily: "inherit" }}>
                  Facilities
                </h2>
              </div>

              {packageData.included && packageData.included.length > 0 ? (
                <div className="rounded-2xl bg-[#eef3ff] p-4 text-[#1f2f60] sm:p-5">
                  <h3 className="mb-3 text-base font-bold sm:text-lg">Included</h3>
                  <ul className="m-0 list-none space-y-1 p-0 text-sm leading-relaxed sm:text-base">
                    {packageData.included.map((item, idx) => (
                      <li key={idx}>- {item}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="rounded-2xl bg-[#eef3ff] p-4 text-[#53628f] sm:p-5">
                  Included facility details will be provided soon.
                </div>
              )}

              {packageData.excluded && packageData.excluded.length > 0 && (
                <div className="mt-3 rounded-2xl bg-[#f3f3f3] p-4 text-[#7a7a7a] sm:p-5">
                  <h3 className="mb-3 text-base font-bold sm:text-lg">Excluded</h3>
                  <ul className="m-0 list-none space-y-1 p-0 text-sm leading-relaxed sm:text-base">
                    {packageData.excluded.map((item, idx) => (
                      <li key={idx}>- {item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
