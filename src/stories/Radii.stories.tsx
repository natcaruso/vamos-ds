import type { Meta, StoryObj } from "@storybook/react";
import { radii } from "../tokens/radii";
import { Page, mono } from "./_chrome";

const meta: Meta = {
  title: "Foundations/Radii"
};
export default meta;

export const Scale: StoryObj = {
  render: () => (
    <Page
      title="Radii"
      intro="Corner radius scale. 16-px is the card default. `full` is the pill / circular value used for buttons, chips, icon-buttons, avatars."
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
          gap: 16
        }}
      >
        {Object.entries(radii).map(([k, v]) => (
          <div key={k} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 120,
                height: 120,
                background: "var(--vamos-canvas-soft)",
                borderRadius: v,
                border: "1px solid var(--vamos-border)"
              }}
            />
            <div style={{ font: "var(--fw-semibold) 13px var(--font-sans)" }}>--radius-{k}</div>
            <div style={mono}>{v}</div>
          </div>
        ))}
      </div>
    </Page>
  )
};
