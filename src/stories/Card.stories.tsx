import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../components/card";
import type { CardPadding, CardRadius, CardSurface } from "../components/card";
import { Page, mono } from "./_chrome";

const SURFACES: CardSurface[] = ["canvas", "default", "subtle", "strong", "warm"];
const PADDINGS: CardPadding[] = ["none", "sm", "md", "lg", "xl"];
const RADII: CardRadius[]   = ["md", "lg", "xl"];

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: { layout: "padded" },
  argTypes: {
    surface: { control: "select", options: SURFACES },
    padding: { control: "select", options: PADDINGS },
    radius:  { control: "select", options: RADII }
  },
  args: {
    surface: "default",
    padding: "lg",
    radius: "lg",
    children: "Conteúdo do card"
  }
};
export default meta;

type Story = StoryObj<typeof Card>;

const sample = (
  <div style={{ font: "var(--fw-medium) var(--fs-body)/var(--lh-body) var(--font-sans)", color: "var(--text-primary)" }}>
    Conteúdo do card · linha um<br />
    <span style={{ color: "var(--text-tertiary)" }}>linha de apoio</span>
  </div>
);

export const Playground: Story = {};

export const Surfaces: Story = {
  render: () => (
    <Page title="Surfaces" intro="Cinco superfícies disponíveis. Qualquer uma das semantic surface tokens.">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}>
        {SURFACES.map((s) => (
          <Card key={s} surface={s} padding="lg" radius="lg">
            <div style={{ font: "var(--fw-semibold) var(--fs-body-sm)/1.2 var(--font-sans)" }}>{s}</div>
            <div style={mono}>--surface-{s}</div>
          </Card>
        ))}
      </div>
    </Page>
  )
};

export const Paddings: Story = {
  render: () => (
    <Page title="Padding" intro="Escala mapeada para --space-12/16/24/32.">
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {PADDINGS.map((p) => (
          <Card key={p} surface="default" padding={p} radius="lg">
            <div style={{ font: "var(--fw-semibold) var(--fs-body-sm)/1.2 var(--font-sans)" }}>padding={p}</div>
          </Card>
        ))}
      </div>
    </Page>
  )
};

export const Radii: Story = {
  render: () => (
    <Page title="Radius" intro="md (8) · lg (16) · xl (24).">
      <div style={{ display: "flex", gap: 12 }}>
        {RADII.map((r) => (
          <Card key={r} surface="default" padding="lg" radius={r}>
            <div style={{ font: "var(--fw-semibold) var(--fs-body-sm)/1.2 var(--font-sans)" }}>radius={r}</div>
          </Card>
        ))}
      </div>
    </Page>
  )
};

export const Polymorphic: Story = {
  render: () => (
    <Card as="section" surface="default" padding="lg" radius="lg" aria-label="Sample card">
      {sample}
    </Card>
  )
};
