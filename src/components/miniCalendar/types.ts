import type { Locale } from "date-fns";

export type DayIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface MiniCalendarProps {
  /** Controlled selected date. */
  value?: Date;
  /** Uncontrolled initial selection. */
  defaultValue?: Date;
  onChange?: (date: Date) => void;
  /** Fires when the visible week changes. Receives the start-of-week date. */
  onWeekChange?: (weekStart: Date) => void;
  /** Day index where the visible week starts. 0 = Sunday, 1 = Monday. */
  weekStartsOn?: DayIndex;
  /** date-fns locale. Defaults to pt-BR. */
  locale?: Locale;
  /** Override the day-of-week labels. Index 0 = Sunday. */
  dayOfWeekLabels?: [string, string, string, string, string, string, string];
  ariaLabel?: string;
  className?: string;
}
