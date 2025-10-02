import type { Metadata } from 'next';
import { DesignSystemPage } from '@/ui/pages';

export const metadata: Metadata = {
  title: 'Design System - ZeoMart',
  description: 'ZeoMart Theme Design System Showcase',
};

export default function Page() {
  return <DesignSystemPage />;
}

