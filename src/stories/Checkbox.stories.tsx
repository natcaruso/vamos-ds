import { Fragment, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../components/checkbox";
import type { CheckboxColor } from "../components/checkbox";

const ALL_COLORS: CheckboxColor[] = ["blue", "green", "purple", "pink", "grey", "lightblue"];

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: { layout: "centered" },
  argTypes: {
    color:    { control: "select", options: ALL_COLORS },
    size:     { control: "inline-radio", options: ["sm", "md"] },
    checked:  { control: "boolean" },
    indeterminate: { control: "boolean" },
    disabled: { control: "boolean" },
    children: { control: "text" }
  },
  args: {
    color: "blue",
    size: "md",
    checked: false,
    indeterminate: false,
    disabled: false,
    children: "Concordo com os termos"
  }
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Playground: Story = {};

export const Default: Story = {
  parameters: { layout: "padded" },
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Checkbox checked={checked} onChange={setChecked}>
        Receber notificações de aulas
      </Checkbox>
    );
  }
};

export const States: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Checkbox>Não selecionado</Checkbox>
      <Checkbox checked>Selecionado</Checkbox>
      <Checkbox indeterminate>Indeterminado</Checkbox>
      <Checkbox disabled>Desabilitado</Checkbox>
      <Checkbox checked disabled>Selecionado · desabilitado</Checkbox>
      <Checkbox indeterminate disabled>Indeterminado · desabilitado</Checkbox>
    </div>
  )
};

export const BrandColors: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, max-content)", gap: 16 }}>
      {ALL_COLORS.map((c) => (
        <Checkbox key={c} checked color={c}>{c}</Checkbox>
      ))}
    </div>
  )
};

export const ColorMatrix: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "auto repeat(3, max-content)", gap: 16, alignItems: "center" }}>
      <div />
      <div style={{ font: "var(--fw-semibold) 12px var(--font-sans)", color: "var(--text-tertiary)", textTransform: "uppercase" }}>Checked</div>
      <div style={{ font: "var(--fw-semibold) 12px var(--font-sans)", color: "var(--text-tertiary)", textTransform: "uppercase" }}>Indeterminate</div>
      <div style={{ font: "var(--fw-semibold) 12px var(--font-sans)", color: "var(--text-tertiary)", textTransform: "uppercase" }}>Disabled checked</div>

      {ALL_COLORS.map((c) => (
        <Fragment key={c}>
          <div style={{ font: "var(--fw-semibold) 13px var(--font-sans)" }}>{c}</div>
          <Checkbox color={c} checked />
          <Checkbox color={c} indeterminate />
          <Checkbox color={c} checked disabled />
        </Fragment>
      ))}
    </div>
  )
};

export const Sizes: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Checkbox size="sm" checked>Small (16)</Checkbox>
      <Checkbox size="md" checked>Medium (20)</Checkbox>
    </div>
  )
};

export const Group: Story = {
  parameters: { layout: "padded" },
  render: () => {
    const [state, setState] = useState({
      a: true,
      b: false,
      c: false
    });
    const allChecked = state.a && state.b && state.c;
    const noneChecked = !state.a && !state.b && !state.c;
    const partial = !allChecked && !noneChecked;
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 320 }}>
        <Checkbox
          checked={allChecked}
          indeterminate={partial}
          onChange={(v) => setState({ a: v, b: v, c: v })}
        >
          Todas as modalidades
        </Checkbox>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, paddingLeft: "var(--space-24)" }}>
          <Checkbox checked={state.a} onChange={(v) => setState({ ...state, a: v })}>Beach Tennis</Checkbox>
          <Checkbox checked={state.b} onChange={(v) => setState({ ...state, b: v })}>Funcional</Checkbox>
          <Checkbox checked={state.c} onChange={(v) => setState({ ...state, c: v })}>Yoga</Checkbox>
        </div>
      </div>
    );
  }
};
