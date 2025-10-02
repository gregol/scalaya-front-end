import { atom } from 'jotai';
import type { Session } from 'next-auth';

/**
 * Session atom - holds current user session
 * This is typically populated from useSession hook
 */
export const sessionAtom = atom<Session | null>(null);

/**
 * Derived atom to get current user
 */
export const currentUserAtom = atom((get) => {
  const session = get(sessionAtom);
  return session?.user ?? null;
});

/**
 * Derived atom to check if user is authenticated
 */
export const isAuthenticatedAtom = atom((get) => {
  const session = get(sessionAtom);
  return !!session?.user;
});


