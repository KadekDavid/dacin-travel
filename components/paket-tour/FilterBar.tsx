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
  const [tripType, setTripType] = useState("All Trip Types");

  const handleSearch = () => {
    router.push(`/packages/${selectedSlug}`);
  };

  return (
    <div className="ui-card mb-8 grid w-full grid-cols-1 gap-3 p-3 sm:mb-10 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] sm:items-center">
      <select
        value={selectedSlug}
        onChange={(e) => setSelectedSlug(e.target.value)}
        className="ui-input w-full"
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
        className="ui-input w-full"
      >
        <option>All Trip Types</option>
        <option>OPEN TRIP</option>
        <option>PRIVATE TRIP</option>
      </select>

      <button
        onClick={handleSearch}
        className="ui-btn ui-btn-primary w-full sm:w-auto"
      >
        Search
      </button>
    </div>
  );
}
