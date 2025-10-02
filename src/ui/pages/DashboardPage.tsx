'use client';

import { useSession } from 'next-auth/react';
import { Card } from '../atoms';
import { DashboardStats } from '../organisms';
import { DashboardTemplate } from '../templates';

export function DashboardPage() {
  const { data: session } = useSession();

  return (
    <DashboardTemplate>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome back, {session?.user?.name || 'User'}!
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Here's what's happening with your account today.
          </p>
        </div>

        {/* Stats Section */}
        <DashboardStats />

        {/* User Info Card */}
        <Card variant="bordered">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Account Information
          </h2>
          <div className="space-y-3">
            <div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Name:
              </span>
              <p className="text-base font-medium text-gray-900 dark:text-white">
                {session?.user?.name}
              </p>
            </div>
            <div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Email:
              </span>
              <p className="text-base font-medium text-gray-900 dark:text-white">
                {session?.user?.email}
              </p>
            </div>
            <div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Account ID:
              </span>
              <p className="text-base font-mono text-gray-900 dark:text-white">
                {session?.user?.id}
              </p>
            </div>
          </div>
        </Card>

        {/* Demo Card */}
        <Card variant="bordered">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Quick Actions
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            This is a demo dashboard. In a real application, you would have
            interactive widgets, charts, and data visualizations here.
          </p>
        </Card>
      </div>
    </DashboardTemplate>
  );
}


