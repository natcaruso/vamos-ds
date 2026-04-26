export type BottomNavBadge = number | "dot";

export interface BottomNavItem {
  id: string;
  label: string;
  /** Material Symbols Rounded glyph name. Mutually exclusive with avatarSrc. */
  iconName?: string;
  /** Force the icon to render in its filled variant when not active. */
  iconFilled?: boolean;
  /** URL of an avatar image. When set, replaces the icon (e.g. "Perfil"). */
  avatarSrc?: string;
  /** Alt text for the avatar image. Required when avatarSrc is set. */
  avatarAlt?: string;
  /** Disable the item — non-interactive, dimmed. */
  disabled?: boolean;
  /** Show a notification badge: a number ("99+" beyond 99) or a plain dot. */
  badge?: BottomNavBadge;
}

export interface BottomNavProps {
  items: BottomNavItem[];
  activeId?: string;
  onSelect?: (id: string) => void;
  className?: string;
  /** Accessible name for the nav landmark. Defaults to "Navegação principal". */
  ariaLabel?: string;
}
