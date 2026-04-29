// components/HeroSection.tsx
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
        
        {/* TEXT - kiri, di mobile tengah, di desktop kiri */}
        <div className="flex justify-center lg:justify-start">
          <div className="w-full max-w-[640px] space-y-4 text-center sm:space-y-5 md:space-y-6 lg:text-left">
            <h1 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl md:text-5xl xl:text-6xl">
              Discover the Hidden Paradise of Bali
            </h1>
            <p className="mx-auto max-w-[560px] text-center text-sm leading-relaxed text-gray-500 sm:text-base md:text-lg lg:mx-0 lg:text-left">
              From stunning beaches and cultural temples to unforgettable adventures,
              we bring you the ultimate Bali holiday experience.
            </p>
          </div>
        </div>

        {/* IMAGE - kanan, di mobile tengah */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative aspect-square w-full max-w-[300px] overflow-hidden rounded-[22px] shadow-2xl sm:max-w-[380px] md:max-w-[440px] lg:max-w-[500px] xl:max-w-[520px]">
            <Image
              src="https://res.cloudinary.com/dh1vnkssv/image/upload/f_auto,q_auto/hero_tllhfl"
              alt="Bali Tour Destination"
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 520px, (min-width: 1024px) 500px, (min-width: 768px) 440px, 86vw"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
