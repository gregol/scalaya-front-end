'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Route } from 'next';
import { X, ChevronDown, ShoppingCart, User } from 'lucide-react';
import { SearchBar } from '@/ui/molecules/SearchBar';
import { NavItem } from '@/ui/molecules/NavItem';
import { NavItemWithDropdown } from '@/ui/molecules/NavItemWithDropdown';
import { UserActions } from '@/ui/molecules/UserActions';
import { MegaMenu } from '@/ui/organisms/MegaMenu';
import { ROUTES } from '@/config/constants';

interface ZeoMartHeaderProps {
  cartCount?: number;
  cartTotal?: string;
  wishlistCount?: number;
  isSignedIn?: boolean;
}

export function ZeoMartHeader({
  cartCount = 2,
  cartTotal = '$200.99',
  wishlistCount = 0,
  isSignedIn = false,
}: ZeoMartHeaderProps) {
  const [openMenu, setOpenMenu] = useState<
    'pages' | 'shop' | 'home' | 'blog' | null
  >(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesSidebarOpen, setCategoriesSidebarOpen] = useState(false);

  return (
    <header className="relative w-full bg-purple-800">
      {/* Mobile Header */}
      <div className="lg:hidden">
        {/* Top Bar - Mobile */}
        <div className="flex h-16 items-center justify-between border-b border-white/10 px-5">
          {/* Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="-ml-2 p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 text-white" />
            ) : (
              <div className="flex flex-col gap-1">
                <div className="h-[2px] w-5 rounded-full bg-white" />
                <div className="h-[2px] w-5 rounded-full bg-white" />
                <div className="h-[2px] w-[15px] rounded-full bg-white" />
              </div>
            )}
          </button>

          {/* Logo */}
          <Link href={ROUTES.HOME}>
            <h1 className="font-poppins text-2xl font-bold text-white">
              Zeomart.
            </h1>
          </Link>

          {/* Right Actions */}
          <div className="flex items-center gap-0">
            {/* Cart */}
            <button className="relative flex h-11 w-11 items-center justify-center">
              <ShoppingCart className="h-4 w-4 text-white" />
              {cartCount > 0 && (
                <div className="absolute right-2 top-2 flex h-[15px] w-[15px] items-center justify-center rounded-full bg-primary-500">
                  <span className="font-inter text-[8px] font-bold text-navy-900">
                    {cartCount}
                  </span>
                </div>
              )}
            </button>

            {/* Account */}
            <button className="flex h-11 w-11 items-center justify-center rounded-md border border-white/10">
              <User className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>

        {/* Search Bar - Mobile */}
        <div className="px-5 py-4">
          <SearchBar placeholder="Search products…" />
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 z-40 bg-navy-900/50"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <div className="fixed bottom-0 left-0 top-0 z-50 w-80 transform overflow-y-auto bg-purple-800 shadow-2xl transition-transform duration-300">
              {/* Drawer Header */}
              <div className="flex h-16 items-center justify-between border-b border-white/10 px-5">
                <h2 className="font-poppins text-xl font-bold text-white">
                  Menu
                </h2>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6 text-white" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="py-4">
                {/* Browse Categories */}
                <div className="border-b border-white/10 px-5 py-3">
                  <button
                    className="text-nav flex w-full items-center gap-3 text-white"
                    onClick={() => {
                      setCategoriesSidebarOpen(true);
                      setMobileMenuOpen(false);
                    }}
                  >
                    <div className="flex flex-col gap-1">
                      <div className="h-[2px] w-[15px] rounded-full bg-white" />
                      <div className="h-[2px] w-5 rounded-full bg-white" />
                      <div className="h-[2px] w-[15px] rounded-full bg-white" />
                    </div>
                    <span>Browse Categories</span>
                  </button>
                </div>

                {/* Main Navigation */}
                <div className="border-b border-white/10 py-2">
                  <Link
                    href={ROUTES.HOME}
                    className="text-nav block px-5 py-3 text-white hover:bg-white/10"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href={ROUTES.PRODUCTS}
                    className="text-nav block px-5 py-3 text-white hover:bg-white/10"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Shop
                  </Link>
                  <Link
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    href={ROUTES.PAGES as any}
                    className="text-nav block px-5 py-3 text-white hover:bg-white/10"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Pages
                  </Link>
                  <Link
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    href={ROUTES.BLOG as any}
                    className="text-nav block px-5 py-3 text-white hover:bg-white/10"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Blog
                  </Link>
                </div>
              </nav>
            </div>
          </>
        )}
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:block">
        {/* Top Section */}
        <div className="w-full border-b border-white/10">
          <div className="mx-auto max-w-[1920px] px-8 lg:px-[260px]">
            <div className="flex h-[90px] items-center justify-between gap-8">
              {/* Logo */}
              <Link
                href={ROUTES.HOME}
                className="flex flex-shrink-0 items-center"
              >
                <h1 className="text-logo text-white">Zeomart.</h1>
              </Link>

              {/* Search Bar */}
              <div className="max-w-[740px] flex-1">
                <SearchBar placeholder="Search products…" />
              </div>

              {/* User Actions */}
              <div className="flex-shrink-0">
                <UserActions
                  cartCount={cartCount}
                  cartTotal={cartTotal}
                  wishlistCount={wishlistCount}
                  isSignedIn={isSignedIn}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Navigation */}
        <div className="w-full">
          <div
            className="relative mx-auto max-w-[1920px] px-8 lg:px-[260px]"
            onMouseLeave={() => setOpenMenu(null)}
          >
            <div className="flex h-[55px] items-center justify-between">
              {/* Browse Categories */}
              <div className="relative flex items-center gap-6">
                <button
                  className="text-nav flex items-center gap-3 whitespace-nowrap text-white transition-colors hover:text-primary-500"
                  onClick={() =>
                    setCategoriesSidebarOpen(!categoriesSidebarOpen)
                  }
                >
                  {/* Hamburger Icon */}
                  <div className="flex flex-col gap-1.5">
                    <div className="h-[2px] w-[15px] rounded-full bg-white" />
                    <div className="h-[2px] w-5 rounded-full bg-white" />
                    <div className="h-[2px] w-[15px] rounded-full bg-white" />
                  </div>
                  <span>Browse Categories</span>
                </button>

                {/* Vertical divider */}
                <div className="h-[30px] w-px bg-white/10" />
              </div>

              {/* Main Navigation */}
              <nav className="flex items-center gap-12">
                <div className="relative">
                  <NavItemWithDropdown
                    label="Home"
                    href={ROUTES.HOME}
                    menuType="home"
                    isMenuOpen={openMenu === 'home'}
                    onMouseEnter={() => setOpenMenu('home')}
                  />
                </div>
                <div className="relative">
                  <NavItemWithDropdown
                    label="Shop"
                    href={ROUTES.PRODUCTS}
                    menuType="shop"
                    isActive
                    isMenuOpen={openMenu === 'shop'}
                    onMouseEnter={() => setOpenMenu('shop')}
                  />
                  {/* Yellow underline for active item */}
                  <div className="absolute -bottom-[27px] left-1/2 h-[2px] w-14 -translate-x-1/2 bg-primary-500" />
                </div>
                <div className="relative">
                  <NavItemWithDropdown
                    label="Pages"
                    href={ROUTES.PAGES}
                    menuType="pages"
                    isMenuOpen={openMenu === 'pages'}
                    onMouseEnter={() => setOpenMenu('pages')}
                  />
                </div>
                <div className="relative">
                  <NavItemWithDropdown
                    label="Blog"
                    href={ROUTES.BLOG}
                    menuType="blog"
                    isMenuOpen={openMenu === 'blog'}
                    onMouseEnter={() => setOpenMenu('blog')}
                  />
                </div>
              </nav>

              {/* Right Navigation */}
              <nav className="flex items-center gap-10">
                <NavItem label="Deal of the Day" href={ROUTES.DEALS} />
                <NavItem label="Hot Deals" href={ROUTES.HOT_DEALS} />
                <NavItem label="Best Sellers" href={ROUTES.BEST_SELLERS} />
                <NavItem label="New Arrivals" href={ROUTES.NEW_ARRIVALS} />
              </nav>
            </div>

            {/* Mega Menu - Rendered at the bottom section level */}
            {openMenu && <MegaMenu type={openMenu} isOpen={true} />}
          </div>
        </div>
      </div>

      {/* Categories Sidebar */}
      {categoriesSidebarOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="fixed inset-0 animate-fade-in bg-black/50"
            onClick={() => setCategoriesSidebarOpen(false)}
          />

          {/* Sidebar */}
          <div className="fixed bottom-0 left-0 top-0 w-80 animate-slide-in overflow-y-auto bg-white shadow-2xl dark:bg-gray-900">
            {/* Sidebar Header */}
            <div className="bg-gradient-to-br from-purple-800 to-navy-900 p-6 text-white">
              <div className="flex items-center justify-between">
                <h3 className="font-poppins text-xl font-bold">
                  All Categories
                </h3>
                <button
                  onClick={() => setCategoriesSidebarOpen(false)}
                  className="rounded-full p-2 transition-colors hover:bg-white/10"
                  aria-label="Close categories"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Categories List */}
            <nav className="py-4">
              {[
                {
                  name: 'Sport Equipment',
                  icon: '⚽',
                  count: 198,
                  subcategories: [
                    'Yoga Mats',
                    'Weights',
                    'Resistance Bands',
                    'Cardio',
                  ],
                },
                {
                  name: 'Fitness & Gym',
                  icon: '💪',
                  count: 287,
                  subcategories: [
                    'Treadmills',
                    'Exercise Bikes',
                    'Ellipticals',
                    'Strength',
                  ],
                },
                {
                  name: 'Yoga & Pilates',
                  icon: '🧘',
                  count: 156,
                  subcategories: ['Mats', 'Blocks', 'Straps', 'Apparel'],
                },
                {
                  name: 'Outdoor Sports',
                  icon: '🏃',
                  count: 245,
                  subcategories: ['Running', 'Cycling', 'Swimming', 'Hiking'],
                },
                {
                  name: 'Team Sports',
                  icon: '🏀',
                  count: 189,
                  subcategories: [
                    'Soccer',
                    'Basketball',
                    'Volleyball',
                    'Baseball',
                  ],
                },
                {
                  name: 'Water Sports',
                  icon: '🏊',
                  count: 134,
                  subcategories: ['Swimming', 'Surfing', 'Kayaking', 'Diving'],
                },
                {
                  name: 'Winter Sports',
                  icon: '⛷️',
                  count: 98,
                  subcategories: [
                    'Skiing',
                    'Snowboarding',
                    'Ice Skating',
                    'Hockey',
                  ],
                },
                {
                  name: 'Nutrition',
                  icon: '🥗',
                  count: 421,
                  subcategories: [
                    'Protein',
                    'Vitamins',
                    'Pre-Workout',
                    'Recovery',
                  ],
                },
                {
                  name: 'Sportswear',
                  icon: '👕',
                  count: 389,
                  subcategories: ['Men', 'Women', 'Kids', 'Accessories'],
                },
                {
                  name: 'Recovery & Wellness',
                  icon: '💆',
                  count: 167,
                  subcategories: [
                    'Foam Rollers',
                    'Massage',
                    'Ice Packs',
                    'Therapy',
                  ],
                },
                {
                  name: 'Smart Fitness',
                  icon: '⌚',
                  count: 234,
                  subcategories: [
                    'Smartwatches',
                    'Trackers',
                    'Apps',
                    'Monitors',
                  ],
                },
                {
                  name: 'Home Gym',
                  icon: '🏋️',
                  count: 312,
                  subcategories: ['Benches', 'Racks', 'Dumbbells', 'Barbells'],
                },
              ].map((category, index) => (
                <div
                  key={index}
                  className="border-b border-gray-100 last:border-0 dark:border-gray-800"
                >
                  <Link
                    href={
                      `/category/${category.name.toLowerCase().replace(/\s+/g, '-')}` as Route
                    }
                    className="group flex items-center justify-between px-6 py-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800"
                    onClick={() => setCategoriesSidebarOpen(false)}
                  >
                    <div className="flex flex-1 items-center gap-3">
                      <span className="text-2xl">{category.icon}</span>
                      <div>
                        <p className="font-jost text-base font-medium text-textDark transition-colors group-hover:text-primary-500 dark:text-white">
                          {category.name}
                        </p>
                        <p className="font-jost text-xs text-textLight dark:text-gray-400">
                          {category.count} Products
                        </p>
                      </div>
                    </div>
                    <ChevronDown className="h-5 w-5 -rotate-90 text-gray-400" />
                  </Link>

                  {/* Subcategories */}
                  <div className="bg-gray-50 px-6 py-3 dark:bg-gray-800">
                    <div className="grid grid-cols-2 gap-2">
                      {category.subcategories.map((sub, subIndex) => (
                        <Link
                          key={subIndex}
                          href={
                            `/category/${category.name.toLowerCase().replace(/\s+/g, '-')}/${sub.toLowerCase().replace(/\s+/g, '-')}` as Route
                          }
                          className="font-jost text-sm text-gray-600 transition-colors hover:text-primary-500 dark:text-gray-400"
                          onClick={() => setCategoriesSidebarOpen(false)}
                        >
                          {sub}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </nav>

            {/* View All Button */}
            <div className="border-t border-gray-200 p-6 dark:border-gray-800">
              <Link
                href={ROUTES.CATEGORIES}
                className="block w-full rounded-lg bg-primary-500 px-6 py-3 text-center font-jost text-base font-medium text-textDark transition-colors hover:bg-primary-600"
                onClick={() => setCategoriesSidebarOpen(false)}
              >
                View All Categories
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
