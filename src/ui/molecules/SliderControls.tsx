'use client';

import Image from 'next/image';

interface SliderControlsProps {
  onPrev: () => void;
  onNext: () => void;
  currentSlide: number;
  totalSlides: number;
  onSlideChange?: (index: number) => void;
  className?: string;
}

export function SliderControls({
  onPrev,
  onNext,
  currentSlide,
  totalSlides,
  onSlideChange,
  className = '',
}: SliderControlsProps) {
  return (
    <div className={`flex w-full items-center justify-between ${className}`}>
      {/* Previous Button */}
      <button
        onClick={onPrev}
        className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white shadow-button transition-transform hover:scale-105"
        aria-label="Previous slide"
      >
        <Image
          src="/assets/figma/icon-arrow-prev.svg"
          alt=""
          width={8}
          height={14}
          className="h-[13.75px] w-[7.43px]"
        />
      </button>

      {/* Bullet Indicators */}
      <div className="flex items-center gap-[22px]">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`transition-all ${
              index === currentSlide
                ? 'h-5 w-5 rounded-full border-2 border-background-dark bg-transparent'
                : 'h-1 w-1 rounded-full bg-background-dark'
            }`}
            onClick={() => onSlideChange?.(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white shadow-button transition-transform hover:scale-105"
        aria-label="Next slide"
      >
        <Image
          src="/assets/figma/icon-arrow-next.svg"
          alt=""
          width={8}
          height={14}
          className="h-[13.75px] w-[7.43px]"
        />
      </button>
    </div>
  );
}
