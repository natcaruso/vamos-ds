import type { Meta, StoryObj } from "@storybook/react";
import { borderWidth } from "../tokens/borderWidth";
import { Page, mono } from "./_chrome";

const meta: Meta = {
  title: "Foundations/Border widths"
};
export default meta;

const ORDER: (keyof typeof borderWidth)[] = ["thin", "default", "thick"];

export const Scale: StoryObj = {
  render: () => (
    <Page
      title="Border widths"
      intro="Three-step border-width scale. Default is the resting border weight on chips, inputs, and outlined buttons. Thin is reserved for hairlines / dividers; thick for heavy emphasis surfaces."
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {ORDER.map((k) => (
          <div
            key={k}
            style={{
              display: "grid",
              gridTemplateColumns: "120px 80px 1fr",
              alignItems: "center",
              gap: 16,
              padding: "12px 0",
              borderBottom: "1px solid var(--divider)"
            }}
          >
            <div style={{ font: "var(--fw-semibold) 14px var(--font-sans)" }}>
              --border-width-{k}
            </div>
            <div style={mono}>{borderWidth[k]}</div>
            <div
              style={{
                width: "100%",
                height: 0,
                borderTop: `${borderWidth[k]} solid var(--vamos-brand-blue)`
              }}
            />
          </div>
        ))}
      </div>
    </Page>
  )
};

export const InContext: StoryObj = {
  render: () => (
    <Page
      title="In context"
      intro="The same scale wrapping a component-shaped surface so the visual weight is easy to compare."
    >
      <div style={{ display: "flex", gap: 24 }}>
        {ORDER.map((k) => (
          <div key={k} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 120,
                height: 80,
                background: "var(--surface-canvas)",
                border: `${borderWidth[k]} solid var(--vamos-brand-blue)`,
                borderRadius: "var(--radius-16)"
              }}
            />
            <div style={{ font: "var(--fw-semibold) 13px var(--font-sans)" }}>{k}</div>
            <div style={mono}>{borderWidth[k]}</div>
          </div>
        ))}
      </div>
    </Page>
  )
};
