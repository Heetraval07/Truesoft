import { useState } from "react";
import { publicUrl } from "@/lib/publicUrl";

const slides = [
  { src: publicUrl("illustrations/image-1.jpeg"), alt: "ERPNext Dashboard Preview 1" },
  { src: publicUrl("illustrations/image-2.jpeg"), alt: "ERPNext Dashboard Preview 2" },
  { src: publicUrl("illustrations/image-3.jpeg"), alt: "ERPNext Dashboard Preview 3" },
];

const DashboardPreview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = slides.length;

  const goPrev = () => setCurrentIndex((i) => (i - 1 + total) % total);
  const goNext = () => setCurrentIndex((i) => (i + 1) % total);

  return (
    <section className="w-full overflow-hidden px-4 sm:px-6 lg:px-8">
      <div
        className="max-w-7xl mx-auto py-12 sm:py-16 lg:py-24 rounded-3xl overflow-hidden px-4 sm:px-6 lg:px-12"
        style={{
          background: "linear-gradient(135deg, #0B2A4A 0%, #123A63 100%)",
        }}
      >
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
            Dashboard Preview
          </h2>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous slide"
              className="w-12 h-12 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center flex-shrink-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next slide"
              className="w-12 h-12 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center flex-shrink-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden relative px-4 sm:px-6 lg:px-0">
          <div
            className="flex gap-6 sm:gap-8 transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(calc(-${currentIndex} * (75% + 32px)))`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="w-[75%] flex-shrink-0 min-w-[75%]"
              >
                <div className="bg-white rounded-[20px] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.25)] overflow-hidden group">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full max-w-xs sm:max-w-md lg:max-w-lg mx-auto h-auto rounded-xl object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
