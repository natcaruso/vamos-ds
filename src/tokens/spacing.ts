// 4-px spacing scale (with a few intermediate values for special cases:
// 2, 6, 18). Keys match the CSS variable names in tokens.css.

export const spacing = {
  "0":   "0px",
  "2":   "2px",
  "4":   "4px",
  "6":   "6px",
  "8":   "8px",
  "12":  "12px",
  "16":  "16px",
  "18":  "18px",
  "20":  "20px",
  "24":  "24px",
  "32":  "32px",
  "40":  "40px",
  "48":  "48px",
  "56":  "56px",
  "64":  "64px",
  "80":  "80px",
  "96":  "96px",
  "128": "128px",
  "160": "160px",
  "224": "224px",
  "288": "288px"
} as const;

export type SpaceToken = keyof typeof spacing;
