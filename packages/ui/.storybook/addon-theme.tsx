import React from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle, Box } from "../src";

export const withTheme = (storyFn: any) => {
  const themes = Object.keys(theme);
  return (
    <>
      {themes.map((t) => (
        <ThemeProvider theme={theme[t]}>
          <GlobalStyle />
          <Box
            bg="ui.background"
            px={4}
            py={5}
            width="100%"
            height="100%"
            mb={4}
          >
            {storyFn({ id: (id) => theme[t] + id })}
          </Box>
        </ThemeProvider>
      ))}
    </>
  );
};
