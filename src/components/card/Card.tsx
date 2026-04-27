import type { CardProps } from "./types";
import "./card.css";

export function Card({
  surface = "default",
  padding = "lg",
  radius = "lg",
  className,
  children,
  as,
  ...rest
}: CardProps) {
  const Tag = (as ?? "div") as React.ElementType;
  const cls = [
    "vds-card",
    `vds-card--${surface}`,
    `vds-card--padding-${padding}`,
    `vds-card--radius-${radius}`,
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag className={cls} {...rest}>
      {children}
    </Tag>
  );
}
