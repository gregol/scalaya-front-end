import { atom } from 'jotai';

/**
 * UI state atoms for application-wide UI state
 */

export const isSidebarOpenAtom = atom(true);

export interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
}

export const toastsAtom = atom<Toast[]>([]);

export const addToastAtom = atom(
  null,
  (
    get,
    set,
    toast: Omit<Toast, 'id'> & { id?: string }
  ) => {
    const id = toast.id ?? crypto.randomUUID();
    const newToast: Toast = { ...toast, id };
    set(toastsAtom, [...get(toastsAtom), newToast]);

    // Auto-remove after duration
    const duration = toast.duration ?? 5000;
    setTimeout(() => {
      set(toastsAtom, get(toastsAtom).filter((t) => t.id !== id));
    }, duration);
  }
);

export const removeToastAtom = atom(null, (get, set, id: string) => {
  set(
    toastsAtom,
    get(toastsAtom).filter((t) => t.id !== id)
  );
});

export const isLoadingAtom = atom(false);


