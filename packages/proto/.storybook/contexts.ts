import { ThemeProvider } from "styled-components";
import { themes } from "../src/themes";

const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const params = Object.keys(themes).map((themeName, i) => ({
  name: capitalize(themeName),
  props: { theme: themes[themeName] },
  default: i === 0,
}));

export const contexts = [
  {
    icon: "box",
    title: "Themes",
    components: [ThemeProvider],
    params: params,
    options: {
      deep: true,
      disable: false,
      cancelable: false,
    },
  },
];
