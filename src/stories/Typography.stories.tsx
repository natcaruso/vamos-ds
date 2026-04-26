import type { Meta, StoryObj } from "@storybook/react";
import { textStyles, fontFamilies, fontWeights } from "../tokens/typography";
import { Page, Section, mono } from "./_chrome";

const meta: Meta = {
  title: "Foundations/Typography"
};
export default meta;

const SAMPLE = "Faya Sports · Beach Tennis · Fazer check-in";

function Specimen({
  name,
  style
}: {
  name: keyof typeof textStyles;
  style: (typeof textStyles)[keyof typeof textStyles];
}) {
  const cssLineHeight = "lineHeight" in style ? (style as { lineHeight: string }).lineHeight : undefined;
  const cssLetterSpacing = "letterSpacing" in style ? (style as { letterSpacing?: string }).letterSpacing : undefined;
  return (
    <div
      style={{
        padding: "16px 0",
        borderBottom: "1px solid var(--divider)",
        display: "grid",
        gridTemplateColumns: "180px 1fr",
        gap: 24,
        alignItems: "baseline"
      }}
    >
      <div>
        <div style={{ font: "var(--fw-semibold) 14px var(--font-sans)" }}>{name}</div>
        <div style={mono}>
          {style.size} / {cssLineHeight ?? "—"} · w{style.weight}
        </div>
      </div>
      <div
        style={{
          fontFamily: style.family,
          fontSize: style.size,
          lineHeight: cssLineHeight,
          fontWeight: style.weight,
          letterSpacing: cssLetterSpacing
        }}
      >
        {SAMPLE}
      </div>
    </div>
  );
}

export const Scale: StoryObj = {
  render: () => (
    <Page
      title="Scale"
      intro="From display (h1) to caption. Display family (Inter 28pt) kicks in at h3 and up. Captions use Inter 18pt."
    >
      {Object.entries(textStyles).map(([k, v]) => (
        <Specimen key={k} name={k as keyof typeof textStyles} style={v} />
      ))}
    </Page>
  )
};

export const Families: StoryObj = {
  render: () => (
    <Page
      title="Families"
      intro="Inter only, three optical sizes. Use Inter 28 for ≥24px, Inter 18 for ≤13px, Inter (24pt) for everything in between."
    >
      {(["display", "sans", "caption", "mono"] as const).map((key) => (
        <Section key={key} title={`${key} — ${fontFamilies[key]}`}>
          <div style={{ fontFamily: fontFamilies[key], fontSize: 28, lineHeight: 1.3 }}>
            The quick brown fox jumps over the lazy dog
          </div>
          <div style={{ fontFamily: fontFamilies[key], fontSize: 16, lineHeight: 1.5, color: "var(--text-tertiary)" }}>
            0123456789 — Faya Sports · 09:00 às 10:00 · 60 min
          </div>
        </Section>
      ))}
    </Page>
  )
};

export const Weights: StoryObj = {
  render: () => (
    <Page
      title="Weights"
      intro="Light 300 · Regular 400 · Medium 500 · SemiBold 600 · Bold 700 · ExtraBold 800 · Black 900. The product default on screen is Medium 500."
    >
      {Object.entries(fontWeights).map(([name, w]) => (
        <div
          key={name}
          style={{
            padding: "10px 0",
            borderBottom: "1px solid var(--divider)",
            display: "grid",
            gridTemplateColumns: "180px 1fr",
            gap: 24
          }}
        >
          <div>
            <div style={{ font: "var(--fw-semibold) 14px var(--font-sans)" }}>{name}</div>
            <div style={mono}>{w}</div>
          </div>
          <div style={{ fontWeight: w, fontFamily: fontFamilies.sans, fontSize: 22 }}>
            {SAMPLE}
          </div>
        </div>
      ))}
    </Page>
  )
};
