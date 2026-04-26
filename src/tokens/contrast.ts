// WCAG 2.1 contrast helpers. Used to pick an accessible text color from a
// hue ramp at module load time — components never compute contrast inline.

function srgbToLinear(c: number): number {
  const v = c / 255;
  return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
}

function relativeLuminance(hex: string): number {
  const h = hex.replace("#", "");
  const r = srgbToLinear(parseInt(h.slice(0, 2), 16));
  const g = srgbToLinear(parseInt(h.slice(2, 4), 16));
  const b = srgbToLinear(parseInt(h.slice(4, 6), 16));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/** WCAG contrast ratio between two #RRGGBB colors (1.0 → 21.0). */
export function contrastRatio(a: string, b: string): number {
  const la = relativeLuminance(a);
  const lb = relativeLuminance(b);
  const [light, dark] = la > lb ? [la, lb] : [lb, la];
  return (light + 0.05) / (dark + 0.05);
}

export const WCAG = {
  AA_NORMAL: 4.5,
  AA_LARGE:  3,
  AAA_NORMAL: 7,
  AAA_LARGE:  4.5
} as const;

export interface AccessiblePick {
  index: number;
  color: string;
  ratio: number;
}

/**
 * Walk a color ramp from `startIndex` toward the dark end and return the
 * first step that meets `minRatio` against the color at `bgIndex`. Falls
 * back to the darkest step if nothing in range qualifies.
 */
export function pickAccessibleStep(
  ramp: readonly string[],
  bgIndex: number,
  minRatio: number = WCAG.AA_NORMAL,
  startIndex: number = 6
): AccessiblePick {
  const bg = ramp[bgIndex];
  for (let i = startIndex; i < ramp.length; i++) {
    const ratio = contrastRatio(bg, ramp[i]);
    if (ratio >= minRatio) return { index: i, color: ramp[i], ratio };
  }
  const last = ramp.length - 1;
  return { index: last, color: ramp[last], ratio: contrastRatio(bg, ramp[last]) };
}
