import { useEffect, useId, useRef, useState } from "react";
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
  checked,
  defaultChecked,
  indeterminate = false,
  disabled = false,
  color = "blue",
  size = "md",
  onChange,
  children,
  description,
  id,
  name,
  value,
  className
}: CheckboxProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const inputRef = useRef<HTMLInputElement | null>(null);

  const isControlled = checked !== undefined;
  const [uncontrolledChecked, setUncontrolledChecked] = useState(defaultChecked ?? false);
  const currentChecked = isControlled ? (checked ?? false) : uncontrolledChecked;

  // Native indeterminate is a property, not an attribute — has to be
  // set via the DOM after render.
  useEffect(() => {
    if (inputRef.current) inputRef.current.indeterminate = indeterminate;
  }, [indeterminate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = e.target.checked;
    if (!isControlled) setUncontrolledChecked(next);
    onChange?.(next);
  };

  const cssVars = {
    "--checkbox-active-bg":       `var(--action-${color}-bg)`,
    "--checkbox-active-bg-hover": `var(--action-${color}-bg-hover)`,
    "--checkbox-active-fg":       `var(--action-${color}-fg)`
  } as CSSProperties;

  const cls = [
    "vds-checkbox",
    `vds-checkbox--${size}`,
    disabled && "vds-checkbox--disabled",
    description && "vds-checkbox--with-description",
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
        checked={currentChecked}
        disabled={disabled}
        name={name}
        value={value}
        onChange={handleChange}
      />
      <span
        className="vds-checkbox__box"
        data-checked={currentChecked && !indeterminate ? true : undefined}
        data-indeterminate={indeterminate || undefined}
        aria-hidden="true"
      >
        {(currentChecked || indeterminate) && (
          <Icon
            name={indeterminate ? "remove" : "check"}
            size={iconPx}
            weight={iconWeightForSize(iconPx)}
          />
        )}
      </span>
      {(children || description) && (
        <span className="vds-checkbox__text">
          {children && <span className="vds-checkbox__label">{children}</span>}
          {description && <span className="vds-checkbox__description">{description}</span>}
        </span>
      )}
    </label>
  );
}
