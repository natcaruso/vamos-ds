import type { ElementType, HTMLAttributes, ReactNode } from "react";

export type CardSurface = "canvas" | "default" | "subtle" | "strong" | "warm";
export type CardPadding = "none" | "sm" | "md" | "lg" | "xl";
export type CardRadius = "md" | "lg" | "xl";

export interface CardProps extends Omit<HTMLAttributes<HTMLElement>, "color"> {
  surface?: CardSurface;
  padding?: CardPadding;
  radius?: CardRadius;
  /** Polymorphic root tag. Defaults to `div`. */
  as?: ElementType;
  children: ReactNode;
}
