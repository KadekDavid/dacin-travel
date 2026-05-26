"use client";

import { useState } from "react";
import Image from "next/image";

type HomeGallerySlide = {
  title: string;
  image: string;
};

type HomeGallerySliderProps = {
  slides: HomeGallerySlide[];
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

export default function HomeGallerySlider({ slides }: HomeGallerySliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  if (slides.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="relative h-[280px] overflow-hidden rounded-lg bg-slate-100 sm:h-[430px] lg:h-[520px]">
        {slides.map((slide, index) => (
          <Image
            key={slide.title}
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            sizes="(min-width: 1024px) 58vw, 100vw"
            className={`object-cover transition-opacity duration-500 ${
              activeIndex === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute bottom-5 left-5 right-5">
          <p className="m-0 text-2xl font-extrabold leading-tight text-white sm:text-4xl">
            {slides[activeIndex].title}
          </p>
        </div>

        <button
          type="button"
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md border border-slate-200 bg-white/95 text-blue-700 shadow-sm transition hover:bg-slate-50 sm:left-5"
          aria-label="Previous image"
        >
          <ArrowIcon direction="left" />
        </button>
        <button
          type="button"
          onClick={goToNext}
          className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md border border-slate-200 bg-white/95 text-blue-700 shadow-sm transition hover:bg-slate-50 sm:right-5"
          aria-label="Next image"
        >
          <ArrowIcon direction="right" />
        </button>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={`${slide.title}-dot`}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="flex h-10 w-10 items-center justify-center rounded-md transition hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-blue-700/10"
            aria-label={`Show ${slide.title}`}
          >
            <span
              className={`h-2.5 rounded-lg transition-all ${
                activeIndex === index ? "w-8 bg-blue-700" : "w-2.5 bg-slate-300"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
