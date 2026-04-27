import type { TagColor } from "../tag";

export interface ClassCardProps {
  studioName: string;
  studioLogoSrc?: string;
  /** Difficulty level shown in the top-right tag (e.g. "Intermediário"). */
  level?: string;
  /** Color of the level tag (defaults to neutral). */
  levelColor?: TagColor;
  /** Class title — e.g. "Beach Tennis". */
  title: string;
  startTime: string;
  endTime: string;
  /** Duration label shown next to the time slot (e.g. "60 min"). */
  duration: string;
  instructor: string;
  capacityFilled: number;
  capacityTotal: number;
  ctaLabel?: string;
  /** Label used when the class is full. Defaults to "Entrar na fila de espera". */
  waitlistLabel?: string;
  /** Label used when the user is already checked in. Defaults to "Cancelar check-in". */
  cancelLabel?: string;
  /** True when the current user has already checked into this class. */
  checkedIn?: boolean;
  onCheckIn?: () => void;
  className?: string;
}
