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
            <span className="mb-3 inline-flex rounded-full bg-[#eef3ff] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#0046FF]">
              Travel Experience
            </span>
            <h2 className="m-0 text-2xl font-extrabold leading-tight tracking-tight text-[#101828] sm:text-4xl">
              More reasons to plan your Bali trip with confidence
            </h2>
          </div>
          <p className="m-0 max-w-2xl text-sm leading-relaxed text-[#667085] sm:text-base lg:justify-self-end">
            A good holiday is not only about the destination. It is also about clear planning, smooth timing, and a route that feels comfortable from start to finish.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {strengths.map((item, index) => (
            <article
              key={item.title}
              className="rounded-[24px] border border-[#dbe6ff] bg-white p-6 shadow-[0_18px_48px_rgba(15,23,42,0.06)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0046FF] text-sm font-extrabold text-white shadow-[0_16px_30px_rgba(0,70,255,0.22)]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <p className="m-0 text-xs font-bold uppercase tracking-wide text-[#0046FF]">{item.label}</p>
              <h3 className="m-0 mt-2 text-xl font-bold leading-snug text-[#101828]">{item.title}</h3>
              <p className="m-0 mt-3 text-sm leading-relaxed text-[#667085]">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="overflow-hidden rounded-[28px] bg-white p-3 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-4">
            <HomeGallerySlider slides={gallery.slice(0, 3)} />

            <div className="mt-4 rounded-[22px] border border-[#dbe6ff] bg-[#f8fbff] p-5">
              <p className="m-0 text-xs font-bold uppercase tracking-wide text-[#0046FF]">Popular Bali moments</p>
              <h3 className="m-0 mt-2 text-2xl font-extrabold leading-tight text-[#101828]">
                Add meaningful stops between your main destinations.
              </h3>
              <p className="m-0 mt-3 text-sm leading-relaxed text-[#667085]">
                We help arrange the small details that make the day feel complete, from a relaxed lunch stop to sunset timing and easy hotel transfers.
              </p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {moments.map((moment) => (
                  <div key={moment} className="rounded-2xl bg-white px-4 py-3 text-sm font-bold text-[#101828] shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
                    {moment}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 self-start">
            <div className="flex min-h-[280px] flex-col justify-center rounded-[28px] bg-[#0046FF] p-6 text-white shadow-[0_24px_70px_rgba(0,70,255,0.2)] sm:min-h-[430px] sm:p-7 lg:min-h-[520px] lg:p-10">
              <p className="m-0 text-sm font-bold uppercase tracking-wide text-white/75">Ready for Bali?</p>
              <h3 className="m-0 mt-3 text-2xl font-extrabold leading-tight sm:text-3xl">
                Choose a package, then shape the details around your group.
              </h3>
              <Link
                href="/paket-tour"
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-6 text-sm font-bold text-[#0046FF] no-underline transition hover:-translate-y-0.5 sm:w-fit"
              >
                View Packages
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {testimonials.map((item) => (
                <article key={item.name} className="rounded-[24px] border border-[#dbe6ff] bg-white p-5 shadow-[0_18px_48px_rgba(15,23,42,0.06)]">
                  <p className="m-0 text-base font-semibold leading-relaxed text-[#101828]">&quot;{item.quote}&quot;</p>
                  <p className="m-0 mt-4 text-sm font-bold text-[#0046FF]">{item.name}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
