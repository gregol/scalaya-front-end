'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Route } from 'next';
import { Button } from '@/ui/atoms/Button';
import { Tag } from '@/ui/atoms/Tag';
import { SliderControls } from '@/ui/molecules/SliderControls';

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

  const slide = slides[currentSlide];

  // Auto-play logic would go here with useEffect
  // Omitted for brevity but can be added if needed

  return (
    <div className="relative w-full h-[598px] bg-gradient-to-b from-purple-800/5 to-transparent rounded-md overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full bg-white rounded-md overflow-hidden">
          <Image
            src={slide.backgroundImage}
            alt=""
            fill
            className="object-cover -mt-[30px] -ml-3"
            priority
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative h-full max-w-[1400px] mx-auto px-[260px] flex items-center">
        <div className="relative w-[449px] space-y-6 pt-[92px]">
          {/* Tag */}
          {slide.tag && (
            <Tag variant="mint" className="inline-flex">
              {slide.tag}
            </Tag>
          )}

          {/* Title */}
          <h1 className="text-hero text-textDark whitespace-pre-line">
            {slide.title}
          </h1>

          {/* Description */}
          <p className="text-body text-textDark">{slide.description}</p>

          {/* CTA Button */}
          <Link href={slide.ctaHref as Route}>
            <Button
              variant="primary"
              size="lg"
              className="mt-[46px]"
            >
              {slide.ctaText}
            </Button>
          </Link>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 w-[1340px]">
        <SliderControls
          onPrev={goToPrev}
          onNext={goToNext}
          currentSlide={currentSlide}
          totalSlides={slides.length}
        />
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

