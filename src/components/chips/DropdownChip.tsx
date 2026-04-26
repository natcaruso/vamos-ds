import { useEffect, useId, useRef, useState } from "react";
import { Icon } from "../icon";
import { iconSize } from "../../tokens/iconSize";
import { iconWeightForSize } from "../../tokens/iconWeight";
import type { DropdownChipProps } from "./types";
import "./chips.css";

export function DropdownChip({
  options,
  selectedId,
  onSelect,
  disabled = false,
  placeholder = "Selecionar",
  className
}: DropdownChipProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const menuId = useId();

  const selectedOption = options.find((o) => o.id === selectedId);
  const isSelected = Boolean(selectedOption);

  useEffect(() => {
    if (!open) return;
    function handleDocClick(e: MouseEvent) {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleDocClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleDocClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  const triggerCls = ["vds-chip", "vds-chip--filter", className].filter(Boolean).join(" ");

  return (
    <div className="vds-chip-dropdown" ref={containerRef}>
      <button
        type="button"
        className={triggerCls}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={menuId}
        aria-pressed={isSelected}
        aria-disabled={disabled || undefined}
        disabled={disabled}
        onClick={() => setOpen((v) => !v)}
      >
        {isSelected && (
          <Icon name="check" size={iconSize.sm} weight={iconWeightForSize(iconSize.sm)} className="vds-chip__icon" />
        )}
        <span className="vds-chip__label">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <Icon
          name="expand_more"
          size={iconSize.sm}
          weight={iconWeightForSize(iconSize.sm)}
          className="vds-chip__icon vds-chip__chevron"
        />
      </button>
      {open && (
        <ul className="vds-chip-menu" id={menuId} role="listbox">
          {options.map((opt) => (
            <li key={opt.id} role="presentation">
              <button
                type="button"
                role="option"
                aria-selected={opt.id === selectedId}
                className="vds-chip-menu__item"
                onClick={() => {
                  onSelect?.(opt.id);
                  setOpen(false);
                }}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
