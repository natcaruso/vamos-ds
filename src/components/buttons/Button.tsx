import { forwardRef } from "react";
import type { ButtonProps } from "./types";
import "./buttons.css";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = "blue",
    size = "2xl",
    leadingIcon,
    trailingIcon,
    fullWidth = false,
    className,
    type = "button",
    children,
    disabled,
    ...rest
  },
  ref
) {
  const cls = [
    "vds-btn",
    `vds-btn--${variant}`,
    `vds-btn--${size}`,
    fullWidth && "vds-btn--full",
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      {...rest}
      ref={ref}
      type={type}
      className={cls}
      disabled={disabled}
      aria-disabled={disabled || undefined}
    >
      {leadingIcon && (
        <span className="vds-btn__icon" aria-hidden="true">
          {leadingIcon}
        </span>
      )}
      <span className="vds-btn__label">{children}</span>
      {trailingIcon && (
        <span className="vds-btn__icon" aria-hidden="true">
          {trailingIcon}
        </span>
      )}
    </button>
  );
});
