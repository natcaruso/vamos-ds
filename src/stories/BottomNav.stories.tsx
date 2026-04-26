import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { BottomNav } from "../components/bottomNav";
import type { BottomNavItem } from "../components/bottomNav";
import avatar from "./assets/avatar.png";

const ITEMS: BottomNavItem[] = [
  { id: "home",    label: "Início",   iconName: "home" },
  { id: "agenda",  label: "Agenda",   iconName: "calendar_month" },
  { id: "explore", label: "Explorar", iconName: "search" },
  { id: "profile", label: "Perfil",   avatarSrc: avatar, avatarAlt: "Ana Paula" }
];

const meta: Meta<typeof BottomNav> = {
  title: "Components/Bottom navigation",
  component: BottomNav,
  parameters: { layout: "centered" }
};
export default meta;

type Story = StoryObj<typeof BottomNav>;

export const Default: Story = {
  render: () => {
    const [active, setActive] = useState("home");
    return (
      <BottomNav
        items={ITEMS}
        activeId={active}
        onSelect={setActive}
      />
    );
  }
};

export const NoActive: Story = {
  render: () => <BottomNav items={ITEMS} />
};

export const ProfileActive: Story = {
  render: () => {
    const [active, setActive] = useState("profile");
    return <BottomNav items={ITEMS} activeId={active} onSelect={setActive} />;
  }
};

export const InMobileFrame: Story = {
  parameters: { layout: "padded" },
  render: () => {
    const [active, setActive] = useState("home");
    return (
      <div
        style={{
          width: 390,
          height: 720,
          background: "var(--surface-canvas)",
          borderRadius: "var(--radius-32)",
          border: "1px solid var(--border-subtle)",
          overflow: "hidden",
          position: "relative",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          padding: "0 0 24px"
        }}
      >
        <div style={{ position: "absolute", inset: 0, padding: 24, color: "var(--text-tertiary)", font: "var(--fw-medium) 14px var(--font-sans)" }}>
          Conteúdo da tela…
        </div>
        <BottomNav items={ITEMS} activeId={active} onSelect={setActive} />
      </div>
    );
  }
};
