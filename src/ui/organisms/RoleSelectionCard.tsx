/**
 * Role Selection Card Component
 * Used in the registration landing page to let users choose their role
 */

'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface RoleSelectionCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
  features: string[];
}

export function RoleSelectionCard({
  title,
  description,
  icon,
  href,
  features,
}: RoleSelectionCardProps) {
  return (
    <Link
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      href={href as any}
      className="group block rounded-lg border-2 border-transparent bg-white p-8 shadow-md transition-all duration-300 hover:border-primary-500 hover:shadow-xl dark:bg-gray-800 dark:hover:border-primary-400"
    >
      <div className="flex flex-col items-center space-y-4 text-center">
        {/* Icon */}
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600 transition-transform duration-300 group-hover:scale-110 dark:bg-primary-900/30 dark:text-primary-400">
          {icon}
        </div>

        {/* Title */}
        <h3 className="font-jost text-2xl font-bold text-navy-900 dark:text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>

        {/* Features */}
        <ul className="w-full space-y-2 text-left text-sm">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700 dark:text-gray-300">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="pt-4">
          <span className="inline-flex items-center font-medium text-primary-600 transition-transform duration-300 group-hover:translate-x-1 dark:text-primary-400">
            Get Started
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
