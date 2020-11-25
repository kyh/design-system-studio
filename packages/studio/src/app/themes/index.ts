import { theme as light } from "./light";
import { theme as dark } from "./dark";

export const themes = {
  light,
  dark,
};

export type ThemeInterface = typeof light;
export type Themes = keyof typeof themes;
