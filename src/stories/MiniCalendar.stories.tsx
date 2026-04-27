import { useMemo, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MiniCalendar } from "../components/miniCalendar";

const meta: Meta<typeof MiniCalendar> = {
  title: "Components/Mini calendar",
  component: MiniCalendar,
  parameters: { layout: "padded" },
  argTypes: {
    weekStartsOn:   { control: "select", options: [0, 1] },
    showHeader:     { control: "boolean" },
    showNavigation: { control: "boolean" },
    itemCount:      { control: { type: "number", min: 0, max: 99 } }
  },
  args: {
    weekStartsOn: 0,
    showHeader: true,
    showNavigation: true,
    itemCount: 12
  }
};
export default meta;

type Story = StoryObj<typeof MiniCalendar>;

function plus(days: number): Date {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d;
}

export const Default: Story = {};

export const WithHighlightedDays: Story = {
  args: {
    itemCount: 12
  },
  render: (args) => {
    const highlightedDates = useMemo(() => [plus(1), plus(2), plus(3)], []);
    return <MiniCalendar {...args} highlightedDates={highlightedDates} />;
  }
};

export const Controlled: Story = {
  render: (args) => {
    const [date, setDate] = useState<Date>(new Date());
    const highlightedDates = useMemo(() => [plus(1), plus(2)], []);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <MiniCalendar
          {...args}
          value={date}
          onChange={setDate}
          highlightedDates={highlightedDates}
        />
        <div style={{ font: "var(--fw-medium) 13px var(--font-sans)", color: "var(--text-tertiary)" }}>
          Selecionado: <code>{date.toISOString().slice(0, 10)}</code>
        </div>
      </div>
    );
  }
};

export const WeekStartsOnMonday: Story = {
  args: { weekStartsOn: 1 }
};

export const WithoutHeader: Story = {
  args: { showHeader: false }
};

export const WithoutNavigation: Story = {
  args: { showNavigation: false }
};

export const CustomMeta: Story = {
  args: {
    headerMeta: "3 aulas reservadas"
  }
};
