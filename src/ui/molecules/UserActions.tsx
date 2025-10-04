'use client';

import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/utils/cn';
import { ROUTES } from '@/config/constants';

interface UserActionButtonProps {
  icon: string;
  iconSize: { width: number; height: number };
  label: string;
  sublabel: string;
  href: string;
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
      href={href}
      className={cn(
        'relative flex items-center gap-[15px] h-[50px] px-[15px] rounded-md transition-all hover:bg-white/10',
        variant === 'bordered' && 'border border-white/10',
        variant === 'filled' && 'bg-white/5',
        className
      )}
    >
      {/* Icon Container */}
      <div className="relative w-[20px] h-[20px] flex items-center justify-center">
        <Image
          src={icon}
          alt=""
          width={iconSize.width}
          height={iconSize.height}
          className="brightness-0 invert"
        />
        {count !== undefined && count > 0 && (
          <span className="absolute -top-1 -right-1 w-[15px] h-[15px] bg-primary-500 rounded-full flex items-center justify-center text-xs font-bold text-navy-900">
            {count}
          </span>
        )}
      </div>

      {/* Text */}
      <div className="flex flex-col leading-tight">
        <span className="text-ui-label text-white text-[14px]">{label}</span>
        <span className="text-ui-label text-white text-[14px] opacity-70">
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
    <div className="flex items-center gap-[30px]">
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

