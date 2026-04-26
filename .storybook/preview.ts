import type { Preview } from "@storybook/react";
import "../src/tokens/tokens.css";

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "surface-canvas",
      values: [
        { name: "surface-canvas",  value: "#FFFFFF" },
        { name: "surface-subtle",  value: "#FAFAFA" },
        { name: "surface-default", value: "#F5F5F5" },
        { name: "surface-strong",  value: "#E7E5E4" },
        { name: "surface-warm",    value: "#FFEED2" },
        { name: "surface-inverse", value: "#1F1F1F" }
      ]
    },
    options: {
      storySort: {
        order: [
          "Introduction",
          "Foundations",
          ["Colors", "Typography", "Spacing", "Radius", "Shadows"],
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
