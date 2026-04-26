import type { Meta, StoryObj } from "@storybook/react";
import { zIndex } from "../tokens/zIndex";
import { Page, mono } from "./_chrome";

const meta: Meta = {
  title: "Foundations/Z-index"
};
export default meta;

const ORDER: (keyof typeof zIndex)[] = [
  "base", "raised", "sticky", "dropdown", "popover", "overlay", "modal", "toast", "tooltip"
];

const NOTES: Record<keyof typeof zIndex, string> = {
  base:     "Default flow — page content.",
  raised:   "Slightly lifted surface (cards above the canvas).",
  sticky:   "Pinned headers / footers that stay on screen during scroll.",
  dropdown: "Inline expanding menus (combobox, select).",
  popover:  "Floating menus and tooltips anchored to a trigger.",
  overlay:  "Scrim layer that dims the underlying UI.",
  modal:    "Dialog / sheet content sitting on the overlay.",
  toast:    "Transient notifications above modals.",
  tooltip:  "Always-on-top hint layer."
};

export const Layers: StoryObj = {
  render: () => (
    <Page
      title="Z-index layers"
      intro="Named scale for stacking surfaces. Component code reaches for the named tier (--z-popover, --z-modal) — never raw integers."
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {ORDER.map((k) => (
          <div
            key={k}
            style={{
              display: "grid",
              gridTemplateColumns: "160px 80px 1fr",
              alignItems: "center",
              gap: 16,
              padding: "10px 0",
              borderBottom: "1px solid var(--divider)"
            }}
          >
            <div style={{ font: "var(--fw-semibold) 14px var(--font-sans)" }}>
              --z-{k}
            </div>
            <div style={mono}>{zIndex[k]}</div>
            <div style={{ font: "var(--fw-medium) 13px var(--font-sans)", color: "var(--text-tertiary)" }}>
              {NOTES[k]}
            </div>
          </div>
        ))}
      </div>
    </Page>
  )
};

export const StackingDemo: StoryObj = {
  parameters: { layout: "padded" },
  render: () => (
    <Page
      title="Stacking demo"
      intro="Three surfaces using different layers — note how the higher layer always wins regardless of source order."
    >
      <div style={{ position: "relative", height: 280, background: "var(--surface-subtle)", borderRadius: "var(--radius-16)" }}>
        <div
          style={{
            position: "absolute",
            top: 24,
            left: 24,
            width: 160,
            height: 96,
            background: "var(--vamos-brand-pink)",
            color: "var(--text-on-inverse-primary)",
            borderRadius: "var(--radius-16)",
            padding: 16,
            zIndex: zIndex.raised,
            font: "var(--fw-semibold) 14px var(--font-sans)"
          }}
        >
          raised<br />
          <span style={mono}>z-index {zIndex.raised}</span>
        </div>
        <div
          style={{
            position: "absolute",
            top: 64,
            left: 88,
            width: 160,
            height: 96,
            background: "var(--vamos-brand-purple)",
            color: "var(--text-on-inverse-primary)",
            borderRadius: "var(--radius-16)",
            padding: 16,
            zIndex: zIndex.popover,
            font: "var(--fw-semibold) 14px var(--font-sans)"
          }}
        >
          popover<br />
          <span style={mono}>z-index {zIndex.popover}</span>
        </div>
        <div
          style={{
            position: "absolute",
            top: 104,
            left: 152,
            width: 160,
            height: 96,
            background: "var(--vamos-brand-blue)",
            color: "var(--text-on-inverse-primary)",
            borderRadius: "var(--radius-16)",
            padding: 16,
            zIndex: zIndex.modal,
            font: "var(--fw-semibold) 14px var(--font-sans)"
          }}
        >
          modal<br />
          <span style={mono}>z-index {zIndex.modal}</span>
        </div>
      </div>
    </Page>
  )
};
