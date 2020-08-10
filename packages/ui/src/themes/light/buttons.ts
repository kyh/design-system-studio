import * as tokens from "./tokens";

export const buttons = {
  stateTypes: ["hover", "active", "focus", "disabled", "loading"],
  variantTypes: ["basic", "primary"],
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
      "&.loading, &:loading": {
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
      "&.loading, &:loading": {
        backgroundColor: tokens.palette.blue[75],
        borderColor: tokens.palette.blue[100],
        cursor: "not-allowed",
      },
    },
  },
};
