import { merge } from "lodash";
import { tokens } from "./tokens";

export const lightTheme = {
  // typography
  fonts: tokens.fonts,
  fontSizes: tokens.fontSizes,
  fontWeights: tokens.fontWeights,
  lineHeights: tokens.lineHeights,
  letterSpacings: tokens.letterSpacings,

  // skins
  colors: {
    // Page
    pageBackground: tokens.colors.neutrals[0],
    // Light neutrals
    backgroundLighter: tokens.colors.neutrals[0],
    backgroundLight: tokens.colors.neutrals[10],
    background: tokens.colors.neutrals[20],
    backgroundDark: tokens.colors.neutrals[30],
    backgroundDarker: tokens.colors.neutrals[40],
    // Dark neutrals
    backgroundInverseLighter: tokens.colors.neutrals[200],
    backgroundInverseLight: tokens.colors.neutrals[300],
    backgroundInverse: tokens.colors.neutrals[500],
    backgroundInverseDark: tokens.colors.neutrals[700],
    backgroundInverseDarker: tokens.colors.neutrals[900],
    // Typography
    textDarker: tokens.colors.neutrals[900],
    text: tokens.colors.neutrals[800],
    textLighter: tokens.colors.neutrals[100],
    textInverse: tokens.colors.neutrals[10],
    // Borders
    borderColor: tokens.colors.neutrals[40],
    // Brand
    primaryBackground: tokens.colors.blue[50],
    primaryLighter: tokens.colors.blue[75],
    primaryLight: tokens.colors.blue[100],
    primary: tokens.colors.blue[300],
    primaryDark: tokens.colors.blue[400],
    primaryDarker: tokens.colors.blue[500],

    warningBackground: tokens.colors.yellow[50],
    warningLighter: tokens.colors.yellow[75],
    warningLight: tokens.colors.yellow[100],
    warning: tokens.colors.yellow[300],
    warningDark: tokens.colors.yellow[400],
    warningDarker: tokens.colors.yellow[500],

    errorBackground: tokens.colors.red[50],
    errorLighter: tokens.colors.red[75],
    errorLight: tokens.colors.red[100],
    error: tokens.colors.red[300],
    errorDark: tokens.colors.red[400],
    errorDarker: tokens.colors.red[500],

    successBackground: tokens.colors.green[50],
    successLighter: tokens.colors.green[75],
    successLight: tokens.colors.green[100],
    success: tokens.colors.green[300],
    successDark: tokens.colors.green[400],
    successDarker: tokens.colors.green[500],

    infoBackground: tokens.colors.purple[50],
    infoLighter: tokens.colors.purple[75],
    infoLight: tokens.colors.purple[100],
    info: tokens.colors.purple[300],
    infoDark: tokens.colors.purple[400],
    infoDarker: tokens.colors.purple[500],
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

export const darkTheme = merge({}, lightTheme, {
  // skins
  colors: {
    // Page
    pageBackground: tokens.colors.neutrals[800],
    backgroundLight: tokens.colors.neutrals[700],
    background: tokens.colors.neutrals[800],
    backgroundDark: tokens.colors.neutrals[900],
    // Typography
    text: tokens.colors.neutrals[10],
    textInverse: tokens.colors.neutrals[800],
    // Borders
    borderColor: tokens.colors.neutrals[80],
  },
});

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export type ThemeInterface = typeof lightTheme;
export type Themes = keyof typeof themes;
