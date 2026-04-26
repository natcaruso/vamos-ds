import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { DropdownChip } from "../components/chips";

const meta: Meta<typeof DropdownChip> = {
  title: "Components/Chip · Dropdown",
  component: DropdownChip,
  parameters: { layout: "centered" },
  argTypes: {
    placeholder: { control: "text" },
    disabled:    { control: "boolean" }
  },
  args: {
    placeholder: "Selecionar",
    disabled: false
  }
};
export default meta;

type Story = StoryObj<typeof DropdownChip>;

const STATUS_OPTIONS = [
  { id: "todos",      label: "Todos os itens" },
  { id: "prio",       label: "Prioritários" },
  { id: "progresso",  label: "Em progresso" },
  { id: "concluidos", label: "Concluídos" }
];

export const Default: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<string | undefined>();
    return (
      <DropdownChip
        {...args}
        options={STATUS_OPTIONS}
        selectedId={selected}
        onSelect={setSelected}
      />
    );
  }
};

export const PreSelected: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<string | undefined>("progresso");
    return (
      <DropdownChip
        {...args}
        options={STATUS_OPTIONS}
        selectedId={selected}
        onSelect={setSelected}
      />
    );
  }
};

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => (
    <DropdownChip {...args} options={STATUS_OPTIONS} selectedId="prio" />
  )
};

export const SideBySide: Story = {
  parameters: { layout: "padded" },
  render: () => {
    const [a, setA] = useState<string | undefined>();
    const [b, setB] = useState<string | undefined>("progresso");
    return (
      <div style={{ display: "flex", gap: 12, alignItems: "flex-start", height: 320 }}>
        <DropdownChip
          options={STATUS_OPTIONS}
          selectedId={a}
          onSelect={setA}
          placeholder="Status"
        />
        <DropdownChip
          options={STATUS_OPTIONS}
          selectedId={b}
          onSelect={setB}
        />
        <DropdownChip
          options={STATUS_OPTIONS}
          selectedId="prio"
          disabled
        />
      </div>
    );
  }
};
