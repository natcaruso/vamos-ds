import type { DotMeterProps, DotMeterState } from "./types";
import "./dotMeter.css";

function deriveState(
  filled: number,
  total: number,
  midThreshold: number,
  criticalRemaining: number
): DotMeterState {
  if (total <= 0 || filled <= 0) return "empty";
  const remaining = total - filled;
  if (remaining <= criticalRemaining) return "critical";
  if (filled / total > midThreshold) return "mid";
  return "normal";
}

export function DotMeter({
  total,
  filled,
  midThreshold = 0.5,
  criticalRemaining = 2,
  ariaLabel = "Vagas preenchidas",
  className
}: DotMeterProps) {
  const safeTotal = Math.max(0, Math.floor(total));
  const safeFilled = Math.max(0, Math.min(Math.floor(filled), safeTotal));
  const state = deriveState(safeFilled, safeTotal, midThreshold, criticalRemaining);

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
