export type RetrySignalScreenId =
  | 'empty'
  | 'feedbackOperations'
  | 'pipelineBoard'
  | 'settings'
  | 'editor';

export interface RetrySignalScreenMeta {
  label: string;
  componentName: string;
  screenId: string;
}

export const SCREENS: Record<RetrySignalScreenId, RetrySignalScreenMeta> = {
  empty: {
    label: 'Empty and Error Recovery',
    componentName: 'EmptyAndErrorRecoveryRetrysignalConsole',
    screenId: '40bd1e59272b4163bb94ebe7578c33e0',
  },
  feedbackOperations: {
    label: 'Feedback Operations',
    componentName: 'FeedbackOperationsRetrysignalConsole',
    screenId: '241c3c71799444208f56a4208a10fe23',
  },
  pipelineBoard: {
    label: 'Pipeline Board',
    componentName: 'PipelineBoardRetrysignalConsole',
    screenId: '611a5866be7145bea863a2a50897f015',
  },
  settings: {
    label: 'Settings and Preferences',
    componentName: 'SettingsAndPreferencesRetrysignalConsole',
    screenId: 'c7866f395ded4498b4e9a3ea5fd5414f',
  },
  editor: {
    label: 'Feedback Editor',
    componentName: 'FeedbackEditorRetrysignalConsole',
    screenId: '1fd5636a316c461490bce5895cefb491',
  },
};

export interface RetrySignalRequest {
  id: string;
  title: string;
  owner: string;
  status: 'open' | 'pending' | 'resolved';
  createdAt: string;
}

export const fixtureRequests: RetrySignalRequest[] = [
  {
    id: 'REQ-001',
    title: 'Latency Spike on Protocol Sequence',
    owner: 'Alice',
    status: 'open',
    createdAt: '2026-06-14T10:00:00Z',
  },
  {
    id: 'REQ-002',
    title: 'Stale cache on retry',
    owner: 'Bob',
    status: 'pending',
    createdAt: '2026-06-14T12:00:00Z',
  },
];

export const initialAppState = {
  activeScreenId: 'empty' as RetrySignalScreenId,
  heartbeat: 0,
  online: true,
};
