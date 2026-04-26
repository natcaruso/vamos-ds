import type { ButtonHTMLAttributes } from "react";
import type { ButtonVariant } from "../buttons";
import type { IconWeight } from "../icon";

export type IconButtonSize = "3xl" | "2xl" | "xl" | "md" | "sm";
export type IconButtonVariant = ButtonVariant;

export interface IconButtonProps
  extends Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "children" | "color" | "aria-label"
  > {
  /** Material Symbols Rounded glyph name. */
  iconName: string;
  /** Required: every IconButton must announce itself to assistive tech. */
  "aria-label": string;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  iconWeight?: IconWeight;
  iconFilled?: boolean;
}
