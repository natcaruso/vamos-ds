import type { Meta, StoryObj } from "@storybook/react";
import { DotMeter } from "../components/dotMeter";

const meta: Meta<typeof DotMeter> = {
  title: "Components/Dot meter",
  component: DotMeter,
  parameters: { layout: "padded" },
  argTypes: {
    total:             { control: { type: "number", min: 1, max: 32 } },
    filled:            { control: { type: "number", min: 0, max: 32 } },
    midThreshold:      { control: { type: "number", min: 0, max: 1, step: 0.05 } },
    criticalRemaining: { control: { type: "number", min: 0, max: 16 } }
  },
  args: {
    total: 16,
    filled: 6
  }
};
export default meta;

type Story = StoryObj<typeof DotMeter>;

export const Playground: Story = {};

export const States: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 480 }}>
      {[
        { total: 8,  filled: 0, label: "Vazio (0/8)" },
        { total: 8,  filled: 3, label: "Só na zona normal (3/8)" },
        { total: 8,  filled: 5, label: "Atravessou a metade (5/8)" },
        { total: 8,  filled: 7, label: "Entrou na zona crítica (7/8)" },
        { total: 8,  filled: 8, label: "Lotado (8/8)" }
      ].map((row) => (
        <div key={row.label}>
          <div style={{ font: "var(--fw-semibold) 13px var(--font-sans)", marginBottom: 8 }}>
            {row.label}
          </div>
          <DotMeter total={row.total} filled={row.filled} />
        </div>
      ))}
    </div>
  )
};

export const DifferentTotals: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 480 }}>
      {[8, 12, 16, 24].map((total) => (
        <div key={total}>
          <div style={{ font: "var(--fw-semibold) 13px var(--font-sans)", marginBottom: 8 }}>
            {total} segmentos
          </div>
          <DotMeter total={total} filled={Math.floor(total / 2)} />
        </div>
      ))}
    </div>
  )
};
