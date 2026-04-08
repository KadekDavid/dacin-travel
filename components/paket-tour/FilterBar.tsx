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
    <div
      style={{
        display: "flex",
        justifyContent: "center", // ← memusatkan horizontal
        gap: "16px",
        marginBottom: "40px",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <select
        value={selectedSlug}
        onChange={(e) => setSelectedSlug(e.target.value)}
        style={{
          padding: "12px 20px",
          borderRadius: "40px",
          border: "1px solid #e2e8f0",
          backgroundColor: "white",
          fontSize: "14px",
          fontWeight: "500",
          color: "#1e293b",
          cursor: "pointer",
          outline: "none",
        }}
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
        style={{
          padding: "12px 20px",
          borderRadius: "40px",
          border: "1px solid #e2e8f0",
          backgroundColor: "white",
          fontSize: "14px",
          fontWeight: "500",
          color: "#1e293b",
          cursor: "pointer",
          outline: "none",
        }}
      >
        <option>Semua Jenis Trip</option>
        <option>OPEN TRIP</option>
        <option>PRIVATE TRIP</option>
      </select>

      <button
        onClick={handleSearch}
        style={{
          padding: "12px 28px",
          borderRadius: "40px",
          border: "none",
          backgroundColor: "#ff8a00",
          color: "white",
          fontSize: "14px",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "background 0.3s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ea580c")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#f97316")}
      >
        Cari
      </button>
    </div>
  );
}