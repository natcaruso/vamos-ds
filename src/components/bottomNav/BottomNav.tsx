import { Icon } from "../icon";
import { iconSize } from "../../tokens/iconSize";
import { iconWeightForSize } from "../../tokens/iconWeight";
import type { BottomNavBadge, BottomNavProps } from "./types";
import "./bottomNav.css";

function formatBadgeCount(count: number): string {
  return count > 99 ? "99+" : String(count);
}

function badgeAriaLabel(badge: BottomNavBadge): string {
  if (badge === "dot") return "Há novidades";
  return `${badge} ${badge === 1 ? "nova notificação" : "novas notificações"}`;
}

export function BottomNav({
  items,
  activeId,
  onSelect,
  className,
  ariaLabel = "Navegação principal"
}: BottomNavProps) {
  return (
    <nav
      className={["vds-bottom-nav", className].filter(Boolean).join(" ")}
      aria-label={ariaLabel}
    >
      <ul className="vds-bottom-nav__list">
        {items.map((it) => {
          const active = it.id === activeId;
          const isDisabled = it.disabled === true;
          const badgeCls = [
            "vds-bottom-nav__badge",
            it.badge === "dot" && "vds-bottom-nav__badge--dot"
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <li key={it.id}>
              <button
                type="button"
                className="vds-bottom-nav__item"
                aria-current={active ? "page" : undefined}
                aria-disabled={isDisabled || undefined}
                disabled={isDisabled}
                onClick={() => {
                  if (!isDisabled) onSelect?.(it.id);
                }}
              >
                <span className="vds-bottom-nav__indicator" aria-hidden="true" />
                <span className="vds-bottom-nav__media">
                  {it.avatarSrc ? (
                    <img
                      src={it.avatarSrc}
                      alt={it.avatarAlt ?? ""}
                      className="vds-bottom-nav__avatar"
                    />
                  ) : it.iconName ? (
                    <Icon
                      name={it.iconName}
                      size={iconSize.xl}
                      weight={iconWeightForSize(iconSize.xl)}
                      filled={it.iconFilled || active}
                    />
                  ) : null}
                  {it.badge != null && (
                    <span className={badgeCls} aria-label={badgeAriaLabel(it.badge)}>
                      {typeof it.badge === "number" ? formatBadgeCount(it.badge) : null}
                    </span>
                  )}
                </span>
                <span className="vds-bottom-nav__label">{it.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
