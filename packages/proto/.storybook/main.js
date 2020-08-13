const path = require("path");

module.exports = {
  stories: [
    "../docs/**/*.stories.@(js|tsx|mdx)",
    "../src/**/*.stories.@(js|tsx|mdx)",
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
  webpack: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("ts-loader"),
          options: {
            transpileOnly: true,
          },
        },
        {
          loader: require.resolve("react-docgen-typescript-loader"),
          options: {
            propFilter: (prop) => {
              if (prop.parent) {
                return (
                  !prop.parent.fileName.includes("react") &&
                  !prop.parent.fileName.includes("styled-components")
                );
              }

              return true;
            },
          },
        },
      ],
    });
    config.resolve.extensions.push(".ts", ".tsx");
    config.resolve.modules = [
      path.resolve(__dirname, "..", "src"),
      "node_modules",
    ];

    return config;
  },
};
