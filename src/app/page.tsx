import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { HomePage } from '@/ui/pages';
import { authOptions } from '@/infra/auth/auth.config';
import { ROUTES } from '@/config/constants';

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect(ROUTES.DASHBOARD);
  }

  return <HomePage />;
}


