import React from "react";
import { Text, theme } from "@dss/ui";
import { ThemeProvider } from "styled-components";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme.light}>
      <main>
        <Text>Hello World</Text>
      </main>
    </ThemeProvider>
  );
};

export default App;
