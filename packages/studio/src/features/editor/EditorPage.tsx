import { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import { th } from "@xstyled/system";
import styled from "@xstyled/styled-components";
import Split from "react-split-grid";
import {
  Nav,
  NavContainer,
  Flex,
  Button,
  Tabs,
  Tab,
  BreadcrumbGroup,
  Breadcrumb,
} from "components";
import { HomeContent } from "features/editor/HomeContent";
import { TokenNav } from "features/tokens/TokenNav";
import { TokenContent } from "features/tokens/TokenContent";
import { TokenProperties } from "features/tokens/TokenProperties";
import { ComponentNav } from "features/themes/ComponentNav";
import { ComponentContent } from "features/themes/ComponentContent";
import { ComponentProperties } from "features/themes/ComponentProperties";
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
      <Split
        gridTemplateColumns={columns}
        onDrag={handleDrag}
        cursor="col-resize"
        render={({ getGridProps, getGutterProps }: any) => (
          <Page {...getGridProps()}>
            <Column>
              <Switch>
                <Route path={`/editor/:systemId/tokens/:tokenKey?`}>
                  <TokenNav />
                </Route>
                <Route path={`/editor/:systemId/components/:componentKey?`}>
                  <ComponentNav />
                </Route>
              </Switch>
            </Column>
            <Gutter {...getGutterProps("column", 1)} />
            <Column bg="background">
              <Switch>
                <Route exact path={`/editor/:systemId`}>
                  <HomeContent />
                </Route>
                <Route path={`/editor/:systemId/tokens/:tokenKey`}>
                  <TokenContent />
                </Route>
                <Route path={`/editor/:systemId/components/:componentKey`}>
                  <ComponentContent />
                </Route>
              </Switch>
            </Column>
            <Gutter {...getGutterProps("column", 3)} />
            <Column>
              <Switch>
                <Route path={`/editor/:systemId/tokens/:tokenKey?`}>
                  <TokenProperties />
                </Route>
                <Route path={`/editor/:systemId/components/:componentKey?`}>
                  <ComponentProperties />
                </Route>
              </Switch>
            </Column>
          </Page>
        )}
      />
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
          <Tab as={NavLink} to={`/editor/${systemId}`} exact>
            Home
          </Tab>
          <Tab as={NavLink} to={`/editor/${systemId}/tokens`}>
            Tokens
          </Tab>
          <Tab as={NavLink} to={`/editor/${systemId}/components`}>
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

const Page = styled.section`
  display: grid;
  height: 100%;
`;

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
