// components/DestinationsSection.tsx
import destinations from "@/data/destinations.json";
import DestinationCard from "./DestinationCard";

export default function DestinationsSection() {
  return (
    <section id="destinations" className="px-4 py-10 sm:px-6 md:px-8 md:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-7 flex flex-col gap-4 text-center lg:mb-10 lg:flex-row lg:items-end lg:justify-between lg:text-left">
          <div>
            <span className="ui-eyebrow mb-3">
              Packages
            </span>
            <h2 className="m-0 text-2xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl">
              Customized Bali Tours for Your Perfect Holiday
            </h2>
          </div>
          <p className="mx-auto m-0 max-w-xl text-sm leading-7 text-slate-600 sm:text-base lg:mx-0">
            Choose from final day tours, adventure routes, and family-friendly Bali experiences.
          </p>
        </div>

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
