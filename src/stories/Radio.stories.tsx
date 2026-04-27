import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Radio, RadioGroup } from "../components/radio";
import type { RadioColor } from "../components/radio";

const ALL_COLORS: RadioColor[] = ["blue", "green", "purple", "pink", "grey", "lightblue"];

const meta: Meta<typeof RadioGroup> = {
  title: "Components/Radio",
  component: RadioGroup,
  parameters: { layout: "centered" },
  argTypes: {
    color:       { control: "select", options: ALL_COLORS },
    size:        { control: "inline-radio", options: ["sm", "md"] },
    orientation: { control: "inline-radio", options: ["vertical", "horizontal"] },
    disabled:    { control: "boolean" }
  },
  args: {
    color: "blue",
    size: "md",
    orientation: "vertical",
    disabled: false,
    defaultValue: "beach",
    ariaLabel: "Modalidades"
  }
};
export default meta;

type Story = StoryObj<typeof RadioGroup>;

const MODALIDADES = [
  { value: "beach",    label: "Beach Tennis" },
  { value: "fitness",  label: "Funcional" },
  { value: "yoga",     label: "Yoga" },
  { value: "boxe",     label: "Boxe" }
];

export const Playground: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      {MODALIDADES.map((m) => (
        <Radio key={m.value} value={m.value}>{m.label}</Radio>
      ))}
    </RadioGroup>
  )
};

export const Controlled: Story = {
  parameters: { layout: "padded" },
  render: () => {
    const [value, setValue] = useState("beach");
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <RadioGroup ariaLabel="Modalidade preferida" value={value} onChange={setValue}>
          {MODALIDADES.map((m) => (
            <Radio key={m.value} value={m.value}>{m.label}</Radio>
          ))}
        </RadioGroup>
        <div style={{ font: "var(--fw-medium) 13px var(--font-sans)", color: "var(--text-tertiary)" }}>
          Selecionado: <code>{value}</code>
        </div>
      </div>
    );
  }
};

export const Horizontal: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <RadioGroup ariaLabel="Nível" defaultValue="iniciante" orientation="horizontal">
      <Radio value="iniciante">Iniciante</Radio>
      <Radio value="intermediario">Intermediário</Radio>
      <Radio value="avancado">Avançado</Radio>
    </RadioGroup>
  )
};

export const BrandColors: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, max-content)", gap: 32 }}>
      {ALL_COLORS.map((c) => (
        <RadioGroup key={c} ariaLabel={c} color={c} defaultValue="a">
          <Radio value="a">{c} · A</Radio>
          <Radio value="b">{c} · B</Radio>
          <Radio value="c">{c} · C</Radio>
        </RadioGroup>
      ))}
    </div>
  )
};

export const Sizes: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", gap: 48 }}>
      <RadioGroup ariaLabel="Small" size="sm" defaultValue="a">
        <Radio value="a">Small · A</Radio>
        <Radio value="b">Small · B</Radio>
      </RadioGroup>
      <RadioGroup ariaLabel="Medium" size="md" defaultValue="a">
        <Radio value="a">Medium · A</Radio>
        <Radio value="b">Medium · B</Radio>
      </RadioGroup>
    </div>
  )
};

export const WithDescription: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <RadioGroup ariaLabel="Plano" defaultValue="mensal" color="blue">
      <Radio
        value="mensal"
        description="Pague mês a mês, cancele quando quiser."
      >
        Mensal
      </Radio>
      <Radio
        value="trimestral"
        description="Compromisso de 3 meses com 10% de desconto."
      >
        Trimestral
      </Radio>
      <Radio
        value="anual"
        description="12 meses com 25% de desconto. Inclui acesso prioritário a aulas lotadas."
      >
        Anual
      </Radio>
      <Radio
        value="indisponivel"
        disabled
        description="Disponível apenas para membros corporativos."
      >
        Corporativo
      </Radio>
    </RadioGroup>
  )
};

export const States: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <RadioGroup ariaLabel="Default">
        <Radio value="rest">Não selecionado</Radio>
        <Radio value="checked">Selecionado</Radio>
      </RadioGroup>
      <RadioGroup ariaLabel="Disabled" disabled>
        <Radio value="rest">Disabled · não selecionado</Radio>
        <Radio value="checked">Disabled · selecionado</Radio>
      </RadioGroup>
    </div>
  )
};
