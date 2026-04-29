"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface FilterBarProps {
  currentSlug: string;
  destinations: { slug: string; name: string }[];
}

export default function FilterBar({ currentSlug, destinations }: FilterBarProps) {
  const router = useRouter();
  const [selectedSlug, setSelectedSlug] = useState(currentSlug);
  const [tripType, setTripType] = useState("Semua Jenis Trip");

  const handleSearch = () => {
    router.push(`/paket-tour/${selectedSlug}`);
  };

  return (
    <div className="mb-8 grid w-full grid-cols-1 gap-3 sm:mb-10 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] sm:items-center">
      <select
        value={selectedSlug}
        onChange={(e) => setSelectedSlug(e.target.value)}
        className="min-h-12 w-full rounded-full border border-[#e2e8f0] bg-white px-5 text-sm font-medium text-[#1e293b] outline-none"
      >
        {destinations.map((dest) => (
          <option key={dest.slug} value={dest.slug}>
            {dest.name.toUpperCase()}
          </option>
        ))}
      </select>

      <select
        value={tripType}
        onChange={(e) => setTripType(e.target.value)}
        className="min-h-12 w-full rounded-full border border-[#e2e8f0] bg-white px-5 text-sm font-medium text-[#1e293b] outline-none"
      >
        <option>Semua Jenis Trip</option>
        <option>OPEN TRIP</option>
        <option>PRIVATE TRIP</option>
      </select>

      <button
        onClick={handleSearch}
        className="min-h-12 w-full rounded-full border-0 bg-[#0046FF] px-7 text-sm font-bold text-white transition-colors hover:bg-[#0036c9] sm:w-auto"
      >
        Cari
      </button>
    </div>
  );
}
