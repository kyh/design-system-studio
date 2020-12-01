import styled from "@xstyled/styled-components";
import { NavLink } from "react-router-dom";
import { Nav, NavContainer, PageContainer } from "components/Page";
import { Flex, Text, Button, Tabs, Tab } from "components/library";
import { LeftSidebar } from "./LeftSideBar";
import { EditorContent } from "./EditorContent";
import { RightSidebar } from "./RightSideBar";

export const EditorPage = () => {
  return (
    <Flex flexDirection="column" height="100vh">
      <Nav>
        <NavContainer>
          <Text>Projects / Example</Text>
          <Tabs height="100%">
            <Tab as={NavLink} to="/tokens" exact>
              Tokens
            </Tab>
            <Tab as={NavLink} to="/components" exact>
              Components
            </Tab>
          </Tabs>
          <Button>Send Feedback</Button>
        </NavContainer>
      </Nav>
      <Page>
        <Sidebar side="left">
          <LeftSidebar />
        </Sidebar>
        <Content>
          <EditorContent />
        </Content>
        <Sidebar side="right">
          <RightSidebar />
        </Sidebar>
      </Page>
    </Flex>
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
  ${({ side, theme }) => {
    return side === "left"
      ? `border-left: ${theme.borderWidths.normal} ${theme.borderStyles.solid} ${theme.colors.borderColor};`
      : `border-right: ${theme.borderWidths.normal} ${theme.borderStyles.solid} ${theme.colors.borderColor};`;
  }}
`;

export const Content = styled(PageContainer)`
  grid-area: content;
  background-color: background;
  overflow: auto;
`;
