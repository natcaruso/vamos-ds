import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MiniCalendar } from "../components/miniCalendar";

const meta: Meta<typeof MiniCalendar> = {
  title: "Components/Mini calendar",
  component: MiniCalendar,
  parameters: { layout: "padded" },
  argTypes: {
    weekStartsOn: { control: "select", options: [0, 1] }
  },
  args: {
    weekStartsOn: 0
  }
};
export default meta;

type Story = StoryObj<typeof MiniCalendar>;

export const Default: Story = {};

export const Controlled: Story = {
  render: (args) => {
    const [date, setDate] = useState<Date>(new Date());
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <MiniCalendar {...args} value={date} onChange={setDate} />
        <div style={{ font: "var(--fw-medium) 13px var(--font-sans)", color: "var(--text-tertiary)" }}>
          Selecionado: <code>{date.toISOString().slice(0, 10)}</code>
        </div>
      </div>
    );
  }
};

export const WeekStartsOnMonday: Story = {
  args: {
    weekStartsOn: 1
  }
};

export const WithDefaultValue: Story = {
  render: () => {
    const future = new Date();
    future.setDate(future.getDate() + 5);
    return <MiniCalendar defaultValue={future} />;
  }
};

export const SideBySide: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
      <MiniCalendar />
      <MiniCalendar weekStartsOn={1} />
    </div>
  )
};
