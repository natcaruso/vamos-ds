// Shared control height scale. Same size name = same dimension across
// Button, IconButton, Input, Select, Chip-with-fixed-height, etc.
// Mirrors the --control-h-* CSS variables in tokens.css.

export const controlHeight = {
  "3xl": "56px",
  "2xl": "48px",
  xl:    "40px",
  md:    "32px",
  sm:    "24px"
} as const;

export type ControlSize = keyof typeof controlHeight;
