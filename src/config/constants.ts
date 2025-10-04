/**
 * Application-wide constants
 */

export const APP_NAME = 'ScalaYa';
export const APP_DESCRIPTION =
  'Modern Next.js application with Clean Architecture';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  PRODUCTS: '/products',
  PAGES: '/pages',
  BLOG: '/blog',
  CATEGORIES: '/categories',
  CART: '/cart',
  WISHLIST: '/wishlist',
  DEALS: '/deals',
  HOT_DEALS: '/hot-deals',
  BEST_SELLERS: '/best-sellers',
  NEW_ARRIVALS: '/new-arrivals',
} as const;

export const API_ROUTES = {
  AUTH: {
    REGISTER: '/api/auth/register',
    SESSION: '/api/auth/session',
  },
} as const;


