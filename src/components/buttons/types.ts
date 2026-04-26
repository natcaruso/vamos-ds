import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant =
  | "blue"
  | "green"
  | "purple"
  | "pink"
  | "grey"
  | "lightblue"
  | "outline"
  | "ghost";

export type ButtonSize = "3xl" | "2xl" | "xl" | "md";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color" | "children"> {
  /** Button label. Icon-only buttons are not supported by the design system. */
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  fullWidth?: boolean;
}
