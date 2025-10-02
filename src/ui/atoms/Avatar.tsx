import { HTMLAttributes } from 'react';
import { cn } from '@/utils/cn';
import Image from 'next/image';

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string | null;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  fallback?: string;
}

export function Avatar({
  src,
  alt,
  size = 'md',
  fallback,
  className,
  ...props
}: AvatarProps) {
  const sizes = {
    sm: 'h-8 w-8 text-xs',
    md: 'h-10 w-10 text-sm',
    lg: 'h-16 w-16 text-xl',
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div
      className={cn(
        'relative inline-flex items-center justify-center rounded-full bg-primary-100 text-primary-700 font-medium overflow-hidden',
        sizes[size],
        className
      )}
      {...props}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      ) : (
        <span>{fallback || getInitials(alt)}</span>
      )}
    </div>
  );
}


