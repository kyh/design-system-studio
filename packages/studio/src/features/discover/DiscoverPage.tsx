import { Switch, Route, NavLink } from "react-router-dom";
import { Flex, Button, Tabs, Tab } from "components/library";
import { Logo, Nav, NavContainer, PageContainer } from "components/Page";

export const DiscoverPage: React.FC = () => {
  return (
    <>
      <Nav>
        <NavContainer>
          <Logo src={`${process.env.PUBLIC_URL}/logo.svg`} />
          <Tabs height="100%">
            <Tab as={NavLink} to="/" exact>
              My Projects
            </Tab>
            <Tab as={NavLink} to="/discover" exact>
              Discover
            </Tab>
            <Tab as="a" href="https://github.com/tehkaiyu/design-system-studio">
              GitHub
            </Tab>
          </Tabs>
          <Button>Send Feedback</Button>
        </NavContainer>
      </Nav>
      <PageContainer>
        <Switch>
          <Route exact path="/">
            <Projects />
          </Route>
          <Route exact path="/discover">
            <Discover />
          </Route>
        </Switch>
      </PageContainer>
    </>
  );
};

const Projects = () => {
  return <Flex pt="xl">Projects Page</Flex>;
};

const Discover = () => {
  return <Flex pt="xl">Discover Page</Flex>;
};
