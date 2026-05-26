const trustPoints = [
  {
    title: "Clear itinerary before booking",
    description: "Each package shows route flow, inclusions, exclusions, vehicle options, and starting price before you contact the team.",
  },
  {
    title: "Private tour planning support",
    description: "Pickup area, date, group size, and package fit can be discussed first so the route makes sense for your travel plan.",
  },
  {
    title: "Transparent package structure",
    description: "Pricing is grouped by vehicle and guest count, making it easier to compare the most suitable option for your group.",
  },
  {
    title: "Bali-focused route selection",
    description: "Packages are organized around day tours, adventure routes, and family-friendly experiences across popular Bali areas.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="px-4 py-10 sm:px-6 sm:py-14 md:px-8 lg:px-12">
      <div className="ui-card mx-auto max-w-7xl p-5 sm:p-8 lg:p-10">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <span className="ui-eyebrow mb-3">Why Choose Us</span>
            <h2 className="m-0 text-2xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl">
              Built for clear Bali trip planning from the first chat
            </h2>
          </div>
          <p className="m-0 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base lg:justify-self-end">
            Since this travel service is being prepared carefully, the website focuses on honest package information, clear planning steps, and transparent route details instead of unverified claims.
          </p>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {trustPoints.map((point, index) => (
            <article key={point.title} className="ui-card-muted p-5">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-blue-700 text-sm font-extrabold text-white shadow-sm">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="m-0 text-lg font-extrabold leading-snug text-slate-950">{point.title}</h3>
              <p className="m-0 mt-3 text-sm leading-6 text-slate-600">{point.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
