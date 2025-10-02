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
} as const;

export const API_ROUTES = {
  AUTH: {
    REGISTER: '/api/auth/register',
    SESSION: '/api/auth/session',
  },
} as const;


