'use client';

import { IconButton } from '@/ui/atoms/IconButton';
import Image from 'next/image';

interface SliderControlsProps {
  onPrev: () => void;
  onNext: () => void;
  currentSlide: number;
  totalSlides: number;
  className?: string;
}

export function SliderControls({
  onPrev,
  onNext,
  currentSlide,
  totalSlides,
  className = '',
}: SliderControlsProps) {
  return (
    <div className={`flex items-center justify-between w-full ${className}`}>
      {/* Previous Button */}
      <IconButton onClick={onPrev} ariaLabel="Previous slide">
        <Image
          src="/assets/figma/icon-arrow-prev.svg"
          alt=""
          width={8}
          height={14}
          className="w-2 h-3.5"
        />
      </IconButton>

      {/* Bullet Indicators */}
      <div className="flex items-center gap-[22px]">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`transition-all ${
              index === currentSlide
                ? 'w-5 h-5 border-2 border-background-dark rounded-full'
                : 'w-1 h-1 bg-background-dark rounded-full'
            }`}
            onClick={() => {
              /* Handle slide change */
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Next Button */}
      <IconButton onClick={onNext} ariaLabel="Next slide">
        <Image
          src="/assets/figma/icon-arrow-next.svg"
          alt=""
          width={8}
          height={14}
          className="w-2 h-3.5"
        />
      </IconButton>
    </div>
  );
}

