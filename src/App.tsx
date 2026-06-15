import { useCallback, useEffect, useMemo } from 'react';
import {
  EmptyAndErrorRecoveryRetrysignalConsole,
  FeedbackOperationsRetrysignalConsole,
  PipelineBoardRetrysignalConsole,
  SettingsAndPreferencesRetrysignalConsole,
  FeedbackEditorRetrysignalConsole,
} from './screens';
import {
  useRetrySignalStore,
  retrySignalActions,
  startRuntimeLoop,
  stopRuntimeLoop,
} from './features/retrysignal-console/retrysignal-console.store';
import type { RetrySignalScreenId } from './__fixtures__/retrysignal-console.fixture';

const screenComponents = {
  empty: EmptyAndErrorRecoveryRetrysignalConsole,
  feedbackOperations: FeedbackOperationsRetrysignalConsole,
  pipelineBoard: PipelineBoardRetrysignalConsole,
  settings: SettingsAndPreferencesRetrysignalConsole,
  editor: FeedbackEditorRetrysignalConsole,
} as const;

const emptyActionIds = [
  'notifications-1',
  'history-2',
  'create-request-3',
  'create-new-request-4',
  'retry-load-5',
  'feedback-operations-1',
  'pipeline-board-2',
  'settings-3',
  'help-4',
  'logout-5',
  'system-health-dashboard-6',
] as const;

const feedbackOperationsActionIds = [
  'notifications-1',
  'history-2',
  'create-request-3',
  'status-all-4',
  'last-24h-5',
  'export-csv-6',
  'edit-7',
  'edit-8',
  'retry-9',
  'edit-10',
  'visibility-11',
  'close-12',
  'copy-13',
  'cancel-task-14',
  'retry-load-15',
  'feedback-operations-1',
  'pipeline-board-2',
  'settings-3',
  'help-4',
  'logout-5',
] as const;

const pipelineBoardActionIds = [
  'notifications-1',
  'history-2',
  'create-request-3',
  'more-horiz-4',
  'more-horiz-5',
  'update-6',
  'more-horiz-7',
  'review-8',
  'more-horiz-9',
  'close-10',
  'feedback-operations-1',
  'pipeline-board-2',
  'settings-3',
  'help-4',
  'logout-5',
] as const;

const settingsActionIds = [
  'history-1',
  'notifications-2',
  'create-request-3',
  'new-4',
  'edit-5',
  'delete-6',
  'edit-7',
  'delete-8',
  'edit-9',
  'delete-10',
  'save-preferences-11',
  'reset-defaults-12',
  'feedback-operations-1',
  'pipeline-board-2',
  'settings-3',
  'help-4',
  'logout-5',
] as const;

const editorActionIds = ['close-editor-1', 'cancel-2', 'save-changes-3'] as const;

function createActions<T extends string>(
  ids: readonly T[],
  navigate: (screenId: RetrySignalScreenId) => void,
  reset: () => void,
): Partial<Record<T, () => void>> {
  const actions = {} as Partial<Record<T, () => void>>;

  for (const id of ids) {
    const actionId = id as string;
    switch (actionId) {
      case 'feedback-operations-1':
        actions[id] = () => navigate('feedbackOperations');
        break;
      case 'pipeline-board-2':
        actions[id] = () => navigate('pipelineBoard');
        break;
      case 'settings-3':
        actions[id] = () => navigate('settings');
        break;
      case 'create-request-3':
      case 'create-new-request-4':
      case 'new-4':
      case 'edit-5':
      case 'edit-7':
      case 'edit-9':
        actions[id] = () => navigate('editor');
        break;
      case 'close-editor-1':
      case 'cancel-2':
      case 'save-changes-3':
      case 'close-12':
        actions[id] = () => navigate('feedbackOperations');
        break;
      case 'reset-defaults-12':
        actions[id] = () => reset();
        break;
      default:
        break;
    }
  }

  return actions;
}

export default function App() {
  const { state } = useRetrySignalStore();

  useEffect(() => {
    startRuntimeLoop();
    return () => {
      stopRuntimeLoop();
    };
  }, []);

  const navigate = useCallback((screenId: RetrySignalScreenId) => {
    retrySignalActions.navigate(screenId);
  }, []);

  const reset = useCallback(() => {
    retrySignalActions.reset();
  }, []);

  const Screen = screenComponents[state.activeScreenId] ?? EmptyAndErrorRecoveryRetrysignalConsole;

  const actions = useMemo(() => {
    switch (state.activeScreenId) {
      case 'empty':
        return createActions(emptyActionIds, navigate, reset);
      case 'feedbackOperations':
        return createActions(feedbackOperationsActionIds, navigate, reset);
      case 'pipelineBoard':
        return createActions(pipelineBoardActionIds, navigate, reset);
      case 'settings':
        return createActions(settingsActionIds, navigate, reset);
      case 'editor':
        return createActions(editorActionIds, navigate, reset);
      default:
        return {};
    }
  }, [state.activeScreenId, navigate, reset]);

  return (
    <div
      data-setfarm-root="retrysignal-console"
      data-testid="setfarm-app-root"
      className="relative h-screen w-full overflow-hidden bg-slate-950 text-slate-50"
    >
      <Screen actions={actions as Record<string, () => void>} />
    </div>
  );
}
