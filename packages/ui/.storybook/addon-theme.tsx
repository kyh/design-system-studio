import React from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle, Box } from "../src";

export const withTheme = (storyFn: any) => {
  const [firstTheme] = Object.keys(theme);
  return (
    <ThemeProvider theme={theme[firstTheme]}>
      <GlobalStyle />
      <Box mb={4}>{storyFn({ id: (id) => theme[firstTheme] + id })}</Box>
    </ThemeProvider>
  );
};
