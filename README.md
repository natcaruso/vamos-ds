# Vamos DS

Design system for the Vamos sports-class booking app. Tokens, components, Storybook docs.

## Stack

- React 18 + TypeScript
- Storybook 8 (Vite builder)
- CSS variables as the source of truth (`src/tokens/tokens.css`)
- Mirrored TypeScript token exports for JS/TS consumers

## Quick start

```bash
npm install
npm run storybook
```

Storybook runs at http://localhost:6006.

## Layout

```
vamos-ds/
├─ .storybook/        Storybook config (Vite)
├─ src/
│  ├─ fonts/          Inter (3 optical sizes, weights 300–900)
│  ├─ tokens/         tokens.css (authoritative) + TS exports
│  └─ stories/        Foundations stories (colors, type, space, radii, shadow)
├─ package.json
└─ tsconfig.json
```

## Token tiers — strict three-tier model

```
PRIMITIVES                    SEMANTIC                    ACTION + FEEDBACK
────────────                  ──────────                  ──────────────────
--vamos-brand-blue        →   --text-link             →   --action-primary-bg
--vamos-ink-65            →   --text-tertiary             --action-primary-bg-hover
--vamos-gray-3            →   --surface-default           --feedback-positive-bg
--vamos-line-faint        →   --border-subtle / --divider --highlight-magenta-bg
```

1. **Primitives** (`--vamos-*`) — raw values: hex, opacity, ramp steps,
   spacing units. Never reference other tokens.
2. **Semantic** (`--surface-*`, `--text-*`, `--border-*`, `--divider`,
   `--overlay-*`, `--focus-*`, `--space-*`, `--radius-*`, `--shadow-*`,
   `--font-*`, `--fw-*`, `--fs-*`, `--lh-*`, `--ls-*`) — purpose-bound
   aliases. **This is what product code should reach for.**
3. **Action + Feedback** (`--action-*`, `--feedback-*`, `--highlight-*`) —
   component-leaning recipes with full state matrices (bg / hover / pressed /
   disabled / fg / fg-disabled per role).

### Editing rules

- New colors land as **primitives** first, then bind via a semantic.
- Component code consumes **tier 2 / tier 3** — never tier 1 directly.
- No aliases that duplicate the same value under another name.

### TS access

```ts
import { surface, text, border, action, feedback, highlight } from "vamos-ds/tokens";

// Examples
const cardBg = surface.default;          // "#F5F5F5"
const ctaBg  = action.primary.bg;        // "#0066FE"
const okBg   = feedback.positive.bg;     // "#f6ffed"
```

## Brand snapshot

- Voice: PT-BR, informal "você", verb-first CTAs.
- Primary `#0066FE`, success `#52C41A`, waitlist purple `#8A38F5`,
  danger pink `#FF5983`, warning amber `#FAAD14`.
- Inter only, three optical sizes (18 / 24 / 28 pt), self-hosted.
- 4-px spacing scale, 16-px card radius, pill (∞) for buttons/chips.
- Mostly flat — one shadow used sparingly for floating specimens.

Source-of-truth Figma + handoff zip live outside the repo.
