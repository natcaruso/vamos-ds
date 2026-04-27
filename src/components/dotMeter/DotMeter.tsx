import type { DotMeterProps, DotMeterState } from "./types";
import "./dotMeter.css";

function deriveState(filled: number, total: number, nearFullThreshold: number): DotMeterState {
  if (total <= 0 || filled <= 0) return "empty";
  if (filled >= total) return "full";
  return filled / total >= nearFullThreshold ? "near-full" : "normal";
}

export function DotMeter({
  total,
  filled,
  nearFullThreshold = 0.875,
  ariaLabel = "Vagas preenchidas",
  className
}: DotMeterProps) {
  const safeTotal = Math.max(0, Math.floor(total));
  const safeFilled = Math.max(0, Math.min(Math.floor(filled), safeTotal));
  const state = deriveState(safeFilled, safeTotal, nearFullThreshold);

  return (
    <div
      role="meter"
      aria-label={ariaLabel}
      aria-valuenow={safeFilled}
      aria-valuemin={0}
      aria-valuemax={safeTotal}
      className={["vds-dot-meter", className].filter(Boolean).join(" ")}
      data-state={state}
    >
      {Array.from({ length: safeTotal }).map((_, i) => (
        <span
          key={i}
          className="vds-dot-meter__cell"
          data-filled={i < safeFilled || undefined}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
