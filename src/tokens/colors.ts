// TS mirror of the color tokens. Authoritative source: src/tokens/tokens.css.
// Three-tier model:
//   1. PRIMITIVES — `brand`, `brandPressed`, `palette`, `gray`, `ink`,
//      `surface`, `line`, `overlay`. Raw values, no cross-references.
//   2. SEMANTIC   — `text`, `border`, `divider`, `overlay (semantic)`,
//      `surfaceSemantic`, `focusRing`. Purpose-bound aliases.
//   3. ACTION + FEEDBACK — `action`, `feedback`, `highlight`. Component
//      recipes with full state matrices. Reach for these in product code.

/* ─────────── 1 · PRIMITIVES ─────────── */

export const brand = {
  blue:   "#0066FE",
  green:  "#16A34A",
  purple: "#9863FF",
  pink:   "#FF5983",
  grey:   "#4E4E4E"
} as const;

export const brandPressed = {
  blue:   "#0052CC",
  green:  "#15803D",
  purple: "#8B5CFF",
  pink:   "#F43F5E",
  grey:   "#3A3A3A"
} as const;

export const palette = {
  red:        ["#fff1f0","#ffccc7","#ffa39e","#ff7875","#ff4d4f","#f5222d","#cf1322","#a8071a","#820014","#5c0011"],
  volcano:    ["#fff2e8","#ffd8bf","#ffbb96","#ff9c6e","#ff7a45","#fa541c","#d4380d","#ad2102","#871400","#610b00"],
  orange:     ["#fff7e6","#ffe7ba","#ffd591","#ffc069","#ffa940","#fa8c16","#d46b08","#ad4e00","#873800","#612500"],
  gold:       ["#fffbe6","#fff1b8","#ffe58f","#ffd666","#ffc53d","#faad14","#d48806","#ad6800","#874d00","#613400"],
  yellow:     ["#feffe6","#ffffb8","#fffb8f","#fff566","#ffec3d","#fadb14","#d4b106","#ad8b00","#876800","#614700"],
  lime:       ["#fcffe6","#f4ffb8","#eaff8f","#d3f261","#bae637","#a0d911","#7cb305","#5b8c00","#3f6600","#254000"],
  green:      ["#f6ffed","#d9f7be","#b7eb8f","#95de64","#73d13d","#52c41a","#389e0d","#237804","#135200","#092b00"],
  cyan:       ["#e6fffb","#b5f5ec","#87e8de","#5cdbd3","#36cfc9","#13c2c2","#08979c","#006d75","#00474f","#002329"],
  antBlue:    ["#e6f7ff","#bae7ff","#91d5ff","#69c0ff","#40a9ff","#1890ff","#096dd9","#0050b3","#003a8c","#002766"],
  geekblue:   ["#f0f5ff","#d6e4ff","#adc6ff","#85a5ff","#597ef7","#2f54eb","#1d39c4","#10239e","#061178","#030852"],
  antPurple:  ["#f9f0ff","#efdbff","#d3adf7","#b37feb","#9254de","#722ed1","#531dab","#391085","#22075e","#120338"],
  magenta:    ["#fff0f6","#ffd6e7","#ffadd2","#ff85c0","#f759ab","#eb2f96","#c41d7f","#9e1068","#780650","#520339"]
} as const;

export const gray = [
  "#ffffff","#fafafa","#f5f5f5","#f0f0f0","#d9d9d9","#bfbfbf",
  "#8c8c8c","#595959","#434343","#262626","#1f1f1f","#141414","#000000"
] as const;

export const ink = {
  100: "#1E1E1E",
  85:  "rgba(30,30,30,0.85)",
  65:  "rgba(30,30,30,0.65)",
  45:  "rgba(30,30,30,0.45)",
  25:  "rgba(30,30,30,0.25)",
  inverse: {
    100: "#FFFFFF",
    85:  "rgba(255,255,255,0.85)",
    65:  "rgba(255,255,255,0.65)",
    45:  "rgba(255,255,255,0.45)",
    25:  "rgba(255,255,255,0.25)"
  }
} as const;

export const surfacePrimitive = {
  white:  "#FFFFFF",
  subtle: "#FAFAFA",
  soft:   "#F5F5F5",
  strong: "#E7E5E4",
  warm:   "#FFEED2"
} as const;

export const line = {
  faint:   "rgba(0,0,0,0.06)",
  default: "rgba(0,0,0,0.15)"
} as const;

export const overlayPrimitive = {
  "04": "rgba(0,0,0,0.04)",
  "10": "rgba(0,0,0,0.10)",
  "43": "rgba(0,0,0,0.43)"
} as const;

/* ─────────── 2 · SEMANTIC ─────────── */

export const surface = {
  canvas:  surfacePrimitive.white,
  default: surfacePrimitive.soft,
  subtle:  surfacePrimitive.subtle,
  strong:  surfacePrimitive.strong,
  warm:    surfacePrimitive.warm,
  inverse: gray[11]
} as const;

export const text = {
  primary:     ink[100],
  secondary:   ink[85],
  tertiary:    ink[65],
  quaternary:  ink[45],
  disabled:    ink[25],
  onInverse: {
    primary:    ink.inverse[100],
    secondary:  ink.inverse[85],
    tertiary:   ink.inverse[65],
    quaternary: ink.inverse[45],
    disabled:   ink.inverse[25]
  },
  link:      brand.blue,
  linkHover: brandPressed.blue
} as const;

export const border = {
  subtle:  line.faint,
  default: line.default,
  strong:  gray[8],
  focus:   brand.blue
} as const;

export const divider = line.faint;

export const overlay = {
  scrim:    overlayPrimitive["10"],
  backdrop: overlayPrimitive["43"],
  disabled: overlayPrimitive["04"]
} as const;

export const focusRing = {
  color:  brand.blue,
  width:  "2px",
  offset: "2px",
  shadow: `0 0 0 2px ${brand.blue}`
} as const;

/* ─────────── 3 · ACTION + FEEDBACK ─────────── */

type ActionRole = {
  bg:           string;
  bgHover:      string;
  bgPressed:    string;
  bgDisabled:   string;
  fg:           string;
  fgDisabled:   string;
};

const sharedDisabled = {
  bgDisabled: surfacePrimitive.soft,
  fgDisabled: ink[45]
};

export const action: Record<
  "blue" | "green" | "purple" | "pink" | "grey",
  ActionRole
> = {
  blue: {
    bg:        brand.blue,
    bgHover:   brandPressed.blue,
    bgPressed: brandPressed.blue,
    fg:        ink.inverse[100],
    ...sharedDisabled
  },
  green: {
    bg:        brand.green,
    bgHover:   brandPressed.green,
    bgPressed: brandPressed.green,
    fg:        ink.inverse[100],
    ...sharedDisabled
  },
  purple: {
    bg:        brand.purple,
    bgHover:   brandPressed.purple,
    bgPressed: brandPressed.purple,
    fg:        ink.inverse[100],
    ...sharedDisabled
  },
  pink: {
    bg:        brand.pink,
    bgHover:   brandPressed.pink,
    bgPressed: brandPressed.pink,
    fg:        ink.inverse[100],
    ...sharedDisabled
  },
  grey: {
    bg:        brand.grey,
    bgHover:   brandPressed.grey,
    bgPressed: brandPressed.grey,
    fg:        ink.inverse[100],
    ...sharedDisabled
  }
};

export const feedback = {
  info:     { bg: palette.antBlue[0],  fg: palette.antBlue[6],  label: "Info" },
  positive: { bg: palette.green[0],    fg: palette.green[6],    label: "Positive" },
  warning:  { bg: palette.gold[0],     fg: palette.gold[6],     label: "Warning" },
  critical: { bg: palette.red[0],      fg: palette.red[6],      label: "Critical" },
  neutral:  { bg: gray[1],             fg: gray[7],             label: "Neutral" }
} as const;

export const highlight = {
  red:      { bg: palette.red[0],       fg: palette.red[6],      label: "Dust Red" },
  volcano:  { bg: palette.volcano[0],   fg: palette.volcano[6],  label: "Volcano" },
  orange:   { bg: palette.orange[0],    fg: palette.orange[6],   label: "Sunset Orange" },
  gold:     { bg: palette.gold[0],      fg: palette.gold[6],     label: "Calendula Gold" },
  yellow:   { bg: palette.yellow[0],    fg: palette.yellow[6],   label: "Sunrise Yellow" },
  lime:     { bg: palette.lime[0],      fg: palette.lime[6],     label: "Lime" },
  green:    { bg: palette.green[0],     fg: palette.green[6],    label: "Polar Green" },
  cyan:     { bg: palette.cyan[0],      fg: palette.cyan[6],     label: "Cyan" },
  blue:     { bg: palette.antBlue[0],   fg: palette.antBlue[6],  label: "Daybreak Blue" },
  geekblue: { bg: palette.geekblue[0],  fg: palette.geekblue[6], label: "Geek Blue" },
  purple:   { bg: palette.antPurple[0], fg: palette.antPurple[6],label: "Golden Purple" },
  magenta:  { bg: palette.magenta[0],   fg: palette.magenta[6],  label: "Magenta" },
  neutral:  { bg: gray[1],              fg: gray[7],             label: "Neutral" }
} as const;

/* ─────────── Aggregate ─────────── */

export const colors = {
  brand,
  brandPressed,
  palette,
  gray,
  ink,
  surfacePrimitive,
  line,
  overlayPrimitive,
  surface,
  text,
  border,
  divider,
  overlay,
  focusRing,
  action,
  feedback,
  highlight
} as const;

export type Brand = keyof typeof brand;
export type PaletteHue = keyof typeof palette;
export type HighlightHue = keyof typeof highlight;
export type FeedbackTone = keyof typeof feedback;
export type ActionRoleName = keyof typeof action;
