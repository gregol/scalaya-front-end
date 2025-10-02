import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export type Theme = 'light' | 'dark';

/**
 * Theme atom with localStorage persistence
 */
export const themeAtom = atomWithStorage<Theme>('theme', 'light');

/**
 * Derived atom to check if dark mode is active
 */
export const isDarkModeAtom = atom((get) => get(themeAtom) === 'dark');

/**
 * Action atom to toggle theme
 */
export const toggleThemeAtom = atom(null, (get, set) => {
  const currentTheme = get(themeAtom);
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  set(themeAtom, newTheme);

  // Apply to document
  if (typeof document !== 'undefined') {
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  }
});


