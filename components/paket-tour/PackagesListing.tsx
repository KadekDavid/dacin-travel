"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getPackageTypes, type PackageSummary } from "@/lib/package-utils";

type PackagesListingProps = {
  packages: PackageSummary[];
  initialType?: string;
};

function ArrowRightIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 16 16" fill="none">
      <path d="M3 8h9.5M8.8 4.3 12.5 8l-3.7 3.7" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PackagesListing({ packages, initialType = "All" }: PackagesListingProps) {
  const packageTypes = useMemo(() => getPackageTypes(packages), [packages]);
  const [activeType, setActiveType] = useState(packageTypes.includes(initialType) ? initialType : "All");
  const filteredPackages = activeType === "All" ? packages : packages.filter((item) => item.type === activeType);

  return (
    <div>
      <div className="mb-7 flex flex-wrap gap-2 rounded-lg border border-slate-200 bg-white p-2 shadow-sm">
        {packageTypes.map((type) => {
          const isActive = activeType === type;

          return (
            <button
              key={type}
              type="button"
              onClick={() => setActiveType(type)}
              className={`min-h-10 rounded-md border px-4 text-sm font-bold transition focus:outline-none focus:ring-4 ${
                isActive
                  ? "border-blue-700 bg-blue-700 text-white shadow-sm focus:ring-blue-700/20"
                  : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 focus:ring-slate-300/40"
              }`}
            >
              {type === "All" ? "All Packages" : type}
            </button>
          );
        })}
      </div>

      <div className="grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPackages.map((item) => (
          <Link
            key={item.id}
            href={item.detailUrl}
            className="group flex h-full overflow-hidden rounded-lg border border-slate-200 bg-white text-inherit no-underline shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
          >
            <article className="flex h-full w-full flex-col">
              <div className="relative h-52 shrink-0 bg-slate-100 sm:h-56">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 rounded-md border border-slate-200 bg-white/95 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-blue-700 shadow-sm">
                  {item.type}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="mb-3 flex flex-wrap gap-2">
                  <span className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-blue-700">
                    {item.duration}
                  </span>
                  <span className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-600">
                    {item.location}
                  </span>
                </div>

                <h2 className="m-0 line-clamp-2 min-h-[56px] text-xl font-extrabold leading-snug text-slate-950">{item.name}</h2>
                <p className="m-0 mt-3 line-clamp-2 min-h-[52px] text-sm leading-6 text-slate-600">{item.overview}</p>

                <div className="mt-auto border-t border-slate-200 pt-4">
                  <span className="text-xs font-bold uppercase tracking-wide text-slate-500">Starting from</span>
                  <p className="m-0 mt-1 text-2xl font-black text-blue-700">{item.price}</p>
                </div>

                <span className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md border border-blue-700 bg-blue-700 px-5 text-sm font-bold text-white transition group-hover:bg-blue-800">
                  View Detail
                  <ArrowRightIcon />
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
