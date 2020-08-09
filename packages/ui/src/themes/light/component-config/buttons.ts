import * as sharedTokens from "../../shared-tokens";

export const buttons = {
  stateTypes: ["hover", "active", "focus", "disabled", "loading"],
  variantTypes: ["basic", "primary"],
  base: {
    // Fonts
    fontFamily: sharedTokens.fonts.body,
    fontSize: sharedTokens.fontSizes.body,
    lineHeight: sharedTokens.lineHeights.body,
    fontWeight: sharedTokens.fontWeights.regular,
    // Borders
    borderStyle: sharedTokens.borderStyles.regular,
    borderTopLeftRadius: sharedTokens.radii.regular,
    borderTopRightRadius: sharedTokens.radii.regular,
    borderBottomLeftRadius: sharedTokens.radii.regular,
    borderBottomRightRadius: sharedTokens.radii.regular,
    borderTopWidth: sharedTokens.borderWidths.regular,
    borderLeftWidth: sharedTokens.borderWidths.regular,
    borderRightWidth: sharedTokens.borderWidths.regular,
    borderBottomWidth: sharedTokens.borderWidths.regular,
    // Spacing
    paddingTop: sharedTokens.space[2],
    paddingBottom: sharedTokens.space[2],
    paddingLeft: sharedTokens.space[3],
    paddingRight: sharedTokens.space[3],
  },
  variants: {
    basic: {
      color: sharedTokens.palette.neutrals[800],
      backgroundColor: `linear-gradient(180deg, ${sharedTokens.palette.neutrals[10]} 0%, ${sharedTokens.palette.neutrals[40]} 100%)`,
      borderColor: sharedTokens.palette.neutrals[40],
      "&.hover, &:hover": {
        backgroundColor: sharedTokens.palette.neutrals[20],
        borderColor: sharedTokens.palette.neutrals[40],
      },
      "&.active, &:active": {
        backgroundColor: sharedTokens.palette.neutrals[20],
        borderColor: sharedTokens.palette.neutrals[50],
      },
      "&.focus, &:focus": {
        backgroundColor: `linear-gradient(180deg, ${sharedTokens.palette.neutrals[10]} 0%, ${sharedTokens.palette.neutrals[40]} 100%)`,
        borderColor: sharedTokens.palette.blue[300],
      },
      "&.disabled, &:disabled": {
        backgroundColor: `linear-gradient(180deg, ${sharedTokens.palette.neutrals[10]} 0%, ${sharedTokens.palette.neutrals[20]} 100%)`,
        borderColor: sharedTokens.palette.neutrals[40],
        cursor: "not-allowed",
      },
      "&.loading, &:loading": {
        backgroundColor: `linear-gradient(180deg, ${sharedTokens.palette.neutrals[10]} 0%, ${sharedTokens.palette.neutrals[20]} 100%)`,
        borderColor: sharedTokens.palette.neutrals[40],
        cursor: "not-allowed",
      },
    },
    primary: {
      color: sharedTokens.palette.neutrals[10],
      backgroundColor: sharedTokens.palette.blue[300],
      borderColor: sharedTokens.palette.blue[400],
      "&.hover, &:hover": {
        backgroundColor: sharedTokens.palette.blue[400],
        borderColor: sharedTokens.palette.blue[500],
      },
      "&.active, &:active": {
        backgroundColor: sharedTokens.palette.blue[500],
        borderColor: sharedTokens.palette.blue[500],
      },
      "&.focus, &:focus": {
        backgroundColor: sharedTokens.palette.blue[300],
        borderColor: sharedTokens.palette.blue[500],
      },
      "&.disabled, &:disabled": {
        backgroundColor: sharedTokens.palette.blue[75],
        borderColor: sharedTokens.palette.blue[100],
        cursor: "not-allowed",
      },
      "&.loading, &:loading": {
        backgroundColor: sharedTokens.palette.blue[75],
        borderColor: sharedTokens.palette.blue[100],
        cursor: "not-allowed",
      },
    },
  },
};
