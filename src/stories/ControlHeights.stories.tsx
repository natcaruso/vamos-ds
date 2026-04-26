import type { Meta, StoryObj } from "@storybook/react";
import { controlHeight } from "../tokens/controlHeight";
import { Button } from "../components/buttons";
import { IconButton } from "../components/iconButton";
import { Page, Section, mono } from "./_chrome";

const meta: Meta = {
  title: "Foundations/Control heights"
};
export default meta;

const ROW_ORDER: (keyof typeof controlHeight)[] = ["3xl", "2xl", "xl", "md", "sm"];

const SIZE_NOTES: Record<keyof typeof controlHeight, string> = {
  "3xl": "Hero CTA. Reserved for the primary moment on a screen.",
  "2xl": "Default for full-width primary actions in mobile flows.",
  xl:    "Inline / form actions. Standard list-row CTA.",
  md:    "Compact actions inside dense layouts.",
  sm:    "Chip-density actions and tertiary controls."
};

export const Scale: StoryObj = {
  render: () => (
    <Page
      title="Control heights"
      intro="One height scale shared by every interactive control. Same size name = same dimension across Button, IconButton, and any future Input / Select. Bound at the semantic layer to --control-h-* (and 1:1 to the --space-* spacing scale)."
    >
      <Section title="Token scale">
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {ROW_ORDER.map((s) => (
            <div
              key={s}
              style={{
                display: "grid",
                gridTemplateColumns: "120px 80px 1fr",
                alignItems: "center",
                gap: 16,
                padding: "8px 0",
                borderBottom: "1px solid var(--divider)"
              }}
            >
              <div style={{ font: "var(--fw-semibold) 14px var(--font-sans)" }}>
                --control-h-{s}
              </div>
              <div style={mono}>{controlHeight[s]}</div>
              <div
                style={{
                  background: "var(--vamos-brand-blue)",
                  height: controlHeight[s],
                  borderRadius: "var(--radius-full)"
                }}
              />
            </div>
          ))}
        </div>
      </Section>

      <Section title="Button — every size">
        <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
          {ROW_ORDER.map((s) => (
            <div key={s} style={{ display: "flex", gap: 16, alignItems: "center" }}>
              <span style={{ ...mono, width: 80 }}>{s}</span>
              <Button variant="blue" size={s}>Fazer check-in</Button>
              <span style={{ font: "var(--fw-medium) 13px var(--font-sans)", color: "var(--text-tertiary)" }}>
                {SIZE_NOTES[s]}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="IconButton — every size">
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          {ROW_ORDER.map((s) => (
            <div key={s} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <IconButton iconName="package_2" variant="blue" size={s} aria-label={`Pacote ${s}`} />
              <span style={{ ...mono }}>{s}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Mixed alignment">
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {ROW_ORDER.map((s) => (
            <div key={s} style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <Button variant="blue" size={s}>Action</Button>
              <Button variant="outline" size={s}>Secondary</Button>
              <IconButton iconName="package_2" variant="ghost" size={s} aria-label={`Pacote ${s}`} />
              <span style={{ ...mono }}>{s} · {controlHeight[s]}</span>
            </div>
          ))}
        </div>
      </Section>
    </Page>
  )
};
