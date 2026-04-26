// Authoritative source: src/tokens/tokens.css. These exports mirror the CSS
// variables as typed JS values so non-CSS consumers (React inline styles,
// canvas, charting libs) can access them without duplicating literals.
//
// Naming follows Vamos primitive layers:
//  - brand          5 brand primaries (interchangeable, no fixed semantic)
//  - brandPressed   pressed-state tones for the brand primaries
//  - palette        Ant Design 12-hue × 10-step ramps
//  - gray           13-step neutral
//  - highlight      bg/fg pairs for chips/badges (always used together)
//  - content        text colors (light + inverse) with opacity ladder
//  - canvas         surface ladder for backgrounds & containers
//  - utility        dividers, borders, backdrops, scrims
//  - semantic       purpose-bound aliases (primary, success, warn, danger)

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

export const highlight = {
  red:      { bg: "#fff1f0", fg: "#cf1322", label: "Dust Red" },
  volcano:  { bg: "#fff2e8", fg: "#d4380d", label: "Volcano" },
  orange:   { bg: "#fff7e6", fg: "#d46b08", label: "Sunset Orange" },
  gold:     { bg: "#fffbe6", fg: "#d48806", label: "Calendula Gold" },
  yellow:   { bg: "#feffe6", fg: "#d4b106", label: "Sunrise Yellow" },
  lime:     { bg: "#fcffe6", fg: "#7cb305", label: "Lime" },
  green:    { bg: "#f6ffed", fg: "#389e0d", label: "Polar Green" },
  cyan:     { bg: "#e6fffb", fg: "#08979c", label: "Cyan" },
  blue:     { bg: "#e6f7ff", fg: "#096dd9", label: "Daybreak Blue" },
  geekblue: { bg: "#f0f5ff", fg: "#1d39c4", label: "Geek Blue" },
  purple:   { bg: "#f9f0ff", fg: "#531dab", label: "Golden Purple" },
  magenta:  { bg: "#fff0f6", fg: "#c41d7f", label: "Magenta" },
  gray:     { bg: "#fafafa", fg: "#595959", label: "Neutral" }
} as const;

export const content = {
  default:   "#1E1E1E",
  strong:    "rgba(30,30,30,0.85)",
  muted:     "rgba(30,30,30,0.65)",
  faint:     "rgba(30,30,30,0.45)",
  disabled:  "rgba(30,30,30,0.25)",
  inverse: {
    default:  "#FFFFFF",
    strong:   "rgba(255,255,255,0.85)",
    muted:    "rgba(255,255,255,0.65)",
    faint:    "rgba(255,255,255,0.45)",
    disabled: "rgba(255,255,255,0.25)"
  }
} as const;

export const canvas = {
  white:  "#FFFFFF",
  subtle: "#FAFAFA",
  soft:   "#F5F5F5",
  strong: "#E7E5E4",
  warm:   "#FFEED2",
  scrim:  "rgba(0,0,0,0.10)"
} as const;

export const utility = {
  divider:  "rgba(0,0,0,0.06)",
  border:   "rgba(0,0,0,0.15)",
  backdrop: "rgba(0,0,0,0.43)",
  disabled: "rgba(0,0,0,0.04)"
} as const;

export const semantic = {
  bg:        canvas.white,
  surface:   canvas.soft,
  surface2:  canvas.subtle,
  text:      content.default,
  textMuted: content.muted,
  textFaint: content.faint,
  border:    utility.border,
  primary:   brand.blue,
  success:   "#52C41A",
  warn:      "#FAAD14",
  danger:    brand.pink,
  waitlist:  "#8A38F5"
} as const;

export const colors = {
  brand,
  brandPressed,
  palette,
  gray,
  highlight,
  content,
  canvas,
  utility,
  semantic
} as const;

export type Brand = keyof typeof brand;
export type PaletteHue = keyof typeof palette;
export type HighlightHue = keyof typeof highlight;
