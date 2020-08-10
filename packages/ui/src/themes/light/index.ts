import * as tokens from "./tokens";

// Components
import { buttons } from "./buttons";

/**
 * Theme specific overrides
 */
export const light = {
  ...tokens,
  components: {
    buttons,
  },
};
