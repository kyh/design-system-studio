import { ThemeProvider } from "@xstyled/styled-components";
import { Box, Text } from "components/library";
import { themesActions } from "features/themes/themesSlice";
import { parseTheme } from "./themeHelper";

export const ComponentContent = ({
  componentKey,
  tokens,
  themeComponents,
  dispatch,
}: any) => {
  const theme = parseTheme(tokens, themeComponents);
  switch (componentKey) {
    case themeComponents.text.key:
      return (
        <TextContent
          variants={Object.keys(themeComponents.text.variants)}
          theme={theme}
        />
      );
    default:
      return null;
  }
};

const TextContent = ({ theme, variants }: any) => {
  return (
    <Box>
      <Text variant="heading" as="h1">
        Typography
      </Text>
      <Box>
        <Text variant="heading" as="h2">
          Variants
        </Text>
        <ThemeProvider theme={theme}>
          {variants.map((variantKey: string) => (
            <Text key={variantKey} variant={variantKey}>
              You know nothing, Jon Snow
            </Text>
          ))}
        </ThemeProvider>
      </Box>
    </Box>
  );
};
