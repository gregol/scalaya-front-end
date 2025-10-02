import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils/cn';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'bordered' | 'elevated';
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const variants = {
      default: 'bg-white dark:bg-gray-800 rounded-lg p-6',
      bordered:
        'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6',
      elevated:
        'bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg',
    };

    return (
      <div
        ref={ref}
        className={cn(variants[variant], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';


