import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "../components/chips";

const meta: Meta<typeof Chip> = {
  title: "Components/Chip · Input",
  component: Chip,
  parameters: { layout: "centered" },
  argTypes: {
    label:    { control: "text" },
    disabled: { control: "boolean" }
  },
  args: {
    label: "Beach Tennis",
    disabled: false
  }
};
export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {};

export const Disabled: Story = {
  args: { disabled: true }
};

export const NonRemovable: Story = {
  args: { onRemove: undefined }
};

export const States: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      <Chip label="Default" onRemove={() => {}} />
      <Chip label="Sem remoção" />
      <Chip label="Disabled" disabled onRemove={() => {}} />
    </div>
  )
};

export const Interactive: Story = {
  parameters: { layout: "padded" },
  render: () => {
    const [tags, setTags] = useState([
      { id: "1", label: "Beach Tennis" },
      { id: "2", label: "Iniciante" },
      { id: "3", label: "Faya Sports" },
      { id: "4", label: "Manhã" }
    ]);
    return (
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", maxWidth: 480 }}>
        {tags.map((t) => (
          <Chip
            key={t.id}
            label={t.label}
            onRemove={() => setTags(tags.filter((x) => x.id !== t.id))}
          />
        ))}
        {tags.length === 0 && (
          <span style={{ color: "var(--text-tertiary)", font: "var(--fw-medium) 14px var(--font-sans)" }}>
            Nenhuma tag
          </span>
        )}
      </div>
    );
  }
};
