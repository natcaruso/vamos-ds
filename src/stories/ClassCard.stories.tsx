import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ClassCard } from "../components/classCard";
import faya from "./assets/faya-sports.jpg";

const meta: Meta<typeof ClassCard> = {
  title: "System/Class card",
  component: ClassCard,
  parameters: { layout: "padded" },
  argTypes: {
    capacityFilled: { control: { type: "number", min: 0, max: 32 } },
    capacityTotal:  { control: { type: "number", min: 1, max: 32 } },
    levelColor:     { control: "select", options: ["neutral", "blue", "green", "purple", "pink", "magenta", "gold"] }
  },
  args: {
    studioName:     "Faya Sports",
    studioLogoSrc:  faya,
    level:          "Intermediário",
    levelColor:     "neutral",
    title:          "Beach Tennis",
    startTime:      "09:00",
    endTime:        "10:00",
    duration:       "60 min",
    instructor:     "Ana Paula",
    capacityFilled: 6,
    capacityTotal:  16,
    ctaLabel:       "Fazer check-in"
  }
};
export default meta;

type Story = StoryObj<typeof ClassCard>;

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: 640 }}>
      <ClassCard {...args} />
    </div>
  )
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(420px, 1fr))", gap: 20 }}>
      <ClassCard
        studioName="Faya Sports"
        studioLogoSrc={faya}
        level="Iniciante"
        levelColor="green"
        title="Beach Tennis"
        startTime="08:00"
        endTime="09:00"
        duration="60 min"
        instructor="João Santos"
        capacityFilled={2}
        capacityTotal={16}
      />
      <ClassCard
        studioName="Faya Sports"
        studioLogoSrc={faya}
        level="Intermediário"
        title="Beach Tennis"
        startTime="09:00"
        endTime="10:00"
        duration="60 min"
        instructor="Ana Paula"
        capacityFilled={6}
        capacityTotal={16}
      />
      <ClassCard
        studioName="Faya Sports"
        studioLogoSrc={faya}
        level="Avançado"
        levelColor="purple"
        title="Beach Tennis"
        startTime="10:30"
        endTime="11:30"
        duration="60 min"
        instructor="Carlos Lima"
        capacityFilled={15}
        capacityTotal={16}
      />
      <ClassCard
        studioName="Faya Sports"
        studioLogoSrc={faya}
        level="Avançado"
        levelColor="purple"
        title="Beach Tennis"
        startTime="12:00"
        endTime="13:00"
        duration="60 min"
        instructor="Mariana"
        capacityFilled={16}
        capacityTotal={16}
        ctaLabel="Entrar na fila de espera"
      />
    </div>
  )
};

export const Interactive: Story = {
  args: {
    capacityTotal: 9,
    capacityFilled: 0
  },

  render: (args) => {
    const total = Math.max(1, Math.floor(args.capacityTotal ?? 16));
    const [filled, setFilled] = useState(0);

    // Re-clamp internal counter when total shrinks below it.
    const clamped = Math.min(filled, total);
    if (clamped !== filled) setFilled(clamped);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 640 }}>
        <ClassCard
          {...args}
          capacityTotal={total}
          capacityFilled={clamped}
          ctaLabel={clamped >= total ? "Entrar na fila de espera" : "Fazer check-in"}
          onCheckIn={() => setFilled((v) => Math.min(v + 1, total))}
        />
        <button
          type="button"
          onClick={() => setFilled(0)}
          style={{
            alignSelf: "flex-start",
            font: "var(--fw-medium) 13px var(--font-sans)",
            color: "var(--text-tertiary)",
            background: "transparent",
            border: 0,
            cursor: "pointer"
          }}
        >
          Reset
        </button>
      </div>
    );
  }
};
