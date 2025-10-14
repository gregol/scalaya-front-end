import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { authOptions } from '@/infra/auth/auth.config';
import { ROUTES } from '@/config/constants';
import { CustomerRegisterForm } from '@/ui/organisms/CustomerRegisterForm';

export const metadata: Metadata = {
  title: 'Customer Registration - ScalaYa',
  description: 'Create a new customer account',
};

export default async function CustomerRegisterPage() {
  const session = await getServerSession(authOptions);

  // Redirect if already logged in
  if (session) {
    redirect(ROUTES.DASHBOARD);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 dark:bg-gray-900 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="font-jost text-3xl font-bold text-navy-900 dark:text-white">
            Create Customer Account
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Register as a customer to start shopping
          </p>
        </div>

        {/* Registration Form */}
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <CustomerRegisterForm />

          {/* Footer Links */}
          <div className="mt-6 space-y-2 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{' '}
              <Link
                href={ROUTES.LOGIN}
                className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400"
              >
                Sign in
              </Link>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Want to sell on ScalaYa?{' '}
              <Link
                href="/register/seller"
                className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400"
              >
                Register as a seller
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
