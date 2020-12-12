import { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import { th } from "@xstyled/system";
import styled from "@xstyled/styled-components";
import Split from "react-split-grid";
import {
  Nav,
  NavContainer,
  Flex,
  Grid,
  Button,
  Tabs,
  Tab,
  BreadcrumbGroup,
  Breadcrumb,
} from "components";
import { HomeContent } from "features/editor/HomeContent";
import { TokenNav } from "features/tokens/TokenNav";
import { TokenContent } from "features/tokens/TokenContent";
import { TokenInspector } from "features/tokens/TokenInspector";
import { ComponentNav } from "features/themes/ComponentNav";
import { ComponentContent } from "features/themes/ComponentContent";
import { ComponentInspector } from "features/themes/ComponentInspector";
import { useEditorParams } from "features/editor/editorHooks";

export const EditorPage: React.FC = () => {
  const [columns, setColumns] = useState("1fr 2px 3fr 2px 1fr");

  const handleDrag = (
    _direction: "row" | "column",
    _track: number,
    gridTemplateStyle: string
  ) => {
    setColumns(gridTemplateStyle);
  };

  return (
    <Flex flexDirection="column" height="100vh">
      <EditorPageNav />
      <Switch>
        <Route exact path={`/system/:systemId`}>
          <HomeContent />
        </Route>
        <Route path={`/system/:systemId/(tokens|components)`}>
          <Split
            gridTemplateColumns={columns}
            onDrag={handleDrag}
            cursor="col-resize"
            render={({ getGridProps, getGutterProps }: any) => (
              <Grid height="100%" {...getGridProps()}>
                <Column>
                  <Switch>
                    <Route path={`/system/:systemId/tokens/:tokenKey?`}>
                      <TokenNav />
                    </Route>
                    <Route path={`/system/:systemId/components/:componentKey?`}>
                      <ComponentNav />
                    </Route>
                  </Switch>
                </Column>
                <Gutter {...getGutterProps("column", 1)} />
                <Column bg="background">
                  <Switch>
                    <Route path={`/system/:systemId/tokens/:tokenKey?`}>
                      <TokenContent />
                    </Route>
                    <Route path={`/system/:systemId/components/:componentKey?`}>
                      <ComponentContent />
                    </Route>
                  </Switch>
                </Column>
                <Gutter {...getGutterProps("column", 3)} />
                <Column>
                  <Switch>
                    <Route path={`/system/:systemId/tokens/:tokenKey?`}>
                      <TokenInspector />
                    </Route>
                    <Route path={`/system/:systemId/components/:componentKey?`}>
                      <ComponentInspector />
                    </Route>
                  </Switch>
                </Column>
              </Grid>
            )}
          />
        </Route>
      </Switch>
    </Flex>
  );
};

const EditorPageNav = () => {
  const { systemId } = useEditorParams();
  return (
    <NavContainer>
      <Nav>
        <BreadcrumbGroup>
          <Breadcrumb as={NavLink} to="/">
            Projects
          </Breadcrumb>
          <Breadcrumb as="span" active>
            Demo System
          </Breadcrumb>
        </BreadcrumbGroup>
        <Tabs as="section">
          <Tab as={NavLink} to={`/system/${systemId}`} exact>
            Home
          </Tab>
          <Tab as={NavLink} to={`/system/${systemId}/tokens`}>
            Tokens
          </Tab>
          <Tab as={NavLink} to={`/system/${systemId}/components`}>
            Components
          </Tab>
        </Tabs>
        <Flex>
          <Button>Send Feedback</Button>
        </Flex>
      </Nav>
    </NavContainer>
  );
};

const Column = styled.sectionBox`
  overflow: auto;
  width: 100%;
`;

const Gutter = styled.div`
  position: relative;
  background-color: borderColor;
  cursor: col-resize;
  transition: ${th("transitions.fast")};
  transition-property: box-shadow;
  &:hover {
    box-shadow: 0 2px 0 0 white, 0 -2px 0 0 white,
      2px 0 2px 0 ${th("colors.primaryBackground")},
      -2px 0 2px 0 ${th("colors.primaryBackground")};
  }
`;
