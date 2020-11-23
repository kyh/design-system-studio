import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { DiscoverPage } from "features/discover/DiscoverPage";
import { EditorPage } from "features/editor/EditorPage";

import { GlobalStyle } from "app/globalStyles";
import { themes } from "app/themes";
import { useApp } from "app/appSlice";

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
