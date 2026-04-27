import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { Icon } from "../icon";
import { iconSize } from "../../tokens/iconSize";
import { iconWeightForSize } from "../../tokens/iconWeight";
import { initialsFromName } from "./types";
import type { AvatarProps, AvatarSize } from "./types";
import "./avatar.css";

const ICON_PX_FOR_SIZE: Record<AvatarSize, number> = {
  xs:    iconSize.sm,  /* 14 */
  sm:    iconSize.md,  /* 16 */
  md:    iconSize.lg,  /* 20 */
  lg:    iconSize.xl,  /* 24 */
  xl:    iconSize["2xl"], /* 32 */
  "2xl": iconSize["2xl"]  /* 32 */
};

const STATUS_LABELS: Record<NonNullable<AvatarProps["status"]>, string> = {
  online:  "Online",
  offline: "Offline",
  busy:    "Ocupado",
  away:    "Ausente"
};

export function Avatar({
  src,
  alt,
  name,
  fallbackIcon,
  fallback,
  size = "md",
  shape = "circle",
  color = "neutral",
  status,
  className
}: AvatarProps) {
  const [imageStatus, setImageStatus] = useState<"idle" | "loaded" | "error">("idle");

  // Reset image state when src changes.
  useEffect(() => {
    setImageStatus(src ? "idle" : "error");
  }, [src]);

  const showImage = Boolean(src) && imageStatus !== "error";
  const initials = name ? initialsFromName(name) : "";

  const cssVars =
    color === "neutral"
      ? undefined
      : ({
          "--avatar-active-bg": `var(--action-${color}-bg)`,
          "--avatar-active-fg": `var(--action-${color}-fg)`
        } as CSSProperties);

  const cls = [
    "vds-avatar",
    `vds-avatar--${size}`,
    `vds-avatar--${shape}`,
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={cls} style={cssVars}>
      <span className="vds-avatar__shape">
        {showImage ? (
          <img
            className="vds-avatar__image"
            src={src}
            alt={alt ?? name ?? ""}
            onLoad={() => setImageStatus("loaded")}
            onError={() => setImageStatus("error")}
          />
        ) : fallback ? (
          <span className="vds-avatar__fallback">{fallback}</span>
        ) : initials ? (
          <span className="vds-avatar__fallback" aria-label={alt ?? name}>
            {initials}
          </span>
        ) : (
          <Icon
            name={fallbackIcon ?? "person"}
            size={ICON_PX_FOR_SIZE[size]}
            weight={iconWeightForSize(ICON_PX_FOR_SIZE[size])}
            aria-label={alt ?? "Avatar"}
            aria-hidden={alt || name ? true : undefined}
          />
        )}
      </span>
      {status && (
        <span
          className={`vds-avatar__status vds-avatar__status--${status}`}
          role="status"
          aria-label={STATUS_LABELS[status]}
        />
      )}
    </span>
  );
}
