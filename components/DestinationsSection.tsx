// components/DestinationsSection.tsx
import destinations from "@/data/destinations.json";
import DestinationCard from "./DestinationCard";

export default function DestinationsSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading - Responsif */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-6 md:mb-10 text-center lg:text-left">
          Customized Bali Tours for<br /> 
          Your Perfect Holiday!
        </h2>

        {/* Responsive Grid - Kolom & gap menyesuaikan layar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
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