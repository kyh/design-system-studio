import styled from "@xstyled/styled-components";
import { Switch, Route, NavLink } from "react-router-dom";
import {
  Nav,
  NavContainer,
  PageContainer,
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
  return (
    <Flex flexDirection="column" height="100vh">
      <EditorPageNav />
      <Page>
        <Sidebar side="left">
          <Switch>
            <Route path={`/editor/:systemId/tokens`}>
              <TokenNav />
            </Route>
            <Route path={`/editor/:systemId/components`}>
              <ComponentNav />
            </Route>
          </Switch>
        </Sidebar>
        <Content>
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
        </Content>
        <Sidebar side="right">
          <Switch>
            <Route path={`/editor/:systemId/tokens`}>
              <TokenProperties />
            </Route>
            <Route path={`/editor/:systemId/components`}>
              <ComponentProperties />
            </Route>
          </Switch>
        </Sidebar>
      </Page>
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
          <Breadcrumb active>Demo System</Breadcrumb>
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

export const Page = styled.section`
  display: grid;
  height: 100%;
  grid-template-areas: "lSidebar content rSidebar";
  grid-template-columns: 265px 1fr 265px;
`;

export const Sidebar = styled.section<{ side: "left" | "right" }>`
  display: flex;
  flex-direction: column;
  grid-area: ${({ side }) => (side === "left" ? "lSidebar" : "rSidebar")};
`;

export const Content = styled(PageContainer)`
  grid-area: content;
  background-color: background;
  overflow: auto;
  border-left-width: normal;
  border-left-style: solid;
  border-right-width: normal;
  border-right-style: solid;
  border-color: borderColor;
`;
