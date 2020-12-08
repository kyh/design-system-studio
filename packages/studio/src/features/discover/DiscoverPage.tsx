import { Switch, Route, NavLink, Link } from "react-router-dom";
import {
  Box,
  Grid,
  Logo,
  Nav,
  NavContainer,
  PageContainer,
  Button,
  Tabs,
  Tab,
  Heading,
  Card,
  CardHeader,
  CardBody,
} from "components";

export const DiscoverPage: React.FC = () => {
  return (
    <>
      <NavContainer>
        <Nav>
          <Box>
            <Box as={Link} to="/" display="inline-flex">
              <Logo src={`${process.env.PUBLIC_URL}/logo.svg`} />
            </Box>
          </Box>
          <Tabs>
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
          <Box>
            <Button>Send Feedback</Button>
          </Box>
        </Nav>
      </NavContainer>
      <PageContainer>
        <Switch>
          <Route exact path="/">
            <Projects />
          </Route>
          <Route path="/discover">
            <Discover />
          </Route>
        </Switch>
      </PageContainer>
    </>
  );
};

const Projects = () => {
  return (
    <Box pt="xl">
      <Heading mb="xl">Projects Page</Heading>
      <Grid gridTemplateColumns="1fr 1fr 1fr" gridColumnGap="lg">
        <Card as={Link} to="/editor/demo-system">
          <CardHeader>
            <Heading color="textDarker">Demo System</Heading>
          </CardHeader>
          <CardBody>
            This is the body text of a card. It can be used to describe its
            content or associated action.
          </CardBody>
        </Card>
      </Grid>
    </Box>
  );
};

const Discover = () => {
  return <Box pt="xl">Discover Page</Box>;
};
