// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Settings and Preferences - RetrySignal Console
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, BarChart3, Bell, BellRing, CircleHelp, History, Kanban, ListFilter, LogOut, Pencil, Plus, RotateCcw, Rows2, Rows3, Save, Settings, SlidersHorizontal, Terminal, Trash2 } from "lucide-react";


export type SettingsAndPreferencesRetrysignalConsoleActionId = "history-1" | "notifications-2" | "create-request-3" | "new-4" | "edit-5" | "delete-6" | "edit-7" | "delete-8" | "edit-9" | "delete-10" | "save-preferences-11" | "reset-defaults-12" | "feedback-operations-1" | "pipeline-board-2" | "settings-3" | "help-4" | "logout-5";

export interface SettingsAndPreferencesRetrysignalConsoleProps {
  actions?: Partial<Record<SettingsAndPreferencesRetrysignalConsoleActionId, () => void>>;

}

export function SettingsAndPreferencesRetrysignalConsole({ actions }: SettingsAndPreferencesRetrysignalConsoleProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="fixed left-0 top-0 h-screen flex flex-col docked h-full w-64 left-0 border-r border-outline-variant border-r border-outline-variant bg-surface-container-low dark:bg-surface-container-lowest z-20">
      {/* Header */}
      <div className="p-container-padding flex items-center gap-gutter border-b border-outline-variant">
      <div className="w-8 h-8 rounded bg-primary-container flex items-center justify-center shrink-0">
      <Terminal className="text-on-primary-container" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <h1 className="font-display text-display text-primary truncate">RetrySignal</h1>
      <p className="font-body-xs text-body-xs text-on-surface-variant">System Operator</p>
      </div>
      </div>
      {/* System Status CTA */}
      <div className="p-container-padding border-b border-outline-variant">
      <div className="bg-surface-container-highest rounded p-2 flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-secondary"></div>
      <span className="font-label-caps text-label-caps text-secondary uppercase">System Health: Optimal</span>
      </div>
      </div>
      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto py-4 flex flex-col gap-1 px-2">
      <a className="flex items-center gap-gutter px-3 py-2 rounded text-on-surface-variant hover:bg-surface-variant transition-colors" href="#" data-action-id="feedback-operations-1" onClick={(event) => { event.preventDefault(); actions?.["feedback-operations-1"]?.(); }}>
      <BarChart3 aria-hidden={true} focusable="false" />
      <span className="font-title-md text-title-md">Feedback Operations</span>
      </a>
      <a className="flex items-center gap-gutter px-3 py-2 rounded text-on-surface-variant hover:bg-surface-variant transition-colors" href="#" data-action-id="pipeline-board-2" onClick={(event) => { event.preventDefault(); actions?.["pipeline-board-2"]?.(); }}>
      <BadgeHelp aria-hidden={true} focusable="false" />
      <span className="font-title-md text-title-md">Pipeline Board</span>
      </a>
      <a className="flex items-center gap-gutter px-3 py-2 rounded text-primary font-bold border-r-2 border-primary bg-surface-container hover:bg-surface-variant transition-colors opacity-80" href="#" data-action-id="settings-3" onClick={(event) => { event.preventDefault(); actions?.["settings-3"]?.(); }}>
      <Settings aria-hidden={true} focusable="false" />
      <span className="font-title-md text-title-md">Settings</span>
      </a>
      </div>
      {/* Footer */}
      <div className="mt-auto border-t border-outline-variant p-2 flex flex-col gap-1">
      <a className="flex items-center gap-gutter px-3 py-2 rounded text-on-surface-variant hover:bg-surface-variant transition-colors" href="#" data-action-id="help-4" onClick={(event) => { event.preventDefault(); actions?.["help-4"]?.(); }}>
      <CircleHelp aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm">Help</span>
      </a>
      <a className="flex items-center gap-gutter px-3 py-2 rounded text-error hover:bg-surface-variant transition-colors" href="#" data-action-id="logout-5" onClick={(event) => { event.preventDefault(); actions?.["logout-5"]?.(); }}>
      <LogOut aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm">Logout</span>
      </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col ml-64 h-screen">
      {/* TopAppBar */}
      <header className="flex justify-between items-center w-full px-container-padding h-row-height-standard bg-surface dark:bg-surface border-b border-outline-variant bg-surface shrink-0 z-10">
      {/* Brand / Title */}
      <div className="flex items-center gap-gutter">
      <span className="font-headline text-headline text-primary font-bold">Settings &amp; Preferences</span>
      </div>
      {/* Global Status & Actions */}
      <div className="flex items-center gap-4">
      <div className="hidden lg:flex items-center gap-4 text-on-surface-variant font-code text-code">
      <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Bridge Status: Online</span>
      <span>Latency: 24ms</span>
      </div>
      <div className="w-px h-4 bg-outline-variant hidden lg:block"></div>
      <div className="flex items-center gap-2">
      <button className="p-1 rounded text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-variant" type="button" aria-label="History" data-action-id="history-1" onClick={actions?.["history-1"]}>
      <History aria-hidden={true} focusable="false" />
      </button>
      <button className="p-1 rounded text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-variant relative" type="button" aria-label="Notifications" data-action-id="notifications-2" onClick={actions?.["notifications-2"]}>
      <Bell aria-hidden={true} focusable="false" />
      <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full border border-surface"></span>
      </button>
      <button className="ml-2 h-row-height-dense px-3 bg-primary-container text-on-primary-container rounded flex items-center gap-1 hover:bg-primary transition-colors font-title-md text-title-md" type="button" data-action-id="create-request-3" onClick={actions?.["create-request-3"]}>
      <Plus className="text-[16px]" aria-hidden={true} focusable="false" />
                              Create Request
                          </button>
      <img alt="Operator Avatar" className="w-8 h-8 rounded-full ml-2 border border-outline-variant cursor-pointer" data-alt="A small, circular avatar image showing the letters 'Op' in bold white text against a dark navy blue background. The style is clean, modern, and suitable for a technical console interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSDvaq1bU1JLWp7N3lY4Oel9lToM7Wl0bW4Kqzen5SeCzIm06yd0WyPE71zNllW8qPX8WPDPK1cTWU7SXwJtgXrAB_6wBNJtX6cGTJVMf4EeYQXto4_8pWUKH-NawIsbArtxsyShR78jRv4DJC7jPyu2bJGrfYZ5oApk8q81k3v02sLHc93tRQ7WuUdczZyOwrK_5HSb3NMCcOhGLakCUCxN4RB9GZLpODjW1z8uNQ5--WNVxASIeFb5HUtQB2wRzF4AwRnth5tJO6" />
      </div>
      </div>
      </header>
      {/* Canvas */}
      <main className="flex-1 overflow-y-auto p-container-padding bg-background">
      <div className="max-w-4xl mx-auto flex flex-col gap-6 pb-20">
      {/* Page Header Description */}
      <div className="mb-2">
      <p className="font-body-sm text-body-sm text-on-surface-variant">Configure local operator environment, default pipeline views, and alert thresholds for the current session.</p>
      </div>
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left Column: Primary Settings */}
      <div className="lg:col-span-8 flex flex-col gap-6">
      {/* Workflow Preferences */}
      <section className="bg-surface-container-low border border-outline-variant rounded p-4">
      <h2 className="font-title-md text-title-md text-primary mb-4 flex items-center gap-2">
      <SlidersHorizontal className="text-[18px]" aria-hidden={true} focusable="false" />
                                      Workflow Preferences
                                  </h2>
      <div className="space-y-6">
      {/* Density Control */}
      <div>
      <label className="block font-label-caps text-label-caps text-on-surface-variant uppercase mb-2">Display Density</label>
      <div className="flex items-center gap-4 bg-surface-container-highest p-1 rounded inline-flex border border-outline-variant">
      <label className="cursor-pointer">
      <input defaultChecked={true} className="peer sr-only" name="density" type="radio" defaultValue="compact" />
      <div className="px-3 py-1 rounded text-on-surface-variant peer-checked:bg-surface peer-checked:text-primary peer-checked:border-outline-variant border border-transparent font-body-sm text-body-sm flex items-center gap-2 transition-colors">
      <Rows2 className="text-[16px]" aria-hidden={true} focusable="false" />
                                                      Compact
                                                  </div>
      </label>
      <label className="cursor-pointer">
      <input className="peer sr-only" name="density" type="radio" defaultValue="standard" />
      <div className="px-3 py-1 rounded text-on-surface-variant peer-checked:bg-surface peer-checked:text-primary peer-checked:border-outline-variant border border-transparent font-body-sm text-body-sm flex items-center gap-2 transition-colors">
      <Rows3 className="text-[16px]" aria-hidden={true} focusable="false" />
                                                      Standard
                                                  </div>
      </label>
      </div>
      <p className="mt-1 font-body-xs text-body-xs text-outline">Compact density sets row heights to 32px. Standard uses 40px.</p>
      </div>
      <div className="w-full h-px bg-outline-variant/50"></div>
      {/* Default View Control */}
      <div>
      <label className="block font-label-caps text-label-caps text-on-surface-variant uppercase mb-2">Default Pipeline View</label>
      <div className="flex items-center gap-4 bg-surface-container-highest p-1 rounded inline-flex border border-outline-variant">
      <label className="cursor-pointer">
      <input defaultChecked={true} className="peer sr-only" name="default_view" type="radio" defaultValue="table" />
      <div className="px-3 py-1 rounded text-on-surface-variant peer-checked:bg-surface peer-checked:text-primary peer-checked:border-outline-variant border border-transparent font-body-sm text-body-sm flex items-center gap-2 transition-colors">
      <BadgeHelp className="text-[16px]" aria-hidden={true} focusable="false" />
                                                      Data Table
                                                  </div>
      </label>
      <label className="cursor-pointer">
      <input className="peer sr-only" name="default_view" type="radio" defaultValue="board" />
      <div className="px-3 py-1 rounded text-on-surface-variant peer-checked:bg-surface peer-checked:text-primary peer-checked:border-outline-variant border border-transparent font-body-sm text-body-sm flex items-center gap-2 transition-colors">
      <Kanban className="text-[16px]" aria-hidden={true} focusable="false" />
                                                      Kanban Board
                                                  </div>
      </label>
      </div>
      </div>
      </div>
      </section>
      {/* Saved Filters */}
      <section className="bg-surface-container-low border border-outline-variant rounded p-4">
      <div className="flex justify-between items-center mb-4">
      <h2 className="font-title-md text-title-md text-primary flex items-center gap-2">
      <ListFilter className="text-[18px]" aria-hidden={true} focusable="false" />
                                          Saved Filters
                                      </h2>
      <button className="text-primary hover:text-primary-fixed transition-colors font-body-sm text-body-sm flex items-center gap-1" type="button" data-action-id="new-4" onClick={actions?.["new-4"]}>
      <Plus className="text-[16px]" aria-hidden={true} focusable="false" /> New
                                      </button>
      </div>
      <div className="border border-outline-variant rounded overflow-hidden">
      {/* Filter Table Header */}
      <div className="grid grid-cols-12 gap-4 px-4 py-2 bg-surface-container-highest border-b border-outline-variant">
      <div className="col-span-4 font-label-caps text-label-caps text-on-surface-variant uppercase">Filter Name</div>
      <div className="col-span-6 font-label-caps text-label-caps text-on-surface-variant uppercase">Query</div>
      <div className="col-span-2 font-label-caps text-label-caps text-on-surface-variant uppercase text-right">Actions</div>
      </div>
      {/* Filter Rows */}
      <div className="divide-y divide-outline-variant bg-surface">
      <div className="grid grid-cols-12 gap-4 px-4 py-2 items-center hover:bg-surface-container-highest transition-colors group">
      <div className="col-span-4 font-body-sm text-body-sm font-medium">Critical Latency Spikes</div>
      <div className="col-span-6 font-code text-code text-tertiary-fixed-dim truncate">latency &gt; 500ms AND status = 'error'</div>
      <div className="col-span-2 flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="text-on-surface-variant hover:text-primary" type="button" aria-label="Edit" data-action-id="edit-5" onClick={actions?.["edit-5"]}><Pencil className="text-[16px]" aria-hidden={true} focusable="false" /></button>
      <button className="text-on-surface-variant hover:text-error" type="button" aria-label="Delete" data-action-id="delete-6" onClick={actions?.["delete-6"]}><Trash2 className="text-[16px]" aria-hidden={true} focusable="false" /></button>
      </div>
      </div>
      <div className="grid grid-cols-12 gap-4 px-4 py-2 items-center hover:bg-surface-container-highest transition-colors group">
      <div className="col-span-4 font-body-sm text-body-sm font-medium">Failed Authentication</div>
      <div className="col-span-6 font-code text-code text-tertiary-fixed-dim truncate">event_type = 'auth' AND result = 'failure'</div>
      <div className="col-span-2 flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="text-on-surface-variant hover:text-primary" type="button" aria-label="Edit" data-action-id="edit-7" onClick={actions?.["edit-7"]}><Pencil className="text-[16px]" aria-hidden={true} focusable="false" /></button>
      <button className="text-on-surface-variant hover:text-error" type="button" aria-label="Delete" data-action-id="delete-8" onClick={actions?.["delete-8"]}><Trash2 className="text-[16px]" aria-hidden={true} focusable="false" /></button>
      </div>
      </div>
      <div className="grid grid-cols-12 gap-4 px-4 py-2 items-center hover:bg-surface-container-highest transition-colors group">
      <div className="col-span-4 font-body-sm text-body-sm font-medium">Node 4 Offline</div>
      <div className="col-span-6 font-code text-code text-tertiary-fixed-dim truncate">source_node = 'n-us-east-4' AND health = 'down'</div>
      <div className="col-span-2 flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="text-on-surface-variant hover:text-primary" type="button" aria-label="Edit" data-action-id="edit-9" onClick={actions?.["edit-9"]}><Pencil className="text-[16px]" aria-hidden={true} focusable="false" /></button>
      <button className="text-on-surface-variant hover:text-error" type="button" aria-label="Delete" data-action-id="delete-10" onClick={actions?.["delete-10"]}><Trash2 className="text-[16px]" aria-hidden={true} focusable="false" /></button>
      </div>
      </div>
      </div>
      </div>
      </section>
      </div>
      {/* Right Column: Secondary Settings & Actions */}
      <div className="lg:col-span-4 flex flex-col gap-6">
      {/* Notification Rules */}
      <section className="bg-surface-container-low border border-outline-variant rounded p-4 flex-1">
      <h2 className="font-title-md text-title-md text-primary mb-4 flex items-center gap-2">
      <BellRing className="text-[18px]" aria-hidden={true} focusable="false" />
                                      Notification Rules
                                  </h2>
      <div className="space-y-4">
      {/* Rule Toggle 1 */}
      <div className="flex items-start justify-between gap-4">
      <div>
      <h3 className="font-body-sm text-body-sm font-medium">Pipeline Failures</h3>
      <p className="font-body-xs text-body-xs text-outline mt-1">Alert on severe pipeline blockages.</p>
      </div>
      <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
      <input defaultChecked={true} className="sr-only peer" type="checkbox" defaultValue="" />
      <div className="w-9 h-5 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-surface after:border-outline-variant after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-container border border-outline-variant"></div>
      </label>
      </div>
      <div className="w-full h-px bg-outline-variant/50"></div>
      {/* Rule Toggle 2 */}
      <div className="flex items-start justify-between gap-4">
      <div>
      <h3 className="font-body-sm text-body-sm font-medium">Anomaly Detection</h3>
      <p className="font-body-xs text-body-xs text-outline mt-1">Receive signals when ML models flag unusual feedback patterns.</p>
      </div>
      <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
      <input defaultChecked={true} className="sr-only peer" type="checkbox" defaultValue="" />
      <div className="w-9 h-5 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-surface after:border-outline-variant after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-container border border-outline-variant"></div>
      </label>
      </div>
      <div className="w-full h-px bg-outline-variant/50"></div>
      {/* Rule Toggle 3 */}
      <div className="flex items-start justify-between gap-4">
      <div>
      <h3 className="font-body-sm text-body-sm font-medium">Weekly Digest</h3>
      <p className="font-body-xs text-body-xs text-outline mt-1">Summary of feedback resolved and pending.</p>
      </div>
      <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
      <input className="sr-only peer" type="checkbox" defaultValue="" />
      <div className="w-9 h-5 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-surface-variant after:border-outline-variant after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-container border border-outline-variant"></div>
      </label>
      </div>
      </div>
      </section>
      {/* Action Bar (Sticky to bottom of container theoretically, but static here) */}
      <div className="bg-surface border border-outline-variant rounded p-4 flex flex-col gap-3">
      <button className="w-full h-row-height-standard bg-primary-container text-on-primary-container rounded flex items-center justify-center gap-2 hover:bg-primary transition-colors font-title-md text-title-md" type="button" data-action-id="save-preferences-11" onClick={actions?.["save-preferences-11"]}>
      <Save className="text-[18px]" aria-hidden={true} focusable="false" />
                                      Save Preferences
                                  </button>
      <button className="w-full h-row-height-standard bg-transparent border border-outline-variant text-on-surface rounded flex items-center justify-center gap-2 hover:bg-surface-variant hover:text-error transition-colors font-title-md text-title-md" type="button" data-action-id="reset-defaults-12" onClick={actions?.["reset-defaults-12"]}>
      <RotateCcw className="text-[18px]" aria-hidden={true} focusable="false" />
                                      Reset Defaults
                                  </button>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
