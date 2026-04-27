import type { ReactNode } from "react";

export type RadioColor =
  | "blue"
  | "green"
  | "purple"
  | "pink"
  | "grey"
  | "lightblue";

export type RadioSize = "sm" | "md";

export type RadioOrientation = "vertical" | "horizontal";

export interface RadioGroupProps {
  /** Form field name. Auto-generated if omitted. */
  name?: string;
  /** Controlled value. Pair with onChange. */
  value?: string;
  /** Uncontrolled initial value. Mutually exclusive with `value`. */
  defaultValue?: string;
  onChange?: (value: string) => void;
  /** Default brand color for every Radio inside. Per-radio override allowed. */
  color?: RadioColor;
  /** Default size for every Radio inside. */
  size?: RadioSize;
  /** Disable every radio in the group. */
  disabled?: boolean;
  required?: boolean;
  /** Layout direction of the radios. */
  orientation?: RadioOrientation;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  className?: string;
  children: ReactNode;
}

export interface RadioProps {
  value: string;
  children?: ReactNode;
  description?: ReactNode;
  disabled?: boolean;
  /** Override the group color. */
  color?: RadioColor;
  /** Override the group size. */
  size?: RadioSize;
  id?: string;
  className?: string;
}
