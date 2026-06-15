import { useEffect, useState } from 'react';
import { loadState, saveState } from './retrysignal-console.repo';
import { initialAppState, type RetrySignalScreenId } from '../../__fixtures__/retrysignal-console.fixture';

export interface RetrySignalState {
  activeScreenId: RetrySignalScreenId;
  heartbeat: number;
  online: boolean;
}

export type RetrySignalAction =
  | { type: 'navigate'; screenId: RetrySignalScreenId }
  | { type: 'tick' }
  | { type: 'reset' }
  | { type: 'hydrate'; state: Partial<RetrySignalState> };

function reducer(state: RetrySignalState, action: RetrySignalAction): RetrySignalState {
  switch (action.type) {
    case 'navigate':
      return { ...state, activeScreenId: action.screenId };
    case 'tick':
      return { ...state, heartbeat: state.heartbeat + 1 };
    case 'hydrate':
      return { ...state, ...action.state };
    case 'reset':
      return { ...initialAppState };
    default:
      return state;
  }
}

type Listener = () => void;

interface Store {
  get state(): RetrySignalState;
  dispatch(action: RetrySignalAction): void;
  subscribe(listener: Listener): () => void;
}

function createStore(): Store {
  let state: RetrySignalState = { ...initialAppState };
  const listeners = new Set<Listener>();

  const persisted = loadState();
  if (persisted) {
    state = reducer(state, { type: 'hydrate', state: persisted });
  }

  return {
    get state() {
      return state;
    },
    dispatch(action) {
      state = reducer(state, action);
      saveState(state);
      listeners.forEach((listener) => listener());
    },
    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
}

export const retrySignalStore = createStore();

export function useRetrySignalStore() {
  const [state, setState] = useState(retrySignalStore.state);
  useEffect(() => retrySignalStore.subscribe(() => setState(retrySignalStore.state)), []);
  return { state, dispatch: retrySignalStore.dispatch };
}

export const retrySignalActions = {
  navigate: (screenId: RetrySignalScreenId) => retrySignalStore.dispatch({ type: 'navigate', screenId }),
  tick: () => retrySignalStore.dispatch({ type: 'tick' }),
  reset: () => retrySignalStore.dispatch({ type: 'reset' }),
  hydrate: (state: Partial<RetrySignalState>) => retrySignalStore.dispatch({ type: 'hydrate', state }),
};

let runtimeLoopHandle: ReturnType<typeof setInterval> | null = null;

export function startRuntimeLoop(intervalMs = 1000): ReturnType<typeof setInterval> | null {
  if (typeof window === 'undefined') return null;
  stopRuntimeLoop();
  runtimeLoopHandle = setInterval(() => retrySignalStore.dispatch({ type: 'tick' }), intervalMs);
  return runtimeLoopHandle;
}

export function stopRuntimeLoop(): void {
  if (runtimeLoopHandle) {
    clearInterval(runtimeLoopHandle);
    runtimeLoopHandle = null;
  }
}

if (typeof window !== 'undefined') {
  startRuntimeLoop();
}

(globalThis as Record<string, unknown>).app = {
  get state() {
    return retrySignalStore.state;
  },
  actions: retrySignalActions,
};
