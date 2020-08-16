import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { themes, GlobalStyle, ThemeProvider } from "@dss/proto";

import { useApp } from "./appSlice";
import { DiscoverPage } from "features/discover/DiscoverPage";
import { EditorPage } from "features/editor/EditorPage";

export const App: React.FC = () => {
  const { state } = useApp();
  return (
    <ThemeProvider theme={themes[state.theme]}>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <DiscoverPage />
        </Route>
        <Route exact path="/new">
          <EditorPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </ThemeProvider>
  );
};
