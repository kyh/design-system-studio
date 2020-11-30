import { Button } from "components/library";
import { Logo, Nav, NavContainer, PageContainer } from "components/Page";

export const DiscoverPage: React.FC = () => {
  return (
    <>
      <Nav>
        <NavContainer>
          <Logo src={`${process.env.PUBLIC_URL}/logo.svg`} />
          <ul>
            <li>My Projects</li>
            <li>Discover</li>
            <li>GitHub</li>
          </ul>
          <Button>Send Feedback</Button>
        </NavContainer>
      </Nav>
      <PageContainer>Discover Page</PageContainer>
    </>
  );
};
