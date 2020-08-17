import React from "react";
import { ThemeProvider, Box, Heading, Text } from "@dss/proto";
import { themesActions } from "features/themes/themesSlice";

export const ComponentContent = ({
  componentKey,
  components,
  dispatch,
}: any) => {
  switch (componentKey) {
    case components.heading.key:
      return (
        <HeadingContent
          variants={Object.keys(components.heading.variants)}
          theme={components}
        />
      );
    case components.text.key:
      return (
        <TextContent
          variants={Object.keys(components.text.variants)}
          theme={components}
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
