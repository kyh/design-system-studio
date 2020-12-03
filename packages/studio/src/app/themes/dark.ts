import { merge } from "lodash";
import { tokens } from "@dsstudio/tokens";
import { theme as light } from "./light";

export const theme = merge({}, light, {
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
