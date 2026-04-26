// Icon size scale. Numeric values match the CSS --icon-size-* tokens
// so JS callers (Lucide etc.) can pass `size={iconSize.sm}`.

export const iconSize = {
  xs:    12,
  sm:    14,
  md:    16,
  lg:    20,
  xl:    24,
  "2xl": 32
} as const;

export type IconSize = keyof typeof iconSize;
