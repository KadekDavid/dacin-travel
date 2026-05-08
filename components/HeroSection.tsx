// components/HeroSection.tsx
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="px-4 py-10 sm:px-6 sm:py-14 md:px-8 md:py-[72px] lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16">
        
        {/* TEXT - kiri, di mobile tengah, di desktop kiri */}
        <div className="flex justify-center lg:justify-start">
          <div className="w-full max-w-[640px] space-y-4 text-center sm:space-y-5 md:space-y-6 lg:text-left">
            <span className="inline-flex rounded-full border border-[#dbe6ff] bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#0046FF] shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
              Curated Bali Tours
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-[#101828] sm:text-5xl xl:text-6xl">
              Discover the Hidden Paradise of Bali
            </h1>
            <p className="mx-auto max-w-[560px] text-center text-sm leading-relaxed text-[#667085] sm:text-base md:text-lg lg:mx-0 lg:text-left">
              From stunning beaches and cultural temples to unforgettable adventures,
              we bring you the ultimate Bali holiday experience.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-center lg:justify-start">
              <Link href="/paket-tour" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#0046FF] px-7 text-sm font-bold text-white no-underline shadow-[0_16px_34px_rgba(0,70,255,0.24)]">
                Explore Tours
              </Link>
              <Link href="/tentang" className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#dbe6ff] bg-white px-7 text-sm font-bold text-[#0046FF] no-underline">
                About Us
              </Link>
            </div>
          </div>
        </div>

        {/* IMAGE - kanan, di mobile tengah */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative aspect-[4/5] w-full max-w-[340px] overflow-hidden rounded-[28px] border border-white bg-[#eef3ff] shadow-[0_30px_80px_rgba(15,23,42,0.16)] sm:max-w-[420px] lg:max-w-[500px] xl:max-w-[520px]">
            <Image
              src="https://res.cloudinary.com/dh1vnkssv/image/upload/f_auto,q_auto/hero_tllhfl"
              alt="Bali Tour Destination"
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 520px, (min-width: 1024px) 500px, (min-width: 768px) 440px, 86vw"
              priority
            />
            <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/25 bg-white/90 p-4 shadow-[0_18px_38px_rgba(15,23,42,0.14)] backdrop-blur">
              <p className="m-0 text-xs font-bold uppercase tracking-wide text-[#0046FF]">Bali Experience</p>
              <p className="m-0 mt-1 text-sm font-semibold text-[#101828]">Designed for comfort, culture, and memorable moments.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
