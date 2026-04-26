import type { CSSProperties } from "react";
import { gray, palette } from "../../tokens/colors";
import { pickAccessibleStep, WCAG } from "../../tokens/contrast";
import type { TagColor, TagProps } from "./types";
import "./tag.css";

const RAMPS: Record<TagColor, readonly string[]> = {
  ...palette,
  neutral: gray
};

const CSS_HUE: Record<TagColor, string> = {
  red:      "red",
  volcano:  "volcano",
  orange:   "orange",
  gold:     "gold",
  yellow:   "yellow",
  lime:     "lime",
  green:    "green",
  cyan:     "cyan",
  blue:     "blue",
  indigo:   "indigo",
  purple:   "purple",
  magenta:  "magenta",
  neutral:  "gray"
};

// Compute the AA-passing fg step once per hue. Module-scoped, so every
// <Tag /> render reads from the cache instead of running the ratio math.
const FG_STEP_FOR_COLOR: Record<TagColor, number> = (() => {
  const out = {} as Record<TagColor, number>;
  for (const key of Object.keys(RAMPS) as TagColor[]) {
    out[key] = pickAccessibleStep(RAMPS[key], 0, WCAG.AA_NORMAL).index;
  }
  return out;
})();

export function Tag({
  color = "neutral",
  leadingIcon,
  trailingIcon,
  children,
  className
}: TagProps) {
  const hue = CSS_HUE[color];
  const fgStep = FG_STEP_FOR_COLOR[color] + 1; // ramps are 1-indexed in CSS

  const cssVars = {
    "--tag-bg":     `var(--vamos-${hue}-1)`,
    "--tag-border": `var(--vamos-${hue}-3)`,
    "--tag-fg":     `var(--vamos-${hue}-${fgStep})`
  } as CSSProperties;

  return (
    <span className={["vds-tag", className].filter(Boolean).join(" ")} style={cssVars}>
      {leadingIcon && <span className="vds-tag__icon">{leadingIcon}</span>}
      <span className="vds-tag__label">{children}</span>
      {trailingIcon && <span className="vds-tag__icon">{trailingIcon}</span>}
    </span>
  );
}
