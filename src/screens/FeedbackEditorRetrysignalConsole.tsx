// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Feedback Editor - RetrySignal Console
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, ChevronDown, CircleAlert, Info, Save, X } from "lucide-react";


export type FeedbackEditorRetrysignalConsoleActionId = "close-editor-1" | "cancel-2" | "save-changes-3";

export interface FeedbackEditorRetrysignalConsoleProps {
  actions?: Partial<Record<FeedbackEditorRetrysignalConsoleActionId, () => void>>;

}

export function FeedbackEditorRetrysignalConsole({ actions }: FeedbackEditorRetrysignalConsoleProps) {
  return (
    <>
      {/* Focused Header (Nav Shell Suppressed for Contextual Focus) */}
      <header className="flex justify-between items-center w-full px-container-padding h-row-height-standard border-b border-outline-variant bg-surface sticky top-0 z-10">
      <div className="flex items-center gap-4">
      <button aria-label="Close Editor" className="text-on-surface-variant hover:text-primary flex items-center justify-center w-8 h-8 rounded hover:bg-surface-variant transition-colors" type="button" data-action-id="close-editor-1" onClick={actions?.["close-editor-1"]}>
      <X className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <div className="flex flex-col">
      <h1 className="font-headline text-headline text-on-surface">Feedback Editor</h1>
      <span className="font-body-xs text-body-xs text-on-surface-variant leading-tight">Drafting new operational report</span>
      </div>
      </div>
      <div className="flex items-center gap-gutter">
      <button className="h-row-height-dense px-4 border border-outline-variant text-on-surface-variant font-label-caps text-label-caps uppercase rounded hover:bg-surface-variant hover:text-on-surface transition-colors flex items-center" type="button" data-action-id="cancel-2" onClick={actions?.["cancel-2"]}>
                      Cancel
                  </button>
      <button className="h-row-height-dense px-4 bg-primary text-on-primary font-label-caps text-label-caps uppercase rounded hover:bg-primary-container transition-colors flex items-center gap-2" type="button" data-action-id="save-changes-3" onClick={actions?.["save-changes-3"]}>
      <Save  style={{fontVariationSettings: "'FILL' 1"}} className="text-[16px]" aria-hidden={true} focusable="false" />
                      Save Changes
                  </button>
      </div>
      </header>
      {/* Main Canvas */}
      <main className="flex-1 overflow-y-auto p-container-padding flex justify-center items-start pt-8 pb-16 relative">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-primary/5 blur-[100px] pointer-events-none rounded-full"></div>
      <form className="w-full max-w-3xl bg-surface-container-low border border-outline-variant rounded-xl p-8 flex flex-col gap-6 shadow-xl relative z-10">
      {/* Context Banner */}
      <div className="bg-surface-variant/50 border border-outline-variant rounded p-3 flex items-start gap-3">
      <Info className="text-primary mt-0.5" aria-hidden={true} focusable="false" />
      <div>
      <h3 className="font-title-md text-title-md text-on-surface">Target Entity: Bridge Alpha</h3>
      <p className="font-body-xs text-body-xs text-on-surface-variant mt-1">Changes made here will be directly injected into the pipeline board for review.</p>
      </div>
      </div>
      {/* Title Field (Validation State) */}
      <div className="flex flex-col gap-1">
      <label className="font-label-caps text-label-caps uppercase text-on-surface-variant flex gap-1 items-center" htmlFor="feedback-title">
                          Report Title <span aria-hidden={true} className="text-error">*</span>
      </label>
      <div className="relative flex items-center">
      <input className="w-full h-row-height-dense bg-surface border border-error rounded px-3 font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-error focus:ring-1 focus:ring-error placeholder:text-on-surface-variant/40 transition-colors pr-10" id="feedback-title" name="title" placeholder="e.g., Latency Spike on Protocol Sequence" type="text" defaultValue="" />
      <CircleAlert className="absolute right-3 text-error pointer-events-none" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-center gap-1 mt-1 text-error">
      <span className="font-body-xs text-body-xs">Title is required for operational tracking.</span>
      </div>
      </div>
      {/* Taxonomy Row */}
      <div className="flex flex-col sm:flex-row gap-gutter w-full">
      {/* Priority Field */}
      <div className="flex flex-col gap-1 flex-1">
      <label className="font-label-caps text-label-caps uppercase text-on-surface-variant flex gap-1 items-center" htmlFor="feedback-priority">
                              Priority Level <span aria-hidden={true} className="text-error">*</span>
      </label>
      <div className="relative">
      <select className="w-full h-row-height-dense bg-surface border border-outline-variant rounded px-3 pr-10 font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary appearance-none transition-colors" id="feedback-priority" name="priority">
      <option disabled={true} selected={true} value="">Assign tier</option>
      <option value="p1">P1 - Critical Path</option>
      <option value="p2">P2 - High Impact</option>
      <option value="p3">P3 - Routine Analysis</option>
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      </div>
      {/* Category Field */}
      <div className="flex flex-col gap-1 flex-1">
      <label className="font-label-caps text-label-caps uppercase text-on-surface-variant flex gap-1 items-center" htmlFor="feedback-category">
                              Category <span aria-hidden={true} className="text-error">*</span>
      </label>
      <div className="relative">
      <select className="w-full h-row-height-dense bg-surface border border-outline-variant rounded px-3 pr-10 font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary appearance-none transition-colors" id="feedback-category" name="category">
      <option disabled={true} selected={true} value="">Select origin</option>
      <option value="infrastructure">Infrastructure Routing</option>
      <option value="interface">Interface Desync</option>
      <option value="telemetry">Telemetry Drop</option>
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      {/* Local Notes Field */}
      <div className="flex flex-col gap-1">
      <label className="font-label-caps text-label-caps uppercase text-on-surface-variant flex justify-between items-end" htmlFor="feedback-notes">
      <span>Local Notes</span>
      <span className="text-on-surface-variant/50 normal-case font-body-xs text-body-xs">Optional</span>
      </label>
      <textarea className="w-full bg-surface border border-outline-variant rounded p-3 font-code text-code text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-y placeholder:text-on-surface-variant/40 transition-colors" id="feedback-notes" name="notes" placeholder="Provide raw logs or deterministic sequence of events..." rows={6}></textarea>
      </div>
      {/* Separation Divider */}
      <hr className="border-t border-outline-variant/50 w-full my-2" />
      {/* Recovery Path Toggle Setting */}
      <div className="flex items-center justify-between bg-surface-container-highest/30 p-4 rounded border border-outline-variant/30 hover:bg-surface-container-highest/50 transition-colors">
      <div className="flex flex-col gap-1 pr-6">
      <span className="font-title-md text-title-md text-on-surface flex items-center gap-2">
      <BadgeHelp className="text-tertiary-fixed-dim text-[18px]" aria-hidden={true} focusable="false" />
                              Engage Recovery Path
                          </span>
      <span className="font-body-xs text-body-xs text-on-surface-variant">Inject automatic retry heuristics to the pipeline board upon submission. Bypasses manual oversight.</span>
      </div>
      {/* Toggle UI */}
      <label className="relative inline-flex items-center cursor-pointer shrink-0">
      <input className="sr-only peer" name="recovery_path" type="checkbox" />
      <div className="w-10 h-5 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-primary after:border-surface-variant after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary border border-outline-variant peer-checked:border-primary"></div>
      </label>
      </div>
      </form>
      </main>
    </>
  );
}
