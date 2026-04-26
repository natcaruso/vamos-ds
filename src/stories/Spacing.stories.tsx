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
      intro="Base 4-px grid. Aliases (1, 3, 5) map to (4, 12, 20). Use the numeric token names — they are the value in pixels."
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {Object.entries(spacing).map(([k, v]) => (
          <div
            key={k}
            style={{
              display: "grid",
              gridTemplateColumns: "80px 80px 1fr",
              gap: 16,
              alignItems: "center",
              padding: "6px 0",
              borderBottom: "1px solid var(--vamos-divider)"
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
