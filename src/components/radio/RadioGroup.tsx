import { useId, useState } from "react";
import { RadioGroupContext } from "./radioContext";
import type { RadioGroupProps } from "./types";
import "./radio.css";

export function RadioGroup({
  name,
  value,
  defaultValue,
  onChange,
  color = "blue",
  size = "md",
  disabled = false,
  required = false,
  orientation = "vertical",
  ariaLabel,
  ariaLabelledBy,
  className,
  children
}: RadioGroupProps) {
  const generatedName = useId();
  const groupName = name ?? generatedName;
  const isControlled = value !== undefined;
  const [uncontrolled, setUncontrolled] = useState<string | undefined>(defaultValue);
  const selected = isControlled ? value : uncontrolled;

  const setValue = (v: string) => {
    if (!isControlled) setUncontrolled(v);
    onChange?.(v);
  };

  const cls = [
    "vds-radio-group",
    `vds-radio-group--${orientation}`,
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <RadioGroupContext.Provider
      value={{
        name: groupName,
        selectedValue: selected,
        setValue,
        color,
        size,
        disabled,
        required
      }}
    >
      <div
        role="radiogroup"
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-disabled={disabled || undefined}
        className={cls}
      >
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
}
