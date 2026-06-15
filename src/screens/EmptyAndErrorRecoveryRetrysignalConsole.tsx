// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Empty and Error Recovery - RetrySignal Console
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, BarChart3, Bell, CircleHelp, Gauge, HardHat, History, Lightbulb, LogOut, Plus, RadioTower, RefreshCw, Search, Settings, TriangleAlert } from "lucide-react";


export type EmptyAndErrorRecoveryRetrysignalConsoleActionId = "notifications-1" | "history-2" | "create-request-3" | "create-new-request-4" | "retry-load-5" | "feedback-operations-1" | "pipeline-board-2" | "settings-3" | "help-4" | "logout-5" | "system-health-dashboard-6";

export interface EmptyAndErrorRecoveryRetrysignalConsoleProps {
  actions?: Partial<Record<EmptyAndErrorRecoveryRetrysignalConsoleActionId, () => void>>;

}

export function EmptyAndErrorRecoveryRetrysignalConsole({ actions }: EmptyAndErrorRecoveryRetrysignalConsoleProps) {
  return (
    <>
      {/* SideNavBar Component */}
      <nav className="fixed left-0 top-0 h-screen flex flex-col docked w-64 border-r border-outline-variant bg-surface-container-low dark:bg-surface-container-lowest z-20">
      <div className="p-container-padding flex items-center space-x-gutter border-b border-outline-variant h-row-height-standard">
      <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center shrink-0">
      <HardHat className="text-on-primary-container text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <h1 className="font-display text-display text-primary leading-none tracking-tight">RetrySignal</h1>
      <p className="font-body-xs text-body-xs text-on-surface-variant">System Operator</p>
      </div>
      </div>
      <div className="flex-1 overflow-y-auto py-unit">
      <ul className="space-y-1">
      <li>
      <a className="flex items-center space-x-gutter px-container-padding py-2 text-on-surface-variant hover:bg-surface-variant transition-colors group" href="#" data-action-id="feedback-operations-1" onClick={(event) => { event.preventDefault(); actions?.["feedback-operations-1"]?.(); }}>
      <BarChart3 className="text-[20px] group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      <span className="font-title-md text-title-md">Feedback Operations</span>
      </a>
      </li>
      <li>
      <a className="flex items-center space-x-gutter px-container-padding py-2 text-primary font-bold border-r-2 border-primary bg-surface-container-high opacity-80 group" href="#" data-action-id="pipeline-board-2" onClick={(event) => { event.preventDefault(); actions?.["pipeline-board-2"]?.(); }}>
      <BadgeHelp className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-title-md text-title-md">Pipeline Board</span>
      </a>
      </li>
      <li>
      <a className="flex items-center space-x-gutter px-container-padding py-2 text-on-surface-variant hover:bg-surface-variant transition-colors group" href="#" data-action-id="settings-3" onClick={(event) => { event.preventDefault(); actions?.["settings-3"]?.(); }}>
      <Settings className="text-[20px] group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      <span className="font-title-md text-title-md">Settings</span>
      </a>
      </li>
      </ul>
      </div>
      <div className="p-container-padding border-t border-outline-variant space-y-unit">
      <div className="bg-surface-container py-2 px-3 rounded flex items-center justify-between border border-outline-variant">
      <span className="font-label-caps text-label-caps text-on-surface-variant">System Health: Optimal</span>
      <div className="w-2 h-2 rounded-full bg-secondary-container"></div>
      </div>
      <ul className="space-y-1 mt-unit">
      <li>
      <a className="flex items-center space-x-gutter px-2 py-1.5 text-on-surface-variant hover:text-primary transition-colors" href="#" data-action-id="help-4" onClick={(event) => { event.preventDefault(); actions?.["help-4"]?.(); }}>
      <CircleHelp className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-body-xs text-body-xs">Help</span>
      </a>
      </li>
      <li>
      <a className="flex items-center space-x-gutter px-2 py-1.5 text-on-surface-variant hover:text-primary transition-colors" href="#" data-action-id="logout-5" onClick={(event) => { event.preventDefault(); actions?.["logout-5"]?.(); }}>
      <LogOut className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-body-xs text-body-xs">Logout</span>
      </a>
      </li>
      </ul>
      </div>
      </nav>
      {/* Main Content Area Wrapper */}
      <div className="flex-1 flex flex-col ml-64 h-screen relative">
      {/* TopAppBar Component */}
      <header className="flex justify-between items-center w-full px-container-padding h-row-height-standard bg-surface dark:bg-surface border-b border-outline-variant z-10 shrink-0">
      <div className="flex items-center space-x-container-padding">
      <h2 className="font-headline text-headline text-primary font-extrabold tracking-tight">RetrySignal Console</h2>
      <div className="hidden md:flex space-x-gutter">
      <span className="px-2 py-1 bg-surface-container rounded font-label-caps text-label-caps text-secondary-fixed flex items-center border border-secondary-container/30">
      <RadioTower className="text-[14px] mr-1" aria-hidden={true} focusable="false" /> Bridge Status: Online
                          </span>
      <span className="px-2 py-1 bg-surface-container rounded font-label-caps text-label-caps text-tertiary-fixed flex items-center border border-tertiary/30">
      <Gauge className="text-[14px] mr-1" aria-hidden={true} focusable="false" /> Latency: 24ms
                          </span>
      </div>
      </div>
      <div className="flex items-center space-x-gutter">
      <div className="relative hidden lg:block">
      <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-outline text-[16px]" aria-hidden={true} focusable="false" />
      <input className="pl-8 pr-3 py-1 bg-surface-container-high border border-outline-variant rounded focus:border-primary focus:ring-1 focus:ring-primary text-body-xs font-body-xs w-48 text-on-surface placeholder:text-outline-variant transition-colors outline-none h-8" placeholder="Search resources..." type="text" />
      </div>
      <button className="w-8 h-8 flex items-center justify-center rounded text-on-surface-variant hover:text-primary hover:bg-surface-variant transition-colors hover:scale-95" type="button" aria-label="Notifications" data-action-id="notifications-1" onClick={actions?.["notifications-1"]}>
      <Bell className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="w-8 h-8 flex items-center justify-center rounded text-on-surface-variant hover:text-primary hover:bg-surface-variant transition-colors hover:scale-95" type="button" aria-label="History" data-action-id="history-2" onClick={actions?.["history-2"]}>
      <History className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="h-8 px-3 bg-primary-container text-on-primary-container rounded font-title-md text-title-md flex items-center hover:bg-primary transition-colors" type="button" data-action-id="create-request-3" onClick={actions?.["create-request-3"]}>
      <Plus className="text-[16px] mr-1" aria-hidden={true} focusable="false" /> Create Request
                      </button>
      <div className="w-8 h-8 rounded-full bg-surface-variant border border-outline-variant overflow-hidden cursor-pointer">
      <img alt="Operator Avatar" className="w-full h-full object-cover" data-alt="A close-up, high-contrast portrait of a male operator with short hair, lit by cool blue and teal rim lights typical of a modern tech command center. The aesthetic is deterministic and professional." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBV5lgJ1H6VCjifvrCezgKthJ60TcADfPY6SGOoUz6qbPuw4Ue5l-pVjnNKZIRteXjJKzwWmxTADfFv5i28PMrp2CYPr1me-1J_MOl68h58puKeQ4Szuz9RAkKAD0LZNKmnIXe93oL_HI8GPdlZohbjFY9lbk7q4HhFsMjlvoruIlkj_mUxz2XpdVxZ7gORyJZoHeMCykPhXBMSl1c2cxIOgu__jBXdvWZR2UrdcosOq3M57DnTMEu2rWCsX1AAfUOgUnNbEZ1YK7Kr" />
      </div>
      </div>
      </header>
      {/* Canvas Area */}
      <main className="flex-1 overflow-y-auto bg-surface-dim p-container-padding flex items-center justify-center relative">
      {/* Subtle Background Pattern to prevent absolute emptiness */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{backgroundImage: "radial-gradient(circle at 1px 1px, #dae2fd 1px, transparent 0)", backgroundSize: "24px 24px"}}></div>
      {/* Error Panel Bento Container */}
      <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-unit relative z-10">
      {/* Main Error Card */}
      <div className="md:col-span-2 bg-surface border border-error/30 rounded-lg shadow-lg overflow-hidden flex flex-col relative">
      {/* Top accent line */}
      <div className="h-1 w-full bg-error"></div>
      <div className="p-6 flex-1 flex flex-col">
      <div className="flex items-start space-x-4 mb-6">
      <div className="w-12 h-12 rounded bg-error-container flex items-center justify-center shrink-0 border border-error/50">
      <TriangleAlert  style={{fontVariationSettings: "'FILL' 1"}} className="text-error text-[28px]" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <h3 className="font-display text-display text-error mb-1">System Error</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">The console encountered an unexpected state violation while attempting to load the pipeline view.</p>
      </div>
      </div>
      {/* Technical Error Log Block */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-3 mb-6 flex-1">
      <div className="flex items-center justify-between border-b border-outline-variant pb-2 mb-2">
      <span className="font-label-caps text-label-caps text-outline">TRACE LOG</span>
      <span className="font-code text-code text-error">ERR_BRIDGE_TIMEOUT</span>
      </div>
      <div className="font-code text-code text-on-surface-variant space-y-1 whitespace-pre-wrap break-all">
      <span className="text-outline select-none">01 </span><span className="text-tertiary">WARN</span>  [BridgeClient] Initiating state sync...
      <span className="text-outline select-none">02 </span><span className="text-tertiary">WARN</span>  [BridgeClient] Awaiting canary response (timeout=5000ms)
      <span className="text-outline select-none">03 </span><span className="text-error font-semibold">FATAL</span> [StateSync] <span className="text-on-error-container">Failed to synchronize state bridge with recovery canary.</span>
      <span className="text-outline select-none">04 </span><span className="text-outline">INFO</span>  [RecoveryMgr] Emitting telemetry dump...
                                  </div>
      </div>
      {/* Actions */}
      <div className="flex items-center justify-end space-x-3 mt-auto">
      <button className="h-row-height-dense px-4 bg-surface hover:bg-surface-variant border border-outline-variant text-on-surface rounded font-title-md text-title-md transition-colors flex items-center" type="button" data-action-id="create-new-request-4" onClick={actions?.["create-new-request-4"]}>
      <Plus className="text-[16px] mr-2" aria-hidden={true} focusable="false" /> Create New Request
                                  </button>
      <button className="h-row-height-dense px-4 bg-primary text-on-primary rounded font-title-md text-title-md transition-colors flex items-center hover:bg-primary-container" type="button" data-action-id="retry-load-5" onClick={actions?.["retry-load-5"]}>
      <RefreshCw  style={{fontVariationSettings: "'FILL' 1"}} className="text-[16px] mr-2" aria-hidden={true} focusable="false" /> Retry Load
                                  </button>
      </div>
      </div>
      </div>
      {/* Guidance & Context Sidebar */}
      <div className="md:col-span-1 flex flex-col gap-unit">
      {/* Guidance Card */}
      <div className="bg-surface border border-outline-variant rounded-lg p-5 flex-1">
      <div className="flex items-center space-x-2 mb-4">
      <Lightbulb className="text-tertiary text-[20px]" aria-hidden={true} focusable="false" />
      <h4 className="font-title-md text-title-md text-on-surface">Recovery Guidance</h4>
      </div>
      <ul className="space-y-3 font-body-sm text-body-sm text-on-surface-variant list-disc list-inside">
      <li>Verify your active network connection to the secure operations VLAN.</li>
      <li>If retrying fails repeatedly, try clearing your current filter sets or date ranges.</li>
      <li>Check the global <a className="text-primary hover:underline" href="#" data-action-id="system-health-dashboard-6" onClick={(event) => { event.preventDefault(); actions?.["system-health-dashboard-6"]?.(); }}>System Health Dashboard</a> for known bridge outages.</li>
      </ul>
      </div>
      {/* Meta Info Card */}
      <div className="bg-surface-container-low border border-outline-variant rounded-lg p-4">
      <h4 className="font-label-caps text-label-caps text-outline mb-3">ENVIRONMENT DETAILS</h4>
      <div className="grid grid-cols-2 gap-2 font-code text-code text-body-xs">
      <span className="text-outline-variant">Region</span>
      <span className="text-on-surface text-right">us-east-1</span>
      <span className="text-outline-variant">Cluster ID</span>
      <span className="text-on-surface text-right truncate">cl-8892a</span>
      <span className="text-outline-variant">Timestamp</span>
      <span className="text-on-surface text-right">14:22:09Z</span>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
