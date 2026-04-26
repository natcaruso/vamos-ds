import type { ReactNode } from "react";

export type DividerOrientation = "horizontal" | "vertical";
export type DividerVariant = "subtle" | "default" | "strong";

export interface DividerProps {
  orientation?: DividerOrientation;
  variant?: DividerVariant;
  /** Optional label rendered between two hairlines. Horizontal only. */
  label?: ReactNode;
  /** CSS length pulled in from the edges (token recommended). */
  inset?: string;
  className?: string;
}
