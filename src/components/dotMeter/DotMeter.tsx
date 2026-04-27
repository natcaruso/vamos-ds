import type { DotMeterProps } from "./types";
import "./dotMeter.css";

type Zone = "normal" | "mid" | "critical";

function zoneFor(
  index: number,
  total: number,
  midThreshold: number,
  criticalRemaining: number
): Zone {
  const nonCritical = Math.max(0, total - criticalRemaining);
  const normalEnd = Math.floor(nonCritical * midThreshold);
  if (index >= total - criticalRemaining) return "critical";
  if (index >= normalEnd) return "mid";
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

  return (
    <div
      role="meter"
      aria-label={ariaLabel}
      aria-valuenow={safeFilled}
      aria-valuemin={0}
      aria-valuemax={safeTotal}
      className={["vds-dot-meter", className].filter(Boolean).join(" ")}
    >
      {Array.from({ length: safeTotal }).map((_, i) => (
        <span
          key={i}
          className="vds-dot-meter__cell"
          data-filled={i < safeFilled || undefined}
          data-zone={zoneFor(i, safeTotal, midThreshold, criticalRemaining)}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
