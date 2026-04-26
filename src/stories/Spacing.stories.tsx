import type { Meta, StoryObj } from "@storybook/react";
import { spacing } from "../tokens/spacing";
import { Page, mono } from "./_chrome";

const meta: Meta = {
  title: "Foundations/Spacing"
};
export default meta;

export const Scale: StoryObj = {
  render: () => (
    <Page
      title="Spacing"
      intro="Single 4-px scale (with 2, 6, 18 as approved exceptions). The token names are the value in pixels — no aliases, no surprises."
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {Object.entries(spacing).map(([k, v]) => (
          <div
            key={k}
            style={{
              display: "grid",
              gridTemplateColumns: "100px 80px 1fr",
              gap: 16,
              alignItems: "center",
              padding: "6px 0",
              borderBottom: "1px solid var(--divider)"
            }}
          >
            <div style={{ font: "var(--fw-semibold) 13px var(--font-sans)" }}>--space-{k}</div>
            <div style={mono}>{v}</div>
            <div
              style={{
                background: "var(--vamos-brand-blue)",
                height: 10,
                width: v,
                borderRadius: 2
              }}
            />
          </div>
        ))}
      </div>
    </Page>
  )
};
