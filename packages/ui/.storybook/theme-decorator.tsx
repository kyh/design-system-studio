import React from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle, Box } from "../src";

const ThemeDecorator = (storyFn: any) => (
  <>
    <ThemeProvider theme={theme.light}>
      <GlobalStyle />
      <Box bg="ui.background" px={4} py={5} width="100%" height="100%" mb={4}>
        {storyFn({ id: (id) => "light-" + id })}
      </Box>
    </ThemeProvider>
    <ThemeProvider theme={theme.dark}>
      <GlobalStyle />
      <Box bg="ui.background" px={4} py={5} width="100%" height="100%">
        {storyFn({ id: (id) => "dark-" + id })}
      </Box>
    </ThemeProvider>
  </>
);

export default ThemeDecorator;
