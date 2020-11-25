import "styled-components";
import { ThemeInterface } from "./index";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeInterface {}
}
