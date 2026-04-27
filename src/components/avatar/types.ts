import type { ReactNode } from "react";

export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
export type AvatarShape = "circle" | "square";

export type AvatarColor =
  | "neutral"
  | "blue"
  | "green"
  | "purple"
  | "pink"
  | "grey"
  | "lightblue";

export type AvatarStatus = "online" | "offline" | "busy" | "away";

export interface AvatarProps {
  /** Image URL. If absent or fails to load, the fallback is shown. */
  src?: string;
  /** Alt text. Defaults to `name` when provided. */
  alt?: string;
  /** Person name. Used to derive initials and to fill alt if not given. */
  name?: string;
  /** Material Symbols glyph used as fallback when no name + no src. */
  fallbackIcon?: string;
  /** Arbitrary fallback content. Overrides initials and fallbackIcon. */
  fallback?: ReactNode;
  size?: AvatarSize;
  shape?: AvatarShape;
  /** Background tone for the initials / icon fallback. */
  color?: AvatarColor;
  /** Optional status indicator dot at the bottom-right corner. */
  status?: AvatarStatus;
  className?: string;
}

/** Two-letter initials helper (first + last word, uppercased, max 2 chars). */
export function initialsFromName(name: string): string {
  const trimmed = name.trim();
  if (!trimmed) return "";
  const parts = trimmed.split(/\s+/);
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}
