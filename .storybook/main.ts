import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(ts|tsx)"
  ],
  addons: ["@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  staticDirs: ["../src/fonts"],
  typescript: {
    check: false,
    reactDocgen: "react-docgen-typescript"
  },
  // Use relative asset URLs so the build works under any GitHub Pages
  // subpath (e.g. /vamos-ds/) without a hardcoded base.
  viteFinal: async (cfg) => {
    cfg.base = "./";
    return cfg;
  }
};

export default config;
