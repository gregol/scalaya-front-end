'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Heart, BarChart3 } from 'lucide-react';
import { Button, Card } from '../atoms';
import { Rating } from '../molecules';
import { cn } from '@/utils/cn';

export interface ProductCardHorizontalProps {
  id: string;
  brand: string;
  title: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  description?: string;
  features?: string[];
  className?: string;
  onAddToCart?: (id: string) => void;
  onToggleWishlist?: (id: string) => void;
  onCompare?: (id: string) => void;
}

export function ProductCardHorizontal({
  id,
  brand,
  title,
  price,
  originalPrice,
  rating,
  reviewCount,
  image,
  features,
  className,
  onAddToCart,
  onToggleWishlist,
  onCompare,
}: ProductCardHorizontalProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);

  const handleToggleWishlist = () => {
    setIsInWishlist(!isInWishlist);
    onToggleWishlist?.(id);
  };

  return (
    <Card
      variant="bordered"
      className={cn(
        'relative overflow-hidden transition-all duration-200',
        'w-full h-[301px] flex',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative w-[270px] h-full bg-white flex-shrink-0 flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          width={240}
          height={240}
          className="object-contain p-4"
        />
      </div>

      {/* Content Separator */}
      <div className="w-px bg-gray-200" />

      {/* Product Info */}
      <div className="flex-1 p-6 flex flex-col">
        <div className="flex-1 space-y-3">
          {/* Brand */}
          <p className="text-[13px] text-gray-500">{brand}</p>

          {/* Title */}
          <h3
            className={cn(
              'font-medium text-base leading-7 line-clamp-2',
              isHovered ? 'text-purple-700' : 'text-navy-900'
            )}
          >
            {title}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <Rating rating={rating} size="sm" />
            <span className="text-sm text-gray-500">{reviewCount.toLocaleString()} reviews</span>
          </div>

          {/* Features */}
          {features && features.length > 0 && (
            <ul className="space-y-2 mt-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-navy-900">
                  <span className="w-1 h-1 rounded-full bg-navy-900 mt-2 flex-shrink-0" />
                  <span className="line-clamp-1">{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Separator */}
        <div className="w-px bg-gray-200 absolute top-0 bottom-0 right-[240px]" />

        {/* Right Section */}
        <div className="absolute right-6 top-6 bottom-6 w-[240px] flex flex-col justify-between">
          {/* Price */}
          <div className="flex items-baseline gap-2">
            <span className="text-[26px] font-medium text-navy-900">
              ${price.toFixed(2)}
            </span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Add to Cart Button */}
          <div className="space-y-3">
            <Button
              onClick={() => onAddToCart?.(id)}
              className={cn(
                'w-full transition-colors',
                isHovered && 'bg-primary-600'
              )}
            >
              Add to Cart
            </Button>

            {/* Action Links */}
            <div className="flex items-center gap-4 text-sm">
              <button
                onClick={handleToggleWishlist}
                className="flex items-center gap-2 text-navy-900 hover:text-primary-600 transition-colors"
              >
                <Heart className={cn('w-4 h-4', isInWishlist && 'fill-current text-primary-600')} />
                <span>Add to Wishlist</span>
              </button>
              <div className="w-px h-[22px] bg-gray-200" />
              <button
                onClick={() => onCompare?.(id)}
                className="flex items-center gap-2 text-navy-900 hover:text-primary-600 transition-colors"
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Compare</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

