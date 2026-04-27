import { useId } from "react";
import type { CSSProperties } from "react";
import { useRadioGroup } from "./radioContext";
import type { RadioProps } from "./types";
import "./radio.css";

export function Radio({
  value,
  children,
  description,
  disabled,
  color: colorProp,
  size: sizeProp,
  id,
  className
}: RadioProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const group = useRadioGroup();

  const color = colorProp ?? group.color;
  const size = sizeProp ?? group.size;
  const isDisabled = disabled === true || group.disabled;
  const checked = group.selectedValue === value;

  const cssVars = {
    "--radio-active-bg":       `var(--action-${color}-bg)`,
    "--radio-active-bg-hover": `var(--action-${color}-bg-hover)`,
    "--radio-active-fg":       `var(--action-${color}-fg)`
  } as CSSProperties;

  const cls = [
    "vds-radio",
    `vds-radio--${size}`,
    isDisabled && "vds-radio--disabled",
    description && "vds-radio--with-description",
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <label className={cls} style={cssVars} htmlFor={inputId}>
      <input
        id={inputId}
        type="radio"
        className="vds-radio__native"
        name={group.name}
        value={value}
        checked={checked}
        disabled={isDisabled}
        required={group.required}
        onChange={(e) => {
          if (e.target.checked) group.setValue(value);
        }}
      />
      <span
        className="vds-radio__box"
        data-checked={checked || undefined}
        aria-hidden="true"
      >
        <span className="vds-radio__dot" />
      </span>
      {(children || description) && (
        <span className="vds-radio__text">
          {children && <span className="vds-radio__label">{children}</span>}
          {description && <span className="vds-radio__description">{description}</span>}
        </span>
      )}
    </label>
  );
}
