import { retrySignalStore, retrySignalActions, startRuntimeLoop, stopRuntimeLoop } from '../features/retrysignal-console/retrysignal-console.store';
import { clearState } from '../features/retrysignal-console/retrysignal-console.repo';
import type { RetrySignalState } from '../features/retrysignal-console/retrysignal-console.store';

export function resetAppState(partial: Partial<RetrySignalState> = {}): void {
  retrySignalStore.dispatch({ type: 'reset' });
  if (Object.keys(partial).length > 0) {
    retrySignalStore.dispatch({ type: 'hydrate', state: partial });
  }
}

export function flushRuntimeTick(): void {
  retrySignalActions.tick();
}

export function clearPersistedState(): void {
  clearState();
}

export { startRuntimeLoop, stopRuntimeLoop };
