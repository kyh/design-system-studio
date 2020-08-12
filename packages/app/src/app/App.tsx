import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { themes, GlobalStyle } from "@dss/ui";

import { useApp } from "./appSlice";
import { Discover } from "features/systems/Discover";
import { Editor } from "features/systems/Editor";

export const App: React.FC = () => {
  const { state } = useApp();
  return (
    <ThemeProvider theme={themes[state.theme]}>
      <GlobalStyle />
      <Switch>
        <Route path="/">
          <Discover />
        </Route>
        <Route path="/s/new">
          <Editor />
        </Route>
        <Route path="/s/:id">
          <Editor />
        </Route>
        <Redirect to="/" />
      </Switch>
    </ThemeProvider>
  );
};
