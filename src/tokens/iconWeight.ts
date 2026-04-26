// Icon stroke weight by pixel size. Smaller icons need a heavier weight
// to keep strokes legible; larger icons read cleanly at the standard
// outline weight.
//
//   ≤ 16px   →  weight 500
//   ≥ 20px   →  weight 400
//
// Use `iconWeightForSize` for dynamic sizes; reach for the per-key
// constants in `iconWeight` when the size token is known statically.

export const iconWeight = {
  xs:    500,
  sm:    500,
  md:    500,
  lg:    400,
  xl:    400,
  "2xl": 400
} as const;

export type IconWeightForSizeKey = keyof typeof iconWeight;

export function iconWeightForSize(px: number): 400 | 500 {
  return px <= 16 ? 500 : 400;
}
