// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Pipeline Board - RetrySignal Console
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeAlert, BadgeHelp, BarChart3, Bell, CheckCheck, CheckCircle2, CircleHelp, Clock, Ellipsis, ExternalLink, Gauge, GripVertical, History, LogOut, Pencil, Plus, RefreshCw, Search, Settings, TriangleAlert } from "lucide-react";


export type PipelineBoardRetrysignalConsoleActionId = "notifications-1" | "history-2" | "create-request-3" | "more-horiz-4" | "more-horiz-5" | "update-6" | "more-horiz-7" | "review-8" | "more-horiz-9" | "close-10" | "feedback-operations-1" | "pipeline-board-2" | "settings-3" | "help-4" | "logout-5";

export interface PipelineBoardRetrysignalConsoleProps {
  actions?: Partial<Record<PipelineBoardRetrysignalConsoleActionId, () => void>>;

}

export function PipelineBoardRetrysignalConsole({ actions }: PipelineBoardRetrysignalConsoleProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="fixed left-0 top-0 h-screen flex flex-col docked h-full w-64 border-r border-outline-variant bg-surface-container-low dark:bg-surface-container-lowest z-20">
      <div className="p-container-padding flex-shrink-0">
      <h1 className="font-display text-display text-primary tracking-tight">RetrySignal</h1>
      <p className="font-body-xs text-body-xs text-on-surface-variant mt-1">System Operator</p>
      </div>
      <div className="px-container-padding py-2 mt-2 flex-shrink-0">
      <div className="bg-surface-container-high rounded p-2 flex items-center gap-2 border border-outline-variant">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
      <span className="font-body-xs text-body-xs text-secondary">System Health: Optimal</span>
      </div>
      </div>
      <ul className="flex flex-col flex-grow mt-4 overflow-y-auto w-full">
      <li className="w-full">
      <a className="flex items-center px-container-padding py-2 text-on-surface-variant hover:bg-surface-variant transition-colors group" href="#" data-action-id="feedback-operations-1" onClick={(event) => { event.preventDefault(); actions?.["feedback-operations-1"]?.(); }}>
      <BarChart3 className="mr-3 text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-title-md text-title-md">Feedback Operations</span>
      </a>
      </li>
      <li className="w-full">
      <a className="flex items-center px-container-padding py-2 text-primary font-bold border-r-2 border-primary bg-surface-container hover:bg-surface-variant transition-colors group active:opacity-80" href="#" data-action-id="pipeline-board-2" onClick={(event) => { event.preventDefault(); actions?.["pipeline-board-2"]?.(); }}>
      <BadgeHelp className="mr-3 text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-title-md text-title-md">Pipeline Board</span>
      </a>
      </li>
      <li className="w-full">
      <a className="flex items-center px-container-padding py-2 text-on-surface-variant hover:bg-surface-variant transition-colors group" href="#" data-action-id="settings-3" onClick={(event) => { event.preventDefault(); actions?.["settings-3"]?.(); }}>
      <Settings className="mr-3 text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-title-md text-title-md">Settings</span>
      </a>
      </li>
      </ul>
      <div className="mt-auto flex-shrink-0 pt-4 pb-container-padding w-full">
      <ul className="flex flex-col w-full border-t border-outline-variant pt-2">
      <li className="w-full">
      <a className="flex items-center px-container-padding py-2 text-on-surface-variant hover:bg-surface-variant transition-colors" href="#" data-action-id="help-4" onClick={(event) => { event.preventDefault(); actions?.["help-4"]?.(); }}>
      <CircleHelp className="mr-3 text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-title-md text-title-md">Help</span>
      </a>
      </li>
      <li className="w-full">
      <a className="flex items-center px-container-padding py-2 text-on-surface-variant hover:bg-surface-variant transition-colors" href="#" data-action-id="logout-5" onClick={(event) => { event.preventDefault(); actions?.["logout-5"]?.(); }}>
      <LogOut className="mr-3 text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-title-md text-title-md">Logout</span>
      </a>
      </li>
      </ul>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex flex-col flex-1 ml-64 w-[calc(100%-256px)] h-screen overflow-hidden relative z-10 bg-surface">
      {/* TopAppBar */}
      <header className="flex justify-between items-center w-full px-container-padding h-row-height-standard border-b border-outline-variant bg-surface dark:bg-surface flex-shrink-0">
      <div className="flex items-center gap-4">
      <h2 className="font-headline text-headline text-primary font-bold tracking-tight">RetrySignal Console</h2>
      <div className="hidden md:flex gap-4 border-l border-outline-variant pl-4 ml-2">
      <span className="font-code text-code text-secondary flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Bridge Status: Online</span>
      <span className="font-code text-code text-tertiary flex items-center gap-1.5"><Gauge className="text-[14px]" aria-hidden={true} focusable="false" /> Latency: 24ms</span>
      </div>
      </div>
      <div className="flex items-center gap-4">
      <div className="relative hidden sm:block">
      <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-[16px] text-on-surface-variant" aria-hidden={true} focusable="false" />
      <input className="h-[28px] bg-surface-container-high border border-outline-variant rounded pl-8 pr-3 font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant focus:border-primary focus:ring-1 focus:ring-primary w-64 transition-colors" placeholder="Search pipelines..." type="text" />
      </div>
      <div className="flex items-center gap-2">
      <button className="h-[28px] w-[28px] flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors rounded hover:bg-surface-variant active:scale-95 transition-transform" type="button" aria-label="Notifications" data-action-id="notifications-1" onClick={actions?.["notifications-1"]}>
      <Bell className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="h-[28px] w-[28px] flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors rounded hover:bg-surface-variant active:scale-95 transition-transform" type="button" aria-label="History" data-action-id="history-2" onClick={actions?.["history-2"]}>
      <History className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <button className="h-[32px] px-3 bg-primary text-on-primary font-title-md text-title-md rounded flex items-center gap-1.5 hover:bg-primary-container hover:text-on-primary-container transition-colors active:scale-95 transition-transform shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset]" type="button" data-action-id="create-request-3" onClick={actions?.["create-request-3"]}>
      <Plus  style={{fontVariationSettings: "'FILL' 1"}} className="text-[16px]" aria-hidden={true} focusable="false" />
                          Create Request
                      </button>
      <div className="h-8 w-8 rounded bg-surface-container-highest border border-outline-variant overflow-hidden flex-shrink-0 cursor-pointer hover:border-primary transition-colors ml-2">
      <img alt="Operator Avatar" className="w-full h-full object-cover" data-alt="A small square avatar image of a system operator, featuring a professional headshot. The lighting is neutral and clear, suitable for a dark-mode technical dashboard. The subject has a serious, focused expression. The background of the avatar is a subtle, dark tech-inspired gradient." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3kiXy3uSe9BF80fKN2Tx3kGsgqPidt5bGSRQGmRIClFetQpn_PfYipi3x2K1KpQGv7dJUkCrJ6qv6xV3Ra2mvC2iiw5npwy6R_D14TwZGB0OfkZMofml0g8nIdPZJDQBge9gwEcFfr1NCc_noIVe6O9yCvPgAdXjqJ-6Xt3y-5hCP6rXXcLRYiZ0QWwiotN7wweNvtEG91HC9JHo7f3mMmUZJXIujaqcfq-TRJROYz9LBSZDh0EJZu9ymuyrUiJ9nHhoioIXhS8iT" />
      </div>
      </div>
      </header>
      {/* Pipeline Board Viewport */}
      <main className="flex-1 overflow-x-auto overflow-y-hidden p-container-padding bg-[#0f172a]">
      <div className="flex h-full gap-gutter min-w-[1200px]">
      {/* Lane: Backlog */}
      <div className="flex flex-col w-[300px] flex-shrink-0 bg-[#1e293b] rounded border border-outline-variant flex-shrink-0 h-full overflow-hidden flex flex-col">
      <div className="h-row-height-standard flex items-center justify-between px-3 border-b border-outline-variant bg-surface-container-high flex-shrink-0">
      <div className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-outline"></span>
      <h3 className="font-label-caps text-label-caps text-on-surface uppercase tracking-wider">Backlog</h3>
      <span className="bg-surface-container-highest text-on-surface-variant px-1.5 rounded font-code text-code text-[10px]">12</span>
      </div>
      <button className="text-on-surface-variant hover:text-primary transition-colors" type="button" aria-label="More Horiz" data-action-id="more-horiz-4" onClick={actions?.["more-horiz-4"]}><Ellipsis className="text-[16px]" aria-hidden={true} focusable="false" /></button>
      </div>
      <div className="flex-1 overflow-y-auto p-2 space-y-2 custom-scrollbar">
      {/* Card 1 */}
      <div className="bg-surface rounded border border-outline-variant p-2 hover:bg-surface-container hover:border-outline cursor-grab active:cursor-grabbing group transition-colors">
      <div className="flex justify-between items-start mb-1.5">
      <span className="font-code text-code text-primary opacity-80 text-[10px]">FB-8942</span>
      <div className="flex items-center gap-1">
      <Clock className="text-[12px] text-on-surface-variant" aria-hidden={true} focusable="false" />
      <span className="font-body-xs text-body-xs text-on-surface-variant text-[10px]">2m ago</span>
      </div>
      </div>
      <h4 className="font-title-md text-title-md text-on-surface mb-2 leading-tight">API Rate Limit Exceeded on Auth Service</h4>
      <div className="flex justify-between items-center mt-2 pt-2 border-t border-surface-container-high">
      <div className="flex gap-1">
      <span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps text-[9px] uppercase">API</span>
      </div>
      <GripVertical className="text-[14px] text-outline-variant group-hover:text-outline cursor-grab" aria-hidden={true} focusable="false" />
      </div>
      </div>
      {/* Card 2 */}
      <div className="bg-surface rounded border border-outline-variant p-2 hover:bg-surface-container hover:border-outline cursor-grab active:cursor-grabbing group transition-colors">
      <div className="flex justify-between items-start mb-1.5">
      <span className="font-code text-code text-primary opacity-80 text-[10px]">FB-8941</span>
      <div className="flex items-center gap-1">
      <Clock className="text-[12px] text-on-surface-variant" aria-hidden={true} focusable="false" />
      <span className="font-body-xs text-body-xs text-on-surface-variant text-[10px]">14m ago</span>
      </div>
      </div>
      <h4 className="font-title-md text-title-md text-on-surface mb-2 leading-tight">User reported blank screen on dashboard load</h4>
      <div className="flex justify-between items-center mt-2 pt-2 border-t border-surface-container-high">
      <div className="flex gap-1">
      <span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps text-[9px] uppercase">UI</span>
      <span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps text-[9px] uppercase">Crit</span>
      </div>
      <GripVertical className="text-[14px] text-outline-variant group-hover:text-outline cursor-grab" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      </div>
      {/* Lane: In Recovery */}
      <div className="flex flex-col w-[300px] flex-shrink-0 bg-[#1e293b] rounded border border-outline-variant flex-shrink-0 h-full overflow-hidden flex flex-col">
      <div className="h-row-height-standard flex items-center justify-between px-3 border-b border-outline-variant bg-surface-container-high flex-shrink-0">
      <div className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-tertiary"></span>
      <h3 className="font-label-caps text-label-caps text-on-surface uppercase tracking-wider">In Recovery</h3>
      <span className="bg-surface-container-highest text-on-surface-variant px-1.5 rounded font-code text-code text-[10px]">3</span>
      </div>
      <button className="text-on-surface-variant hover:text-primary transition-colors" type="button" aria-label="More Horiz" data-action-id="more-horiz-5" onClick={actions?.["more-horiz-5"]}><Ellipsis className="text-[16px]" aria-hidden={true} focusable="false" /></button>
      </div>
      <div className="flex-1 overflow-y-auto p-2 space-y-2 custom-scrollbar">
      {/* Card 3 */}
      <div className="bg-surface rounded border border-outline-variant p-2 hover:bg-surface-container hover:border-outline cursor-grab active:cursor-grabbing group transition-colors relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-tertiary"></div>
      <div className="pl-2">
      <div className="flex justify-between items-start mb-1.5">
      <span className="font-code text-code text-primary opacity-80 text-[10px]">FB-8938</span>
      <div className="flex items-center gap-1">
      <Clock className="text-[12px] text-tertiary" aria-hidden={true} focusable="false" />
      <span className="font-body-xs text-body-xs text-tertiary text-[10px]">1h ago</span>
      </div>
      </div>
      <h4 className="font-title-md text-title-md text-on-surface mb-2 leading-tight">Database connection pool exhaustion</h4>
      <div className="bg-surface-container-lowest p-1.5 rounded border border-surface-container-high mb-2 flex items-center gap-2">
      <RefreshCw className="text-[14px] text-secondary animate-pulse" aria-hidden={true} focusable="false" />
      <span className="font-code text-code text-[10px] text-on-surface-variant">Executing retry script v2.4</span>
      </div>
      <div className="flex justify-between items-center mt-2 pt-2 border-t border-surface-container-high">
      <div className="flex gap-1">
      <span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps text-[9px] uppercase">DB</span>
      </div>
      <button className="flex items-center gap-1 px-1.5 py-0.5 rounded border border-outline-variant text-[10px] text-on-surface-variant hover:border-primary hover:text-primary transition-colors" type="button" data-action-id="update-6" onClick={actions?.["update-6"]}>
                                              Update <Pencil className="text-[12px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Lane: Supervisor Review */}
      <div className="flex flex-col w-[300px] flex-shrink-0 bg-[#1e293b] rounded border border-outline-variant flex-shrink-0 h-full overflow-hidden flex flex-col">
      <div className="h-row-height-standard flex items-center justify-between px-3 border-b border-outline-variant bg-surface-container-high flex-shrink-0">
      <div className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-error"></span>
      <h3 className="font-label-caps text-label-caps text-on-surface uppercase tracking-wider">Supervisor Review</h3>
      <span className="bg-surface-container-highest text-on-surface-variant px-1.5 rounded font-code text-code text-[10px]">1</span>
      </div>
      <button className="text-on-surface-variant hover:text-primary transition-colors" type="button" aria-label="More Horiz" data-action-id="more-horiz-7" onClick={actions?.["more-horiz-7"]}><Ellipsis className="text-[16px]" aria-hidden={true} focusable="false" /></button>
      </div>
      <div className="flex-1 overflow-y-auto p-2 space-y-2 custom-scrollbar">
      {/* Card 4 */}
      <div className="bg-surface rounded border border-error p-2 hover:bg-surface-container cursor-grab active:cursor-grabbing group transition-colors relative overflow-hidden shadow-[0_0_8px_rgba(255,180,171,0.1)]">
      <div className="absolute top-0 left-0 w-1 h-full bg-error"></div>
      <div className="pl-2">
      <div className="flex justify-between items-start mb-1.5">
      <span className="font-code text-code text-primary opacity-80 text-[10px]">FB-8930</span>
      <div className="flex items-center gap-1">
      <TriangleAlert className="text-[12px] text-error" aria-hidden={true} focusable="false" />
      <span className="font-body-xs text-body-xs text-error font-bold text-[10px]">3h ago</span>
      </div>
      </div>
      <h4 className="font-title-md text-title-md text-on-surface mb-2 leading-tight">Payment Gateway Timeout - Unhandled Exception</h4>
      <div className="bg-[#2a1700] border border-[#653e00] p-1.5 rounded mb-2 flex items-start gap-1.5">
      <BadgeAlert className="text-[14px] text-tertiary mt-0.5" aria-hidden={true} focusable="false" />
      <span className="font-body-xs text-body-xs text-[10px] text-tertiary-fixed-dim leading-tight">Manual intervention required. Automated retry failed 3 times.</span>
      </div>
      <div className="flex justify-between items-center mt-2 pt-2 border-t border-surface-container-high">
      <div className="flex gap-1">
      <img alt="Supervisor Avatar" className="w-4 h-4 rounded-full border border-surface" data-alt="A very small circular avatar of a technical supervisor. The image shows a focused individual in a dark setting, suitable for a technical dashboard. The avatar is tiny, serving as a quick visual identifier in a dense UI." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqQ0whiJvy4jFVXKkHKGQ2TMSBjGnQXDMCaBqVgXoRL-FU7fObZN2dcsQUa6dJslQUHQGJnYlHTbWU06fib7qa_YgWQn-PTPJu_9CVeoJ9GZqtyGG8dQx0kY52dDLf3qBoy6GADsN4v6Sd5lAbXDrpvEnTBYZvLedRgKAAOEvTZv6TIDoCCfSeEwP1RlLAAQ8s38ola6JVHQdnl8UVzMJ3r0DOD8bWVcJam4lgBvpcW68yDEXpEm55IefxVE4lgQcxiEfSyPnkESCj" />
      </div>
      <button className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-surface-container border border-outline-variant text-[10px] text-on-surface hover:border-primary hover:text-primary transition-colors" type="button" data-action-id="review-8" onClick={actions?.["review-8"]}>
                                              Review <ExternalLink className="text-[12px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Lane: Final Gate */}
      <div className="flex flex-col w-[300px] flex-shrink-0 bg-[#1e293b] rounded border border-outline-variant flex-shrink-0 h-full overflow-hidden flex flex-col">
      <div className="h-row-height-standard flex items-center justify-between px-3 border-b border-outline-variant bg-surface-container-high flex-shrink-0">
      <div className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
      <h3 className="font-label-caps text-label-caps text-on-surface uppercase tracking-wider">Final Gate</h3>
      <span className="bg-surface-container-highest text-on-surface-variant px-1.5 rounded font-code text-code text-[10px]">5</span>
      </div>
      <button className="text-on-surface-variant hover:text-primary transition-colors" type="button" aria-label="More Horiz" data-action-id="more-horiz-9" onClick={actions?.["more-horiz-9"]}><Ellipsis className="text-[16px]" aria-hidden={true} focusable="false" /></button>
      </div>
      <div className="flex-1 overflow-y-auto p-2 space-y-2 custom-scrollbar">
      {/* Card 5 */}
      <div className="bg-surface rounded border border-outline-variant p-2 hover:bg-surface-container hover:border-outline cursor-grab active:cursor-grabbing group transition-colors relative overflow-hidden opacity-70 hover:opacity-100">
      <div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
      <div className="pl-2">
      <div className="flex justify-between items-start mb-1.5">
      <span className="font-code text-code text-primary opacity-80 text-[10px] line-through">FB-8925</span>
      <div className="flex items-center gap-1">
      <CheckCircle2 className="text-[12px] text-secondary" aria-hidden={true} focusable="false" />
      <span className="font-body-xs text-body-xs text-secondary text-[10px]">Resolved</span>
      </div>
      </div>
      <h4 className="font-title-md text-title-md text-on-surface mb-2 leading-tight">Sync Job Failure on Node 4</h4>
      <div className="flex justify-between items-center mt-2 pt-2 border-t border-surface-container-high">
      <div className="flex gap-1">
      <span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps text-[9px] uppercase">Infra</span>
      </div>
      <button className="flex items-center gap-1 px-1.5 py-0.5 rounded border border-outline-variant text-[10px] text-on-surface-variant hover:border-secondary hover:text-secondary transition-colors" type="button" data-action-id="close-10" onClick={actions?.["close-10"]}>
                                              Close <CheckCheck className="text-[12px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
      <style>{`
              /* Minimal custom scrollbar for dense technical feel */
              .custom-scrollbar::-webkit-scrollbar {
                  width: 4px;
                  height: 4px;
              }
              .custom-scrollbar::-webkit-scrollbar-track {
                  background: transparent;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb {
                  background: #334155;
                  border-radius: 2px;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                  background: #475569;
              }
          `}</style>
    </>
  );
}
