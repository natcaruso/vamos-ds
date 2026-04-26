import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "../components/tag";
import type { TagColor } from "../components/tag";
import { Icon } from "../components/icon";
import { iconSize } from "../tokens/iconSize";
import { iconWeightForSize } from "../tokens/iconWeight";
import { gray, palette } from "../tokens/colors";
import { contrastRatio, pickAccessibleStep, WCAG } from "../tokens/contrast";
import { Page, Section, mono } from "./_chrome";

const ALL_COLORS: TagColor[] = [
  "red", "volcano", "orange", "gold", "yellow", "lime",
  "green", "cyan", "blue", "indigo", "purple", "magenta", "neutral"
];

const RAMPS = { ...palette, neutral: gray } as Record<TagColor, readonly string[]>;

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
  parameters: { layout: "centered" },
  argTypes: {
    color:    { control: "select", options: ALL_COLORS },
    children: { control: "text" }
  },
  args: {
    color: "blue",
    children: "Iniciante"
  }
};
export default meta;

type Story = StoryObj<typeof Tag>;

export const Playground: Story = {};

export const AllColors: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", maxWidth: 720 }}>
      {ALL_COLORS.map((c) => (
        <Tag key={c} color={c}>{c}</Tag>
      ))}
    </div>
  )
};

export const WithLeadingIcon: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <Tag color="green" leadingIcon={<Icon name="bolt" size={iconSize.sm} weight={iconWeightForSize(iconSize.sm)} />}>
        Iniciante
      </Tag>
      <Tag color="gold" leadingIcon={<Icon name="star" size={iconSize.sm} weight={iconWeightForSize(iconSize.sm)} />}>
        Intermediário
      </Tag>
      <Tag color="red" leadingIcon={<Icon name="bolt" size={iconSize.sm} weight={iconWeightForSize(iconSize.sm)} />}>
        Avançado
      </Tag>
      <Tag color="neutral" leadingIcon={<Icon name="schedule" size={iconSize.sm} weight={iconWeightForSize(iconSize.sm)} />}>
        60 min
      </Tag>
    </div>
  )
};

export const WithTrailingIcon: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <Tag color="blue" trailingIcon={<Icon name="chevron_right" size={iconSize.sm} weight={iconWeightForSize(iconSize.sm)} />}>
        Beach Tennis
      </Tag>
      <Tag color="green" trailingIcon={<Icon name="check" size={iconSize.sm} weight={iconWeightForSize(iconSize.sm)} />}>
        Confirmado
      </Tag>
      <Tag color="neutral" trailingIcon={<Icon name="open_in_new" size={iconSize.sm} weight={iconWeightForSize(iconSize.sm)} />}>
        Detalhes
      </Tag>
    </div>
  )
};

export const WithBothIcons: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <Tag
        color="purple"
        leadingIcon={<Icon name="bolt" size={iconSize.sm} weight={iconWeightForSize(iconSize.sm)} />}
        trailingIcon={<Icon name="chevron_right" size={iconSize.sm} weight={iconWeightForSize(iconSize.sm)} />}
      >
        Em progresso
      </Tag>
      <Tag
        color="orange"
        leadingIcon={<Icon name="schedule" size={iconSize.sm} weight={iconWeightForSize(iconSize.sm)} />}
        trailingIcon={<Icon name="info" size={iconSize.sm} weight={iconWeightForSize(iconSize.sm)} />}
      >
        Quase lotado
      </Tag>
    </div>
  )
};

export const AccessibilityAudit: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <Page
      title="Accessibility audit"
      intro="For each hue, the Tag picks the lightest step ≥ 7 whose contrast against step 1 meets WCAG AA (≥ 4.5:1). The audit below shows which step won and the actual ratio."
    >
      <Section title="Per-hue audit">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 12 }}>
          {ALL_COLORS.map((c) => {
            const ramp = RAMPS[c];
            const pick = pickAccessibleStep(ramp, 0, WCAG.AA_NORMAL);
            const passes = pick.ratio >= WCAG.AA_NORMAL;
            return (
              <div key={c} style={{ background: "var(--surface-canvas)", borderRadius: 12, border: "1px solid var(--border-subtle)", padding: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <span style={{ font: "var(--fw-semibold) 14px var(--font-sans)" }}>{c}</span>
                  <Tag color={c}>Tag {c}</Tag>
                </div>
                <div style={{ ...mono, fontSize: 11, color: "var(--text-tertiary)" }}>
                  bg → step 1 · {ramp[0]}<br />
                  border → step 3 · {ramp[2]}<br />
                  fg → step {pick.index + 1} · {pick.color}
                </div>
                <div
                  style={{
                    marginTop: 8,
                    font: "var(--fw-semibold) 12px var(--font-sans)",
                    color: passes ? "var(--feedback-positive-fg)" : "var(--feedback-critical-fg)"
                  }}
                >
                  {pick.ratio.toFixed(2)}:1 — {passes ? "AA pass" : "FALLBACK (no step in ramp meets AA)"}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section title="Step ladder per hue">
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {ALL_COLORS.map((c) => {
            const ramp = RAMPS[c];
            return (
              <div key={c} style={{ display: "grid", gridTemplateColumns: "100px 1fr", alignItems: "center", gap: 12 }}>
                <span style={{ font: "var(--fw-semibold) 13px var(--font-sans)" }}>{c}</span>
                <div style={{ display: "grid", gridTemplateColumns: `repeat(${ramp.length}, 1fr)`, gap: 2 }}>
                  {ramp.map((hex, i) => {
                    const r = contrastRatio(ramp[0], hex);
                    const ok = r >= WCAG.AA_NORMAL && i >= 6;
                    return (
                      <div
                        key={hex + i}
                        title={`${hex} · ${r.toFixed(2)}:1`}
                        style={{
                          background: hex,
                          height: 28,
                          borderRadius: 4,
                          border: ok ? "2px solid var(--vamos-brand-blue)" : "1px solid rgba(0,0,0,.06)",
                          fontSize: 9,
                          color: i >= 5 ? "rgba(255,255,255,.95)" : "rgba(0,0,0,.7)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: "ui-monospace, monospace"
                        }}
                      >
                        {i + 1}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </Page>
  )
};
