---
name: Deterministic Operations
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#ffb95f'
  on-tertiary: '#472a00'
  tertiary-container: '#ca8100'
  on-tertiary-container: '#3e2400'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  title-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  body-xs:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  code:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-padding: 16px
  gutter: 12px
  row-height-dense: 32px
  row-height-standard: 40px
---

## Brand & Style
The design system is engineered for high-stakes operational environments where clarity and recovery speed are paramount. The brand personality is **deterministic, calm, and utility-focused**, stripping away all marketing fluff in favor of technical precision. 

The aesthetic blends **Modern Corporate** efficiency with a **Minimalist** density, prioritizing "at-a-glance" status recognition over decorative elements. It utilizes a refined technical layout inspired by modern developer tooling, ensuring that the user feels in total control of the system's state. The emotional response should be one of quiet confidence and professional focus.

## Colors
The palette is rooted in a "Vite-inspired" hierarchy, using deep slates for the dark mode foundation and crisp whites for light mode. 

- **Primary (#3b82f6):** The core action color, reserved for primary buttons and active navigation states.
- **Success (#10b981):** Used for "Resolved" or "Successful" operation signals.
- **Warning (#f59e0b):** Used for "Retrying" or "Stalled" states.
- **Error (#f43f5e):** High-visibility signal for failed operations requiring manual intervention.
- **Neutral (#0f172a):** The primary background for dark mode, providing a high-contrast base for text and borders.

The UI should use subtle background tints of these status colors (at 10% opacity) for row highlights or toast notifications to maintain context without overwhelming the user.

## Typography
The system uses **Inter** for all UI controls and narrative text to ensure maximum legibility at small scales. **JetBrains Mono** is introduced for IDs, payloads, and technical logs to distinguish data from the interface.

To support high information density, the base font size is set to **13px**. Weight is used aggressively to establish hierarchy rather than size increases. All labels for status or metadata should use `label-caps` (uppercase) to differentiate them from interactive text.

## Layout & Spacing
This design system utilizes a **Fixed Grid** model for sidebar navigation and a **Fluid Grid** for the main data orchestration area. 

- **Density:** Spacing is built on a 4px base unit. 
- **Data Tables:** These are the heart of the system. Use a 32px row height for high-density views and 40px for standard views. 
- **Margins:** 16px safe areas around the main viewport.
- **Breakpoints:**
  - **Mobile (<768px):** Navigation collapses to a hamburger menu; tables transform into stacked cards.
  - **Desktop (>=1024px):** Permanent sidebars and multi-column data views are enabled.

## Elevation & Depth
In a high-density operations console, shadows are minimized to prevent visual noise. Depth is achieved through **Tonal Layers** and **Low-Contrast Outlines**.

- **Level 0 (Background):** Deep Slate (#0f172a).
- **Level 1 (Cards/Sidebar):** A slightly lighter slate with a 1px solid border (#1e293b).
- **Level 2 (Modals/Popovers):** Surface color #1e293b with a 4px blur shadow (Black @ 25% opacity) to provide a subtle "lift" from the data grid.
- **Dividers:** 1px solid lines using #334155 to separate table columns and navigation items.

## Shapes
The shape language is **Soft (0.25rem)**. This provides a professional, "tooled" look that feels modern without being overly playful. 

- **Buttons & Inputs:** 4px (0.25rem) corner radius.
- **Status Pills:** Fully rounded (pill-shaped) to distinguish them from interactive buttons.
- **Outer Containers:** 8px (0.5rem) corner radius for large dashboard panels.

## Components
Consistent styling across technical components ensures a predictable user experience:

- **Buttons:** Compact (32px height). Primary buttons use a solid blue background; secondary buttons use a ghost style with a 1px slate border. Icons (16px) should always accompany text for critical actions like "Retry" or "Kill."
- **Status Chips:** High-contrast backgrounds (emerald, amber, rose) with white text, using the `label-caps` typography style.
- **Data Tables:** Hover states must use a subtle background highlight (#1e293b). Column headers are sticky and use `label-caps`.
- **Input Fields:** Dark backgrounds with a 1px border. On focus, the border transitions to the Primary Blue. Error states use a 1px Rose border with a trailing exclamation icon.
- **Operational Logs:** Monospaced text block with a background color darker than the main surface. Line numbers should be present for easy reference.
- **Recovery Paths:** Always place the "Retry" action in a consistent location (top right of cards or the last column of tables) to build muscle memory.