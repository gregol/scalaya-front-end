'use client';

import { useAtom } from 'jotai';
import { Moon, Sun } from 'lucide-react';
import { toggleThemeAtom, themeAtom } from '@/state';
import { Button } from './Button';
import { useEffect } from 'react';

export function ThemeToggle() {
  const [theme] = useAtom(themeAtom);
  const [, toggleTheme] = useAtom(toggleThemeAtom);

  // Apply theme on mount
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => toggleTheme()}
      aria-label="Toggle theme"
      className="w-10 h-10 p-0"
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </Button>
  );
}


