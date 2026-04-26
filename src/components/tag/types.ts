import type { ReactNode } from "react";

export type TagColor =
  | "red"
  | "volcano"
  | "orange"
  | "gold"
  | "yellow"
  | "lime"
  | "green"
  | "cyan"
  | "blue"
  | "indigo"
  | "purple"
  | "magenta"
  | "neutral";

export interface TagProps {
  color?: TagColor;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  children: ReactNode;
  className?: string;
}
