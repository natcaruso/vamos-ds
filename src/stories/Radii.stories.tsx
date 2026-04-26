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
      intro="Corner radius scale, named by px value. 16 is the card default. full = pill / circular for buttons, chips, icon-buttons, avatars."
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
                background: "var(--surface-default)",
                borderRadius: v,
                border: "1px solid var(--border-default)"
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
