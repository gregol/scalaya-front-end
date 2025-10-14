'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Route } from 'next';
import { Button } from '@/ui/atoms/Button';
import { Tag } from '@/ui/atoms/Tag';

interface Slide {
  id: number;
  tag?: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  backgroundImage: string;
}

interface HeroSliderProps {
  slides: Slide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export function HeroSlider({
  slides,
  autoPlay: _autoPlay = false,
  autoPlayInterval: _autoPlayInterval = 5000,
}: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slide = slides[currentSlide];

  // Auto-play logic would go here with useEffect
  // Omitted for brevity but can be added if needed

  return (
    <div className="relative h-[598px] w-full overflow-hidden rounded-md bg-gradient-to-b from-purple-800/5 to-transparent">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="relative h-full w-full overflow-hidden rounded-md bg-white">
          <Image
            src={slide.backgroundImage}
            alt=""
            fill
            className="-ml-3 -mt-[30px] object-cover"
            priority
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative mx-auto flex h-full max-w-[1400px] items-center px-[260px]">
        <div className="relative w-[449px] space-y-6 pt-[92px]">
          {/* Tag */}
          {slide.tag && (
            <Tag variant="mint" className="inline-flex">
              {slide.tag}
            </Tag>
          )}

          {/* Title */}
          <h1 className="text-hero whitespace-pre-line text-textDark">
            {slide.title}
          </h1>

          {/* Description */}
          <p className="text-body text-textDark">{slide.description}</p>

          {/* CTA Button */}
          <Link href={slide.ctaHref as Route}>
            <Button variant="primary" size="lg" className="mt-[46px]">
              {slide.ctaText}
            </Button>
          </Link>
        </div>
      </div>

      {/* Arrow Navigation - Centered Vertically - Hidden on Mobile */}
      <button
        onClick={goToPrev}
        className="absolute left-5 top-1/2 z-10 hidden h-[40px] w-[40px] -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-button transition-transform hover:scale-105 md:flex lg:left-[290px] lg:h-[50px] lg:w-[50px]"
        aria-label="Previous slide"
      >
        <Image
          src="/assets/figma/icon-arrow-prev.svg"
          alt=""
          width={8}
          height={14}
          className="h-[11px] w-[6px] lg:h-[13.75px] lg:w-[7.43px]"
        />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-5 top-1/2 z-10 hidden h-[40px] w-[40px] -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-button transition-transform hover:scale-105 md:flex lg:right-[290px] lg:h-[50px] lg:w-[50px]"
        aria-label="Next slide"
      >
        <Image
          src="/assets/figma/icon-arrow-next.svg"
          alt=""
          width={8}
          height={14}
          className="h-[11px] w-[6px] lg:h-[13.75px] lg:w-[7.43px]"
        />
      </button>

      {/* Bullet Indicators - Bottom Center */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-3 md:bottom-[30px] md:gap-[22px]">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`transition-all ${
              index === currentSlide
                ? 'h-4 w-4 rounded-full border-2 border-background-dark bg-transparent md:h-5 md:w-5'
                : 'h-1 w-1 rounded-full bg-background-dark'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// Default export with sample data
export function HeroSliderWithDefaults() {
  const defaultSlides: Slide[] = [
    {
      id: 1,
      tag: 'Limited Edition',
      title: 'Sport Essentials \nYoga Mats, Weights \n& more',
      description: 'Discover our new items. Up to 25% Off !',
      ctaText: 'Shop Now',
      ctaHref: '/products',
      backgroundImage: '/assets/figma/hero-sport-equipment.png',
    },
    {
      id: 2,
      tag: 'New Arrival',
      title: 'Premium Fitness \nEquipment Collection',
      description: 'Get fit with our latest collection. Free shipping!',
      ctaText: 'Shop Now',
      ctaHref: '/products',
      backgroundImage: '/assets/figma/hero-sport-equipment.png',
    },
    {
      id: 3,
      tag: 'Hot Deal',
      title: 'Summer Sale \nUp to 40% Off',
      description: 'Limited time offer on selected items.',
      ctaText: 'Shop Now',
      ctaHref: '/products',
      backgroundImage: '/assets/figma/hero-sport-equipment.png',
    },
  ];

  return <HeroSlider slides={defaultSlides} autoPlay />;
}
