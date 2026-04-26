import { Fragment } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  brand,
  brandPressed,
  palette,
  gray,
  ink,
  surface,
  text,
  border,
  divider,
  overlay,
  action,
  feedback,
  highlight
} from "../tokens/colors";
import { Page, Section, mono } from "./_chrome";

const meta: Meta = { title: "Foundations/Colors" };
export default meta;

function textOn(hex: string): string {
  if (!hex || !hex.startsWith("#")) return "#1E1E1E";
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
  sub,
  big = false
}: {
  hex: string;
  label: string;
  sub?: string;
  big?: boolean;
}) {
  return (
    <div
      style={{
        background: hex,
        color: textOn(hex),
        borderRadius: 8,
        padding: "12px 12px 10px",
        minHeight: big ? 92 : 76,
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
          <Swatch key={hex + i} hex={hex} label={`${i + 1}`} sub={hex} big />
        ))}
      </Row>
    </div>
  );
}

/* ─────────── 1 · PRIMITIVES ─────────── */

export const Primitives_Brand: StoryObj = {
  name: "Primitives · Brand",
  render: () => (
    <Page
      title="Brand"
      intro="Five interchangeable brand primaries — no fixed semantic role. Pressed tones are the resting tap state, lifted into the action tier."
    >
      <Section title="Primaries">
        <Row cols={5}>
          {Object.entries(brand).map(([k, v]) => (
            <Swatch key={k} hex={v} label={k} sub={v} big />
          ))}
        </Row>
      </Section>
      <Section title="Pressed">
        <Row cols={5}>
          {Object.entries(brandPressed).map(([k, v]) => (
            <Swatch key={k} hex={v} label={k} sub={v} big />
          ))}
        </Row>
      </Section>
    </Page>
  )
};

export const Primitives_Palette: StoryObj = {
  name: "Primitives · Palette",
  render: () => (
    <Page
      title="Palette"
      intro="12 hues × 10 steps. Step 1 = lightest, step 10 = darkest. Use steps 1 + 7 as bg/fg pair for status / highlight chips."
    >
      {Object.entries(palette).map(([k, ramp]) => (
        <PaletteRow
          key={k}
          name={k}
          ramp={ramp}
          prefix={`--vamos-${k.replace(/([A-Z])/g, "-$1").toLowerCase()}`}
        />
      ))}
    </Page>
  )
};

export const Primitives_Neutral: StoryObj = {
  name: "Primitives · Neutral",
  render: () => (
    <Page
      title="Neutral · 13-step gray"
      intro="gray-1 = white, gray-13 = black. Powers text, borders, surfaces."
    >
      <Row cols={13}>
        {gray.map((hex, i) => (
          <Swatch key={hex + i} hex={hex} label={`${i + 1}`} sub={hex} big />
        ))}
      </Row>
    </Page>
  )
};

export const Primitives_Ink: StoryObj = {
  name: "Primitives · Ink",
  render: () => (
    <Page
      title="Ink — text opacity ladder"
      intro="Five-step opacity ladder used for text on light, mirrored for inverse (text on dark). The semantic text-* tokens reference these."
    >
      <Section title="On light">
        <div style={{ background: surface.canvas, padding: 24, borderRadius: 12, border: `1px solid ${border.subtle}` }}>
          {([100, 85, 65, 45, 25] as const).map((step) => (
            <div key={step} style={{ color: ink[step], font: "var(--fw-medium) 16px var(--font-sans)", marginBottom: 8 }}>
              <span style={{ display: "inline-block", width: 80, ...mono }}>ink-{step}</span>
              The quick brown fox · 09:00 às 10:00
            </div>
          ))}
        </div>
      </Section>
      <Section title="On inverse">
        <div style={{ background: surface.inverse, padding: 24, borderRadius: 12 }}>
          {([100, 85, 65, 45, 25] as const).map((step) => (
            <div key={step} style={{ color: ink.inverse[step], font: "var(--fw-medium) 16px var(--font-sans)", marginBottom: 8 }}>
              <span style={{ display: "inline-block", width: 100, ...mono, color: ink.inverse[step] }}>ink-inverse-{step}</span>
              The quick brown fox · 09:00 às 10:00
            </div>
          ))}
        </div>
      </Section>
    </Page>
  )
};

/* ─────────── 2 · SEMANTIC ─────────── */

export const Semantic_Surface: StoryObj = {
  name: "Semantic · Surface",
  render: () => (
    <Page
      title="Surface"
      intro="Where content sits. canvas = page background, default = card, subtle = row stripe, strong = sunken, warm = promo, inverse = dark surface."
    >
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12 }}>
        {Object.entries(surface).map(([k, v]) => (
          <Swatch key={k} hex={v} label={`surface-${k}`} sub={v} big />
        ))}
      </div>
    </Page>
  )
};

export const Semantic_Text: StoryObj = {
  name: "Semantic · Text",
  render: () => {
    const lightSamples: { name: string; value: string }[] = [
      { name: "text-primary",    value: text.primary },
      { name: "text-secondary",  value: text.secondary },
      { name: "text-tertiary",   value: text.tertiary },
      { name: "text-quaternary", value: text.quaternary },
      { name: "text-disabled",   value: text.disabled },
      { name: "text-link",       value: text.link },
      { name: "text-link-hover", value: text.linkHover }
    ];
    const inverseSamples: { name: string; value: string }[] = [
      { name: "text-on-inverse-primary",    value: text.onInverse.primary },
      { name: "text-on-inverse-secondary",  value: text.onInverse.secondary },
      { name: "text-on-inverse-tertiary",   value: text.onInverse.tertiary },
      { name: "text-on-inverse-quaternary", value: text.onInverse.quaternary },
      { name: "text-on-inverse-disabled",   value: text.onInverse.disabled }
    ];
    return (
      <Page
        title="Text"
        intro="Hierarchy on light surfaces, mirrored for content on dark. Reach for these — never apply ink-* primitives directly in components."
      >
        <Section title="On light">
          <div style={{ background: surface.canvas, padding: 24, borderRadius: 12, border: `1px solid ${border.subtle}` }}>
            {lightSamples.map((s) => (
              <div key={s.name} style={{ color: s.value, font: "var(--fw-medium) 16px var(--font-sans)", marginBottom: 8 }}>
                <span style={{ display: "inline-block", width: 200, ...mono }}>{s.name}</span>
                Beach Tennis · Fazer check-in
              </div>
            ))}
          </div>
        </Section>
        <Section title="On inverse">
          <div style={{ background: surface.inverse, padding: 24, borderRadius: 12 }}>
            {inverseSamples.map((s) => (
              <div key={s.name} style={{ color: s.value, font: "var(--fw-medium) 16px var(--font-sans)", marginBottom: 8 }}>
                <span style={{ display: "inline-block", width: 240, ...mono, color: s.value }}>{s.name}</span>
                Beach Tennis · Fazer check-in
              </div>
            ))}
          </div>
        </Section>
      </Page>
    );
  }
};

export const Semantic_Border_Divider: StoryObj = {
  name: "Semantic · Border & Divider",
  render: () => {
    const borderSamples = Object.entries(border);
    return (
      <Page
        title="Border & Divider"
        intro="Border = component edge (chip, input, card outline). Divider = between content rows. Distinct intents — never substitute one for the other."
      >
        <Section title="Border">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}>
            {borderSamples.map(([k, v]) => (
              <div
                key={k}
                style={{
                  background: surface.canvas,
                  border: `1px solid ${v}`,
                  borderRadius: 8,
                  padding: 16,
                  font: "var(--fw-semibold) 13px var(--font-sans)"
                }}
              >
                <div>border-{k}</div>
                <div style={{ ...mono, marginTop: 6 }}>{v}</div>
              </div>
            ))}
          </div>
        </Section>
        <Section title="Divider">
          <div style={{ background: surface.canvas, padding: 24, borderRadius: 12, border: `1px solid ${border.subtle}` }}>
            {[0, 1, 2].map((i) => (
              <div key={i}>
                <div style={{ padding: "12px 0", font: "var(--fw-medium) 14px var(--font-sans)" }}>
                  Row {i + 1} — Beach Tennis · 09:00 às 10:00
                </div>
                {i < 2 && <div style={{ height: 1, background: divider }} />}
              </div>
            ))}
          </div>
        </Section>
      </Page>
    );
  }
};

export const Semantic_Overlay: StoryObj = {
  name: "Semantic · Overlay",
  render: () => (
    <Page
      title="Overlay"
      intro="Transparent layers over content. Scrim = light veil. Backdrop = modal underlay. Disabled = disabled component fill."
    >
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}>
        {Object.entries(overlay).map(([k, v]) => (
          <div
            key={k}
            style={{
              background: surface.canvas,
              border: `1px solid ${border.subtle}`,
              borderRadius: 8,
              padding: 14
            }}
          >
            <div style={{ background: v, height: 56, borderRadius: 6, marginBottom: 10 }} />
            <div style={{ font: "var(--fw-semibold) 13px var(--font-sans)" }}>overlay-{k}</div>
            <div style={mono}>{v}</div>
          </div>
        ))}
      </div>
    </Page>
  )
};

/* ─────────── 3 · ACTION + FEEDBACK ─────────── */

export const Action_States: StoryObj = {
  name: "Action · State matrix",
  render: () => {
    const order: (keyof typeof action)[] = ["blue", "green", "purple", "pink", "grey"];
    const cols = ["bg", "bgHover", "bgPressed", "bgDisabled"] as const;
    return (
      <Page
        title="Action — state matrix"
        intro="Every interactive role exposes the full state recipe (default, hover, pressed, disabled). Components use these names — never reach back into the brand primitives."
      >
        <div style={{ display: "grid", gridTemplateColumns: "120px repeat(4, 1fr)", gap: 8, alignItems: "stretch" }}>
          <div />
          {cols.map((c) => (
            <div key={c} style={{ ...mono, fontWeight: 700, color: text.primary }}>{c}</div>
          ))}
          {order.map((role) => {
            const a = action[role];
            const cells = [a.bg, a.bgHover, a.bgPressed, a.bgDisabled];
            const fgs   = [a.fg, a.fg,      a.fg,        a.fgDisabled];
            return (
              <Fragment key={role}>
                <div style={{ alignSelf: "center", font: "var(--fw-bold) 14px var(--font-sans)" }}>
                  {role}
                </div>
                {cells.map((bg, i) => (
                  <div
                    key={role + cols[i]}
                    style={{
                      background: bg,
                      color: fgs[i],
                      borderRadius: 8,
                      padding: "14px 12px",
                      font: "var(--fw-bold) var(--fs-h5)/1.32 var(--font-sans)",
                      border: bg.toLowerCase().startsWith("#f") ? `1px solid ${border.subtle}` : "none",
                      textAlign: "center"
                    }}
                  >
                    {cols[i] === "bgDisabled" ? "Texto" : "Action"}
                  </div>
                ))}
              </Fragment>
            );
          })}
        </div>
      </Page>
    );
  }
};

export const Feedback: StoryObj = {
  name: "Feedback",
  render: () => (
    <Page
      title="Feedback"
      intro="Status pairs (bg + fg) — always used together. info / positive / warning / critical / neutral. Reach for these in alerts, banners, status pills."
    >
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}>
        {Object.entries(feedback).map(([k, v]) => (
          <div
            key={k}
            style={{
              background: v.bg,
              color: v.fg,
              borderRadius: 8,
              padding: 14,
              border: `1px solid ${border.subtle}`,
              font: "var(--fw-semibold) 13px var(--font-sans)"
            }}
          >
            <div>feedback-{k}</div>
            <div style={{ ...mono, color: v.fg, opacity: 0.7, marginTop: 6 }}>
              {v.bg} / {v.fg}
            </div>
          </div>
        ))}
      </div>
    </Page>
  )
};

export const Highlight: StoryObj = {
  name: "Highlight",
  render: () => (
    <Page
      title="Highlight"
      intro="Full bg/fg hue range for chips and tags that need decorative variety beyond the four feedback statuses. Always use the bg/fg pair together."
    >
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12 }}>
        {Object.entries(highlight).map(([k, v]) => (
          <div
            key={k}
            style={{
              background: v.bg,
              color: v.fg,
              borderRadius: 8,
              padding: 14,
              border: `1px solid ${border.subtle}`,
              font: "var(--fw-semibold) 13px var(--font-sans)"
            }}
          >
            <div>highlight-{k}</div>
            <div style={{ ...mono, color: v.fg, opacity: 0.7, marginTop: 6 }}>
              {v.label}
            </div>
          </div>
        ))}
      </div>
    </Page>
  )
};
