---
name: Aura Resilience System
colors:
  surface: '#f5fafa'
  surface-dim: '#d5dbdb'
  surface-bright: '#f5fafa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff5f4'
  surface-container: '#e9efee'
  surface-container-high: '#e4e9e9'
  surface-container-highest: '#dee4e3'
  on-surface: '#171d1d'
  on-surface-variant: '#434842'
  inverse-surface: '#2c3132'
  inverse-on-surface: '#ecf2f1'
  outline: '#737971'
  outline-variant: '#c3c8bf'
  surface-tint: '#4a654d'
  primary: '#47614a'
  on-primary: '#ffffff'
  primary-container: '#5f7a61'
  on-primary-container: '#efffec'
  inverse-primary: '#b1ceb1'
  secondary: '#496175'
  on-secondary: '#ffffff'
  secondary-container: '#cde5fe'
  on-secondary-container: '#4f677c'
  tertiary: '#5c5b56'
  on-tertiary: '#ffffff'
  tertiary-container: '#74736e'
  on-tertiary-container: '#fdfaf3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cceacc'
  primary-fixed-dim: '#b1ceb1'
  on-primary-fixed: '#07200e'
  on-primary-fixed-variant: '#334d36'
  secondary-fixed: '#cde5fe'
  secondary-fixed-dim: '#b1c9e1'
  on-secondary-fixed: '#021e2f'
  on-secondary-fixed-variant: '#32495d'
  tertiary-fixed: '#e5e2db'
  tertiary-fixed-dim: '#c9c6c0'
  on-tertiary-fixed: '#1c1c18'
  on-tertiary-fixed-variant: '#474742'
  background: '#f5fafa'
  on-background: '#171d1d'
  surface-variant: '#dee4e3'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-margin-mobile: 20px
  container-margin-desktop: 40px
  gutter: 16px
  section-gap: 48px
  element-gap: 16px
---

## Brand & Style

The design system is centered on the concept of "Digital Sanctuary." It targets individuals seeking mental clarity, emotional regulation, and a reprieve from high-stimulation environments. The aesthetic identity is a blend of **Soft Minimalism** and **Modern Wellness**, prioritizing cognitive ease over technical density.

The UI avoids "techy" tropes—such as neon accents, heavy blurs, or complex iconography—in favor of a high-contrast yet calming environment. Large, intentional whitespace acts as a structural element, ensuring that the interface feels breathable and unhurried. The emotional response is one of safety, groundedness, and quiet confidence.

## Colors

The palette is derived from natural, desaturated tones to prevent visual fatigue. 

- **Primary (Sage Green):** Used for growth-oriented actions, progress indicators, and primary navigation.
- **Secondary (Slate Blue):** Used for supportive information, secondary interactions, and calming content categories.
- **Tertiary (Warm Cream):** Applied to large surface areas and containers to soften the "starkness" of pure white.
- **Neutral (Soft Charcoal):** Replaces harsh blacks for all typography and iconography to maintain high contrast while reducing eye strain.

Avoid using pure `#000000` or vibrant, saturated primaries. All success, error, and warning states should be muted versions of their standard counterparts (e.g., a dusty rose for errors instead of bright red).

## Typography

This design system utilizes a tiered typographic approach. **Plus Jakarta Sans** provides a friendly, geometric character for headings, creating a distinctive brand voice that feels modern yet approachable. **Inter** is used for all functional and long-form text to ensure maximum readability and a systematic feel.

Headlines should use generous bottom margins to maintain the "breathable" layout philosophy. For mobile devices, display and large headline sizes scale down to prevent awkward word wrapping while maintaining visual weight.

## Layout & Spacing

The design system employs a **Fluid Grid** model based on an 8px base unit. 

- **Mobile:** 4-column grid with 20px outside margins.
- **Tablet:** 8-column grid with 32px outside margins.
- **Desktop:** 12-column grid with a maximum content width of 1200px, centered on the viewport.

Whitespace is treated as a first-class citizen. Sections should be separated by at least 48px to clearly distinguish between different mental "tasks" or content types. Elements within a card or module should follow a strict 8px/16px/24px hierarchy to maintain a predictable rhythm.

## Elevation & Depth

To maintain a "soft" feel, depth is conveyed through **Tonal Layers** and **Ambient Shadows** rather than traditional elevation.

- **Base Layer:** The warm background (`#FCFAF7`).
- **Surface Layer:** White cards (`#FFFFFF`) with a very soft, diffused shadow (0px 4px 20px, 5% opacity of the Neutral color).
- **Interactive Layer:** Subtle 1px borders using a light version of the Slate Blue to define boundaries without adding visual noise.

Avoid heavy drop shadows or multiple stacked shadows. The goal is to make elements feel like they are gently resting on a soft surface, not floating high above it.

## Shapes

The shape language is consistently **Rounded**. Hard corners are strictly avoided as they evoke tension. 

- **Standard Elements (Buttons, Inputs):** 0.5rem (8px) radius.
- **Containers (Cards, Modals):** 1rem (16px) radius.
- **Large Sections (Bottom Sheets):** 1.5rem (24px) top-only radius.

Iconography should follow this logic, using rounded terminals and soft joins.

## Components

### Buttons
Primary buttons use the Sage Green background with white text. Secondary buttons use a Slate Blue outline or a subtle Cream background. All buttons have a height of 48px or 56px to ensure they are easy to tap and feel substantial.

### Input Fields
Inputs use the White surface with a 1px border in a light neutral. On focus, the border transitions to Sage Green with a subtle 4px outer glow of the same color at 10% opacity.

### Cards
Cards are the primary content vessel. They feature a 16px corner radius and the "Ambient Shadow" defined in the Elevation section. Padding inside cards is a minimum of 24px to ensure content doesn't feel cramped.

### Progress Indicators
Used for mood tracking or meditation completion. Use soft, continuous lines rather than segmented bars. The active track is Sage Green, and the inactive track is a light version of the Warm Cream.

### Chips & Tags
Used for filtering "Moods" or "Activities." These should be pill-shaped (fully rounded) with a background color that matches the Secondary Slate Blue at 10% opacity.