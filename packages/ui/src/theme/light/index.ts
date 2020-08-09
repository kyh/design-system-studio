import * as tokens from "../tokens";

/**
 * Theme specific overrides
 */
export const light = {
  ...tokens,
  colors: {
    default: {
      background: tokens.palette.neutrals["10"],
      light: tokens.palette.neutrals["20"],
      base: tokens.palette.neutrals["40"],
      dark: tokens.palette.neutrals["50"],
      border: tokens.palette.neutrals["50"],
      gradients: {
        light: tokens.gradients.default.light,
        base: tokens.gradients.default.base,
      },
    },
    primary: {
      background: tokens.palette.blue["50"],
      light: tokens.palette.blue["75"],
      base: tokens.palette.blue["300"],
      dark: tokens.palette.blue["400"],
      border: tokens.palette.blue["500"],
    },
    attention: {
      background: tokens.palette.yellow["75"],
      light: tokens.palette.yellow["100"],
      base: tokens.palette.yellow["300"],
      dark: tokens.palette.yellow["400"],
      border: tokens.palette.yellow["500"],
    },
    important: {
      background: tokens.palette.red["50"],
      light: tokens.palette.red["75"],
      base: tokens.palette.red["400"],
      dark: tokens.palette.red["500"],
      border: tokens.palette.red["400"],
    },
    success: {
      background: tokens.palette.red["50"],
      light: tokens.palette.red["75"],
      base: tokens.palette.red["400"],
      dark: tokens.palette.red["500"],
      border: tokens.palette.red["400"],
    },
    new: {
      background: tokens.palette.purple["50"],
      light: tokens.palette.purple["75"],
      base: tokens.palette.purple["300"],
      dark: tokens.palette.purple["500"],
      border: tokens.palette.purple["400"],
    },
    page: {
      background: tokens.palette.neutrals["10"],
      color: tokens.palette.neutrals["800"],
      colorInverse: tokens.palette.neutrals["10"],
    },
  },
};
