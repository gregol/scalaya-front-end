'use client';

import { MegaMenuColumn } from '@/ui/molecules/MegaMenuColumn';
import { ROUTES } from '@/config/constants';

interface MegaMenuProps {
  type?: 'pages' | 'shop' | 'home' | 'blog' | null;
  isOpen?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export function MegaMenu({ type, isOpen = false }: MegaMenuProps) {
  if (!isOpen || !type) return null;

  // Define menu items for each type
  const menuData = {
    pages: [
      {
        title: 'Basic Pages',
        items: [
          { label: 'About', href: '/about' },
          { label: 'Become Vendor', href: '/become-vendor' },
          { label: 'Contact', href: '/contact' },
          { label: 'Login', href: ROUTES.LOGIN },
          { label: 'Register', href: ROUTES.REGISTER },
          { label: 'Faq', href: '/faq' },
          { label: 'Brands', href: '/brands' },
          { label: 'Terms', href: '/terms' },
          { label: 'Help', href: '/help' },
          { label: 'Coming Soon', href: '/coming-soon' },
          { label: '404', href: '/404' },
          { label: 'Invoice', href: '/invoice' },
          { label: 'UI Elements', href: '/design-system' },
        ],
      },
      {
        title: 'Vendor Pages',
        items: [
          { label: 'Vendor List', href: '/vendors' },
          { label: 'Vendor Single', href: '/vendor/1' },
          { label: 'Dashboard', href: ROUTES.DASHBOARD },
          { label: 'Products', href: '/vendor/products' },
          { label: 'Order', href: '/vendor/orders' },
          { label: 'Customer', href: '/vendor/customers' },
          { label: 'Categories', href: '/vendor/categories' },
          { label: 'Settings', href: '/vendor/settings' },
        ],
      },
      {
        title: 'Account Dashboard',
        items: [
          { label: 'Account Details', href: '/account/details' },
          { label: 'Order', href: '/account/orders' },
          { label: 'Address', href: '/account/address' },
          { label: 'Wishlist', href: ROUTES.WISHLIST },
          { label: 'Invoice', href: '/account/invoice' },
        ],
      },
    ],
    shop: [
      {
        title: 'Shop Categories',
        items: [
          { label: 'All Products', href: ROUTES.PRODUCTS },
          { label: 'Sport Equipment', href: '/category/sport-equipment' },
          { label: 'Yoga & Fitness', href: '/category/yoga-fitness' },
          { label: 'Weights & Dumbbells', href: '/category/weights' },
          { label: 'Cardio Equipment', href: '/category/cardio' },
          { label: 'Accessories', href: '/category/accessories' },
        ],
      },
      {
        title: 'Popular Products',
        items: [
          { label: 'Best Sellers', href: ROUTES.BEST_SELLERS },
          { label: 'New Arrivals', href: ROUTES.NEW_ARRIVALS },
          { label: 'Hot Deals', href: ROUTES.HOT_DEALS },
          { label: 'Deal of the Day', href: ROUTES.DEALS },
          { label: 'Clearance Sale', href: '/clearance' },
        ],
      },
      {
        title: 'Shopping Tools',
        items: [
          { label: 'My Cart', href: ROUTES.CART },
          { label: 'Wishlist', href: ROUTES.WISHLIST },
          { label: 'Compare', href: '/compare' },
          { label: 'Track Order', href: '/track-order' },
        ],
      },
    ],
    home: [
      {
        title: 'Quick Links',
        items: [
          { label: 'Home', href: ROUTES.HOME },
          { label: 'Shop', href: ROUTES.PRODUCTS },
          { label: 'About Us', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ],
      },
      {
        title: 'Categories',
        items: [
          { label: 'Browse All', href: ROUTES.CATEGORIES },
          { label: 'Sport Equipment', href: '/category/sport-equipment' },
          { label: 'Fitness', href: '/category/fitness' },
          { label: 'Accessories', href: '/category/accessories' },
        ],
      },
      {
        title: 'Support',
        items: [
          { label: 'Help Center', href: '/help' },
          { label: 'FAQ', href: '/faq' },
          { label: 'Shipping Info', href: '/shipping' },
          { label: 'Returns', href: '/returns' },
        ],
      },
    ],
    blog: [
      {
        title: 'Blog Categories',
        items: [
          { label: 'All Posts', href: ROUTES.BLOG },
          { label: 'Fitness Tips', href: '/blog/fitness-tips' },
          { label: 'Product Reviews', href: '/blog/reviews' },
          { label: 'Workout Guides', href: '/blog/workout-guides' },
          { label: 'Nutrition', href: '/blog/nutrition' },
        ],
      },
      {
        title: 'Popular Posts',
        items: [
          { label: 'Top 10 Yoga Mats', href: '/blog/top-yoga-mats' },
          { label: 'Home Gym Setup', href: '/blog/home-gym-setup' },
          { label: 'Beginner Guide', href: '/blog/beginner-guide' },
        ],
      },
      {
        title: 'Resources',
        items: [
          { label: 'Video Tutorials', href: '/blog/videos' },
          { label: 'Downloadable Guides', href: '/blog/guides' },
          { label: 'Expert Interviews', href: '/blog/interviews' },
        ],
      },
    ],
  };

  const columns = menuData[type];

  return (
    <div className="absolute left-0 right-0 top-full z-50 pt-2">
      {/* Background Overlay - Fixed positioning */}
      <div 
        className="fixed inset-0 bg-textDark/50 -z-10 pointer-events-none" 
        style={{ top: '145px' }} 
      />

      {/* Mega Menu Container */}
      <div className="w-full bg-white rounded-b-md shadow-lg">
        <div className="max-w-[1400px] mx-auto px-[50px] py-[40px]">
          {/* Three Columns Grid */}
          <div className="grid grid-cols-3 gap-[187px]">
            {columns.map((column, index) => (
              <MegaMenuColumn
                key={index}
                title={column.title}
                items={column.items}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

