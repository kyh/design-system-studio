import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { themes, GlobalStyle, ThemeProvider } from "@dss/proto";

import { useApp } from "./appSlice";
import { Discover } from "features/discover/Discover";
import { Editor } from "features/systems/Editor";

export const App: React.FC = () => {
  const { state } = useApp();
  return (
    <ThemeProvider theme={themes[state.theme]}>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Discover />
        </Route>
        <Route exact path="/s/new">
          <Editor />
        </Route>
        <Route exact path="/s/:id">
          <Editor />
        </Route>
        <Redirect to="/" />
      </Switch>
    </ThemeProvider>
  );
};
