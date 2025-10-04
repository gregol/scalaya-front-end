'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Route } from 'next';
import { X, ChevronDown } from 'lucide-react';
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
  const [openMenu, setOpenMenu] = useState<'pages' | 'shop' | 'home' | 'blog' | null>(null);
  const [categoriesSidebarOpen, setCategoriesSidebarOpen] = useState(false);

  return (
    <header className="w-full bg-purple-800 relative">
      {/* Top Section */}
      <div className="max-w-[1400px] mx-auto px-[260px]">
        <div className="flex items-center justify-between h-[90px] border-b border-white/10">
          {/* Logo */}
          <Link href={ROUTES.HOME} className="flex items-center">
            <h1 className="text-logo text-white">Zeomart.</h1>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-[740px] mx-[30px]">
            <SearchBar placeholder="Search products…" />
          </div>

          {/* User Actions */}
          <UserActions
            cartCount={cartCount}
            cartTotal={cartTotal}
            wishlistCount={wishlistCount}
            isSignedIn={isSignedIn}
          />
        </div>
      </div>

      {/* Bottom Section - Navigation */}
      <div 
        className="relative max-w-[1400px] mx-auto px-[260px]"
        onMouseLeave={() => setOpenMenu(null)}
      >
        {/* Yellow underline for active item */}
        <div className="absolute left-[572px] top-0 w-[56px] h-[2px] bg-primary-500" />

        <div className="flex items-center justify-between h-[55px]">
          {/* Browse Categories */}
          <div className="flex items-center gap-[30px] relative">
            <button 
              className="flex items-center gap-[30px] text-nav text-white hover:text-primary-500 transition-colors"
              onClick={() => setCategoriesSidebarOpen(!categoriesSidebarOpen)}
            >
              {/* Hamburger Icon */}
              <div className="flex flex-col gap-2">
                <div className="w-[15px] h-[2px] bg-white rounded-full" />
                <div className="w-[20px] h-[2px] bg-white rounded-full" />
                <div className="w-[15px] h-[2px] bg-white rounded-full" />
              </div>
              <span className="text-right">Browse Categories</span>
            </button>

            {/* Vertical divider */}
            <div className="w-[1px] h-[30px] bg-white/10" />
          </div>

          {/* Main Navigation */}
          <nav className="flex items-center gap-[103px]">
            <NavItemWithDropdown
              label="Home"
              href={ROUTES.HOME}
              menuType="home"
              isMenuOpen={openMenu === 'home'}
              onMouseEnter={() => setOpenMenu('home')}
            />
            <NavItemWithDropdown
              label="Shop"
              href={ROUTES.PRODUCTS}
              menuType="shop"
              isActive
              isMenuOpen={openMenu === 'shop'}
              onMouseEnter={() => setOpenMenu('shop')}
            />
            <NavItemWithDropdown
              label="Pages"
              href={ROUTES.PAGES}
              menuType="pages"
              isMenuOpen={openMenu === 'pages'}
              onMouseEnter={() => setOpenMenu('pages')}
            />
            <NavItemWithDropdown
              label="Blog"
              href={ROUTES.BLOG}
              menuType="blog"
              isMenuOpen={openMenu === 'blog'}
              onMouseEnter={() => setOpenMenu('blog')}
            />
          </nav>

          {/* Right Navigation */}
          <nav className="flex items-center gap-[60px]">
            <NavItem label="Deal of the Day" href={ROUTES.DEALS} />
            <NavItem label="Hot Deals" href={ROUTES.HOT_DEALS} />
            <NavItem label="Best Sellers" href={ROUTES.BEST_SELLERS} />
            <NavItem label="New Arrivals" href={ROUTES.NEW_ARRIVALS} />
          </nav>
        </div>

        {/* Mega Menu - Rendered at the bottom section level */}
        {openMenu && (
          <MegaMenu
            type={openMenu}
            isOpen={true}
          />
        )}
      </div>

      {/* Categories Sidebar */}
      {categoriesSidebarOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 animate-fade-in"
            onClick={() => setCategoriesSidebarOpen(false)}
          />

          {/* Sidebar */}
          <div className="fixed left-0 top-0 bottom-0 w-80 bg-white dark:bg-gray-900 shadow-2xl overflow-y-auto animate-slide-in">
            {/* Sidebar Header */}
            <div className="bg-gradient-to-br from-purple-800 to-navy-900 p-6 text-white">
              <div className="flex items-center justify-between">
                <h3 className="font-poppins font-bold text-xl">All Categories</h3>
                <button
                  onClick={() => setCategoriesSidebarOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Close categories"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Categories List */}
            <nav className="py-4">
              {[
                { name: 'Sport Equipment', icon: '⚽', count: 198, subcategories: ['Yoga Mats', 'Weights', 'Resistance Bands', 'Cardio'] },
                { name: 'Fitness & Gym', icon: '💪', count: 287, subcategories: ['Treadmills', 'Exercise Bikes', 'Ellipticals', 'Strength'] },
                { name: 'Yoga & Pilates', icon: '🧘', count: 156, subcategories: ['Mats', 'Blocks', 'Straps', 'Apparel'] },
                { name: 'Outdoor Sports', icon: '🏃', count: 245, subcategories: ['Running', 'Cycling', 'Swimming', 'Hiking'] },
                { name: 'Team Sports', icon: '🏀', count: 189, subcategories: ['Soccer', 'Basketball', 'Volleyball', 'Baseball'] },
                { name: 'Water Sports', icon: '🏊', count: 134, subcategories: ['Swimming', 'Surfing', 'Kayaking', 'Diving'] },
                { name: 'Winter Sports', icon: '⛷️', count: 98, subcategories: ['Skiing', 'Snowboarding', 'Ice Skating', 'Hockey'] },
                { name: 'Nutrition', icon: '🥗', count: 421, subcategories: ['Protein', 'Vitamins', 'Pre-Workout', 'Recovery'] },
                { name: 'Sportswear', icon: '👕', count: 389, subcategories: ['Men', 'Women', 'Kids', 'Accessories'] },
                { name: 'Recovery & Wellness', icon: '💆', count: 167, subcategories: ['Foam Rollers', 'Massage', 'Ice Packs', 'Therapy'] },
                { name: 'Smart Fitness', icon: '⌚', count: 234, subcategories: ['Smartwatches', 'Trackers', 'Apps', 'Monitors'] },
                { name: 'Home Gym', icon: '🏋️', count: 312, subcategories: ['Benches', 'Racks', 'Dumbbells', 'Barbells'] },
              ].map((category, index) => (
                <div key={index} className="border-b border-gray-100 dark:border-gray-800 last:border-0">
                  <Link
                    href={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}` as Route}
                    className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                    onClick={() => setCategoriesSidebarOpen(false)}
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <span className="text-2xl">{category.icon}</span>
                      <div>
                        <p className="font-jost font-medium text-base text-textDark dark:text-white group-hover:text-primary-500 transition-colors">
                          {category.name}
                        </p>
                        <p className="font-jost text-xs text-textLight dark:text-gray-400">
                          {category.count} Products
                        </p>
                      </div>
                    </div>
                    <ChevronDown className="w-5 h-5 text-gray-400 -rotate-90" />
                  </Link>
                  
                  {/* Subcategories */}
                  <div className="bg-gray-50 dark:bg-gray-800 px-6 py-3">
                    <div className="grid grid-cols-2 gap-2">
                      {category.subcategories.map((sub, subIndex) => (
                        <Link
                          key={subIndex}
                          href={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}/${sub.toLowerCase().replace(/\s+/g, '-')}` as Route}
                          className="font-jost text-sm text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
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
            <div className="p-6 border-t border-gray-200 dark:border-gray-800">
              <Link
                href={ROUTES.CATEGORIES}
                className="block w-full py-3 px-6 text-center font-jost font-medium text-base bg-primary-500 text-textDark rounded-lg hover:bg-primary-600 transition-colors"
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

