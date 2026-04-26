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

## Tokens

`src/tokens/tokens.css` is the single source of truth. The TS files in
`src/tokens/*.ts` mirror the CSS variables for typed consumption from JS:

```ts
import { colors, typography, spacing, radii, shadows } from "vamos-ds/tokens";
```

Token tiers:

1. **Primitives** — raw values (`--vamos-brand-blue`, `--vamos-gray-7`, …).
2. **Semantic** — purpose-bound (`--color-bg`, `--color-text-muted`, …).
3. **Component** — added per-component as the library grows.

## Brand snapshot

- Voice: PT-BR, informal "você", verb-first CTAs.
- Primary `#0066FE`, success `#52C41A`, waitlist purple `#8A38F5`,
  danger pink `#FF5983`, warning amber `#FAAD14`.
- Inter only, three optical sizes (18 / 24 / 28 pt), self-hosted.
- 4-px spacing scale, 16-px card radius, pill (∞) for buttons/chips.
- Mostly flat — one shadow used sparingly for floating specimens.

Source-of-truth Figma + handoff zip live outside the repo.
