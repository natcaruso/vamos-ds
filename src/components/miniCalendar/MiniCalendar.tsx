import { useState } from "react";
import {
  addWeeks,
  eachDayOfInterval,
  endOfWeek,
  format,
  isSameDay,
  startOfWeek,
  subWeeks
} from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { Icon } from "../icon";
import { iconSize } from "../../tokens/iconSize";
import { iconWeightForSize } from "../../tokens/iconWeight";
import type { MiniCalendarProps } from "./types";
import "./miniCalendar.css";

const DOW_PT_BR: [string, string, string, string, string, string, string] = [
  "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"
];

function pluralizeItens(n: number): string {
  return `${n} ${n === 1 ? "item" : "itens"}`;
}

export function MiniCalendar({
  value,
  defaultValue,
  onChange,
  onWeekChange,
  weekStartsOn = 0,
  highlightedDates = [],
  showHeader = true,
  showNavigation = true,
  itemCount,
  headerMeta,
  locale = ptBR,
  dayOfWeekLabels = DOW_PT_BR,
  ariaLabel = "Calendário",
  className
}: MiniCalendarProps) {
  const today = new Date();
  const isControlled = value !== undefined;
  const [uncontrolled, setUncontrolled] = useState<Date>(defaultValue ?? today);
  const selected = isControlled ? value! : uncontrolled;
  const [currentWeek, setCurrentWeek] = useState<Date>(selected);

  const days = eachDayOfInterval({
    start: startOfWeek(currentWeek, { weekStartsOn }),
    end: endOfWeek(currentWeek, { weekStartsOn })
  });

  const setDate = (d: Date) => {
    if (!isControlled) setUncontrolled(d);
    onChange?.(d);
  };

  const goPrev = () => {
    const next = subWeeks(currentWeek, 1);
    setCurrentWeek(next);
    onWeekChange?.(startOfWeek(next, { weekStartsOn }));
  };

  const goNext = () => {
    const next = addWeeks(currentWeek, 1);
    setCurrentWeek(next);
    onWeekChange?.(startOfWeek(next, { weekStartsOn }));
  };

  // Title: "Hoje, quarta-feira" when the selected date is today, otherwise
  // "Quarta-feira, 27 de abril" for any other selection.
  const isSelectedToday = isSameDay(selected, today);
  const weekday = format(selected, "EEEE", { locale });
  const titleText = isSelectedToday
    ? `Hoje, ${weekday}`
    : `${weekday.charAt(0).toUpperCase() + weekday.slice(1)}, ${format(selected, "d 'de' MMMM", { locale })}`;

  const isHighlighted = (d: Date) =>
    highlightedDates.some((h) => isSameDay(h, d));

  return (
    <div
      className={["vds-mini-cal", className].filter(Boolean).join(" ")}
      role="group"
      aria-label={ariaLabel}
    >
      {showHeader && (
        <header className="vds-mini-cal__header">
          <h2 className="vds-mini-cal__title">
            <span className="vds-mini-cal__title-text">{titleText}</span>
            <Icon
              name="expand_more"
              size={iconSize.md}
              weight={iconWeightForSize(iconSize.md)}
              className="vds-mini-cal__title-icon"
              aria-hidden="true"
            />
          </h2>
          {(headerMeta ?? itemCount != null) && (
            <span className="vds-mini-cal__meta">
              {headerMeta ?? (itemCount != null ? pluralizeItens(itemCount) : null)}
            </span>
          )}
        </header>
      )}

      <div className="vds-mini-cal__strip-wrapper">
        {showNavigation && (
          <button
            type="button"
            className="vds-mini-cal__nav vds-mini-cal__nav--prev"
            aria-label="Semana anterior"
            onClick={goPrev}
          >
            <Icon
              name="chevron_left"
              size={iconSize.sm}
              weight={iconWeightForSize(iconSize.sm)}
              aria-hidden="true"
            />
          </button>
        )}

        <div className="vds-mini-cal__strip">
          {days.map((d) => {
            const isSelected = isSameDay(d, selected);
            const highlighted = isHighlighted(d);
            const isToday = isSameDay(d, today);
            return (
              <button
                key={d.toISOString()}
                type="button"
                className="vds-mini-cal__day"
                data-selected={isSelected || undefined}
                data-highlighted={highlighted && !isSelected ? true : undefined}
                data-today={isToday || undefined}
                aria-pressed={isSelected}
                aria-current={isToday ? "date" : undefined}
                aria-label={format(d, "EEEE, d 'de' MMMM 'de' yyyy", { locale })}
                onClick={() => setDate(d)}
              >
                <span className="vds-mini-cal__day-dow">
                  {dayOfWeekLabels[d.getDay()]}
                </span>
                <span className="vds-mini-cal__day-number">
                  {format(d, "d")}
                </span>
              </button>
            );
          })}
        </div>

        {showNavigation && (
          <button
            type="button"
            className="vds-mini-cal__nav vds-mini-cal__nav--next"
            aria-label="Próxima semana"
            onClick={goNext}
          >
            <Icon
              name="chevron_right"
              size={iconSize.sm}
              weight={iconWeightForSize(iconSize.sm)}
              aria-hidden="true"
            />
          </button>
        )}
      </div>
    </div>
  );
}
