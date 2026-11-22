---
name: Obsidian & Aurum
colors:
  surface: '#121316'
  surface-dim: '#121316'
  surface-bright: '#38393c'
  surface-container-lowest: '#0d0e11'
  surface-container-low: '#1b1b1f'
  surface-container: '#1f1f23'
  surface-container-high: '#292a2d'
  surface-container-highest: '#343538'
  on-surface: '#e3e2e6'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#e3e2e6'
  inverse-on-surface: '#2f3034'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#c1c7cf'
  on-secondary: '#2b3137'
  secondary-container: '#41474e'
  on-secondary-container: '#afb6bd'
  tertiary: '#edcb71'
  on-tertiary: '#3d2e00'
  tertiary-container: '#d0b059'
  on-tertiary-container: '#574300'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#dde3eb'
  secondary-fixed-dim: '#c1c7cf'
  on-secondary-fixed: '#161c22'
  on-secondary-fixed-variant: '#41474e'
  tertiary-fixed: '#ffe08f'
  tertiary-fixed-dim: '#e4c36a'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#584400'
  background: '#121316'
  on-background: '#e3e2e6'
  surface-variant: '#343538'
typography:
  display-hero:
    fontFamily: Playfair Display
    fontSize: 4.5rem
    fontWeight: '400'
    lineHeight: 5rem
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Playfair Display
    fontSize: 2.75rem
    fontWeight: '400'
    lineHeight: 3.25rem
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 3rem
    fontWeight: '400'
    lineHeight: 3.5rem
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 2rem
    fontWeight: '400'
    lineHeight: 2.5rem
  headline-md:
    fontFamily: Playfair Display
    fontSize: 2.25rem
    fontWeight: '400'
    lineHeight: 2.75rem
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 1.5rem
    fontWeight: '500'
    lineHeight: 2rem
  title-editorial:
    fontFamily: Playfair Display
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.75rem
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '300'
    lineHeight: 1.875rem
  body-md:
    fontFamily: Inter
    fontSize: 0.9375rem
    fontWeight: '400'
    lineHeight: 1.6rem
  body-sm:
    fontFamily: Inter
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: 1.375rem
  technical-label:
    fontFamily: Space Grotesk
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: 1rem
    letterSpacing: 0.15em
  caption-caps:
    fontFamily: Inter
    fontSize: 0.6875rem
    fontWeight: '600'
    lineHeight: 0.875rem
    letterSpacing: 0.2em
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 4rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.75rem
  space-xl: 3rem
---

## Brand & Style

This design system establishes an atmospheric digital atelier for an ultra-luxury Haute Horlogerie maison. Evoking the controlled reverence of high-complication watchmaking, the interface blends cinematic dark luxury with surgical precision. 

The aesthetic synthesizes:
- **Atmospheric Dark Minimalism:** Deep, ink-like obsidian expanses punctuated by controlled radial light reminiscent of horological lightbox photography.
- **Bespoke Tactility & Micro-Metallics:** Subtle champagne gold brush strokes, titanium hairline dividers, and fine-gauge borders echoing hand-beveled tourbillon bridges.
- **Glassmorphic Depth:** Translucent sapphire-crystal layers over layered dial mechanics, maintaining focus on mechanical micro-architecture.

The experience conveys timeless prestige, mechanical mastery, and uncompromised discretion. Every interaction must feel weighted, smooth, and deliberately calibrated.

## Colors

The chromatic architecture is anchored in shadow to dramatize timepieces and metadata.

- **Obsidian Black (`#0A0A0C`):** Base backdrop canvas representing the void of deep space and unlit ateliers.
- **Graphite Tier (`#121316`):** Primary card and surface layer, offering subtle separation from the abyss.
- **Brushed Slate (`#1E2025`):** Structural floating panels, elevated states, and mechanical modules.
- **Champagne Gold Accents (`#D4AF37`, `#E5C158`, `#997D2B`):** Used sparingly for critical focal points, complications, selected indicators, and key micro-interactions.
- **Titanium & Silver Highlights (`#E2E8F0`, `#94A3B8`):** Legible typographic hierarchy, calipers, and technical metadata.
- **Hairline Charcoal Borders (`#2A2D35`):** Precise 1px boundaries defining structural modules.

## Typography

Typography balances Haute Horlogerie heritage with modern scientific engineering.

- **Editorial Grandeur (Headlines):** `Playfair Display` provides historical weight, elegance, and artisanal cadence for reference titles, collection names, and editorial storytelling.
- **Functional Precision (Body):** `Inter` provides high legibility at optical sizes, delivering neutral descriptions, provenance dossiers, and customer service dialogues.
- **Instrument Specs & Complications (Labels):** `Space Grotesk` handles technical references, caliber numbers, frequency measurements (e.g., `28,800 VPH`), water resistance ratings, and micro-labels. Always rendered with extended letter spacing to echo micrometer instruments.

## Layout & Spacing

The layout treats screen real estate like an haute exhibition room, prioritizing wide spatial margins, negative space, and deliberate sightlines over density.

- **Grid Architecture:** Desktop layouts utilize a 12-column fluid grid constrained to a maximum width of `1440px`. Mobile viewports compress to a 4-column system.
- **Rhythm & Breathing Room:** Luxury is expressed through whitespace. Primary collection displays require generous vertical pauses (`space-xl` multiplied for section offsets) to isolate macro imagery of dials, escapements, and hand-finished indices.
- **Horological Data Modules:** Technical specifications, dimensional profiles, and movement details align to modular sub-grids bounded by 1px hairline dividers.

## Elevation & Depth

Visual hierarchy does not rely on heavy drop shadows. Depth is achieved via tonal surface layering, sapphire glassmorphism, and ambient backlighting.

- **Level 0 (Abyss):** Base canvas in `#0A0A0C` with occasional low-opacity radial vignettes (`radial-gradient(ellipse at 50% 30%, rgba(212, 175, 55, 0.04), transparent 70%)`).
- **Level 1 (Surface Glass):** Cards and spec sheets use `#121316` at 85% opacity with `16px` backdrop-blur and a subtle top border highlight of `rgba(226, 232, 240, 0.08)`.
- **Level 2 (Floating Instrument Panels):** Modals, loupe magnification controls, and interactive dials sit on `#1E2025` with `24px` backdrop-blur, an outer hairline border of `#2A2D35`, and a subtle diffused shadow: `0 20px 40px rgba(0, 0, 0, 0.6)`.
- **Metallic Edge Framing:** Rather than standard elevation, critical elements gain presence through a dual border: an outer 1px hairline in `#2A2D35` combined with an inner 1px glow in `rgba(212, 175, 55, 0.15)`.

## Shapes

The shape system adopts a sharp, architectural `0` geometry (`0px` border-radius), referencing the faceted cut of synthetic sapphire glass, geometric case bezels, and hand-machined movement plates.

- **Primary Geometry:** Cards, panels, buttons, tabs, and input containers feature strict right angles.
- **Circularity Exception:** Strict circular shapes (`rounded-full`) are reserved exclusively for astronomical complications, dial indicators, movement wheels, loupe lenses, and avatar seals.
- **Beveled Accents:** High-tier interaction cards may incorporate subtle 45-degree chamfered corner notches to mimic the beveled chamfers (*anglage*) of Haute Horlogerie movements.

## Components

### Buttons
- **Primary (Acquisition / Reserve):** Solid champagne gold (`#D4AF37`) fill, deep obsidian black text (`#0A0A0C`), uppercase `Space Grotesk` with `0.15em` letter spacing. Razor-sharp corners. Transitions on hover to `#E5C158` with subtle gold ambient luminescence (`0 0 20px rgba(212, 175, 55, 0.3)`).
- **Secondary (Technical Dossier):** Transparent background, 1px perimeter border in `#2A2D35`, text in `#E2E8F0`. Hover transitions border to `#94A3B8` and background to `rgba(226, 232, 240, 0.03)`.
- **Text Link:** Refined serif or mono label accompanied by an ultra-thin trailing rule that expands on interaction.

### Cards & Modules
- **Horological Display Card:** Background in `#121316`, hairline outline `#2A2D35`. Isolated watch photography floating without hard floor planes. Spec tags positioned using micro `caption-caps` in `#94A3B8`.
- **Movement Complication Module:** Subtle inset padding, top-bordered with an ultra-thin gold metallic hairline (`#D4AF37`).

### Input Fields & Controls
- **Form Inputs:** Underline-only or solid dark graphite fields with a 1px baseline in `#2A2D35`. Focused state illuminates the bottom border to `#D4AF37` with smooth transition.
- **Checkboxes & Radios:** Sharp geometric squares and diamonds. Unselected: 1px border in `#2A2D35`. Selected: Inset champagne gold core with zero blur.

### Micro-Components & Data Displays
- **Complication Chips:** Small technical badges featuring movement attributes (e.g., "CALIBRE 01", "FLYBACK CHRONOGRAPH", "65H RESERVE"). Background `rgba(30, 32, 37, 0.6)`, text in `#E2E8F0`, uppercase `0.75rem` Space Grotesk.
- **Interactive Loupe Overlay:** Precision circular viewport with a 1px brushed titanium rim, magnifying hand-finishing details at 4x optical resolution.