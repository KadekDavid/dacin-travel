// components/DestinationsSection.tsx
import destinations from "@/data/destinations.json";
import DestinationCard from "./DestinationCard";

export default function DestinationsSection() {
  return (
    <section id="destinations" className="px-4 py-10 sm:px-6 md:px-8 md:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-7 flex flex-col gap-4 text-center lg:mb-10 lg:flex-row lg:items-end lg:justify-between lg:text-left">
          <div>
            <span className="mb-3 inline-flex rounded-full bg-[#eef3ff] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#0046FF]">
              Packages
            </span>
            <h2 className="m-0 text-2xl font-extrabold leading-tight tracking-tight text-[#101828] sm:text-4xl">
              Customized Bali Tours for Your Perfect Holiday
            </h2>
          </div>
          <p className="mx-auto m-0 max-w-xl text-sm leading-relaxed text-[#667085] sm:text-base lg:mx-0">
            Choose a travel style that fits your rhythm, from luxury relaxation to quick weekend escapes.
          </p>
        </div>

        {/* Responsive Grid - Kolom & gap menyesuaikan layar */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {destinations.map((dest) => (
            <DestinationCard
              key={dest.id}
              name={dest.name}
              slug={dest.slug}
              tours={dest.tours}
              imagePath={dest.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
