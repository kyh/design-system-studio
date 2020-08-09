// Overwrite default styles
import { ui as defaultUI, brand } from "../tokens";
export * from "../tokens";

export const ui = {
  ...defaultUI,
  background: brand.neutrals["10"],
  color: brand.neutrals["800"],
  colorInverse: brand.neutrals["10"],
  focusColor: brand.blue["300"],
};
