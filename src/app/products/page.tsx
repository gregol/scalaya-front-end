import type { Metadata } from 'next';
import { ProductsShowcasePage } from '@/ui/pages';

export const metadata: Metadata = {
  title: 'Products - ZeoMart',
  description: 'ZeoMart Product Cards Showcase',
};

export default function Page() {
  return <ProductsShowcasePage />;
}

