// components/HeroSection.tsx
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="px-4 py-10 sm:px-6 sm:py-14 md:px-8 md:py-[72px] lg:px-12 lg:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Hero copy */}
        <div className="flex justify-center lg:justify-start">
          <div className="w-full max-w-[640px] space-y-4 text-center sm:space-y-5 md:space-y-6 lg:text-left">
            <span className="ui-eyebrow">
              Curated Bali Tours
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl xl:text-6xl">
              Discover the Hidden Paradise of Bali
            </h1>
            <p className="mx-auto max-w-[560px] text-center text-sm leading-7 text-slate-600 sm:text-base md:text-lg lg:mx-0 lg:text-left">
              From stunning beaches and cultural temples to unforgettable adventures,
              we bring you the ultimate Bali holiday experience.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-center lg:justify-start">
              <Link href="/paket-tour" className="ui-btn ui-btn-primary">
                Explore Tours
              </Link>
              <Link href="/tentang" className="ui-btn ui-btn-secondary">
                About Us
              </Link>
            </div>
          </div>
        </div>

        {/* Hero media */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative aspect-[4/5] w-full max-w-[340px] overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-sm sm:max-w-[420px] lg:max-w-[500px] xl:max-w-[520px]">
            <Image
              src="https://res.cloudinary.com/dh1vnkssv/image/upload/f_auto,q_auto/hero_tllhfl"
              alt="Bali Tour Destination"
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 520px, (min-width: 1024px) 500px, (min-width: 768px) 440px, 86vw"
              priority
            />
            <div className="absolute inset-x-5 bottom-5 rounded-lg border border-white/40 bg-white/95 p-4 shadow-sm backdrop-blur">
              <p className="m-0 text-xs font-bold uppercase tracking-wide text-blue-700">Bali Experience</p>
              <p className="m-0 mt-1 text-sm font-semibold text-slate-950">Designed for comfort, culture, and memorable moments.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
