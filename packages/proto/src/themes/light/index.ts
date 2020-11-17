import { tokens } from "@dsstudio/tokens";

export const theme = {
  // typography
  fonts: tokens.fonts,
  fontSizes: tokens.fontSizes,
  fontWeights: tokens.fontWeights,
  lineHeights: tokens.lineHeights,
  letterSpacings: tokens.letterSpacings,

  // skins
  colors: {
    colors: tokens.colors,
    page: {
      background: tokens.colors.neutrals[10],
      backgroundInverse: tokens.colors.neutrals[800],
      color: tokens.colors.neutrals[800],
      colorInverse: tokens.colors.neutrals[10],
      borderColor: tokens.colors.neutrals[40],
    },
  },
  shadows: tokens.shadows,

  // layout
  space: tokens.space,

  // borders
  borderWidths: tokens.borderWidths,
  borderStyles: tokens.borderStyles,
  radii: tokens.radii,

  // media queries
  breakpoints: tokens.breakpoints,

  // components
  text: {
    base: {
      fontFamily: tokens.fonts.body,
      fontSize: tokens.fontSizes.body,
      fontWeight: tokens.fontWeights.regular,
      color: tokens.colors.neutrals[800],
    },
    variants: {
      heading: {
        fontSize: tokens.fontSizes.heading,
        fontFamily: tokens.fonts.heading,
        fontWeight: tokens.fontWeights.medium,
        color: tokens.colors.neutrals[800],
      },
    },
  },
  buttons: {
    base: {
      // Fonts
      fontFamily: tokens.fonts.body,
      fontSize: tokens.fontSizes.body,
      lineHeight: tokens.lineHeights.body,
      fontWeight: tokens.fontWeights.regular,
      // Borders
      borderStyle: tokens.borderStyles.regular,
      borderTopLeftRadius: tokens.radii.regular,
      borderTopRightRadius: tokens.radii.regular,
      borderBottomLeftRadius: tokens.radii.regular,
      borderBottomRightRadius: tokens.radii.regular,
      borderTopWidth: tokens.borderWidths.regular,
      borderLeftWidth: tokens.borderWidths.regular,
      borderRightWidth: tokens.borderWidths.regular,
      borderBottomWidth: tokens.borderWidths.regular,
      // Spacing
      paddingTop: tokens.space.sm,
      paddingBottom: tokens.space.sm,
      paddingLeft: tokens.space.md,
      paddingRight: tokens.space.md,
    },
    sizes: {},
    variants: {
      basic: {
        color: tokens.colors.neutrals[800],
        backgroundColor: tokens.gradients.base,
        borderColor: tokens.colors.neutrals[40],
        "&.hover, &:hover": {
          backgroundColor: tokens.colors.neutrals[20],
          borderColor: tokens.colors.neutrals[40],
        },
        "&.active, &:active": {
          backgroundColor: tokens.colors.neutrals[20],
          borderColor: tokens.colors.neutrals[50],
        },
        "&.focus, &:focus": {
          backgroundColor: tokens.gradients.base,
          borderColor: tokens.colors.blue[300],
        },
        "&.disabled, &:disabled": {
          backgroundColor: tokens.gradients.light,
          borderColor: tokens.colors.neutrals[40],
          cursor: "not-allowed",
        },
      },
      primary: {
        color: tokens.colors.neutrals[10],
        backgroundColor: tokens.colors.blue[300],
        borderColor: tokens.colors.blue[400],
        "&.hover, &:hover": {
          backgroundColor: tokens.colors.blue[400],
          borderColor: tokens.colors.blue[500],
        },
        "&.active, &:active": {
          backgroundColor: tokens.colors.blue[500],
          borderColor: tokens.colors.blue[500],
        },
        "&.focus, &:focus": {
          backgroundColor: tokens.colors.blue[300],
          borderColor: tokens.colors.blue[500],
        },
        "&.disabled, &:disabled": {
          backgroundColor: tokens.colors.blue[75],
          borderColor: tokens.colors.blue[100],
          cursor: "not-allowed",
        },
      },
    },
  },
};
