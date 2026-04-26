import type { ReactNode } from "react";

export type CheckboxColor =
  | "blue"
  | "green"
  | "purple"
  | "pink"
  | "grey"
  | "lightblue";

export type CheckboxSize = "sm" | "md";

export interface CheckboxProps {
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  color?: CheckboxColor;
  size?: CheckboxSize;
  onChange?: (checked: boolean) => void;
  children?: ReactNode;
  id?: string;
  name?: string;
  value?: string;
  className?: string;
}
