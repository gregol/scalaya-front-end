'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Heart, Eye, BarChart3 } from 'lucide-react';
import { Button, Card } from '../atoms';
import { Rating } from '../molecules';
import { cn } from '@/utils/cn';

export interface ProductCardDealProps {
  id: string;
  brand: string;
  title: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviewCount: number;
  image: string;
  soldCount: number;
  totalStock?: number;
  className?: string;
  onAddToCart?: (id: string) => void;
  onToggleWishlist?: (id: string) => void;
  onQuickView?: (id: string) => void;
  onCompare?: (id: string) => void;
}

export function ProductCardDeal({
  id,
  brand,
  title,
  price,
  originalPrice,
  discount,
  rating,
  reviewCount,
  image,
  soldCount,
  totalStock = 100,
  className,
  onAddToCart,
  onToggleWishlist,
  onQuickView,
  onCompare,
}: ProductCardDealProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);

  const soldPercentage = (soldCount / totalStock) * 100;

  const handleToggleWishlist = () => {
    setIsInWishlist(!isInWishlist);
    onToggleWishlist?.(id);
  };

  return (
    <Card
      variant="bordered"
      className={cn(
        'relative overflow-hidden transition-all duration-200',
        'w-[281px] h-[506px]',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative w-[270px] h-[280px] bg-white flex items-center justify-center mx-auto mt-1">
        <Image
          src={image}
          alt={title}
          width={240}
          height={240}
          className="object-contain p-4"
        />

        {/* Hover Icons */}
        {isHovered && (
          <div className="absolute top-2 right-2 flex flex-col gap-2 animate-fade-in">
            <button
              onClick={handleToggleWishlist}
              className={cn(
                'w-[34px] h-[34px] rounded-full flex items-center justify-center transition-colors',
                isInWishlist
                  ? 'bg-primary-500 text-navy-900'
                  : 'bg-white text-navy-900 hover:bg-primary-500'
              )}
            >
              <Heart className={cn('w-4 h-4', isInWishlist && 'fill-current')} />
            </button>
            <button
              onClick={() => onQuickView?.(id)}
              className="w-[34px] h-[34px] rounded-full bg-white text-navy-900 hover:bg-gray-100 flex items-center justify-center transition-colors"
            >
              <Eye className="w-4 h-4" />
            </button>
            <button
              onClick={() => onCompare?.(id)}
              className="w-[34px] h-[34px] rounded-full bg-white text-navy-900 hover:bg-gray-100 flex items-center justify-center transition-colors"
            >
              <BarChart3 className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Add to Cart Button (Hover) */}
        {isHovered && (
          <div className="absolute bottom-0 left-0 right-0 p-4 animate-slide-in">
            <Button onClick={() => onAddToCart?.(id)} className="w-full">
              Add to Cart
            </Button>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-5 space-y-2">
        {/* Brand */}
        <p className="text-[13px] text-gray-500">{brand}</p>

        {/* Title */}
        <h3
          className={cn(
            'font-medium text-base leading-7 text-navy-900 line-clamp-2',
            isHovered && 'text-purple-700'
          )}
        >
          {title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <Rating rating={rating} size="sm" />
          <span className="text-sm text-gray-500">{reviewCount.toLocaleString()} reviews</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-medium text-navy-900">
            ${price.toFixed(2)}
          </span>
          <span className="text-sm text-gray-500 line-through">
            ${originalPrice.toFixed(2)}
          </span>
          <span className="text-sm text-purple-700 font-medium">
            {discount}% Off
          </span>
        </div>

        {/* Progress Bar */}
        <div className="pt-2 space-y-2">
          <div className="relative w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-primary-500 rounded-full transition-all"
              style={{ width: `${soldPercentage}%` }}
            />
          </div>
          <p className="text-sm text-navy-900">Sold {soldCount}</p>
        </div>
      </div>
    </Card>
  );
}

