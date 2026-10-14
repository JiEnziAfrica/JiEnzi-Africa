# JiEnzi Africa Design System

This document records the Task 002 visual foundation. It should guide future homepage and component work without becoming final brand guidelines.

## Identity Direction

JiEnzi Africa should feel welcoming, energetic, culturally grounded, professional, and alive. The design system supports organization-wide storytelling around Reflection -> Proactivity -> Intentionality, while leaving room for initiatives, stories, opportunities, and community imagery.

## Color Tokens

CSS custom properties in `src/app/globals.css` are the source of truth.

| Token | Value | Role |
| --- | --- | --- |
| `--color-brand-yellow` | `#e6af28` | JiEnzi emphasis, action, identity marks |
| `--color-ink` | `#171717` | Primary text, high-contrast surfaces |
| `--color-paper` | `#faf9f6` | Warm page background |
| `--color-surface` | `#ffffff` | Elevated or clean content surfaces |
| `--color-muted` | `color-mix(...)` | Secondary text |
| `--color-border` | `color-mix(...)` | Quiet dividers and boundaries |
| `--color-focus` | `--color-brand-yellow` | Accessible focus indication |

Yellow should be purposeful, not dominant across every section.

## Typography

The site uses a clean system sans-serif stack for body copy, interface text, and display headings. Headings create emphasis through weight, scale, and line breaks rather than a separate decorative typeface. This keeps the approved contemporary direction readable and avoids new font dependencies.

| Token | Stack |
| --- | --- |
| `--font-body` | `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` |
| `--font-display` | `var(--font-body)` |

Heading sizes use responsive breakpoints and retain natural letter spacing.

## Layout Tokens

| Token | Value | Role |
| --- | --- | --- |
| `--container-max` | `72rem` | Primary readable content width |
| `--container-padding` | `clamp(1.25rem, 4vw, 3rem)` | Mobile-first page gutters |
| `--section-space` | `clamp(4rem, 10vw, 8rem)` | Responsive vertical rhythm |
| `--radius-sm` | `0.375rem` | Buttons and tight controls |
| `--radius-md` | `0.5rem` | Future media and content treatments |

## Motion

Global motion is intentionally lightweight:

- `--transition-base` for future simple transitions.
- `.motion-enter` for subtle entrance motion.
- `prefers-reduced-motion` support to minimize animation and transition duration.

No animation libraries are part of the foundation.

## Primitives

Initial reusable primitives:

- `Container` for responsive width and gutters.
- `Section` for vertical rhythm.
- `Button` and `LinkButton` for future accessible calls to action.
- `BrandMark` for the official logo asset.

Do not build final navigation, hero, footer, or homepage sections until the next approved task.
