// Recommended Material Symbols stroke weight by icon pixel size.
//
// Variable-font icons need a heavier weight at small sizes to keep the
// stroke legible (a 14px outline at wght 400 reads thin and broken on
// non-retina screens). Larger icons render cleanly at the standard
// wght 400. This map encodes the convention shared by Material Design 3
// and Apple's SF Symbols guidance:
//
//   ≤ 16px   →  weight 500   (small, density compensation)
//   ≥ 20px   →  weight 400   (standard outline)
//
// Use `iconWeightForSize` whenever you compute icon size dynamically;
// reach for the per-key constants in `iconWeight` when the size token
// is known (e.g. inside a component recipe).

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
