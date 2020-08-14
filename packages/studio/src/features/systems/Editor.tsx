import React from "react";
import { Text } from "@dss/proto";
import {
  Page,
  Navigation,
  LSidebar,
  RSidebar,
  Content,
} from "./components/PageLayout";

export const Editor: React.FC = () => {
  return (
    <Page>
      <Navigation>DSS</Navigation>
      <LSidebar>Left Sidebar</LSidebar>
      <Content>
        <Text>Editor Page</Text>
      </Content>
      <RSidebar>Right Sidebar</RSidebar>
    </Page>
  );
};
