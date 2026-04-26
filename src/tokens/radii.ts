// Corner radius scale. `full` is the pill / circular value
// (10000px — large enough to round any element).

export const radii = {
  "0":    "0px",
  "4":    "4px",
  "8":    "8px",
  "16":   "16px",
  "24":   "24px",
  "32":   "32px",
  full:   "10000px"
} as const;

export type RadiusToken = keyof typeof radii;
