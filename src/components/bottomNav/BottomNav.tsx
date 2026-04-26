import { Icon } from "../icon";
import { iconSize } from "../../tokens/iconSize";
import { iconWeightForSize } from "../../tokens/iconWeight";
import type { BottomNavProps } from "./types";
import "./bottomNav.css";

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
          return (
            <li key={it.id}>
              <button
                type="button"
                className="vds-bottom-nav__item"
                aria-current={active ? "page" : undefined}
                onClick={() => onSelect?.(it.id)}
              >
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
