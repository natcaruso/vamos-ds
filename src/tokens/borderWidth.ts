// Border width scale.

export const borderWidth = {
  thin:    "1px",
  default: "2px",
  thick:   "3px"
} as const;

export type BorderWidth = keyof typeof borderWidth;
