import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "../components/divider";
import { Page, Section, mono } from "./_chrome";

const meta: Meta<typeof Divider> = {
  title: "Components/Divider",
  component: Divider,
  parameters: { layout: "padded" },
  argTypes: {
    orientation: { control: "inline-radio", options: ["horizontal", "vertical"] },
    variant:     { control: "inline-radio", options: ["subtle", "default", "strong"] },
    label:       { control: "text" },
    inset:       { control: "text" }
  },
  args: {
    orientation: "horizontal",
    variant: "subtle"
  }
};
export default meta;

type Story = StoryObj<typeof Divider>;

export const Playground: Story = {
  render: (args) => (
    <div style={{ width: 520, padding: 24, background: "var(--surface-canvas)", borderRadius: 12, border: "1px solid var(--border-subtle)" }}>
      <p style={{ margin: 0, font: "var(--fw-regular) var(--fs-body)/var(--lh-body) var(--font-sans)" }}>
        Conteúdo antes do divider.
      </p>
      <Divider {...args} />
      <p style={{ margin: 0, font: "var(--fw-regular) var(--fs-body)/var(--lh-body) var(--font-sans)" }}>
        Conteúdo depois do divider.
      </p>
    </div>
  )
};

export const HorizontalVariants: Story = {
  render: () => (
    <Page
      title="Horizontal · variants"
      intro="subtle (default) for inter-row dividers, default for component-edge weight, strong for heavy emphasis (rare)."
    >
      {(["subtle", "default", "strong"] as const).map((v) => (
        <div key={v} style={{ marginBottom: 24 }}>
          <div style={{ ...mono, marginBottom: 6 }}>variant: {v}</div>
          <Divider variant={v} />
        </div>
      ))}
    </Page>
  )
};

export const HorizontalWithLabel: Story = {
  render: () => (
    <Page
      title="Horizontal · with label"
      intro="Renders text centered between two hairlines. Useful as section separators inside lists."
    >
      <Divider label="Hoje" />
      <div style={{ height: 24 }} />
      <Divider label="Próxima semana" variant="default" />
      <div style={{ height: 24 }} />
      <Divider label="Anteriores" variant="strong" />
    </Page>
  )
};

export const HorizontalInset: Story = {
  render: () => (
    <Page
      title="Horizontal · inset"
      intro="The inset prop pulls the divider in from the edges — handy when list rows have leading icons or avatars and the divider should align with the content column."
    >
      <Section title="No inset">
        <Divider />
      </Section>
      <Section title="Inset = 40px (e.g. avatar + gap)">
        <Divider inset="40px" />
      </Section>
      <Section title="Inset = var(--space-24)">
        <Divider inset="var(--space-24)" />
      </Section>
    </Page>
  )
};

export const VerticalVariants: Story = {
  render: () => (
    <Page
      title="Vertical · variants"
      intro="Vertical dividers stretch to the parent flex container's cross-axis size. Place them between inline content groups."
    >
      {(["subtle", "default", "strong"] as const).map((v) => (
        <div key={v} style={{ marginBottom: 24 }}>
          <div style={{ ...mono, marginBottom: 6 }}>variant: {v}</div>
          <div
            style={{
              display: "flex",
              alignItems: "stretch",
              gap: 12,
              padding: "12px 16px",
              background: "var(--surface-canvas)",
              borderRadius: 12,
              border: "1px solid var(--border-subtle)",
              height: 56,
              alignSelf: "flex-start"
            }}
          >
            <span style={{ font: "var(--fw-medium) 14px var(--font-sans)", alignSelf: "center" }}>Início</span>
            <Divider orientation="vertical" variant={v} />
            <span style={{ font: "var(--fw-medium) 14px var(--font-sans)", alignSelf: "center" }}>Calendário</span>
            <Divider orientation="vertical" variant={v} />
            <span style={{ font: "var(--fw-medium) 14px var(--font-sans)", alignSelf: "center" }}>Perfil</span>
          </div>
        </div>
      ))}
    </Page>
  )
};

export const InList: Story = {
  render: () => (
    <Page
      title="In a list"
      intro="The most common usage — separating list rows with a subtle hairline."
    >
      <div style={{ background: "var(--surface-canvas)", borderRadius: 12, border: "1px solid var(--border-subtle)", overflow: "hidden", maxWidth: 480 }}>
        {["Beach Tennis · 09:00 às 10:00", "Funcional · 10:30 às 11:30", "Yoga · 12:00 às 13:00", "Boxe · 18:00 às 19:00"].map((row, i, arr) => (
          <div key={row}>
            <div style={{ padding: "16px 20px", font: "var(--fw-medium) var(--fs-body-sm)/var(--lh-body-sm) var(--font-sans)" }}>
              {row}
            </div>
            {i < arr.length - 1 && <Divider inset="var(--space-20)" />}
          </div>
        ))}
      </div>
    </Page>
  )
};
