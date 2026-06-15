import type { RetrySignalState } from './retrysignal-console.store';

export const STORAGE_KEY = 'retrysignal-console:state';

export function loadState(): Partial<RetrySignalState> | null {
  try {
    const raw = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (!raw) return null;
    return JSON.parse(raw) as Partial<RetrySignalState>;
  } catch {
    return null;
  }
}

export function saveState(state: Partial<RetrySignalState>): void {
  try {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }
  } catch {
    // Ignore storage errors (e.g. private mode, quota exceeded).
  }
}

export function clearState(): void {
  try {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  } catch {
    // Ignore storage errors.
  }
}
