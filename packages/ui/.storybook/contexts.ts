import { ThemeProvider } from "styled-components";
import { themes } from "../src/themes";

export const contexts = [
  {
    icon: "box",
    title: "Themes",
    components: [ThemeProvider],
    params: [
      { name: "Light Theme", props: { theme: themes.light }, default: true },
      { name: "Dark Theme", props: { theme: themes.dark } },
    ],
    options: {
      deep: true,
      disable: false,
      cancelable: false,
    },
  },
];
