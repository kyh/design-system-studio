import { tokens } from "../tokens";

export const theme = {
  // typography
  fonts: tokens.fonts,
  fontSizes: tokens.fontSizes,
  fontWeights: tokens.fontWeights,
  lineHeights: tokens.lineHeights,
  letterSpacings: tokens.letterSpacings,

  // skins
  colors: {
    palette: tokens.palette,
    page: {
      background: tokens.palette.neutrals["10"],
      color: tokens.palette.neutrals["800"],
      colorInverse: tokens.palette.neutrals["10"],
    },
  },
  shadows: tokens.shadows,

  // layout
  space: tokens.space,
  sizes: tokens.sizes,

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
      color: tokens.palette.neutrals["800"],
    },
    variants: {},
  },
  heading: {
    base: {
      fontSize: tokens.fontSizes.heading,
      fontFamily: tokens.fonts.heading,
      fontWeight: tokens.fontWeights.medium,
      color: tokens.palette.neutrals["800"],
    },
    variants: {},
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
      paddingTop: tokens.space[2],
      paddingBottom: tokens.space[2],
      paddingLeft: tokens.space[3],
      paddingRight: tokens.space[3],
    },
    sizes: {},
    variants: {
      basic: {
        color: tokens.palette.neutrals[800],
        backgroundColor: tokens.gradients.base,
        borderColor: tokens.palette.neutrals[40],
        "&.hover, &:hover": {
          backgroundColor: tokens.palette.neutrals[20],
          borderColor: tokens.palette.neutrals[40],
        },
        "&.active, &:active": {
          backgroundColor: tokens.palette.neutrals[20],
          borderColor: tokens.palette.neutrals[50],
        },
        "&.focus, &:focus": {
          backgroundColor: tokens.gradients.base,
          borderColor: tokens.palette.blue[300],
        },
        "&.disabled, &:disabled": {
          backgroundColor: tokens.gradients.light,
          borderColor: tokens.palette.neutrals[40],
          cursor: "not-allowed",
        },
      },
      primary: {
        color: tokens.palette.neutrals[10],
        backgroundColor: tokens.palette.blue[300],
        borderColor: tokens.palette.blue[400],
        "&.hover, &:hover": {
          backgroundColor: tokens.palette.blue[400],
          borderColor: tokens.palette.blue[500],
        },
        "&.active, &:active": {
          backgroundColor: tokens.palette.blue[500],
          borderColor: tokens.palette.blue[500],
        },
        "&.focus, &:focus": {
          backgroundColor: tokens.palette.blue[300],
          borderColor: tokens.palette.blue[500],
        },
        "&.disabled, &:disabled": {
          backgroundColor: tokens.palette.blue[75],
          borderColor: tokens.palette.blue[100],
          cursor: "not-allowed",
        },
      },
    },
  },
};
