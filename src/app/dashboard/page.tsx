import type { Metadata } from 'next';
import { DashboardPage } from '@/ui/pages';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Your dashboard',
};

export default function Page() {
  return <DashboardPage />;
}


