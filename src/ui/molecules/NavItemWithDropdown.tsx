'use client';

import Link from 'next/link';
import type { Route } from 'next';
import Image from 'next/image';
import { cn } from '@/utils/cn';

interface NavItemWithDropdownProps {
  label: string;
  href: Route | string;
  menuType?: 'pages' | 'shop' | 'home' | 'blog';
  isActive?: boolean;
  isMenuOpen?: boolean;
  onMouseEnter?: () => void;
  className?: string;
}

export function NavItemWithDropdown({
  label,
  href,
  menuType: _menuType,
  isActive = false,
  isMenuOpen = false,
  onMouseEnter,
  className,
}: NavItemWithDropdownProps) {
  return (
    <div
      className="relative h-full flex items-center"
      onMouseEnter={onMouseEnter}
    >
      <Link
        href={href as Route}
        className={cn(
          'text-nav text-white hover:text-primary-500 transition-colors relative inline-flex items-center gap-1.5',
          isActive && 'text-primary-500',
          className
        )}
      >
        {label}
        <Image
          src="/assets/figma/icon-dropdown.svg"
          alt=""
          width={9}
          height={5}
          className={cn(
            'w-[8.51px] h-[5px] transition-transform',
            isMenuOpen && 'rotate-180'
          )}
        />
      </Link>
    </div>
  );
}

