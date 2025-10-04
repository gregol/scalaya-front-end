'use client';

import Link from 'next/link';
import type { Route } from 'next';
import Image from 'next/image';
import { cn } from '@/utils/cn';

interface NavItemProps {
  label: string;
  href: Route | string;
  hasDropdown?: boolean;
  isActive?: boolean;
  className?: string;
}

export function NavItem({
  label,
  href,
  hasDropdown = false,
  isActive = false,
  className,
}: NavItemProps) {
  return (
    <Link
      href={href as Route}
      className={cn(
        'text-nav text-white hover:text-primary-500 transition-colors relative inline-flex items-center gap-1.5',
        isActive && 'text-primary-500',
        className
      )}
    >
      {label}
      {hasDropdown && (
        <Image
          src="/assets/figma/icon-dropdown.svg"
          alt=""
          width={9}
          height={5}
          className="w-[8.51px] h-[5px]"
        />
      )}
    </Link>
  );
}

