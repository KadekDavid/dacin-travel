// components/HeroSection.tsx
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        
        {/* TEXT - kiri, di mobile tengah, di desktop kiri */}
        <div className="flex justify-center lg:justify-start">
          <div className="w-full max-w-[640px] space-y-4 sm:space-y-5 md:space-y-6 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
              Discover the Hidden Paradise of Bali
            </h1>
            <p className="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed text-justify sm:text-left">
              From stunning beaches and cultural temples to unforgettable adventures,
              we bring you the ultimate Bali holiday experience.
            </p>
          </div>
        </div>

        {/* IMAGE - kanan, di mobile tengah */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] xl:w-[520px] xl:h-[520px] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/images/hero-home.jpg"
              alt="Bali Tour Destination"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}