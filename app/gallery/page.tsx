import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Dacin Travel",
  description: "Explore Bali travel moments, beaches, culture, nature routes, and package inspiration from Dacin Travel.",
};

const galleryItems = [
  {
    title: "Nusa Dua Beach",
    category: "Beach",
    image: "https://res.cloudinary.com/dh1vnkssv/image/upload/v1777443582/nusadua_s8l2hp.jpg",
  },
  {
    title: "Adventure Route",
    category: "Nature",
    image: "https://res.cloudinary.com/dh1vnkssv/image/upload/v1777443801/advanture_mdfcry.jpg",
  },
  {
    title: "Short Escape Moment",
    category: "Culture",
    image: "https://res.cloudinary.com/dh1vnkssv/image/upload/v1777443911/escape_l4sfoo.jpg",
  },
  {
    title: "Bali Holiday View",
    category: "Experience",
    image: "https://res.cloudinary.com/dh1vnkssv/image/upload/f_auto,q_auto/hero_tllhfl",
  },
  {
    title: "Premium Relaxation",
    category: "Luxury",
    image: "https://res.cloudinary.com/dh1vnkssv/image/upload/v1777443582/nusadua_s8l2hp.jpg",
  },
  {
    title: "Cultural Day Trip",
    category: "Culture",
    image: "https://res.cloudinary.com/dh1vnkssv/image/upload/v1777443801/advanture_mdfcry.jpg",
  },
];

export default function GalleryPage() {
  return (
    <main className="overflow-x-hidden">
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pt-12 lg:px-8 lg:pt-16">
        <div className="mb-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="ui-eyebrow mb-4">
              Gallery
            </span>
            <h1 className="m-0 text-3xl font-extrabold leading-tight text-slate-950 sm:text-5xl">
              Bali moments for your next trip
            </h1>
          </div>
          <p className="m-0 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base lg:justify-self-end">
            A simple visual preview of beaches, cultural routes, and travel moments. The photos can be replaced anytime once your final gallery assets are ready.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className={`group relative min-h-[280px] overflow-hidden rounded-lg border border-slate-200 bg-slate-50 shadow-sm ${
                index === 0 ? "lg:col-span-2 lg:min-h-[420px]" : ""
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                priority={index === 0}
                sizes={index === 0 ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="inline-flex rounded-md border border-white/30 bg-white/90 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-blue-700">
                  {item.category}
                </span>
                <h2 className="m-0 mt-3 text-2xl font-extrabold leading-tight text-white">{item.title}</h2>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-lg border border-blue-900/20 bg-blue-800 p-6 text-center text-white shadow-sm sm:p-8">
          <h2 className="m-0 text-2xl font-extrabold">Ready to see Bali in person?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
            Choose a package and let the team help shape the route around your schedule.
          </p>
          <Link
            href="/paket-tour"
            className="ui-btn mt-5 border-white bg-white text-blue-700 hover:bg-slate-50"
          >
            View Packages
          </Link>
        </div>
      </section>
    </main>
  );
}
