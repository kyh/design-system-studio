export const defaultThemeState = {
  name: "Default Theme",
  components: {
    heading: {
      name: "Typography - Heading",
      key: "heading",
      base: {
        fontSize: "fontSizes.values.heading",
        fontFamily: "fonts.values.heading",
        fontWeight: "fontWeights.values.medium",
        color: "colors.values.neutrals.800",
      },
      variants: {
        xLarge: {
          fontSize: "fontSizes.values.displayXLarge",
        },
        large: {
          fontSize: "fontSizes.values.displayLarge",
        },
        medium: {
          fontSize: "fontSizes.values.displayMedium",
        },
        small: {
          fontSize: "fontSizes.values.displaySmall",
        },
      },
    },
    text: {
      name: "Typography - Text",
      key: "text",
      base: {
        fontFamily: "fonts.values.body",
        fontSize: "fontSizes.values.body",
        fontWeight: "fontWeights.values.regular",
        color: "colors.values.neutrals.800",
      },
      variants: {},
    },
  },
};
