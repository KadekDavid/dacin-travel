"use client";

import { useState } from "react";
import Image from "next/image";

type PackageGallerySliderProps = {
  images: string[];
  packageName: string;
};

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 20 20" fill="none">
      {direction === "left" ? (
        <path d="M12.5 4.5 7 10l5.5 5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M7.5 4.5 13 10l-5.5 5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

export default function PackageGallerySlider({ images, packageName }: PackageGallerySliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  };

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="relative overflow-hidden rounded-[22px] bg-[#eef3ff]">
      <div className="relative h-[300px] w-full sm:h-[460px] lg:h-[560px]">
        {images.map((image, index) => (
          <Image
            key={`${image}-${index}`}
            src={image}
            alt={`${packageName} gallery ${index + 1}`}
            fill
            priority={index === 0}
            sizes="(min-width: 1280px) 1180px, (min-width: 1024px) 92vw, 100vw"
            className={`object-cover transition-opacity duration-500 ${
              activeIndex === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
      </div>

      <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-4 sm:bottom-5 sm:left-5 sm:right-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl">
          <span className="inline-flex rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-[#0046FF] shadow-[0_10px_24px_rgba(15,23,42,0.15)]">
            Moment {activeIndex + 1} of {images.length}
          </span>
          <h3 className="m-0 mt-3 text-2xl font-extrabold leading-tight text-white sm:text-4xl">
            {activeIndex === 0 ? "Main Experience" : "Bali Travel Moment"}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={goToPrevious}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-[#0046FF] shadow-[0_12px_26px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5"
            aria-label="Previous gallery image"
          >
            <ArrowIcon direction="left" />
          </button>
          <button
            type="button"
            onClick={goToNext}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-[#0046FF] shadow-[0_12px_26px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5"
            aria-label="Next gallery image"
          >
            <ArrowIcon direction="right" />
          </button>
        </div>
      </div>

      <div className="absolute left-4 right-4 top-4 flex gap-2 sm:left-5 sm:right-5 sm:top-5">
        {images.map((image, index) => (
          <button
            key={`${image}-dot-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-1.5 flex-1 rounded-full transition ${
              activeIndex === index ? "bg-white" : "bg-white/35 hover:bg-white/65"
            }`}
            aria-label={`Show gallery image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
