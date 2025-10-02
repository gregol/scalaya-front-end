import { ReactNode } from 'react';
import Link from 'next/link';
import { Card } from '../atoms';

interface AuthTemplateProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  footer?: {
    text: string;
    link: string;
    linkText: string;
  };
}

export function AuthTemplate({
  title,
  subtitle,
  children,
  footer,
}: AuthTemplateProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-2 text-gray-600 dark:text-gray-400">{subtitle}</p>
          )}
        </div>

        <Card variant="elevated">{children}</Card>

        {footer && (
          <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
            {footer.text}{' '}
            <Link
              href={footer.link}
              className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400"
            >
              {footer.linkText}
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}


