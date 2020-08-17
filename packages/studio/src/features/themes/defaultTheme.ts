import { defaultTokensState as tokens } from "features/tokens/defaultTokens";

export const defaultThemeState = {
  name: "Default Theme",
  components: {
    text: {
      base: {
        fontFamily: tokens.fonts.values.body,
        fontSize: tokens.fontSizes.values.body,
        fontWeight: tokens.fontWeights.values.regular,
        color: tokens.colors.values.neutrals["800"],
      },
      variants: {},
    },
    heading: {
      base: {
        fontSize: tokens.fontSizes.values.heading,
        fontFamily: tokens.fonts.values.heading,
        fontWeight: tokens.fontWeights.values.medium,
        color: tokens.colors.values.neutrals["800"],
      },
      variants: {},
    },
  },
};
