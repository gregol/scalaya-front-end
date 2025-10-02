import { ReactNode } from 'react';
import { MainHeader, MainFooter } from '../organisms';

interface MainLayoutProps {
  children: ReactNode;
  cartCount?: number;
  cartTotal?: string;
  isLoggedIn?: boolean;
  wishlistCount?: number;
}

export function MainLayout({
  children,
  cartCount,
  cartTotal,
  isLoggedIn,
  wishlistCount,
}: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col">
      <MainHeader
        cartCount={cartCount}
        cartTotal={cartTotal}
        isLoggedIn={isLoggedIn}
        wishlistCount={wishlistCount}
      />
      <main className="flex-1">{children}</main>
      <MainFooter />
    </div>
  );
}

