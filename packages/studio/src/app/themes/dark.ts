import { merge } from "lodash";
import { tokens } from "@dsstudio/tokens";
import { theme as light } from "./light";

export const theme = merge({}, light, {
  // skins
  colors: {
    backgroundLight: tokens.colors.neutrals[700],
    background: tokens.colors.neutrals[800],
    backgroundDark: tokens.colors.neutrals[900],
    text: tokens.colors.neutrals[10],
    textInverse: tokens.colors.neutrals[800],
    borderColor: tokens.colors.neutrals[40],
  },
  // components
  text: {
    base: {
      color: tokens.colors.neutrals[10],
    },
    variants: {
      heading: {
        color: tokens.colors.neutrals[10],
      },
    },
  },
  buttons: {
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
});
