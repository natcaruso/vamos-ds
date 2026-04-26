import type { Meta, StoryObj } from "@storybook/react";
import {
  brand,
  brandPressed,
  palette,
  gray,
  highlight,
  content,
  canvas,
  utility,
  semantic
} from "../tokens/colors";
import { Page, Section, mono } from "./_chrome";

const meta: Meta = {
  title: "Foundations/Colors"
};
export default meta;

function textOn(hex: string): string {
  if (!hex.startsWith("#")) return "#1E1E1E";
  const h = hex.replace("#", "");
  if (h.length !== 6) return "#1E1E1E";
  const r = parseInt(h.slice(0, 2), 16) / 255;
  const g = parseInt(h.slice(2, 4), 16) / 255;
  const b = parseInt(h.slice(4, 6), 16) / 255;
  const L = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return L > 0.55 ? "rgba(0,0,0,.78)" : "rgba(255,255,255,.94)";
}

function Swatch({
  hex,
  label,
  sub
}: {
  hex: string;
  label: string;
  sub?: string;
}) {
  return (
    <div
      style={{
        background: hex,
        color: textOn(hex),
        borderRadius: 8,
        padding: "12px 12px 10px",
        minHeight: 92,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: "1px solid rgba(0,0,0,0.04)",
        font: "var(--fw-medium) 11px ui-monospace, monospace"
      }}
    >
      <span style={{ fontWeight: 700, fontSize: 12 }}>{label}</span>
      <span style={{ fontSize: 10.5, opacity: 0.85 }}>{sub ?? hex}</span>
    </div>
  );
}

function Row({ children, cols = 10 }: { children: React.ReactNode; cols?: number }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap: 4,
        marginBottom: 12
      }}
    >
      {children}
    </div>
  );
}

function PaletteRow({
  name,
  ramp,
  prefix
}: {
  name: string;
  ramp: readonly string[];
  prefix: string;
}) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 12,
          marginBottom: 6,
          padding: "0 2px"
        }}
      >
        <span style={{ font: "var(--fw-bold) 14px var(--font-sans)" }}>{name}</span>
        <span style={mono}>{prefix}-1 → {prefix}-{ramp.length}</span>
      </div>
      <Row cols={ramp.length}>
        {ramp.map((hex, i) => (
          <Swatch key={hex + i} hex={hex} label={`${i + 1}`} sub={hex} />
        ))}
      </Row>
    </div>
  );
}

export const Brand: StoryObj = {
  render: () => (
    <Page
      title="Brand"
      intro="Five interchangeable brand primaries — no fixed semantic role. Pressed tones are the resting tap state."
    >
      <Section title="Primaries">
        <Row cols={5}>
          {Object.entries(brand).map(([k, v]) => (
            <Swatch key={k} hex={v} label={k} sub={v} />
          ))}
        </Row>
      </Section>
      <Section title="Pressed">
        <Row cols={5}>
          {Object.entries(brandPressed).map(([k, v]) => (
            <Swatch key={k} hex={v} label={k} sub={v} />
          ))}
        </Row>
      </Section>
    </Page>
  )
};

export const Palette: StoryObj = {
  render: () => (
    <Page
      title="Palette · Ant Design base"
      intro="12 hues × 10 steps. Step 1 is the lightest, step 10 the darkest. Highlight pairs use step-1 (bg) and step-7 (fg) of the same hue."
    >
      {Object.entries(palette).map(([k, ramp]) => (
        <PaletteRow key={k} name={k} ramp={ramp} prefix={`--vamos-${k.replace(/([A-Z])/g, "-$1").toLowerCase()}`} />
      ))}
    </Page>
  )
};

export const Neutral: StoryObj = {
  render: () => (
    <Page
      title="Neutral · 13-step gray"
      intro="Used for text, borders, surfaces. Gray-1 is white, gray-13 is black."
    >
      <Row cols={13}>
        {gray.map((hex, i) => (
          <Swatch key={hex + i} hex={hex} label={`${i + 1}`} sub={hex} />
        ))}
      </Row>
    </Page>
  )
};

export const Highlight: StoryObj = {
  render: () => (
    <Page
      title="Highlight"
      intro="Bg/fg pairs for chips, badges, status pills. Always use the pair together — bg as surface, fg as label."
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: 12
        }}
      >
        {Object.entries(highlight).map(([k, v]) => (
          <div
            key={k}
            style={{
              background: v.bg,
              color: v.fg,
              borderRadius: 8,
              padding: 14,
              border: "1px solid rgba(0,0,0,0.04)",
              font: "var(--fw-semibold) 13px var(--font-sans)"
            }}
          >
            <div>{v.label}</div>
            <div style={{ ...mono, color: v.fg, opacity: 0.7, marginTop: 8 }}>
              {v.bg} / {v.fg}
            </div>
          </div>
        ))}
      </div>
    </Page>
  )
};

export const Content: StoryObj = {
  render: () => (
    <Page
      title="Content (text)"
      intro="Text colors with opacity ladder. Default for body, strong for primary headings, muted for secondary, faint for placeholders, disabled for unavailable."
    >
      <Section title="Light surface">
        <div style={{ background: "#fff", padding: 24, borderRadius: 12, border: "1px solid rgba(0,0,0,.06)" }}>
          {(["default", "strong", "muted", "faint", "disabled"] as const).map((k) => (
            <div key={k} style={{ color: content[k], font: "var(--fw-medium) 16px var(--font-sans)", marginBottom: 8 }}>
              <span style={{ display: "inline-block", width: 100, ...mono }}>{k}</span>
              The quick brown fox · 09:00 às 10:00 · 60 min
            </div>
          ))}
        </div>
      </Section>
      <Section title="Inverse (on dark)">
        <div style={{ background: "#1E1E1E", padding: 24, borderRadius: 12 }}>
          {(["default", "strong", "muted", "faint", "disabled"] as const).map((k) => (
            <div key={k} style={{ color: content.inverse[k], font: "var(--fw-medium) 16px var(--font-sans)", marginBottom: 8 }}>
              <span style={{ display: "inline-block", width: 100, ...mono, color: content.inverse[k] }}>{k}</span>
              The quick brown fox · 09:00 às 10:00 · 60 min
            </div>
          ))}
        </div>
      </Section>
    </Page>
  )
};

export const Canvas: StoryObj = {
  render: () => (
    <Page
      title="Canvas (surfaces)"
      intro="Semantic ladder for backgrounds and containers. White is the base, soft is the default card fill, warm is the promo surface."
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: 12
        }}
      >
        {Object.entries(canvas).map(([k, v]) => (
          <Swatch key={k} hex={v} label={k} sub={v} />
        ))}
      </div>
    </Page>
  )
};

export const Utility: StoryObj = {
  render: () => (
    <Page
      title="Utility"
      intro="Single-purpose helpers — dividers, borders, modal backdrops, disabled fills."
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 12
        }}
      >
        {Object.entries(utility).map(([k, v]) => (
          <div
            key={k}
            style={{
              background: "#fff",
              border: "1px solid rgba(0,0,0,.06)",
              borderRadius: 8,
              padding: 14
            }}
          >
            <div
              style={{
                background: v,
                height: 56,
                borderRadius: 6,
                marginBottom: 10
              }}
            />
            <div style={{ font: "var(--fw-semibold) 13px var(--font-sans)" }}>{k}</div>
            <div style={mono}>{v}</div>
          </div>
        ))}
      </div>
    </Page>
  )
};

export const Semantic: StoryObj = {
  render: () => (
    <Page
      title="Semantic"
      intro="Purpose-bound aliases. Reach for these in product code first; fall back to primitives only when no semantic fits."
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: 12
        }}
      >
        {Object.entries(semantic).map(([k, v]) => (
          <Swatch key={k} hex={v} label={k} sub={v} />
        ))}
      </div>
    </Page>
  )
};
