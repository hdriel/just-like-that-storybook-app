module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/__stories__/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-dark-mode",
    "@storybook/addon-storysource",
  ],
  framework: "@storybook/react",
  core: { builder: "@storybook/builder-webpack5" },
};
