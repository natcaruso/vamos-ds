export interface DotMeterProps {
  total: number;
  filled: number;
  /**
   * Ratio (0..1) above which the meter switches from the normal colour
   * to the mid (yellow) warning. Defaults to 0.5.
   */
  midThreshold?: number;
  /**
   * When (total − filled) ≤ this number, the meter flips to the
   * critical (red) state. Defaults to 2.
   */
  criticalRemaining?: number;
  ariaLabel?: string;
  className?: string;
}

export type DotMeterState = "empty" | "normal" | "mid" | "critical";
