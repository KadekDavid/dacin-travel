import Link from "next/link";
import HomeGallerySlider from "./HomeGallerySlider";

const strengths = [
  {
    label: "Flexible Trips",
    title: "Itinerary that follows your pace",
    description: "Routes are arranged around your travel style, group needs, and preferred hotel area.",
  },
  {
    label: "Local Support",
    title: "Clear help from planning to pickup",
    description: "Get practical destination advice, timing notes, and support before your Bali trip starts.",
  },
  {
    label: "Clean Pricing",
    title: "Simple package details",
    description: "Know what is included, what is excluded, and how each package fits your budget.",
  },
];

const gallery = [
  {
    title: "Nusa Dua",
    image: "https://res.cloudinary.com/dh1vnkssv/image/upload/v1777443582/nusadua_s8l2hp.jpg",
  },
  {
    title: "Adventure Route",
    image: "https://res.cloudinary.com/dh1vnkssv/image/upload/v1777443801/advanture_mdfcry.jpg",
  },
  {
    title: "Short Escape",
    image: "https://res.cloudinary.com/dh1vnkssv/image/upload/v1777443911/escape_l4sfoo.jpg",
  },
];

const testimonials = [
  {
    name: "Family Holiday",
    quote: "The schedule felt comfortable and every stop was easy to follow.",
  },
  {
    name: "Private Group",
    quote: "Pickup, transport, and destination timing were handled clearly.",
  },
];

const moments = ["Beach sunset", "Temple visit", "Local dining", "Hotel pickup"];

export default function HomeExperienceSection() {
  return (
    <section className="px-4 pb-16 pt-4 sm:px-6 sm:pb-20 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="ui-eyebrow mb-3">
              Travel Experience
            </span>
            <h2 className="m-0 text-2xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl">
              More reasons to plan your Bali trip with confidence
            </h2>
          </div>
          <p className="m-0 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base lg:justify-self-end">
            A good holiday is not only about the destination. It is also about clear planning, smooth timing, and a route that feels comfortable from start to finish.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {strengths.map((item, index) => (
            <article
              key={item.title}
              className="ui-card p-6"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-blue-700 text-sm font-extrabold text-white shadow-sm">
                {String(index + 1).padStart(2, "0")}
              </div>
              <p className="m-0 text-xs font-bold uppercase tracking-wide text-blue-700">{item.label}</p>
              <h3 className="m-0 mt-2 text-xl font-bold leading-snug text-slate-950">{item.title}</h3>
              <p className="m-0 mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="ui-card overflow-hidden p-3 sm:p-4">
            <HomeGallerySlider slides={gallery.slice(0, 3)} />

            <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-5">
              <p className="m-0 text-xs font-bold uppercase tracking-wide text-blue-700">Popular Bali moments</p>
              <h3 className="m-0 mt-2 text-2xl font-extrabold leading-tight text-slate-950">
                Add meaningful stops between your main destinations.
              </h3>
              <p className="m-0 mt-3 text-sm leading-7 text-slate-600">
                We help arrange the small details that make the day feel complete, from a relaxed lunch stop to sunset timing and easy hotel transfers.
              </p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {moments.map((moment) => (
                  <div key={moment} className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-950 shadow-sm">
                    {moment}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 self-start">
            <div className="flex min-h-[280px] flex-col justify-center rounded-lg border border-blue-900/20 bg-blue-800 p-6 text-white shadow-sm sm:min-h-[430px] sm:p-7 lg:min-h-[520px] lg:p-10">
              <p className="m-0 text-sm font-bold uppercase tracking-wide text-white/75">Ready for Bali?</p>
              <h3 className="m-0 mt-3 text-2xl font-extrabold leading-tight sm:text-3xl">
                Choose a package, then shape the details around your group.
              </h3>
              <Link
                href="/paket-tour"
                className="ui-btn mt-6 w-full border-white bg-white text-blue-700 hover:bg-slate-50 sm:w-fit"
              >
                View Packages
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {testimonials.map((item) => (
                <article key={item.name} className="ui-card p-5">
                  <p className="m-0 text-base font-semibold leading-7 text-slate-950">&quot;{item.quote}&quot;</p>
                  <p className="m-0 mt-4 text-sm font-bold text-blue-700">{item.name}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
