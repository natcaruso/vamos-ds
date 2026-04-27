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
  /** Controlled checked value. Pair with onChange. */
  checked?: boolean;
  /** Uncontrolled initial value. Mutually exclusive with `checked`. */
  defaultChecked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  color?: CheckboxColor;
  size?: CheckboxSize;
  onChange?: (checked: boolean) => void;
  children?: ReactNode;
  /** Optional supporting text rendered below the label. */
  description?: ReactNode;
  id?: string;
  name?: string;
  value?: string;
  className?: string;
}
