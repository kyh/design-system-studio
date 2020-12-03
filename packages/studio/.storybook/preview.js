import { ThemeProvider } from "@xstyled/styled-components";
import { GlobalStyle } from "app/globalStyles";
import { themes } from "app/themes";

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={themes[context.globals.theme]}>
      <GlobalStyle />
      <Story {...context} />
    </ThemeProvider>
  );
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: ["light", "dark"],
    },
  },
};

export const decorators = [withThemeProvider];
