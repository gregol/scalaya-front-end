'use client';

import { useState } from 'react';
import { ShoppingCart, User, Heart, Search, Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/utils/cn';
import { Input } from '../atoms';

export interface MainHeaderProps {
  cartCount?: number;
  cartTotal?: string;
  isLoggedIn?: boolean;
  wishlistCount?: number;
}

export function MainHeader({
  cartCount = 2,
  cartTotal = '$200.99',
  isLoggedIn = false,
  wishlistCount = 0,
}: MainHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [categoriesSidebarOpen, setCategoriesSidebarOpen] = useState(false);

  return (
    <header className="bg-[#443297] text-white">
      {/* Mobile Header */}
      <div className="lg:hidden">
        {/* Top Bar - Mobile */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-white/10">
          {/* Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 -ml-2"
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Logo */}
          <h1 className="font-poppins font-bold text-xl">ScalaYa</h1>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Search Toggle */}
            <button
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
              className="p-2"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Cart */}
            <button className="p-2 relative" aria-label="Cart">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <div className="absolute top-0 right-0 w-4 h-4 bg-primary-500 rounded-full flex items-center justify-center">
                  <span className="text-[10px] font-bold text-navy-900">
                    {cartCount}
                  </span>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {mobileSearchOpen && (
          <div className="px-4 py-3 border-b border-white/10 animate-slide-in">
            <div className="relative flex items-center bg-white rounded-md">
              <input
                type="text"
                placeholder="Search products…"
                className="flex-1 px-4 py-2.5 font-jost text-sm text-navy-900 placeholder:text-[#626974] focus:outline-none rounded-md"
              />
              <button
                className="px-4 py-2.5 bg-primary-500 rounded-r-md"
                aria-label="Search"
              >
                <Search className="w-5 h-5 text-navy-900" />
              </button>
            </div>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 animate-fade-in"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <div className="fixed left-0 top-0 bottom-0 w-80 bg-[#443297] overflow-y-auto shadow-2xl transform transition-transform duration-300 ease-out animate-slide-in">
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-4 h-16 border-b border-white/10">
                <h2 className="font-poppins font-bold text-xl">Menu</h2>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="py-4">
                {/* Browse Categories */}
                <div className="px-4 py-3 border-b border-white/10">
                  <button className="flex items-center justify-between w-full font-jost font-medium text-base">
                    <span>Browse Categories</span>
                    <ChevronDown className="w-5 h-5" />
                  </button>
                </div>

                {/* Main Navigation */}
                <div className="py-2 border-b border-white/10">
                  <a href="#" className="block px-4 py-3 font-jost font-medium text-base hover:bg-white/10">
                    Home
                  </a>
                  <a href="#" className="block px-4 py-3 font-jost font-medium text-base hover:bg-white/10">
                    Shop
                  </a>
                  <a href="#" className="block px-4 py-3 font-jost font-medium text-base hover:bg-white/10">
                    Pages
                  </a>
                  <a href="#" className="block px-4 py-3 font-jost font-medium text-base hover:bg-white/10">
                    Blog
                  </a>
                </div>

                {/* Secondary Navigation */}
                <div className="py-2">
                  <a href="#" className="block px-4 py-3 font-jost text-sm hover:bg-white/10">
                    Deal of the Day
                  </a>
                  <a href="#" className="block px-4 py-3 font-jost text-sm hover:bg-white/10">
                    Hot Deals
                  </a>
                  <a href="#" className="block px-4 py-3 font-jost text-sm hover:bg-white/10">
                    Best Sellers
                  </a>
                  <a href="#" className="block px-4 py-3 font-jost text-sm hover:bg-white/10">
                    New Arrivals
                  </a>
                </div>

                {/* User Actions */}
                <div className="px-4 py-4 border-t border-white/10 space-y-3">
                  <button className="flex items-center gap-3 w-full p-3 rounded-md border border-white/10">
                    <Heart className="w-5 h-5" />
                    <span className="font-medium text-sm">Wishlist</span>
                  </button>
                  <button className="flex items-center gap-3 w-full p-3 rounded-md border border-white/10">
                    <User className="w-5 h-5" />
                    <span className="font-medium text-sm">
                      {isLoggedIn ? 'My Account' : 'Sign In'}
                    </span>
                  </button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:block">
      <div className="container mx-auto px-4 xl:px-[260px]">
        {/* Top Section */}
        <div className="flex items-center justify-between h-[70px] border-b border-white/10">
          {/* Logo */}
          <div className="flex items-center">
          <h1 className="font-poppins font-bold text-2xl leading-9">
            ScalaYa
          </h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 mx-6 max-w-[740px]">
            <div className="relative flex items-center bg-white rounded-md overflow-hidden">
              {/* Category Dropdown */}
              <div className="flex items-center px-5 border-r border-[#D6D6D6]">
                <span className="font-jost text-[15px] text-navy-900 whitespace-nowrap">
                  All Categories
                </span>
              </div>

              {/* Search Input */}
              <input
                type="text"
                placeholder="Search products…"
                className="flex-1 px-6 py-3.5 font-jost text-[15px] text-navy-900 placeholder:text-[#626974] focus:outline-none"
              />

              {/* Search Button */}
              <button
                className="w-[50px] h-[50px] bg-primary-500 flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5 text-navy-900" />
              </button>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Wishlist */}
            <button className="flex items-center gap-3 p-3 rounded-md border border-white/10 hover:border-white/30 transition-colors">
              <div className="w-[50px] h-[50px] flex items-center justify-center relative">
                <Heart className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="font-bold text-sm leading-[22px]">Wishlist</div>
                <div className="font-bold text-sm leading-[22px]">My Items</div>
              </div>
            </button>

            {/* Account */}
            <button className="flex items-center gap-3 p-3 rounded-md border border-white/10 hover:border-white/30 transition-colors">
              <div className="w-[50px] h-[50px] flex items-center justify-center">
                <User className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="font-bold text-sm leading-[22px]">Sign In</div>
                <div className="font-bold text-sm leading-[22px]">Account</div>
              </div>
            </button>

            {/* Cart */}
            <button className="flex items-center gap-3">
              <div className="w-[50px] h-[50px] bg-white rounded-md flex items-center justify-center relative">
                <ShoppingCart className="w-5 h-5 text-navy-900" />
                {cartCount > 0 && (
                  <div className="absolute -top-1 -right-1 w-[15px] h-[15px] bg-primary-500 rounded-full flex items-center justify-center">
                    <span className="text-[8px] font-bold text-navy-900 leading-none">
                      {cartCount}
                    </span>
                  </div>
                )}
              </div>
              <div className="text-left">
                <div className="font-bold text-sm leading-[22px]">{cartTotal}</div>
                <div className="font-bold text-sm leading-[22px]">Total</div>
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-between h-[54px] border-b border-white">
          {/* Browse Categories Button */}
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setCategoriesSidebarOpen(!categoriesSidebarOpen)}
              className="flex items-center gap-3 font-jost font-medium text-base leading-7 hover:text-primary-500 transition-colors"
            >
              <div className="flex flex-col gap-1.5">
                <div className="w-[15px] h-0.5 bg-white"></div>
                <div className="w-5 h-0.5 bg-white"></div>
                <div className="w-[15px] h-0.5 bg-white"></div>
              </div>
              <span>Browse Categories</span>
            </button>

            {/* Separator */}
            <div className="h-[30px] w-px bg-white"></div>

            {/* Main Navigation */}
            <nav className="flex items-center gap-12">
              <a href="#" className="font-jost font-medium text-base leading-7 hover:text-primary-500 transition-colors">
                Home
              </a>
              <a href="#" className="font-jost font-medium text-base leading-7 hover:text-primary-500 transition-colors">
                Shop
              </a>
              <a href="#" className="font-jost font-medium text-base leading-7 hover:text-primary-500 transition-colors">
                Pages
              </a>
              <a href="#" className="font-jost font-medium text-base leading-7 hover:text-primary-500 transition-colors">
                Blog
              </a>
            </nav>
          </div>

          {/* Right Navigation */}
          <nav className="flex items-center gap-10">
            <a href="#" className="font-jost font-medium text-base leading-7 hover:text-primary-500 transition-colors">
              Deal of the Day
            </a>
            <a href="#" className="font-jost font-medium text-base leading-7 hover:text-primary-500 transition-colors">
              Hot Deals
            </a>
            <a href="#" className="font-jost font-medium text-base leading-7 hover:text-primary-500 transition-colors">
              Best Sellers
            </a>
            <a href="#" className="font-jost font-medium text-base leading-7 hover:text-primary-500 transition-colors">
              New Arrivals
            </a>
          </nav>
        </div>

        {/* Yellow Accent Line */}
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-14 h-0.5 bg-primary-500"></div>
        </div>
      </div>
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
            <div className="bg-gradient-to-br from-[#443297] to-navy-900 p-6 text-white">
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
                { name: 'Electronics', icon: '💻', count: 245, subcategories: ['Laptops', 'Smartphones', 'Tablets', 'Accessories'] },
                { name: 'Fashion', icon: '👕', count: 389, subcategories: ['Men', 'Women', 'Kids', 'Accessories'] },
                { name: 'Home & Garden', icon: '🏠', count: 156, subcategories: ['Furniture', 'Decor', 'Kitchen', 'Garden'] },
                { name: 'Sports & Outdoors', icon: '⚽', count: 198, subcategories: ['Fitness', 'Camping', 'Sports', 'Outdoor'] },
                { name: 'Gaming', icon: '🎮', count: 287, subcategories: ['Consoles', 'Games', 'Accessories', 'PC Gaming'] },
                { name: 'Health & Beauty', icon: '💄', count: 421, subcategories: ['Skincare', 'Makeup', 'Haircare', 'Wellness'] },
                { name: 'Books & Media', icon: '📚', count: 534, subcategories: ['Books', 'eBooks', 'Audiobooks', 'Movies'] },
                { name: 'Toys & Games', icon: '🧸', count: 312, subcategories: ['Action Figures', 'Board Games', 'Puzzles', 'Educational'] },
                { name: 'Automotive', icon: '🚗', count: 167, subcategories: ['Parts', 'Accessories', 'Tools', 'Care'] },
                { name: 'Pet Supplies', icon: '🐾', count: 234, subcategories: ['Dogs', 'Cats', 'Birds', 'Fish'] },
                { name: 'Baby Products', icon: '👶', count: 267, subcategories: ['Clothing', 'Toys', 'Feeding', 'Care'] },
                { name: 'Office Supplies', icon: '📎', count: 189, subcategories: ['Stationery', 'Organizers', 'Electronics', 'Furniture'] },
              ].map((category, index) => (
                <div key={index} className="border-b border-gray-100 dark:border-gray-800 last:border-0">
                  <a
                    href={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <span className="text-2xl">{category.icon}</span>
                      <div>
                        <p className="font-jost font-medium text-base text-navy-900 dark:text-white group-hover:text-primary-500 transition-colors">
                          {category.name}
                        </p>
                        <p className="font-jost text-xs text-gray-500 dark:text-gray-400">
                          {category.count} Products
                        </p>
                      </div>
                    </div>
                    <ChevronDown className="w-5 h-5 text-gray-400 -rotate-90" />
                  </a>
                  
                  {/* Subcategories - shown on hover */}
                  <div className="hidden group-hover:block bg-gray-50 dark:bg-gray-800 px-6 py-3">
                    <div className="grid grid-cols-2 gap-2">
                      {category.subcategories.map((sub, subIndex) => (
                        <a
                          key={subIndex}
                          href="#"
                          className="font-jost text-sm text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
                        >
                          {sub}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </nav>

            {/* View All Button */}
            <div className="p-6 border-t border-gray-200 dark:border-gray-800">
              <a
                href="/categories"
                className="block w-full py-3 px-6 text-center font-jost font-medium text-base bg-primary-500 text-navy-900 rounded-lg hover:bg-primary-600 transition-colors"
              >
                View All Categories
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

