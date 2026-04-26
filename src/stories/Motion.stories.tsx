import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { motionDuration, motionEasing } from "../tokens/motion";
import { Page, Section, mono } from "./_chrome";

const meta: Meta = {
  title: "Foundations/Motion"
};
export default meta;

const DURATION_ORDER: (keyof typeof motionDuration)[] = ["instant", "fast", "base", "slow"];
const EASING_ORDER: (keyof typeof motionEasing)[] = ["standard", "quiet", "accelerate", "decelerate"];

const DURATION_NOTES: Record<keyof typeof motionDuration, string> = {
  instant: "State flips that should feel non-existent (toggle, focus).",
  fast:    "Default UI transition — hover, pressed, color shifts.",
  base:    "Larger surface changes — surface enter/exit.",
  slow:    "Heavy choreography — page transitions, bottom sheets."
};

const EASING_NOTES: Record<keyof typeof motionEasing, string> = {
  standard:   "Symmetric in/out — default for hover and color.",
  quiet:      "Calm acceleration — brand-preferred for surface motion.",
  accelerate: "Object exiting — fast at start, slow at end.",
  decelerate: "Object entering — slow at start, fast at end."
};

function PlayBox({
  duration,
  easing,
  trigger
}: {
  duration: string;
  easing: string;
  trigger: number;
}) {
  return (
    <div
      style={{
        position: "relative",
        background: "var(--surface-default)",
        borderRadius: "var(--radius-16)",
        height: 56,
        overflow: "hidden"
      }}
    >
      <div
        key={trigger}
        style={{
          position: "absolute",
          top: 8,
          left: trigger ? "calc(100% - 48px)" : 8,
          width: 40,
          height: 40,
          background: "var(--vamos-brand-blue)",
          borderRadius: "var(--radius-full)",
          transition: `left ${duration} ${easing}`
        }}
      />
    </div>
  );
}

export const Durations: StoryObj = {
  render: () => {
    const [tick, setTick] = useState(0);
    return (
      <Page
        title="Durations"
        intro="Four-step duration scale. The slider on the right plays the value against a sample easing — click 'Play' to fire all of them at once."
      >
        <button
          type="button"
          onClick={() => setTick((t) => t + 1)}
          style={{
            font: "var(--fw-bold) var(--fs-body-sm)/1 var(--font-sans)",
            background: "var(--vamos-brand-blue)",
            color: "var(--text-on-inverse-primary)",
            border: 0,
            borderRadius: "var(--radius-full)",
            padding: "8px 16px",
            cursor: "pointer",
            marginBottom: 16
          }}
        >
          ▶ Play
        </button>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {DURATION_ORDER.map((k) => (
            <div
              key={k}
              style={{
                display: "grid",
                gridTemplateColumns: "180px 80px 1fr 1fr",
                alignItems: "center",
                gap: 16
              }}
            >
              <div style={{ font: "var(--fw-semibold) 14px var(--font-sans)" }}>
                --motion-duration-{k}
              </div>
              <div style={mono}>{motionDuration[k]}</div>
              <div style={{ font: "var(--fw-medium) 13px var(--font-sans)", color: "var(--text-tertiary)" }}>
                {DURATION_NOTES[k]}
              </div>
              <PlayBox duration={motionDuration[k]} easing={motionEasing.standard} trigger={tick % 2} />
            </div>
          ))}
        </div>
      </Page>
    );
  }
};

export const Easings: StoryObj = {
  render: () => {
    const [tick, setTick] = useState(0);
    return (
      <Page
        title="Easings"
        intro="Four bezier curves. Standard is the default for color / hover; quiet for surface motion; accelerate for exits; decelerate for entrances."
      >
        <button
          type="button"
          onClick={() => setTick((t) => t + 1)}
          style={{
            font: "var(--fw-bold) var(--fs-body-sm)/1 var(--font-sans)",
            background: "var(--vamos-brand-blue)",
            color: "var(--text-on-inverse-primary)",
            border: 0,
            borderRadius: "var(--radius-full)",
            padding: "8px 16px",
            cursor: "pointer",
            marginBottom: 16
          }}
        >
          ▶ Play
        </button>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {EASING_ORDER.map((k) => (
            <div
              key={k}
              style={{
                display: "grid",
                gridTemplateColumns: "200px 1fr 1fr",
                alignItems: "center",
                gap: 16
              }}
            >
              <div>
                <div style={{ font: "var(--fw-semibold) 14px var(--font-sans)" }}>
                  --motion-easing-{k}
                </div>
                <div style={mono}>{motionEasing[k]}</div>
              </div>
              <div style={{ font: "var(--fw-medium) 13px var(--font-sans)", color: "var(--text-tertiary)" }}>
                {EASING_NOTES[k]}
              </div>
              <PlayBox duration={motionDuration.slow} easing={motionEasing[k]} trigger={tick % 2} />
            </div>
          ))}
        </div>
      </Page>
    );
  }
};

export const Recipes: StoryObj = {
  render: () => (
    <Page
      title="Recipes"
      intro="Common combinations. Reach for these in component CSS instead of hand-picking durations and easings every time."
    >
      <Section title="Default UI transition (hover, color, pressed)">
        <code style={{ ...mono, fontSize: 13 }}>
          transition: var(--motion-duration-fast) var(--motion-easing-standard);
        </code>
      </Section>
      <Section title="Surface enter (sheet, modal)">
        <code style={{ ...mono, fontSize: 13 }}>
          transition: var(--motion-duration-base) var(--motion-easing-decelerate);
        </code>
      </Section>
      <Section title="Surface exit">
        <code style={{ ...mono, fontSize: 13 }}>
          transition: var(--motion-duration-fast) var(--motion-easing-accelerate);
        </code>
      </Section>
    </Page>
  )
};
