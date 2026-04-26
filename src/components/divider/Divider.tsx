import type { CSSProperties } from "react";
import type { DividerProps } from "./types";
import "./divider.css";

export function Divider({
  orientation = "horizontal",
  variant = "subtle",
  label,
  inset,
  className
}: DividerProps) {
  const style = inset ? ({ "--divider-inset": inset } as CSSProperties) : undefined;

  if (label && orientation === "horizontal") {
    const cls = [
      "vds-divider-with-label",
      variant !== "subtle" && `vds-divider-with-label--${variant}`,
      className
    ]
      .filter(Boolean)
      .join(" ");
    return (
      <div className={cls} role="separator" aria-orientation="horizontal" style={style}>
        <span>{label}</span>
      </div>
    );
  }

  const cls = [
    "vds-divider",
    `vds-divider--${orientation}`,
    variant !== "subtle" && `vds-divider--${variant}`,
    inset && "vds-divider--inset",
    className
  ]
    .filter(Boolean)
    .join(" ");

  if (orientation === "horizontal") {
    return <hr className={cls} style={style} />;
  }

  return (
    <span
      className={cls}
      role="separator"
      aria-orientation="vertical"
      style={style}
    />
  );
}
