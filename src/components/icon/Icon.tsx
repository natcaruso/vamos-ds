import type { CSSProperties, HTMLAttributes } from "react";
import "./icon.css";

export type IconWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700;

export interface IconProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  /** Material Symbols Rounded glyph name (e.g. "calendar_month"). */
  name: string;
  /** Pixel size (also drives optical-size axis unless `opticalSize` is set). */
  size?: number;
  /** Use the filled variant. Reserve for selected/active states. */
  filled?: boolean;
  /** Stroke weight axis. */
  weight?: IconWeight;
  /** Grade axis (-50…200). Negative = thinner, positive = bolder. */
  grade?: number;
  /** Override optical-size axis if it should differ from `size`. */
  opticalSize?: number;
}

export function Icon({
  name,
  size = 24,
  filled = false,
  weight = 400,
  grade = 0,
  opticalSize,
  className,
  style,
  "aria-hidden": ariaHidden = true,
  "aria-label": ariaLabel,
  ...rest
}: IconProps) {
  const opsz = opticalSize ?? size;

  const composed: CSSProperties = {
    fontSize: size,
    width: size,
    height: size,
    fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${opsz}`,
    ...style
  };

  return (
    <span
      className={["vds-icon", className].filter(Boolean).join(" ")}
      style={composed}
      aria-hidden={ariaHidden}
      aria-label={ariaLabel}
      {...rest}
    >
      {name}
    </span>
  );
}
