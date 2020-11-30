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
    // Page
    backgroundLighter: tokens.colors.neutrals[0],
    backgroundLight: tokens.colors.neutrals[10],
    background: tokens.colors.neutrals[20],
    backgroundDark: tokens.colors.neutrals[30],
    backgroundDarker: tokens.colors.neutrals[40],
    // Typography
    text: tokens.colors.neutrals[800],
    textInverse: tokens.colors.neutrals[10],
    // Borders
    borderColor: tokens.colors.neutrals[40],
    // Brand
    primaryLighter: tokens.colors.blue[75],
    primaryLight: tokens.colors.blue[100],
    primary: tokens.colors.blue[300],
    primaryDark: tokens.colors.blue[400],
    primaryDarker: tokens.colors.blue[500],
  },
  shadows: tokens.shadows,
  gradients: tokens.gradients,

  // layout
  space: tokens.space,
  sizes: tokens.size,
  maxWidth: "1280px",

  // borders
  borderWidths: tokens.borderWidths,
  borderStyles: tokens.borderStyles,
  radii: tokens.radii,

  // transitions
  transitions: tokens.transitions,
};
