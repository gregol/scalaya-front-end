'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Route } from 'next';
import { cn } from '@/utils/cn';
import { ROUTES } from '@/config/constants';

interface UserActionButtonProps {
  icon: string;
  iconSize: { width: number; height: number };
  label: string;
  sublabel: string;
  href: Route | string;
  count?: number;
  variant?: 'bordered' | 'filled';
  className?: string;
}

function UserActionButton({
  icon,
  iconSize,
  label,
  sublabel,
  href,
  count,
  variant = 'bordered',
  className,
}: UserActionButtonProps) {
  return (
    <Link
      href={href as Route}
      className={cn(
        'relative flex h-[50px] items-center gap-[15px] rounded-md px-[15px] transition-all hover:bg-white/10',
        variant === 'bordered' && 'border border-white/10',
        variant === 'filled' && 'bg-white/5',
        className
      )}
    >
      {/* Icon Container */}
      <div className="relative flex h-[20px] w-[20px] items-center justify-center">
        <Image
          src={icon}
          alt=""
          width={iconSize.width}
          height={iconSize.height}
          className="brightness-0 invert"
        />
        {count !== undefined && count > 0 && (
          <span className="absolute -right-1 -top-1 flex h-[15px] w-[15px] items-center justify-center rounded-full bg-primary-500 text-xs font-bold text-navy-900">
            {count}
          </span>
        )}
      </div>

      {/* Text */}
      <div className="flex flex-col leading-tight">
        <span className="text-ui-label text-[14px] text-white">{label}</span>
        <span className="text-ui-label text-[14px] text-white opacity-70">
          {sublabel}
        </span>
      </div>
    </Link>
  );
}

interface UserActionsProps {
  cartCount?: number;
  cartTotal?: string;
  wishlistCount?: number;
  isSignedIn?: boolean;
}

export function UserActions({
  cartCount = 0,
  cartTotal = '$0.00',
  wishlistCount = 0,
  isSignedIn = false,
}: UserActionsProps) {
  return (
    <div className="flex items-center gap-4">
      {/* Wishlist */}
      <UserActionButton
        icon="/assets/figma/icon-heart.svg"
        iconSize={{ width: 18, height: 16 }}
        label="Wishlist"
        sublabel="My Items"
        href={ROUTES.WISHLIST}
        count={wishlistCount}
        variant="bordered"
      />

      {/* Account */}
      <UserActionButton
        icon="/assets/figma/icon-profile.svg"
        iconSize={{ width: 15, height: 19 }}
        label={isSignedIn ? 'Account' : 'Sign In'}
        sublabel={isSignedIn ? 'Dashboard' : 'Account'}
        href={isSignedIn ? ROUTES.DASHBOARD : ROUTES.LOGIN}
        variant="bordered"
      />

      {/* Cart */}
      <UserActionButton
        icon="/assets/figma/icon-shopping-cart-1.svg"
        iconSize={{ width: 20, height: 20 }}
        label={cartTotal}
        sublabel="Total"
        href={ROUTES.CART}
        count={cartCount}
        variant="filled"
      />
    </div>
  );
}
