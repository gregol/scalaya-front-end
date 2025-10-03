'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Heart, Eye, BarChart3 } from 'lucide-react';
import { Button, Card } from '../atoms';
import { Rating } from '../molecules';
import { cn } from '@/utils/cn';

export interface ProductCardProps {
  id: string;
  brand: string;
  title: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  image: string;
  className?: string;
  size?: 'default' | 'small' | 'mobile';
  onAddToCart?: (id: string) => void;
  onToggleWishlist?: (id: string) => void;
  onQuickView?: (id: string) => void;
  onCompare?: (id: string) => void;
}

export function ProductCard({
  id,
  brand,
  title,
  price,
  originalPrice,
  discount,
  rating,
  reviewCount,
  image,
  className,
  size = 'default',
  onAddToCart,
  onToggleWishlist,
  onQuickView,
  onCompare,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);

  const sizeClasses = {
    default: 'w-[281px] h-[452px]',
    small: 'w-[234px] h-[392px]',
    mobile: 'w-[194px] h-[360px]',
  };

  const imageSizes = {
    default: 'w-[270px] h-[280px]',
    small: 'w-[220px] h-[220px]',
    mobile: 'w-[190px] h-[220px]',
  };

  const handleToggleWishlist = () => {
    setIsInWishlist(!isInWishlist);
    onToggleWishlist?.(id);
  };

  return (
    <Card
      variant="bordered"
      className={cn(
        'relative overflow-hidden transition-all duration-200',
        sizeClasses[size],
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className={cn('relative bg-white flex items-center justify-center', imageSizes[size])}>
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
            <Button
              onClick={() => onAddToCart?.(id)}
              className="w-full"
              size={size === 'default' ? 'md' : 'sm'}
            >
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
            'font-medium text-navy-900 line-clamp-2',
            size === 'default' && 'text-base leading-7',
            size === 'small' && 'text-[15px] leading-7',
            size === 'mobile' && 'text-[15px] leading-[22px]',
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
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
          {discount && (
            <span className="text-sm text-purple-700 font-medium">
              {discount}% Off
            </span>
          )}
        </div>
      </div>
    </Card>
  );
}

