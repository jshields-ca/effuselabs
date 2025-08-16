# Effuse Labs Brand & Color System

**Version:** 1.1  
**Last Updated:** August 16, 2025

---

## Overview

This document provides a comprehensive reference for the Effuse Labs, Lumina, and SilentLedger brand color system, typography, and design best practices. It is intended for developers and designers to ensure visual consistency, accessibility, and maintainability across the project.

---

## Color System

## Effuse Labs Corporate Brand Palette

| Name        | Hex     | Tailwind Class     | Usage                        |
| ----------- | ------- | ------------------ | ---------------------------- |
| Slate Grey  | #2E3440 | effuse-slate       | Backgrounds, text, surfaces  |
| Effuse Teal | #22C5C3 | effuse-teal        | Accents, buttons, highlights |
| Lumina Gold | #FFD25A | effuse-gold        | Accents, CTAs, highlights    |
| Off-Black   | #1D2D35 | effuse-off-black   | Text, backgrounds            |
| Medium Grey | #808285 | effuse-medium-grey | Text, surfaces               |
| Light Grey  | #F1F3F5 | effuse-light-grey  | Backgrounds, surfaces        |
| White       | #FFFFFF | effuse-white       | Backgrounds, text            |

### Gradient

| Name            | Tailwind Class  | Example Usage                                     |
| --------------- | --------------- | ------------------------------------------------- |
| Effuse Gradient | effuse-gradient | bg-gradient-to-r from-effuse-slate to-effuse-teal |

---

## Lumina Product Brand Palette

| Name             | Hex             | Tailwind Class                             | Usage                         |
| ---------------- | --------------- | ------------------------------------------ | ----------------------------- |
| Radiant Gradient | #FFD25A→#FF7A5A | lumina-gradient-start, lumina-gradient-end | CTAs, onboarding, key moments |
| Lumina Gold      | #FFD25A         | lumina-gold                                | Primary actions, highlights   |
| Coral            | #FF7A5A         | lumina-coral                               | Secondary accent, gradients   |
| Deep Teal        | #0B2B33         | lumina-teal                                | Containers, sidebars          |
| Off-Black        | #1D2D35         | lumina-off-black                           | Text                          |
| Medium Grey      | #808285         | lumina-medium-grey                         | Secondary text                |
| Light Neutral    | #E4E6E7         | lumina-light-neutral                       | Borders, dividers             |
| Light Grey       | #F1F3F5         | lumina-light-grey                          | Backgrounds                   |
| White            | #FFFFFF         | lumina-white                               | Backgrounds, text             |

### Functional UI Colors

| Name          | Hex     | Tailwind Class | Usage                           |
| ------------- | ------- | -------------- | ------------------------------- |
| Success Green | #22C58B | lumina-success | Success messages, active states |
| Warning Amber | #FFB800 | lumina-warning | Alerts, notifications           |
| Error Red     | #E5484D | lumina-error   | Error messages                  |

---

## SilentLedger Product Brand Palette

| Name             | Hex     | Tailwind Class | Usage                  |
| ---------------- | ------- | -------------- | ---------------------- |
| Dark BG          | #100B00 | sl-bg-dark     | Dark mode backgrounds  |
| Light BG         | #fcfcfc | sl-bg-light    | Light mode backgrounds |
| Primary Red      | #ff2525 | sl-red         | Primary actions        |
| Secondary Blue   | #1600e8 | sl-blue        | Secondary accents      |
| Data Viz Purple  | #630ca7 | sl-purple      | Data visualization     |
| Data Viz Magenta | #b11866 | sl-magenta     | Data visualization     |

---

## Usage Guidelines

- Use Effuse Labs palette for all corporate site backgrounds, navigation, and footers.
- Use Lumina palette and gradients for Lumina product pages, CTAs, and onboarding.
- Use SilentLedger palette for SilentLedger product pages, actions, and data visualizations.
- Use functional UI colors (Lumina) only for their intended feedback states.
- Gradients should use the correct start/end colors per brand context.
- Test all color combinations for WCAG AA contrast compliance.

---

## Component Best Practices

### Buttons

- 5 brand color variants: Effuse Teal, Lumina Gold, Coral, Slate Grey, Gradient.
- Use Tailwind for base styles, custom classes for gradients and breathing animation.
- Clear focus states (outline, shadow) for accessibility.
- Use `aria-label` and `role="button"` for screen reader support.

### Cards

- 4 brand color variants: Teal, Gold, Coral, Slate Grey.
- Subtle background tints and optional glow (box-shadow with brand color).
- Consistent padding, border-radius, and shadow.
- Ensure text contrast and readable font sizes.

### SectionDivider

- 4 variants (teal, gold, coral, subtle) with 3 intensity levels (light, medium, strong).
- CSS gradients for dividers, animated reveal on scroll.
- Decorative only (`aria-hidden="true"`).

### Typography

- Inter for headings/body, IBM Plex Mono for code/data.
- Poppins Medium for logotype (e.g., "Effuse Labs" in top nav).
- Gradient text utilities for key headings using Tailwind's `bg-clip-text` and `text-transparent`.
- Consistent scale and spacing.

---

## Integration Guidelines

- Use Effuse Labs palette for site-wide backgrounds, navigation, and footers.
- Use Lumina palette and gradients for Lumina product pages and CTAs.
- Use SilentLedger palette for SilentLedger product pages, actions, and data visualizations.
- Gradients for hero backgrounds, section dividers, and premium accents.
- Maintain accessibility by testing color contrast and using visible focus states.

---

## Accessibility & Responsiveness

- All color combinations must meet WCAG AA contrast standards.
- Focus states must be visible and distinct.
- Components must be mobile responsive and touch-friendly.

---

## Maintenance

- Update this file as new colors, variants, or best practices are added.
- Link to this file from README.md for easy access.

---

For further details, see [EFFUSELABS_BRAND_STYLEGUIDE.md](./EFFUSELABS_BRAND_STYLEGUIDE.md), [LUMINA_PRODUCT_STYLEGUIDE.md](./LUMINA_PRODUCT_STYLEGUIDE.md), and [SILENTLEDGER_PRODUCT_STYLEGUIDE.md](./SILENTLEDGER_PRODUCT_STYLEGUIDE.md).
