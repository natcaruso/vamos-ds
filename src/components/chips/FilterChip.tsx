import { Check } from "lucide-react";
import type { FilterChipProps } from "./types";
import "./chips.css";

export function FilterChip({
  label,
  selected = false,
  onToggle,
  disabled = false,
  icon,
  className
}: FilterChipProps) {
  const cls = ["vds-chip", "vds-chip--filter", className].filter(Boolean).join(" ");

  const leadingIcon = selected ? (
    <Check
      className="vds-chip__icon"
      size={14}
      strokeWidth={2.5}
      aria-hidden="true"
      data-testid="check-icon"
    />
  ) : (
    icon
  );

  return (
    <button
      type="button"
      className={cls}
      aria-pressed={selected}
      aria-disabled={disabled || undefined}
      disabled={disabled}
      onClick={onToggle}
    >
      {leadingIcon}
      <span className="vds-chip__label">{label}</span>
    </button>
  );
}
