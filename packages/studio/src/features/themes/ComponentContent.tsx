import { ThemeProvider } from "@xstyled/styled-components";
import { Box, Heading, Text } from "components";
import { useTokens } from "features/tokens/tokensSlice";
import { useThemes } from "features/themes/themesSlice";
import { useEditorParams } from "features/editor/editorHooks";
import { parseTheme } from "./themeHelper";

export const ComponentContent: React.FC = () => {
  const { state: tokensState } = useTokens();
  const { state: themesState } = useThemes();
  const { componentKey } = useEditorParams();
  const themeComponents = themesState.currentTheme.components;

  const theme = parseTheme(tokensState, themeComponents);
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
      <Heading as="h1">Typography</Heading>
      <Box>
        <Heading as="h2">Variants</Heading>
        <ThemeProvider theme={theme}>
          {variants.map((variantKey: any) => (
            <Text key={variantKey} variant={variantKey}>
              You know nothing, Jon Snow
            </Text>
          ))}
        </ThemeProvider>
      </Box>
    </Box>
  );
};
