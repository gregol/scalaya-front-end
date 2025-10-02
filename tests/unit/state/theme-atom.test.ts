import { describe, it, expect } from 'vitest';
import { createStore } from 'jotai';
import { themeAtom, isDarkModeAtom, toggleThemeAtom } from '@/state';

describe('themeAtom', () => {
  it('initializes with light theme', () => {
    const store = createStore();
    expect(store.get(themeAtom)).toBe('light');
  });

  it('isDarkModeAtom returns false for light theme', () => {
    const store = createStore();
    expect(store.get(isDarkModeAtom)).toBe(false);
  });

  it('toggleThemeAtom switches between light and dark', () => {
    const store = createStore();

    // Initial state: light
    expect(store.get(themeAtom)).toBe('light');

    // Toggle to dark
    store.set(toggleThemeAtom);
    expect(store.get(themeAtom)).toBe('dark');
    expect(store.get(isDarkModeAtom)).toBe(true);

    // Toggle back to light
    store.set(toggleThemeAtom);
    expect(store.get(themeAtom)).toBe('light');
    expect(store.get(isDarkModeAtom)).toBe(false);
  });
});


