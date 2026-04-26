import type { CSSProperties, ReactNode } from "react";

const page: CSSProperties = {
  padding: "32px",
  fontFamily: "var(--font-sans)",
  color: "var(--color-text)",
  background: "var(--color-bg)"
};

const head: CSSProperties = {
  margin: 0,
  font: "var(--fw-bold) var(--fs-h2)/var(--lh-h2) var(--font-display)",
  letterSpacing: "-0.5px"
};

const sub: CSSProperties = {
  margin: "8px 0 24px",
  font: "var(--fw-regular) var(--fs-body)/var(--lh-body) var(--font-sans)",
  color: "var(--color-text-muted)",
  maxWidth: "720px"
};

const sectionH: CSSProperties = {
  margin: "32px 0 12px",
  font: "var(--fw-bold) var(--fs-h4)/var(--lh-h4) var(--font-sans)",
  letterSpacing: "-0.3px"
};

export function Page({
  title,
  intro,
  children
}: {
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <div style={page}>
      <h1 style={head}>{title}</h1>
      {intro && <p style={sub}>{intro}</p>}
      {children}
    </div>
  );
}

export function Section({
  title,
  children
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 style={sectionH}>{title}</h2>
      {children}
    </section>
  );
}

export const mono: CSSProperties = {
  fontFamily: "var(--font-mono, ui-monospace, monospace)",
  fontSize: "11px",
  color: "var(--color-text-muted)"
};
