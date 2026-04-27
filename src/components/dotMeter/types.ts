export interface DotMeterProps {
  total: number;
  filled: number;
  /**
   * Ratio (0..1) at which the meter switches the filled cells from the
   * normal color to the warning color. Defaults to 0.875 (≥ 14/16).
   */
  nearFullThreshold?: number;
  ariaLabel?: string;
  className?: string;
}

export type DotMeterState = "empty" | "normal" | "near-full" | "full";
