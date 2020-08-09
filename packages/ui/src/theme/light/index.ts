import * as sharedTokens from "../shared-tokens";
import * as overrideTokens from "./override-tokens";

// Components
import { buttons } from "./component-config/buttons";

/**
 * Theme specific overrides
 */
export const light = {
  ...sharedTokens,
  ...overrideTokens,
  components: {
    buttons,
  },
};
