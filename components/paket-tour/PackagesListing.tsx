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
      <div className="mb-7 flex flex-wrap gap-2">
        {packageTypes.map((type) => {
          const isActive = activeType === type;

          return (
            <button
              key={type}
              type="button"
              onClick={() => setActiveType(type)}
              className={`min-h-11 rounded-full border px-5 text-sm font-bold transition ${
                isActive
                  ? "border-[#0046FF] bg-[#0046FF] text-white shadow-[0_14px_30px_rgba(0,70,255,0.2)]"
                  : "border-[#dbe6ff] bg-white text-[#0046FF] hover:border-[#0046FF]"
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
            className="group flex h-full overflow-hidden rounded-[26px] bg-white text-inherit no-underline shadow-[0_22px_54px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(0,70,255,0.14)]"
          >
            <article className="flex h-full w-full flex-col">
              <div className="relative h-52 shrink-0 bg-[#eef3ff] sm:h-56">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-[#0046FF] shadow-[0_10px_24px_rgba(15,23,42,0.14)]">
                  {item.type}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="mb-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#eef3ff] px-3 py-1.5 text-xs font-bold text-[#0046FF]">
                    {item.duration}
                  </span>
                  <span className="rounded-full bg-[#f3f6ff] px-3 py-1.5 text-xs font-bold text-[#667085]">
                    {item.location}
                  </span>
                </div>

                <h2 className="m-0 line-clamp-2 min-h-[56px] text-xl font-extrabold leading-snug text-[#101828]">{item.name}</h2>
                <p className="m-0 mt-3 line-clamp-2 min-h-[52px] text-sm leading-relaxed text-[#667085]">{item.overview}</p>

                <div className="mt-auto border-t border-[#dbe6ff] pt-4">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#667085]">Starting from</span>
                  <p className="m-0 mt-1 text-2xl font-black text-[#0046FF]">{item.price}</p>
                </div>

                <span className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#0046FF] px-5 text-sm font-bold text-white">
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
