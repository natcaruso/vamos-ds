// Elevation. Vamos is mostly flat — `card` is rare, `float` is reserved for
// one floating specimen, `pressed` is an inset for tap feedback. Focus ring
// is a recipe under semantic (focusRing in colors.ts).

export const shadows = {
  card:    "0 1px 2px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.04)",
  float:   "0 8px 20px rgba(143,168,191,0.35)",
  pressed: "inset 0 1px 0 rgba(0,0,0,0.08)"
} as const;

export type ShadowToken = keyof typeof shadows;
