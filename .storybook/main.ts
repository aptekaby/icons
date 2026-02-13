import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: ["@storybook/addon-docs"],
  framework: {
    name: "@storybook/react-native-web-vite",
    options: {},
  },
  viteFinal: async (config) => {
    return {
      ...config,
      define: {
        ...config.define,
        __dirname: JSON.stringify(process.cwd()),
      },
      //
    };
  },
};

export default config;
