import { Fragment } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "../components/icon";
import { Button } from "../components/buttons";
import type { ButtonSize, ButtonVariant } from "../components/buttons";
import { iconSize } from "../tokens/iconSize";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: { layout: "centered" },
  argTypes: {
    variant: {
      control: "select",
      options: ["blue", "green", "purple", "pink", "grey", "lightblue", "outline", "ghost"]
    },
    size:      { control: "select", options: ["3xl", "2xl", "xl", "md"] },
    fullWidth: { control: "boolean" },
    disabled:  { control: "boolean" },
    children:  { control: "text" }
  },
  args: {
    variant:  "blue",
    size:     "2xl",
    children: "Fazer check-in",
    fullWidth: false,
    disabled: false
  }
};
export default meta;

type Story = StoryObj<typeof Button>;

const ALL_VARIANTS: ButtonVariant[] = [
  "blue", "green", "purple", "pink", "grey", "lightblue", "outline", "ghost"
];
const ALL_SIZES: ButtonSize[] = ["3xl", "2xl", "xl", "md"];

const sizeIcon = (s: ButtonSize) =>
  s === "3xl" ? iconSize.xl
  : s === "2xl" ? iconSize.lg
  : s === "xl" ? iconSize.md
  : iconSize.sm;

/* ─────────── Playground ─────────── */

export const Playground: Story = {};

/* ─────────── Variants ─────────── */

export const Variants: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" }}>
      {ALL_VARIANTS.map((v) => (
        <Button key={v} variant={v} size="2xl">
          {v === "blue"      && "Brand · blue"}
          {v === "green"     && "Brand · green"}
          {v === "purple"    && "Brand · purple"}
          {v === "pink"      && "Brand · pink"}
          {v === "grey"      && "Brand · grey"}
          {v === "lightblue" && "Brand · lightblue"}
          {v === "outline"   && "Outline · blue"}
          {v === "ghost"     && "Ghost"}
        </Button>
      ))}
    </div>
  )
};

/* ─────────── Sizes ─────────── */

export const Sizes: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
      {ALL_SIZES.map((s) => (
        <Button key={s} size={s}>
          Fazer check-in · {s.toUpperCase()}
        </Button>
      ))}
    </div>
  )
};

/* ─────────── Size × Variant matrix ─────────── */

export const SizeVariantMatrix: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: `auto repeat(${ALL_VARIANTS.length}, max-content)`, gap: 16, alignItems: "center" }}>
      <div />
      {ALL_VARIANTS.map((v) => (
        <div key={v} style={{
          font: "var(--fw-semibold) 12px var(--font-sans)",
          color: "var(--text-tertiary)",
          textTransform: "uppercase",
          letterSpacing: ".04em",
          textAlign: "center"
        }}>
          {v}
        </div>
      ))}
      {ALL_SIZES.map((s) => (
        <Fragment key={s}>
          <div style={{
            font: "var(--fw-semibold) 12px var(--font-sans)",
            color: "var(--text-tertiary)",
            textTransform: "uppercase",
            letterSpacing: ".04em"
          }}>
            {s.toUpperCase()}
          </div>
          {ALL_VARIANTS.map((v) => (
            <Button key={`${s}-${v}`} variant={v} size={s}>
              Action
            </Button>
          ))}
        </Fragment>
      ))}
    </div>
  )
};

/* ─────────── With icons ─────────── */

export const LeadingIcon: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
      {ALL_SIZES.map((s) => (
        <Button key={s} size={s} leadingIcon={<Icon name="calendar_month" size={sizeIcon(s)} weight={500} />}>
          Agendar aula · {s.toUpperCase()}
        </Button>
      ))}
    </div>
  )
};

export const TrailingIcon: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
      {ALL_SIZES.map((s) => (
        <Button key={s} size={s} trailingIcon={<Icon name="chevron_right" size={sizeIcon(s)} weight={500} />}>
          Continuar · {s.toUpperCase()}
        </Button>
      ))}
    </div>
  )
};

export const BothIcons: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
      {ALL_VARIANTS.map((v) => (
        <Button
          key={v}
          variant={v}
          size="2xl"
          leadingIcon={<Icon name="favorite" size={iconSize.lg} weight={500} />}
          trailingIcon={<Icon name="chevron_right" size={iconSize.lg} weight={500} />}
        >
          Variante {v}
        </Button>
      ))}
    </div>
  )
};

/* ─────────── States ─────────── */

export const States: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "auto repeat(2, max-content)", gap: 16, alignItems: "center" }}>
      <div />
      <div style={{ font: "var(--fw-semibold) 12px var(--font-sans)", color: "var(--text-tertiary)", textTransform: "uppercase" }}>Default</div>
      <div style={{ font: "var(--fw-semibold) 12px var(--font-sans)", color: "var(--text-tertiary)", textTransform: "uppercase" }}>Disabled</div>

      {ALL_VARIANTS.map((v) => (
        <Fragment key={v}>
          <div style={{ font: "var(--fw-semibold) 12px var(--font-sans)", color: "var(--text-tertiary)", textTransform: "uppercase" }}>
            {v}
          </div>
          <Button variant={v}>Action</Button>
          <Button variant={v} disabled>Action</Button>
        </Fragment>
      ))}
    </div>
  )
};

/* ─────────── Full width ─────────── */

export const FullWidth: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 360 }}>
      <Button variant="blue"    size="3xl" fullWidth>Fazer check-in</Button>
      <Button variant="outline" size="3xl" fullWidth>Ver detalhes</Button>
      <Button variant="ghost"   size="3xl" fullWidth>Cancelar</Button>
    </div>
  )
};
