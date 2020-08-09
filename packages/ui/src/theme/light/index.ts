import {
  fonts,
  fontSizes,
  lineHeights,
  fontWeights,
  letterSpacings,
  radii,
  borderWidths,
  borderStyles,
  shadows,
  space,
  sizes,
  breakpoints,
  colors,
} from "../shared-tokens";

// Overrides
import * as tokens from "./tokens";

// Components
import { buttons } from "./buttons";

/**
 * Theme specific overrides
 */
export const light = {
  fonts,
  fontSizes,
  lineHeights,
  fontWeights,
  letterSpacings,
  radii,
  borderWidths,
  borderStyles,
  shadows,
  space,
  sizes,
  breakpoints,
  colors,
  ...tokens,
  buttons,
};
