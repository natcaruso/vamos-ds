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
import { ptBR } from "date-fns/locale";
import { IconButton } from "../iconButton";
import type { MiniCalendarProps } from "./types";
import "./miniCalendar.css";

const DOW_PT_BR: [string, string, string, string, string, string, string] = [
  "dom", "seg", "ter", "qua", "qui", "sex", "sáb"
];

export function MiniCalendar({
  value,
  defaultValue,
  onChange,
  onWeekChange,
  weekStartsOn = 0,
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

  const titleRaw = format(currentWeek, "MMMM yyyy", { locale });
  const title = titleRaw.charAt(0).toUpperCase() + titleRaw.slice(1);

  return (
    <div
      className={["vds-mini-cal", className].filter(Boolean).join(" ")}
      role="group"
      aria-label={ariaLabel}
    >
      <div className="vds-mini-cal__header">
        <IconButton
          variant="ghost"
          size="md"
          iconName="chevron_left"
          aria-label="Semana anterior"
          onClick={goPrev}
        />
        <h2 className="vds-mini-cal__title">{title}</h2>
        <IconButton
          variant="ghost"
          size="md"
          iconName="chevron_right"
          aria-label="Próxima semana"
          onClick={goNext}
        />
      </div>

      <div className="vds-mini-cal__dow" aria-hidden="true">
        {days.map((d) => (
          <div key={d.toISOString()} className="vds-mini-cal__dow-cell">
            {dayOfWeekLabels[d.getDay()]}
          </div>
        ))}
      </div>

      <div className="vds-mini-cal__days">
        {days.map((d) => {
          const isSelected = isSameDay(d, selected);
          const isToday = isSameDay(d, today);
          return (
            <button
              key={d.toISOString()}
              type="button"
              className="vds-mini-cal__day"
              data-selected={isSelected || undefined}
              data-today={isToday || undefined}
              aria-pressed={isSelected}
              aria-current={isToday ? "date" : undefined}
              aria-label={format(d, "EEEE, d 'de' MMMM 'de' yyyy", { locale })}
              onClick={() => setDate(d)}
            >
              <time dateTime={format(d, "yyyy-MM-dd")}>{format(d, "d")}</time>
            </button>
          );
        })}
      </div>
    </div>
  );
}
