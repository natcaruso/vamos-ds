import { Icon } from "../icon";
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
          <Icon name="close" size={iconSize.sm} className="vds-chip__icon" />
        </button>
      )}
    </span>
  );
}
