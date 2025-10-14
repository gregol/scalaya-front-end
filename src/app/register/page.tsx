import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { authOptions } from '@/infra/auth/auth.config';
import { ROUTES } from '@/config/constants';
import { RoleSelectionCard } from '@/ui/organisms/RoleSelectionCard';

export const metadata: Metadata = {
  title: 'Register - ScalaYa',
  description: 'Create a new account as a customer or seller',
};

export default async function RegisterPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect(ROUTES.DASHBOARD);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 dark:bg-gray-900 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="font-jost text-4xl font-bold text-navy-900 dark:text-white">
            Join ScalaYa
          </h1>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
            Choose how you want to get started
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Customer Card */}
          <RoleSelectionCard
            title="I want to Shop"
            description="Browse and purchase products from our marketplace"
            href="/register/customer"
            icon={
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            }
            features={[
              'Browse thousands of products',
              'Secure checkout and payments',
              'Track your orders in real-time',
              'Save favorites and wishlists',
              'Get exclusive customer deals',
            ]}
          />

          {/* Seller Card */}
          <RoleSelectionCard
            title="I want to Sell"
            description="Start selling your products and grow your business"
            href="/register/seller"
            icon={
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            }
            features={[
              'Create your online storefront',
              'Manage inventory and orders',
              'Access seller analytics',
              'Reach thousands of customers',
              'Flexible payment options',
            ]}
          />
        </div>

        {/* Footer */}
        <div className="pt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{' '}
            <Link
              href={ROUTES.LOGIN}
              className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
