import { X } from "lucide-react";
import { iconSize } from "../../tokens/iconSize";
import type { InputChipProps } from "./types";
import "./chips.css";

export function Chip({ label, onRemove, disabled = false, className }: InputChipProps) {
  const cls = ["vds-chip", "vds-chip--input", className].filter(Boolean).join(" ");

  return (
    <span
      className={cls}
      aria-disabled={disabled || undefined}
      data-disabled={disabled || undefined}
    >
      <span className="vds-chip__label">{label}</span>
      {onRemove && !disabled && (
        <button
          type="button"
          className="vds-chip__remove"
          aria-label={`Remover ${label}`}
          onClick={onRemove}
        >
          <X className="vds-chip__icon" size={iconSize.sm} aria-hidden="true" />
        </button>
      )}
    </span>
  );
}
