module.exports = {
  stories: [
    "../docs/**/*.stories.(js|tsx|mdx)",
    "../src/**/*.stories.(js|tsx|mdx)",
  ],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-knobs/register",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-viewport/register",
    "@storybook/addon-contexts/register",
  ],
};
