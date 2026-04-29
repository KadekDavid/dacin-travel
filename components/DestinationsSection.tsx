// components/DestinationsSection.tsx
import destinations from "@/data/destinations.json";
import DestinationCard from "./DestinationCard";

export default function DestinationsSection() {
  return (
    <section className="px-4 py-10 sm:px-6 md:px-8 md:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading - Responsif */}
        <h2 className="mb-6 text-center text-2xl font-semibold leading-tight text-gray-800 sm:text-3xl md:mb-10 md:text-4xl lg:text-left">
          <span className="block sm:inline lg:block">Customized Bali Tours for</span>{" "}
          <span className="block sm:inline lg:block">Your Perfect Holiday!</span>
        </h2>

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
