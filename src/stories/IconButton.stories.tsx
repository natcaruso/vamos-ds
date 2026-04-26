import { Fragment } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "../components/iconButton";
import type {
  IconButtonSize,
  IconButtonVariant
} from "../components/iconButton";

const meta: Meta<typeof IconButton> = {
  title: "Components/IconButton",
  component: IconButton,
  parameters: { layout: "centered" },
  argTypes: {
    iconName: { control: "text" },
    variant: {
      control: "select",
      options: ["blue", "green", "purple", "pink", "grey", "lightblue", "outline", "ghost"]
    },
    size:        { control: "select", options: ["3xl", "2xl", "xl", "md", "sm"] },
    iconWeight:  { control: "select", options: [100, 200, 300, 400, 500, 600, 700] },
    iconFilled:  { control: "boolean" },
    disabled:    { control: "boolean" }
  },
  args: {
    iconName: "package_2",
    variant: "blue",
    size: "xl",
    iconWeight: 500,
    iconFilled: false,
    disabled: false,
    "aria-label": "Pacote"
  }
};
export default meta;

type Story = StoryObj<typeof IconButton>;

const ALL_VARIANTS: IconButtonVariant[] = [
  "blue", "green", "purple", "pink", "grey", "lightblue", "outline", "ghost"
];
const ALL_SIZES: IconButtonSize[] = ["3xl", "2xl", "xl", "md", "sm"];

export const Playground: Story = {};

export const Sizes: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
      {ALL_SIZES.map((s) => (
        <div key={s} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <IconButton
            iconName="package_2"
            size={s}
            aria-label={`Favoritar · ${s}`}
          />
          <span style={{ font: "var(--fw-semibold) 12px var(--font-sans)", color: "var(--text-tertiary)", textTransform: "uppercase" }}>
            {s}
          </span>
        </div>
      ))}
    </div>
  )
};

export const Variants: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      {ALL_VARIANTS.map((v) => (
        <IconButton
          key={v}
          iconName="package_2"
          variant={v}
          size="xl"
          aria-label={`Favoritar · ${v}`}
        />
      ))}
    </div>
  )
};

export const SizeVariantMatrix: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{
      display: "grid",
      gridTemplateColumns: `auto repeat(${ALL_VARIANTS.length}, max-content)`,
      gap: 16,
      alignItems: "center"
    }}>
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
            {s}
          </div>
          {ALL_VARIANTS.map((v) => (
            <IconButton
              key={`${s}-${v}`}
              iconName="package_2"
              variant={v}
              size={s}
              aria-label={`${v} ${s}`}
            />
          ))}
        </Fragment>
      ))}
    </div>
  )
};

export const Filled: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", gap: 16 }}>
      <IconButton iconName="package_2" variant="ghost"   size="xl" aria-label="Pacote (outline)" />
      <IconButton iconName="package_2" variant="ghost"   size="xl" iconFilled aria-label="Pacote (filled)" />
      <IconButton iconName="package_2" variant="outline" size="xl" aria-label="Pacote · outline" />
      <IconButton iconName="package_2" variant="outline" size="xl" iconFilled aria-label="Pacote · outline filled" />
    </div>
  )
};

export const States: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{
      display: "grid",
      gridTemplateColumns: "auto repeat(2, max-content)",
      gap: 16,
      alignItems: "center"
    }}>
      <div />
      <div style={{ font: "var(--fw-semibold) 12px var(--font-sans)", color: "var(--text-tertiary)", textTransform: "uppercase" }}>Default</div>
      <div style={{ font: "var(--fw-semibold) 12px var(--font-sans)", color: "var(--text-tertiary)", textTransform: "uppercase" }}>Disabled</div>

      {ALL_VARIANTS.map((v) => (
        <Fragment key={v}>
          <div style={{ font: "var(--fw-semibold) 12px var(--font-sans)", color: "var(--text-tertiary)", textTransform: "uppercase" }}>
            {v}
          </div>
          <IconButton iconName="package_2" variant={v} size="xl" aria-label={`${v}`} />
          <IconButton iconName="package_2" variant={v} size="xl" disabled aria-label={`${v} disabled`} />
        </Fragment>
      ))}
    </div>
  )
};
