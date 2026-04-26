import { MotionConfig, motion } from "framer-motion";
import { Icon } from "../icon";
import { iconSize } from "../../tokens/iconSize";
import { iconWeightForSize } from "../../tokens/iconWeight";
import { motionSpring } from "../../tokens/motion";
import type { BottomNavBadge, BottomNavProps } from "./types";
import "./bottomNav.css";

// Component-tier scalar tokens (kept in JS because framer takes numbers,
// not CSS vars). Bump --bottom-nav-active-icon-scale below to keep CSS
// in sync if tweaked.
const ACTIVE_ICON_SCALE = 1.1;
const REST_ICON_SCALE   = 1;

const INDICATOR_LAYOUT_ID = "vds-bottom-nav-indicator";

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
    <MotionConfig reducedMotion="user">
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
                  {active && !isDisabled && (
                    <motion.span
                      layoutId={INDICATOR_LAYOUT_ID}
                      className="vds-bottom-nav__indicator"
                      transition={motionSpring.crisp}
                      aria-hidden="true"
                    />
                  )}
                  <motion.span
                    className="vds-bottom-nav__media"
                    animate={{ scale: active ? ACTIVE_ICON_SCALE : REST_ICON_SCALE }}
                    transition={motionSpring.responsive}
                  >
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
                  </motion.span>
                  <span className="vds-bottom-nav__label">{it.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </MotionConfig>
  );
}
