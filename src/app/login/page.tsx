import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { LoginPage } from '@/ui/pages';
import { authOptions } from '@/infra/auth/auth.config';
import { ROUTES } from '@/config/constants';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Sign in to your account',
};

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect(ROUTES.DASHBOARD);
  }

  return <LoginPage />;
}


