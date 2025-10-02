'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { Avatar, Button, ThemeToggle } from '../atoms';
import { ROUTES, APP_NAME } from '@/config/constants';
import { LogOut, User } from 'lucide-react';

export function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href={ROUTES.HOME}
            className="text-xl font-bold text-primary-600 dark:text-primary-400"
          >
            {APP_NAME}
          </Link>

          <div className="flex items-center gap-3">
            <ThemeToggle />

            {session?.user ? (
              <div className="flex items-center gap-3">
                <Link href={ROUTES.DASHBOARD}>
                  <Button variant="ghost" size="sm">
                    <User className="mr-2 h-4 w-4" />
                    Dashboard
                  </Button>
                </Link>

                <div className="flex items-center gap-2">
                  <Avatar
                    src={session.user.image}
                    alt={session.user.name || 'User'}
                    size="sm"
                  />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hidden sm:inline">
                    {session.user.name}
                  </span>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => signOut({ callbackUrl: ROUTES.HOME })}
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link href={ROUTES.LOGIN}>
                  <Button variant="ghost" size="sm">
                    Log in
                  </Button>
                </Link>
                <Link href={ROUTES.REGISTER}>
                  <Button size="sm">Sign up</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}


