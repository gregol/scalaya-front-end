'use client';

import { Star } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface RatingProps {
  rating: number; // 0-5
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
  className?: string;
}

export function Rating({ 
  rating, 
  maxRating = 5, 
  size = 'sm',
  showValue = false,
  className 
}: RatingProps) {
  const sizes = {
    sm: 'w-2.5 h-2.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  return (
    <div className={cn('flex items-center gap-1', className)}>
      {Array.from({ length: maxRating }).map((_, index) => {
        const isFilled = index < Math.floor(rating);
        const isHalf = index < rating && index >= Math.floor(rating);

        return (
          <Star
            key={index}
            className={cn(
              sizes[size],
              isFilled || isHalf
                ? 'fill-primary-500 text-primary-500'
                : 'fill-gray-200 text-gray-200'
            )}
          />
        );
      })}
      {showValue && (
        <span className={cn('ml-1 font-medium text-navy-900', textSizes[size])}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}

