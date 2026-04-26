import { useEffect, useId, useRef } from "react";
import type { CSSProperties } from "react";
import { Icon } from "../icon";
import { iconSize } from "../../tokens/iconSize";
import { iconWeightForSize } from "../../tokens/iconWeight";
import type { CheckboxProps, CheckboxSize } from "./types";
import "./checkbox.css";

const ICON_PX_FOR_SIZE: Record<CheckboxSize, number> = {
  sm: iconSize.xs, /* 12 */
  md: iconSize.sm  /* 14 */
};

export function Checkbox({
  checked = false,
  indeterminate = false,
  disabled = false,
  color = "blue",
  size = "md",
  onChange,
  children,
  id,
  name,
  value,
  className
}: CheckboxProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Native indeterminate is a property, not an attribute — has to be
  // set via the DOM after render.
  useEffect(() => {
    if (inputRef.current) inputRef.current.indeterminate = indeterminate;
  }, [indeterminate]);

  const cssVars = {
    "--checkbox-active-bg":       `var(--action-${color}-bg)`,
    "--checkbox-active-bg-hover": `var(--action-${color}-bg-hover)`,
    "--checkbox-active-fg":       `var(--action-${color}-fg)`
  } as CSSProperties;

  const cls = [
    "vds-checkbox",
    `vds-checkbox--${size}`,
    disabled && "vds-checkbox--disabled",
    className
  ]
    .filter(Boolean)
    .join(" ");

  const iconPx = ICON_PX_FOR_SIZE[size];

  return (
    <label className={cls} style={cssVars} htmlFor={inputId}>
      <input
        ref={inputRef}
        id={inputId}
        type="checkbox"
        className="vds-checkbox__native"
        checked={checked}
        disabled={disabled}
        name={name}
        value={value}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      <span
        className="vds-checkbox__box"
        data-checked={checked && !indeterminate ? true : undefined}
        data-indeterminate={indeterminate || undefined}
        aria-hidden="true"
      >
        {(checked || indeterminate) && (
          <Icon
            name={indeterminate ? "remove" : "check"}
            size={iconPx}
            weight={iconWeightForSize(iconPx)}
          />
        )}
      </span>
      {children && <span className="vds-checkbox__label">{children}</span>}
    </label>
  );
}
