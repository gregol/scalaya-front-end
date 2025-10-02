import { ReactNode } from 'react';
import { MainHeader, MainFooter } from '../organisms';

interface DashboardTemplateProps {
  children: ReactNode;
  cartCount?: number;
  cartTotal?: string;
  wishlistCount?: number;
}

export function DashboardTemplate({ 
  children,
  cartCount = 0,
  cartTotal = '$0.00',
  wishlistCount = 0,
}: DashboardTemplateProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col">
      <MainHeader 
        cartCount={cartCount}
        cartTotal={cartTotal}
        isLoggedIn={true}
        wishlistCount={wishlistCount}
      />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {children}
      </main>
      <MainFooter />
    </div>
  );
}


