// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Feedback Operations - RetrySignal Console
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, Ban, BarChart3, Bell, CalendarDays, CircleHelp, Download, Eye, History, ListFilter, LogOut, Pencil, Plus, RefreshCw, RotateCcw, Search, Settings, Terminal, Timer, TrendingUp, X } from "lucide-react";


export type FeedbackOperationsRetrysignalConsoleActionId = "notifications-1" | "history-2" | "create-request-3" | "status-all-4" | "last-24h-5" | "export-csv-6" | "edit-7" | "edit-8" | "retry-9" | "edit-10" | "visibility-11" | "close-12" | "copy-13" | "cancel-task-14" | "retry-load-15" | "feedback-operations-1" | "pipeline-board-2" | "settings-3" | "help-4" | "logout-5";

export interface FeedbackOperationsRetrysignalConsoleProps {
  actions?: Partial<Record<FeedbackOperationsRetrysignalConsoleActionId, () => void>>;

}

export function FeedbackOperationsRetrysignalConsole({ actions }: FeedbackOperationsRetrysignalConsoleProps) {
  return (
    <>
      {/* JSON Component: SideNavBar */}
      <nav className="fixed left-0 top-0 h-screen w-64 flex flex-col bg-surface-container-low dark:bg-surface-container-lowest border-r border-outline-variant z-20 shrink-0">
      {/* Header */}
      <div className="p-container-padding border-b border-outline-variant flex items-center gap-gutter">
      <div className="w-8 h-8 rounded bg-primary-container text-on-primary-container flex items-center justify-center font-title-md text-title-md shrink-0">
      <Terminal  style={{fontVariationSettings: "'FILL' 1"}} className="text-[20px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex flex-col min-w-0">
      <span className="font-display text-display text-primary truncate leading-tight">RetrySignal</span>
      <span className="font-body-xs text-body-xs text-on-surface-variant truncate">System Operator</span>
      </div>
      </div>
      {/* Navigation Tabs */}
      <div className="flex-1 py-4 flex flex-col gap-1 overflow-y-auto px-2">
      {/* Active Navigation */}
      <a className="flex items-center px-3 h-row-height-standard text-primary font-bold border-r-2 border-primary bg-surface-variant/30 hover:bg-surface-variant transition-colors rounded-l" href="#" data-action-id="feedback-operations-1" onClick={(event) => { event.preventDefault(); actions?.["feedback-operations-1"]?.(); }}>
      <BarChart3 className="mr-3 text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-title-md text-title-md truncate">Feedback Operations</span>
      </a>
      {/* Inactive Navigation */}
      <a className="flex items-center px-3 h-row-height-standard text-on-surface-variant hover:bg-surface-variant transition-colors hover:text-on-surface rounded-l" href="#" data-action-id="pipeline-board-2" onClick={(event) => { event.preventDefault(); actions?.["pipeline-board-2"]?.(); }}>
      <BadgeHelp className="mr-3 text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-title-md text-title-md truncate">Pipeline Board</span>
      </a>
      <a className="flex items-center px-3 h-row-height-standard text-on-surface-variant hover:bg-surface-variant transition-colors hover:text-on-surface rounded-l" href="#" data-action-id="settings-3" onClick={(event) => { event.preventDefault(); actions?.["settings-3"]?.(); }}>
      <Settings className="mr-3 text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-title-md text-title-md truncate">Settings</span>
      </a>
      </div>
      {/* Footer Tabs */}
      <div className="p-2 border-t border-outline-variant flex flex-col gap-1">
      <a className="flex items-center px-3 h-8 text-on-surface-variant hover:bg-surface-variant transition-colors rounded" href="#" data-action-id="help-4" onClick={(event) => { event.preventDefault(); actions?.["help-4"]?.(); }}>
      <CircleHelp className="mr-3 text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm">Help</span>
      </a>
      <a className="flex items-center px-3 h-8 text-on-surface-variant hover:bg-surface-variant transition-colors rounded" href="#" data-action-id="logout-5" onClick={(event) => { event.preventDefault(); actions?.["logout-5"]?.(); }}>
      <LogOut className="mr-3 text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm">Logout</span>
      </a>
      <div className="mt-2 px-3 flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-secondary-fixed"></div>
      <span className="font-body-xs text-body-xs text-secondary-fixed">System Health: Optimal</span>
      </div>
      </div>
      </nav>
      {/* Main Content Wrapper */}
      <div className="flex-1 ml-64 flex flex-col min-w-0 h-full relative">
      {/* JSON Component: TopAppBar */}
      <header className="flex justify-between items-center w-full px-container-padding h-row-height-standard border-b border-outline-variant bg-surface shrink-0 z-10 shadow-sm">
      {/* Left: Product Context / Status */}
      <div className="flex items-center gap-gutter font-title-md text-title-md text-on-surface">
      <span>RetrySignal Console</span>
      <span className="text-outline-variant">|</span>
      <span className="font-code text-code text-secondary-fixed flex items-center gap-1"><BadgeHelp className="text-[14px]" aria-hidden={true} focusable="false" /> Bridge Status: Online</span>
      <span className="font-code text-code text-on-surface-variant ml-4 flex items-center gap-1"><Timer className="text-[14px]" aria-hidden={true} focusable="false" /> Latency: 24ms</span>
      </div>
      {/* Right: Actions */}
      <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
      <button className="text-on-surface-variant hover:text-primary hover:bg-surface-variant w-8 h-8 rounded flex items-center justify-center transition-colors" title="Notifications" type="button" data-action-id="notifications-1" onClick={actions?.["notifications-1"]}>
      <Bell className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant hover:text-primary hover:bg-surface-variant w-8 h-8 rounded flex items-center justify-center transition-colors" title="History" type="button" data-action-id="history-2" onClick={actions?.["history-2"]}>
      <History className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="h-6 w-px bg-outline-variant"></div>
      <button className="h-8 px-4 bg-primary text-on-primary rounded flex items-center gap-2 font-title-md text-title-md hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm active:scale-95" type="button" data-action-id="create-request-3" onClick={actions?.["create-request-3"]}>
      <Plus  style={{fontVariationSettings: "'FILL' 1"}} className="text-[16px]" aria-hidden={true} focusable="false" />
                          Create Request
                      </button>
      <img alt="Operator Avatar" className="w-8 h-8 rounded-full border border-outline-variant" data-alt="A small circular avatar placeholder image showing the initials SO in a minimalist, tech-focused dark mode aesthetic with blue tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbVjKUV4bEc_V-m-VUpwJyWxJxqF_es-PLmITPv_w2glLqIYR3erKB2zOc17kr3nYviqSylczvIPUIvkERoFlfP929i3WV-BI6Jy1fPgu4lEjVmiT1gnKpBzabbiR877WfK8WHfbiiz8wyTzxNeqP3m_jbdWhrx-yaXuUoQK5XVYfzmQlF_vjZXF3iy_MvcmBWSGb6mhFHfiJ-uZ4eri2FvtuNePmU3ldPCTV3Qz74ALm4BLfkxMjKQYgbH3mCDRa-4sMdhagFLaJ9" />
      </div>
      </header>
      {/* Dynamic Operation Area */}
      <main className="flex-1 flex overflow-hidden bg-background relative">
      {/* Primary Canvas (Metrics + Table) */}
      <div className="flex-1 flex flex-col p-container-padding gap-4 overflow-y-auto">
      {/* Metrics Bar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 shrink-0">
      <div className="bg-surface-container border border-outline-variant rounded p-4 flex flex-col gap-1 relative overflow-hidden">
      <div className="absolute right-0 top-0 p-4 opacity-10">
      <BadgeHelp className="text-[48px]" aria-hidden={true} focusable="false" />
      </div>
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Total Operations</span>
      <span className="font-display text-display text-on-surface">1,248</span>
      <span className="font-body-xs text-body-xs text-secondary-fixed flex items-center gap-1 mt-1"><TrendingUp className="text-[12px]" aria-hidden={true} focusable="false" /> +12% from last hour</span>
      </div>
      <div className="bg-surface-container border border-outline-variant rounded p-4 flex flex-col gap-1 relative overflow-hidden">
      <div className="absolute -left-12 -top-12 opacity-5">
      
      </div>
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Active PR Reviews</span>
      <span className="font-display text-display text-primary">84</span>
      <span className="font-body-xs text-body-xs text-on-surface-variant flex items-center gap-1 mt-1">Pending approval</span>
      </div>
      <div className="bg-surface-container border border-outline-variant rounded p-4 flex flex-col gap-1 relative overflow-hidden border-l-2 border-l-tertiary">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Retrying</span>
      <span className="font-display text-display text-tertiary">12</span>
      <span className="font-body-xs text-body-xs text-tertiary-fixed-dim flex items-center gap-1 mt-1"><RefreshCw className="text-[12px]" aria-hidden={true} focusable="false" /> Background processes</span>
      </div>
      <div className="bg-surface-container border border-outline-variant rounded p-4 flex flex-col gap-1 relative overflow-hidden border-l-2 border-l-error">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Gate Failures</span>
      <span className="font-display text-display text-error">3</span>
      <span className="font-body-xs text-body-xs text-error-container flex items-center gap-1 mt-1"><Ban className="text-[12px]" aria-hidden={true} focusable="false" /> Manual intervention required</span>
      </div>
      </div>
      {/* Controls Row */}
      <div className="flex justify-between items-center bg-surface-container-low p-2 rounded border border-outline-variant shrink-0">
      <div className="flex items-center gap-2 w-1/3">
      <div className="relative w-full">
      <Search className="absolute left-2 top-1.5 text-[16px] text-on-surface-variant" aria-hidden={true} focusable="false" />
      <input className="w-full bg-background border border-outline-variant rounded h-8 pl-8 pr-3 font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder:text-on-surface-variant/50" placeholder="Search ID, Title, or Owner..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-2">
      <button className="h-8 px-3 flex items-center gap-2 border border-outline-variant rounded bg-surface text-on-surface hover:bg-surface-variant transition-colors font-body-sm text-body-sm" type="button" data-action-id="status-all-4" onClick={actions?.["status-all-4"]}>
      <ListFilter className="text-[16px]" aria-hidden={true} focusable="false" /> Status: All
                              </button>
      <button className="h-8 px-3 flex items-center gap-2 border border-outline-variant rounded bg-surface text-on-surface hover:bg-surface-variant transition-colors font-body-sm text-body-sm" type="button" data-action-id="last-24h-5" onClick={actions?.["last-24h-5"]}>
      <CalendarDays className="text-[16px]" aria-hidden={true} focusable="false" /> Last 24h
                              </button>
      <button className="w-8 h-8 flex items-center justify-center border border-outline-variant rounded bg-surface text-on-surface hover:bg-surface-variant transition-colors" title="Export CSV" type="button" data-action-id="export-csv-6" onClick={actions?.["export-csv-6"]}>
      <Download className="text-[16px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      {/* Data Table Container */}
      <div className="flex-1 bg-surface-container border border-outline-variant rounded overflow-hidden flex flex-col min-h-0">
      <div className="overflow-y-auto flex-1 relative">
      <table className="w-full text-left border-collapse whitespace-nowrap">
      <thead className="bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps uppercase sticky top-0 z-10 shadow-sm shadow-background/50">
      <tr>
      <th className="px-4 py-2 border-b border-outline-variant w-12 font-medium">ID</th>
      <th className="px-4 py-2 border-b border-outline-variant font-medium">Title / Context</th>
      <th className="px-4 py-2 border-b border-outline-variant w-32 font-medium">Status</th>
      <th className="px-4 py-2 border-b border-outline-variant w-40 font-medium">Owner</th>
      <th className="px-4 py-2 border-b border-outline-variant w-24 font-medium">Aging</th>
      <th className="px-4 py-2 border-b border-outline-variant w-16 text-right font-medium">Actions</th>
      </tr>
      </thead>
      <tbody className="font-body-sm text-body-sm text-on-surface">
      {/* Row: Active */}
      <tr className="h-row-height-dense border-b border-outline-variant hover:bg-surface-variant/50 transition-colors cursor-pointer group">
      <td className="px-4 py-1 font-code text-code text-on-surface-variant">FB-9042</td>
      <td className="px-4 py-1 truncate max-w-[200px]" title="Optimize payload size for user metrics endpoint">Optimize payload size for user metrics endpoint</td>
      <td className="px-4 py-1">
      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-container/20 text-secondary-fixed border border-secondary-container/50 font-label-caps text-label-caps gap-1">
      <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed"></span> Active
                                              </span>
      </td>
      <td className="px-4 py-1 flex items-center gap-2">
      <div className="w-5 h-5 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-[10px]">JD</div>
      <span>J. Doe</span>
      </td>
      <td className="px-4 py-1 text-on-surface-variant">2h 14m</td>
      <td className="px-4 py-1 text-right">
      <button className="text-on-surface-variant hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity" type="button" aria-label="Edit" data-action-id="edit-7" onClick={actions?.["edit-7"]}>
      <Pencil className="text-[16px]" aria-hidden={true} focusable="false" />
      </button>
      </td>
      </tr>
      {/* Row: Retrying (Selected State) */}
      <tr className="h-row-height-dense border-b border-outline-variant bg-primary-container/10 border-l-2 border-l-primary hover:bg-primary-container/20 transition-colors cursor-pointer group relative">
      <td className="px-4 py-1 font-code text-code text-primary">FB-9041</td>
      <td className="px-4 py-1 truncate max-w-[200px] text-on-surface font-medium" title="Database connection pool timeout during migration">Database connection pool timeout during migration</td>
      <td className="px-4 py-1">
      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-tertiary-container/20 text-tertiary-fixed-dim border border-tertiary-container/50 font-label-caps text-label-caps gap-1">
      <RefreshCw className="text-[10px] animate-spin" aria-hidden={true} focusable="false" /> Retrying
                                              </span>
      </td>
      <td className="px-4 py-1 flex items-center gap-2">
      <div className="w-5 h-5 rounded-full bg-surface-variant text-on-surface flex items-center justify-center font-bold text-[10px]">sys</div>
      <span>Automated</span>
      </td>
      <td className="px-4 py-1 text-tertiary">4m</td>
      <td className="px-4 py-1 text-right">
      <button className="text-on-surface-variant hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity" type="button" aria-label="Edit" data-action-id="edit-8" onClick={actions?.["edit-8"]}>
      <Pencil className="text-[16px]" aria-hidden={true} focusable="false" />
      </button>
      </td>
      </tr>
      {/* Row: Gate Failure */}
      <tr className="h-row-height-dense border-b border-outline-variant hover:bg-surface-variant/50 transition-colors cursor-pointer group">
      <td className="px-4 py-1 font-code text-code text-on-surface-variant">FB-9038</td>
      <td className="px-4 py-1 truncate max-w-[200px]" title="Schema validation failed on deployment target C">Schema validation failed on deployment target C</td>
      <td className="px-4 py-1">
      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-error-container/20 text-error border border-error-container/50 font-label-caps text-label-caps gap-1">
      <X className="text-[10px]" aria-hidden={true} focusable="false" /> Gate Failure
                                              </span>
      </td>
      <td className="px-4 py-1 flex items-center gap-2">
      <div className="w-5 h-5 rounded-full bg-surface-variant text-on-surface flex items-center justify-center font-bold text-[10px]">MK</div>
      <span>M. Kane</span>
      </td>
      <td className="px-4 py-1 text-on-surface-variant">1d 4h</td>
      <td className="px-4 py-1 text-right flex justify-end gap-2">
      <button className="h-6 px-2 border border-outline-variant rounded text-[11px] font-title-md hover:bg-surface-variant transition-colors opacity-0 group-hover:opacity-100 flex items-center gap-1" type="button" data-action-id="retry-9" onClick={actions?.["retry-9"]}>
      <RotateCcw className="text-[12px]" aria-hidden={true} focusable="false" /> Retry
                                              </button>
      </td>
      </tr>
      {/* Standard Rows */}
      <tr className="h-row-height-dense border-b border-outline-variant hover:bg-surface-variant/50 transition-colors cursor-pointer group">
      <td className="px-4 py-1 font-code text-code text-on-surface-variant">FB-9035</td>
      <td className="px-4 py-1 truncate max-w-[200px]">Update ingress rules for regional cluster</td>
      <td className="px-4 py-1">
      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-container/20 text-secondary-fixed border border-secondary-container/50 font-label-caps text-label-caps gap-1">
      <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed"></span> Active
                                              </span>
      </td>
      <td className="px-4 py-1 flex items-center gap-2">
      <div className="w-5 h-5 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-[10px]">JD</div>
      <span>J. Doe</span>
      </td>
      <td className="px-4 py-1 text-on-surface-variant">1d 8h</td>
      <td className="px-4 py-1 text-right">
      <button className="text-on-surface-variant hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity" type="button" aria-label="Edit" data-action-id="edit-10" onClick={actions?.["edit-10"]}>
      <Pencil className="text-[16px]" aria-hidden={true} focusable="false" />
      </button>
      </td>
      </tr>
      <tr className="h-row-height-dense border-b border-outline-variant hover:bg-surface-variant/50 transition-colors cursor-pointer group">
      <td className="px-4 py-1 font-code text-code text-on-surface-variant">FB-9034</td>
      <td className="px-4 py-1 truncate max-w-[200px]">Memory leak in worker thread processing</td>
      <td className="px-4 py-1">
      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-variant text-on-surface-variant border border-outline-variant font-label-caps text-label-caps gap-1">
      <BadgeHelp className="text-[10px]" aria-hidden={true} focusable="false" /> Resolved
                                              </span>
      </td>
      <td className="px-4 py-1 flex items-center gap-2">
      <div className="w-5 h-5 rounded-full bg-surface-variant text-on-surface flex items-center justify-center font-bold text-[10px]">AL</div>
      <span>A. Lovelace</span>
      </td>
      <td className="px-4 py-1 text-on-surface-variant">2d 1h</td>
      <td className="px-4 py-1 text-right">
      <button className="text-on-surface-variant hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity" type="button" aria-label="Visibility" data-action-id="visibility-11" onClick={actions?.["visibility-11"]}>
      <Eye className="text-[16px]" aria-hidden={true} focusable="false" />
      </button>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
      </div>
      {/* Side Drawer (Selected Item Preview) */}
      <div className="w-96 border-l border-outline-variant bg-surface-container-low flex flex-col shrink-0 shadow-lg z-10 transition-transform transform translate-x-0">
      {/* Drawer Header */}
      <div className="p-4 border-b border-outline-variant flex justify-between items-start bg-surface-container">
      <div className="flex flex-col gap-1 pr-4">
      <div className="flex items-center gap-2">
      <span className="font-code text-code text-primary font-bold">FB-9041</span>
      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-tertiary-container/20 text-tertiary-fixed-dim border border-tertiary-container/50 font-label-caps text-label-caps gap-1">
      <RefreshCw className="text-[10px] animate-spin" aria-hidden={true} focusable="false" /> Retrying
                                  </span>
      </div>
      <h2 className="font-title-md text-title-md text-on-surface leading-tight mt-1">Database connection pool timeout during migration</h2>
      </div>
      <button className="text-on-surface-variant hover:text-on-surface transition-colors shrink-0 p-1 rounded hover:bg-surface-variant" type="button" aria-label="Close" data-action-id="close-12" onClick={actions?.["close-12"]}>
      <X className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      {/* Drawer Body */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
      {/* Meta Info Grid */}
      <div className="grid grid-cols-2 gap-y-4 gap-x-2 font-body-sm text-body-sm">
      <div className="flex flex-col">
      <span className="text-on-surface-variant font-label-caps text-label-caps uppercase">Owner</span>
      <span className="text-on-surface flex items-center gap-2 mt-1">
      <BadgeHelp className="text-[14px]" aria-hidden={true} focusable="false" /> Automated
                                  </span>
      </div>
      <div className="flex flex-col">
      <span className="text-on-surface-variant font-label-caps text-label-caps uppercase">Target</span>
      <span className="font-code text-code text-on-surface mt-1">db-cluster-us-east</span>
      </div>
      <div className="flex flex-col">
      <span className="text-on-surface-variant font-label-caps text-label-caps uppercase">Started</span>
      <span className="text-on-surface mt-1">2023-10-27 14:32:01 UTC</span>
      </div>
      <div className="flex flex-col">
      <span className="text-on-surface-variant font-label-caps text-label-caps uppercase">Retry Count</span>
      <span className="text-on-surface mt-1">3 / 5 max</span>
      </div>
      </div>
      <div className="h-px w-full bg-outline-variant/50"></div>
      {/* Log Output Box */}
      <div className="flex flex-col gap-2">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase flex items-center justify-between">
                                  Latest Operational Log
                                  <button className="text-primary hover:underline lowercase font-body-xs" type="button" data-action-id="copy-13" onClick={actions?.["copy-13"]}>copy</button>
      </span>
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-3 font-code text-code text-on-surface-variant overflow-x-auto relative">
      <div className="absolute inset-0 pointer-events-none border border-outline-variant/20 rounded"></div>
      <pre className="whitespace-pre-wrap"><span className="text-outline">01</span> [INFO] Initiating migration script v1.4.2
      <span className="text-outline">02</span> [INFO] Connecting to db-cluster-us-east...
      <span className="text-outline">03</span> <span className="text-error">[WARN] Connection attempt 1 failed: timeout (3000ms)</span>
      <span className="text-outline">04</span> [INFO] Backoff triggered. Waiting 5000ms.
      <span className="text-outline">05</span> [INFO] Re-attempting connection...
      <span className="text-outline">06</span> <span className="text-error">[WARN] Connection attempt 2 failed: timeout (3000ms)</span>
      <span className="text-outline">07</span> [SYS] Escalating to RETRYING state.</pre>
      </div>
      </div>
      {/* Recovery Path Strategy */}
      <div className="bg-surface border border-outline-variant rounded p-3 flex flex-col gap-2 relative overflow-hidden">
      <div className="absolute -right-4 -bottom-4 opacity-10">
      <BadgeHelp className="text-[64px]" aria-hidden={true} focusable="false" />
      </div>
      <span className="font-label-caps text-label-caps text-primary uppercase">Suggested Recovery Path</span>
      <p className="font-body-sm text-body-sm text-on-surface-variant">The connection pool appears exhausted. A forced restart of the proxy service usually resolves this transient state without data loss.</p>
      </div>
      </div>
      {/* Drawer Footer Actions */}
      <div className="p-4 border-t border-outline-variant bg-surface flex justify-end gap-3 shrink-0">
      <button className="h-8 px-4 border border-outline-variant rounded text-on-surface font-title-md text-title-md hover:bg-surface-variant transition-colors" type="button" data-action-id="cancel-task-14" onClick={actions?.["cancel-task-14"]}>
                              Cancel Task
                          </button>
      <button className="h-8 px-4 border border-primary text-primary rounded font-title-md text-title-md flex items-center gap-2 hover:bg-primary/10 transition-colors" type="button" data-action-id="retry-load-15" onClick={actions?.["retry-load-15"]}>
      <RotateCcw className="text-[16px]" aria-hidden={true} focusable="false" /> Retry Load
                          </button>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
