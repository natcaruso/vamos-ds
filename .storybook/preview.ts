import type { Preview } from "@storybook/react";
import "../src/tokens/tokens.css";

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "canvas-white",
      values: [
        { name: "canvas-white", value: "#FFFFFF" },
        { name: "canvas-subtle", value: "#FAFAFA" },
        { name: "canvas-soft", value: "#F5F5F5" },
        { name: "canvas-strong", value: "#E7E5E4" },
        { name: "canvas-warm", value: "#FFEED2" }
      ]
    },
    options: {
      storySort: {
        order: [
          "Introduction",
          "Foundations",
          ["Colors", "Typography", "Spacing", "Radii", "Shadows"],
          "Components"
        ]
      }
    },
    controls: {
      matchers: { color: /(background|color)$/i, date: /Date$/i }
    }
  }
};

export default preview;
