import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "../components/avatar";
import type { AvatarColor, AvatarSize, AvatarStatus } from "../components/avatar";
import avatar from "./assets/avatar.png";

const ALL_SIZES: AvatarSize[] = ["xs", "sm", "md", "lg", "xl", "2xl"];
const ALL_COLORS: AvatarColor[] = ["neutral", "blue", "green", "purple", "pink", "grey", "lightblue"];
const ALL_STATUS: AvatarStatus[] = ["online", "offline", "busy", "away"];

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: { layout: "centered" },
  argTypes: {
    src:    { control: "text" },
    alt:    { control: "text" },
    name:   { control: "text" },
    size:   { control: "select", options: ALL_SIZES },
    shape:  { control: "inline-radio", options: ["circle", "square"] },
    color:  { control: "select", options: ALL_COLORS },
    status: { control: "select", options: [undefined, ...ALL_STATUS] },
    fallbackIcon: { control: "text" }
  },
  args: {
    name: "Ana Paula",
    size: "md",
    shape: "circle",
    color: "neutral"
  }
};
export default meta;

type Story = StoryObj<typeof Avatar>;

export const Playground: Story = {};

export const Image: Story = {
  render: () => <Avatar src={avatar} name="Ana Paula" size="lg" />
};

export const Initials: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
      <Avatar name="Ana Paula" />
      <Avatar name="João Santos" color="blue" />
      <Avatar name="Maria" color="green" />
      <Avatar name="Carlos Oliveira Lima" color="purple" />
      <Avatar name="Faya" color="pink" />
    </div>
  )
};

export const FallbackIcon: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
      <Avatar fallbackIcon="person" />
      <Avatar fallbackIcon="storefront" color="grey" />
      <Avatar fallbackIcon="sports_tennis" color="green" />
    </div>
  )
};

export const Sizes: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
      {ALL_SIZES.map((s) => (
        <div key={s} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <Avatar src={avatar} name="Ana Paula" size={s} />
          <span style={{ font: "var(--fw-semibold) 12px var(--font-sans)", color: "var(--text-tertiary)", textTransform: "uppercase" }}>
            {s}
          </span>
        </div>
      ))}
    </div>
  )
};

export const InitialsAcrossSizes: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
      {ALL_SIZES.map((s) => (
        <Avatar key={s} name="Ana Paula" size={s} color="blue" />
      ))}
    </div>
  )
};

export const Shapes: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", gap: 16 }}>
      <Avatar src={avatar} name="Ana Paula" size="lg" shape="circle" />
      <Avatar src={avatar} name="Ana Paula" size="lg" shape="square" />
      <Avatar name="JP" size="lg" shape="circle" color="blue" />
      <Avatar name="JP" size="lg" shape="square" color="blue" />
    </div>
  )
};

export const BrandColors: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
      {ALL_COLORS.map((c) => (
        <div key={c} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <Avatar name="Ana Paula" color={c} size="lg" />
          <span style={{ font: "var(--fw-semibold) 12px var(--font-sans)", color: "var(--text-tertiary)" }}>{c}</span>
        </div>
      ))}
    </div>
  )
};

export const WithStatus: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", gap: 16 }}>
      {ALL_STATUS.map((s) => (
        <div key={s} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <Avatar src={avatar} name="Ana Paula" size="lg" status={s} />
          <span style={{ font: "var(--fw-semibold) 12px var(--font-sans)", color: "var(--text-tertiary)" }}>{s}</span>
        </div>
      ))}
    </div>
  )
};

export const ImageError: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", gap: 16 }}>
      <Avatar
        src="https://invalid.example/missing.png"
        name="Ana Paula"
        size="lg"
        color="blue"
      />
      <Avatar
        src="https://invalid.example/missing.png"
        size="lg"
        fallbackIcon="person"
      />
    </div>
  )
};
