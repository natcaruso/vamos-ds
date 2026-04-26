import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "../components/icon";
import { iconSize } from "../tokens/iconSize";
import { FilterChip } from "../components/chips";

const meta: Meta<typeof FilterChip> = {
  title: "Components/Chip · Filter",
  component: FilterChip,
  parameters: { layout: "centered" },
  argTypes: {
    label:    { control: "text" },
    selected: { control: "boolean" },
    disabled: { control: "boolean" }
  },
  args: {
    label: "Tecnologia",
    selected: false,
    disabled: false
  }
};
export default meta;

type Story = StoryObj<typeof FilterChip>;

export const Unselected: Story = {};

export const Selected: Story = {
  args: { selected: true }
};

export const WithLeadingIcon: Story = {
  args: { icon: <Icon name="bolt" size={iconSize.sm} /> }
};

export const Disabled: Story = {
  args: { disabled: true }
};

export const States: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      <FilterChip label="Unselected" />
      <FilterChip label="Unselected · ícone" icon={<Icon name="group" size={iconSize.sm} />} />
      <FilterChip label="Selected" selected />
      <FilterChip label="Disabled" disabled />
      <FilterChip label="Selected disabled" selected disabled />
    </div>
  )
};

export const MultiSelect: Story = {
  parameters: { layout: "padded" },
  render: () => {
    const [selected, setSelected] = useState<string[]>(["beach"]);
    const filters = [
      { id: "beach",   label: "Beach Tennis", icon: <Icon name="bolt" size={iconSize.sm} /> },
      { id: "fitness", label: "Fitness",      icon: <Icon name="group" size={iconSize.sm} /> },
      { id: "yoga",    label: "Yoga" },
      { id: "boxe",    label: "Boxe" }
    ];
    const toggle = (id: string) =>
      setSelected((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));
    return (
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", maxWidth: 480 }}>
        {filters.map((f) => (
          <FilterChip
            key={f.id}
            label={f.label}
            icon={f.icon}
            selected={selected.includes(f.id)}
            onToggle={() => toggle(f.id)}
          />
        ))}
      </div>
    );
  }
};

export const SingleSelect: Story = {
  parameters: { layout: "padded" },
  render: () => {
    const [selected, setSelected] = useState("all");
    const filters = [
      { id: "all",      label: "Todos" },
      { id: "open",     label: "Disponíveis" },
      { id: "full",     label: "Lotados" },
      { id: "waitlist", label: "Fila de espera" }
    ];
    return (
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {filters.map((f) => (
          <FilterChip
            key={f.id}
            label={f.label}
            selected={selected === f.id}
            onToggle={() => setSelected(f.id)}
          />
        ))}
      </div>
    );
  }
};
