import React from "react";
import { ThemeProvider, Box, Heading, Text } from "@dss/proto";
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
    case themeComponents.heading.key:
      return (
        <HeadingContent
          variants={Object.keys(themeComponents.heading.variants)}
          theme={theme}
        />
      );
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

const HeadingContent = ({ theme, variants }: any) => {
  return (
    <Box>
      <Box>
        <Heading>Typography - Heading</Heading>
      </Box>
      <Box>
        <Heading>Variants</Heading>
        <ThemeProvider theme={theme}>
          {variants.map((variantKey: string) => (
            <Heading key={variantKey} variant={variantKey}>
              You know nothing, Jon Snow
            </Heading>
          ))}
        </ThemeProvider>
      </Box>
    </Box>
  );
};

const TextContent = ({ theme, variants }: any) => {
  return (
    <Box>
      <Box>
        <Heading>Typography - Text</Heading>
      </Box>
      <Box>
        <Heading>Variants</Heading>
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
