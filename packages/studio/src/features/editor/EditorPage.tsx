import { Page, Navigation } from "./components/PageLayout";
import { LeftSidebar } from "./LeftSideBar";
import { EditorContent } from "./EditorContent";
import { RightSidebar } from "./RightSideBar";

export const EditorPage = () => {
  return (
    <Page>
      <Navigation>DSS</Navigation>
      <LeftSidebar />
      <EditorContent />
      <RightSidebar />
    </Page>
  );
};
