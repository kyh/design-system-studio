import * as sharedTokens from "../shared-tokens";

// Overrides
import * as tokens from "./tokens";

// Components
import { buttons } from "./buttons";

/**
 * Theme specific overrides
 */
export const light = {
  ...sharedTokens,
  ...tokens,
  buttons,
};
