import type { Meta, StoryObj } from "@storybook/react";
import { shadows } from "../tokens/shadows";
import { Page, mono } from "./_chrome";

const meta: Meta = {
  title: "Foundations/Shadows"
};
export default meta;

export const Scale: StoryObj = {
  render: () => (
    <Page
      title="Shadows"
      intro="Vamos is mostly flat. `card` is rare, `float` is reserved for one floating specimen, `pressed` is an inset for tap feedback."
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 24,
          paddingTop: 16
        }}
      >
        {Object.entries(shadows).map(([k, v]) => (
          <div key={k}>
            <div
              style={{
                width: "100%",
                height: 120,
                background: "var(--vamos-canvas-white)",
                borderRadius: 16,
                boxShadow: v
              }}
            />
            <div style={{ font: "var(--fw-semibold) 13px var(--font-sans)", marginTop: 12 }}>
              --shadow-{k}
            </div>
            <div style={mono}>{v}</div>
          </div>
        ))}
      </div>
    </Page>
  )
};
