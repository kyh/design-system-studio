import { defaultTokensState as tokens } from "features/tokens/defaultTokens";

export const defaultThemeState = {
  name: "Default Theme",
  components: {
    text: {
      name: "Typography - Text",
      key: "text",
      base: {
        fontFamily: tokens.fonts.values.body,
        fontSize: tokens.fontSizes.values.body,
        fontWeight: tokens.fontWeights.values.regular,
        color: tokens.colors.values.neutrals["800"],
      },
      variants: {},
    },
    heading: {
      name: "Typography - Heading",
      key: "heading",
      base: {
        fontSize: tokens.fontSizes.values.heading,
        // fontFamily: tokens.fonts.values.heading,
        fontWeight: tokens.fontWeights.values.medium,
        color: tokens.colors.values.neutrals["800"],
      },
      variants: {
        xLarge: {
          fontSize: tokens.fontSizes.values.displayXLarge,
        },
        large: {
          fontSize: tokens.fontSizes.values.displayLarge,
        },
        medium: {
          fontSize: tokens.fontSizes.values.displayMedium,
        },
        small: {
          fontSize: tokens.fontSizes.values.displaySmall,
        },
      },
    },
  },
};
