---
name: Mocha Rose Academic Workspace
colors:
  surface: '#faf9f9'
  surface-dim: '#dbdad9'
  surface-bright: '#faf9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e8'
  surface-container-highest: '#e3e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#544245'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
  outline: '#877275'
  outline-variant: '#dac0c4'
  surface-tint: '#9b4056'
  primary: '#963c53'
  on-primary: '#ffffff'
  primary-container: '#b5546b'
  on-primary-container: '#fff9f9'
  inverse-primary: '#ffb1c0'
  secondary: '#834f5f'
  on-secondary: '#ffffff'
  secondary-container: '#fdbacc'
  on-secondary-container: '#7a4757'
  tertiary: '#795400'
  on-tertiary: '#ffffff'
  tertiary-container: '#986b02'
  on-tertiary-container: '#fff9f6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9df'
  primary-fixed-dim: '#ffb1c0'
  on-primary-fixed: '#3f0016'
  on-primary-fixed-variant: '#7d283f'
  secondary-fixed: '#ffd9e2'
  secondary-fixed-dim: '#f7b4c7'
  on-secondary-fixed: '#340d1c'
  on-secondary-fixed-variant: '#683848'
  tertiary-fixed: '#ffdeaa'
  tertiary-fixed-dim: '#f5bd58'
  on-tertiary-fixed: '#271900'
  on-tertiary-fixed-variant: '#5f4100'
  background: '#faf9f9'
  on-background: '#1b1c1c'
  surface-variant: '#e3e2e2'
  soft-rose: '#FBF3F4'
  surface-white: '#FFFFFF'
  outline-rose: '#EED9DF'
  outline-subtle: '#F5E8EB'
  status-completed: '#22A06B'
  status-in-progress: '#F5A524'
  status-overdue: '#E5484D'
typography:
  page-title-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  page-title:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  page-title-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: -0.015em
  section-title-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: -0.01em
  section-title:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-base:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-medium:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-desktop: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system blends academic dignity with contemporary editorial warmth to create an organized, focused workspace for modern educational institutions. Moving away from the sterile, utilitarian gray-and-blue palettes of conventional enterprise management tools, it establishes an atmosphere that feels dignified, tranquil, and distinctly human.

The personality balances high-caliber institutional structure with approachability:
- **Tone & Mood**: Scholarly, focused, clear, and reassuring.
- **Target Audience**: University administrators, lecturers (*Dosen*), and students (*Mahasiswa*) requiring structured workflows, grade submissions, class tracking, and document governance.
- **Aesthetic Movement**: Modern Editorial Minimalism. It relies on a calibrated 60-30-10 color ratio, delicate hairline borders, generous card radii (12px–18px), and restrained low-elevation planes rather than heavy shadows.

Restraint governs the system: multi-color gradients and decorative graphics are prohibited. Only subtle monochromatic shifts within identical color families are permitted.

## Colors

The palette revolves around the **Mocha Rose** harmony, balancing earthy plum depths against warm blush tints and academic gold accents.

### Distribution & Balance
- **60% Foundation**: Canvas background in Soft Rose (`#FBF3F4`) paired with elevated containers in Surface White (`#FFFFFF`).
- **30% Structure & Interaction**: High-contrast contrast panels, deep sidebars, and primary typography anchored in Deep Mocha (`#4A1F2E`), with primary interactive targets, links, and active states driven by Rose Burgundy (`#B5546B`).
- **10% Accentuation**: Academic achievements, honor tags, and milestones signaled via Muted Gold (`#D9A441`).

### Accessibility & Application Guardrails
- **Muted Gold (`#D9A441`) Rule**: To ensure AA/AAA compliance, Muted Gold is restricted to pill badges with tinted backgrounds or large decorative marks; it must never be used for small body text over white surfaces.
- **Status Signals**: Semantic states use defined tones—Completed/Attendance (`#22A06B`), In-Progress/Pending (`#F5A524`), and Overdue/Error (`#E5484D`). These are applied using 12% opacity tint fills paired with full-strength glyphs and text labels.
- **Dark Mode Shift**: In dark mode, Deep Mocha (`#4A1F2E`) forms the foundational surface, elevated containers shift toward `#3B1824`, and Rose Burgundy (`#B5546B`) serves as the active interaction highlight.

## Typography

Typography is set exclusively in **Plus Jakarta Sans**, utilizing its geometric clarity, tall x-height, and generous apertures to deliver effortless legibility in dense academic tables, schedule matrices, and editorial overviews.

To preserve hierarchy without visual clutter, the system is strictly limited to three weights: **Regular (400)**, **Semi-Bold (600)**, and **Bold (700)**.
- **Headings & Titles**: Tightly tracked (`-0.01em` to `-0.02em`) to command attention while grounding views in the deep mocha text tone.
- **Body & Longform**: Maintained with zero tracking and comfortable line heights (1.45–1.55x) to support long study sessions and review workflows.
- **Labels & Microcopy**: Slightly tracked outward (`+0.01em` to `+0.02em`) in Semi-Bold to ensure legibility on compact status indicators and course credit badges (*SKS*).

## Layout & Spacing

The system uses a fluid 12-column grid anchored by a dedicated fixed-width desktop sidebar navigation:
- **Sidebar Dimensions**: Fixed width between `240px` and `264px` on desktop viewports (collapsible to an 80px rail on mid-tier displays).
- **Desktop Grid**: Fluid 12 columns with `24px` (`gutter-desktop`) gutters and `32px` (`margin-desktop`) canvas padding, constrained to a maximum content width of `1440px`.
- **Tablet (768px – 1024px)**: Sidebar shifts to an off-canvas drawer or icon rail; dashboard metric tiles collapse from 4 columns to 2 columns; data grids permit horizontal table scroll or convert to card stacks.
- **Mobile (< 768px)**: Content flows in a single column with `16px` gutters and margins. Top headers pair with a fixed bottom navigation bar for primary role routes, tucking auxiliary tools into an expandable drawer. Tables convert entirely into stacked cards to eliminate horizontal overflow.
- **Rhythm**: Component spacing adheres strictly to a 4px/8px modular scale, reserving `space-md` (`16px`) for card interiors and `space-lg` to `space-xl` (`24px`–`32px`) for section division.

## Elevation & Depth

Visual hierarchy is conveyed primarily through flat, tonal surface transitions and delicate perimeter definition rather than heavy drop shadows:

- **Surface Layering**: The primary visual separation occurs between the Soft Rose background canvas (`#FBF3F4`) and pure White container surfaces (`#FFFFFF`).
- **Hairline Outlines**: Containers and cards rely on a 1px border in neutral rose tint (`#EED9DF`), providing clean structure.
- **Ambient Shadows**: Shadows are strictly low-opacity and diffused to prevent harsh edges. The standard container elevation uses:
  - *Resting Card*: `0px 2px 8px rgba(74, 31, 46, 0.04)`
  - *Floating Menu / Dropdown*: `0px 4px 16px rgba(74, 31, 46, 0.08)`
  - *Modal Dialog*: `0px 12px 32px rgba(74, 31, 46, 0.12)`
- **Z-Index Order**: Standard layering separates the Canvas base (`0`), Floating Cards (`1`), Sticky Topbars (`10`), Navigation Sidebars (`20`), Dropdowns & Popovers (`30`), and Modal Dialogs with scrim overlays (`50`).

## Shapes

The design uses a rounded geometry that balances institutional polish with an approachable warmth:
- **Component Geometry (8px – 12px)**: Form inputs, action buttons, select fields, and table rows use standard component curvature.
- **Container Geometry (14px – 18px)**: Cards, modular layout panels, modal windows, and calendar blocks use larger radii, providing structured frames on the soft rose canvas.
- **Pills (9999px / `rounded-full`)**: Reserved for metadata tags, course credit indicators (*SKS*), and semantic status indicators (*Hadir*, *Menunggu*, *Terlambat*).

## Components

### Buttons
- **Primary**: Solid Rose Burgundy (`#B5546B`) background with pure White typography and `10px` border-radius. On hover, transitions smoothly (150ms ease) to a deeper burgundy (`#9E455A`).
- **Secondary**: Surface White background, 1px border (`#EED9DF`), and Deep Mocha (`#4A1F2E`) label. Transitions to Soft Rose (`#FBF3F4`) on hover.
- **Tertiary / Ghost**: Transparent container with Deep Mocha or Rose Burgundy text, highlighting with a 5% rose wash on hover.
- **Destructive**: Pale red tinted background with Overdue Red (`#E5484D`) text and border outline.

### Form Inputs & Selectors
- **Input Fields**: Crisp White fill, `10px` radius, 1px border (`#EED9DF`), and `14px` Plus Jakarta Sans text. On focus, applies a Rose Burgundy (`#B5546B`) ring with no layout jump.
- **Checkboxes & Radios**: `6px` radius for checkboxes; fully round for radios. Unchecked states use a 1.5px border (`#8A8A8A`); checked states fill with Rose Burgundy (`#B5546B`) alongside a white checkmark icon.

### Chips & Status Badges
- **Pill Badges**: Set to `9999px` full roundness, `12px` font size with Semi-Bold weight (`600`), and a minimum padding of `4px 10px`.
- **Status Semantic Mappings**:
  - *Completed / Hadir*: `#22A06B` text on 12% `#22A06B` tinted fill.
  - *In Progress / Menunggu*: `#F5A524` text on 12% `#F5A524` tinted fill.
  - *Overdue / Terlambat*: `#E5484D` text on 12% `#E5484D` tinted fill.
  - *Not Started / Draft*: `#8A8A8A` text on 10% `#8A8A8A` tinted fill.

### Cards & Data Panels
- **Layout**: White (`#FFFFFF`) surface, `16px` border-radius, hairline border (`#EED9DF`), and soft ambient shadow (`rgba(74, 31, 46, 0.04)`).
- **Headers**: Structured with a `16px`–`20px` Semi-Bold Deep Mocha title, right-aligned secondary actions, and optional metadata chips.

### Navigation Elements
- **Deep Mocha Sidebar**: Fixed dark surface (`#4A1F2E`) with pure white typography. Active navigational links are highlighted using a Rose Burgundy pill background.
- **Dividers**: Lower-tier navigation (such as the document archive, *Arsip Dokumen Akademik*) is separated near the bottom via a subtle hairline divider.
- **Iconography**: Exclusively thin-to-medium stroke (1.75px–2px) Lucide icons. Emojis are strictly banned from navigational and operational interfaces.