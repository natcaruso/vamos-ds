// Type tokens. Inter only, three optical sizes self-hosted (see tokens.css).
// Use `font-display` for ≥24px, `font-caption` for ≤13px, `font-sans` otherwise.

export const fontFamilies = {
  sans:    `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`,
  display: `"Inter 28", "Inter", -apple-system, sans-serif`,
  caption: `"Inter 18", "Inter", -apple-system, sans-serif`,
  mono:    `"SF Mono", "JetBrains Mono", ui-monospace, monospace`
} as const;

export const fontWeights = {
  light:    300,
  regular:  400,
  medium:   500,
  semibold: 600,
  bold:     700,
  extrabold: 800,
  black:    900
} as const;

export const fontSizes = {
  display:  "38px",
  h1:       "38px",
  h2:       "30px",
  h3:       "24px",
  h4:       "20px",
  h5:       "16px",
  bodyLg:   "18px",
  body:     "16px",
  bodySm:   "14px",
  caption:  "12px"
} as const;

export const lineHeights = {
  display:  "46px",
  h1:       "46px",
  h2:       "40px",
  h3:       "32px",
  h4:       "28px",
  h5:       "24px",
  bodyLg:   "26px",
  body:     "24px",
  bodySm:   "22px",
  caption:  "20px"
} as const;

export const letterSpacing = {
  tight: "-0.313px",
  h1: "-0.6px",
  h2: "-0.5px",
  h3: "-0.4px",
  h4: "-0.3px"
} as const;

// Composed text styles — the fastest way to apply a complete typographic role.
// Order matches the .body / .caption / .label / .meta classes in tokens.css.
export const textStyles = {
  h1:       { family: fontFamilies.display, weight: fontWeights.bold, size: fontSizes.h1, lineHeight: lineHeights.h1, letterSpacing: letterSpacing.h1 },
  h2:       { family: fontFamilies.display, weight: fontWeights.bold, size: fontSizes.h2, lineHeight: lineHeights.h2, letterSpacing: letterSpacing.h2 },
  h3:       { family: fontFamilies.display, weight: fontWeights.bold, size: fontSizes.h3, lineHeight: lineHeights.h3, letterSpacing: letterSpacing.h3 },
  h4:       { family: fontFamilies.sans,    weight: fontWeights.bold, size: fontSizes.h4, lineHeight: lineHeights.h4, letterSpacing: letterSpacing.h4 },
  h5:       { family: fontFamilies.sans,    weight: fontWeights.bold, size: fontSizes.h5, lineHeight: lineHeights.h5, letterSpacing: letterSpacing.tight },
  bodyLg:   { family: fontFamilies.sans,    weight: fontWeights.regular, size: fontSizes.bodyLg, lineHeight: lineHeights.bodyLg },
  body:     { family: fontFamilies.sans,    weight: fontWeights.regular, size: fontSizes.body,   lineHeight: lineHeights.body   },
  bodySm:   { family: fontFamilies.sans,    weight: fontWeights.regular, size: fontSizes.bodySm, lineHeight: lineHeights.bodySm },
  caption:  { family: fontFamilies.caption, weight: fontWeights.medium,  size: fontSizes.caption, lineHeight: lineHeights.caption },
  label:    { family: fontFamilies.sans,    weight: fontWeights.semibold, size: fontSizes.bodySm, lineHeight: lineHeights.bodySm },
  btnLabel: { family: fontFamilies.sans,    weight: fontWeights.bold, size: fontSizes.h5, lineHeight: "1.32" }
} as const;

export const typography = {
  fontFamilies,
  fontWeights,
  fontSizes,
  lineHeights,
  letterSpacing,
  textStyles
} as const;

export type TextStyle = keyof typeof textStyles;
