import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "../components/icon";
import type { IconWeight } from "../components/icon";
import { iconSize } from "../tokens/iconSize";
import { Page, Section, mono } from "./_chrome";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  parameters: { layout: "centered" },
  argTypes: {
    name:        { control: "text" },
    size:        { control: { type: "number", min: 12, max: 64, step: 1 } },
    weight:      { control: "select", options: [100, 200, 300, 400, 500, 600, 700] },
    grade:       { control: { type: "number", min: -50, max: 200, step: 10 } },
    filled:      { control: "boolean" },
    opticalSize: { control: { type: "number", min: 20, max: 48, step: 1 } }
  },
  args: {
    name: "calendar_month",
    size: 24,
    weight: 400,
    grade: 0,
    filled: false
  }
};
export default meta;

type Story = StoryObj<typeof Icon>;

const CURATED = [
  // Navegação
  "home", "menu", "arrow_back", "arrow_forward", "chevron_left", "chevron_right",
  "expand_more", "expand_less", "close", "more_vert", "more_horiz", "search",
  // Ações
  "add", "remove", "edit", "delete", "check", "check_circle", "cancel",
  "refresh", "filter_list", "tune", "share", "download", "upload",
  // Comunicação
  "notifications", "mail", "chat", "call", "phone", "send",
  // Agenda
  "calendar_month", "calendar_today", "event", "schedule", "today",
  // Social
  "favorite", "thumb_up", "star", "person", "group", "groups",
  // Esporte
  "sports_tennis", "fitness_center", "sports_soccer", "directions_run",
  "self_improvement", "bolt",
  // Status
  "info", "warning", "error", "help", "lock", "verified"
];

export const Playground: Story = {};

export const Sizes: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <Page
      title="Sizes"
      intro="The Icon size prop drives both font-size and the optical-size axis. Pass numeric token values via iconSize.*."
    >
      <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
        {(["xs", "sm", "md", "lg", "xl", "2xl"] as const).map((k) => (
          <div key={k} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <Icon name="calendar_month" size={iconSize[k]} />
            <div style={{ font: "var(--fw-semibold) 12px var(--font-sans)" }}>iconSize.{k}</div>
            <div style={mono}>{iconSize[k]}px</div>
          </div>
        ))}
      </div>
    </Page>
  )
};

export const Weights: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <Page
      title="Weights"
      intro="Variable wght axis (100…700). Default is 400. Use higher weights for selected/active glyphs that need to read stronger."
    >
      <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
        {([100, 200, 300, 400, 500, 600, 700] as IconWeight[]).map((w) => (
          <div key={w} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <Icon name="favorite" size={iconSize.lg} weight={w} />
            <div style={{ font: "var(--fw-semibold) 12px var(--font-sans)" }}>wght {w}</div>
          </div>
        ))}
      </div>
    </Page>
  )
};

export const Filled: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <Page
      title="Filled axis"
      intro="FILL 0 (outlined) is the default. FILL 1 (filled) is reserved for selected / active states — never as the default."
    >
      <div style={{ display: "flex", gap: 32 }}>
        {(["favorite", "star", "check_circle", "person"] as const).map((name) => (
          <div key={name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            <Icon name={name} size={iconSize.xl} />
            <Icon name={name} size={iconSize.xl} filled />
            <div style={{ font: "var(--fw-medium) 12px var(--font-sans)", color: "var(--text-tertiary)" }}>{name}</div>
          </div>
        ))}
      </div>
    </Page>
  )
};

export const Catalogue: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <Page
      title="Catalogue (curated)"
      intro="Material Symbols Rounded — curated set covering navigation, actions, comms, agenda, social, sport, status. For anything outside this set, pick from fonts.google.com/icons (style: Rounded)."
    >
      <Section title="Glyphs">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 12 }}>
          {CURATED.map((n) => (
            <div
              key={n}
              style={{
                background: "var(--surface-canvas)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-8)",
                padding: 14,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8
              }}
            >
              <Icon name={n} size={iconSize.xl} />
              <div style={{ ...mono, textAlign: "center" }}>{n}</div>
            </div>
          ))}
        </div>
      </Section>
    </Page>
  )
};
