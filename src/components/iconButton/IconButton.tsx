import { forwardRef } from "react";
import { Icon } from "../icon";
import { iconSize } from "../../tokens/iconSize";
import { iconWeightForSize } from "../../tokens/iconWeight";
import type { IconButtonProps, IconButtonSize } from "./types";
import "../buttons/buttons.css";
import "./iconButton.css";

const SIZE_TO_ICON_PX: Record<IconButtonSize, number> = {
  "3xl": iconSize["2xl"], /* 32 */
  "2xl": iconSize.xl,     /* 24 */
  xl:    iconSize.lg,     /* 20 */
  md:    iconSize.md,     /* 16 */
  sm:    iconSize.sm      /* 14 */
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton(
    {
      iconName,
      iconWeight,
      iconFilled = false,
      variant = "blue",
      size = "xl",
      className,
      type = "button",
      disabled,
      ...rest
    },
    ref
  ) {
    const cls = [
      "vds-icon-btn",
      `vds-icon-btn--${variant}`,
      `vds-icon-btn--${size}`,
      className
    ]
      .filter(Boolean)
      .join(" ");

    const iconPx = SIZE_TO_ICON_PX[size];
    const resolvedWeight = iconWeight ?? iconWeightForSize(iconPx);

    return (
      <button
        {...rest}
        ref={ref}
        type={type}
        className={cls}
        disabled={disabled}
        aria-disabled={disabled || undefined}
      >
        <Icon
          name={iconName}
          size={iconPx}
          weight={resolvedWeight}
          filled={iconFilled}
        />
      </button>
    );
  }
);
