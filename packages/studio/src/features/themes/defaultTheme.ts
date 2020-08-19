export const defaultThemeState = {
  name: "Default Theme",
  components: {
    text: {
      name: "Typography",
      key: "text",
      base: {
        fontFamily: "fonts.values.body",
        fontSize: "fontSizes.values.body",
        fontWeight: "fontWeights.values.regular",
        color: "colors.values.neutrals.800",
      },
      variants: {
        displayXLarge: {
          fontSize: "fontSizes.values.displayXLarge",
          fontWeight: "fontWeights.values.medium",
        },
        displayLarge: {
          fontSize: "fontSizes.values.displayLarge",
          fontWeight: "fontWeights.values.medium",
        },
        displayMedium: {
          fontSize: "fontSizes.values.displayMedium",
          fontWeight: "fontWeights.values.medium",
        },
        displaySmall: {
          fontSize: "fontSizes.values.displaySmall",
          fontWeight: "fontWeights.values.medium",
        },
        heading: {
          fontFamily: "fonts.values.heading",
          fontWeight: "fontWeights.values.medium",
        },
      },
    },
  },
};
