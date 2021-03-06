import { Switch, Route, NavLink, Link } from "react-router-dom";
import {
  Box,
  Grid,
  Logo,
  Nav,
  NavContainer,
  Page,
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
            <Box as={Link} to="/discover" display="inline-flex">
              <Logo src={`${process.env.PUBLIC_URL}/logo.svg`} />
            </Box>
          </Box>
          <Tabs>
            <Tab as={NavLink} to="/discover" exact>
              Discover
            </Tab>
            <Tab as={NavLink} to="/projects" exact>
              My Projects
            </Tab>
            <Tab as="a" href="https://github.com/kyh/design-system-studio">
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
          <Route exact path="/discover">
            <Discover />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
        </Switch>
      </PageContainer>
    </>
  );
};

const projects = [
  {
    name: "Demo System",
    url: "demo-system",
  },
];

const Projects = () => {
  return (
    <Page>
      <Heading mb="xl">Projects Page</Heading>
      <Grid gridTemplateColumns="1fr 1fr 1fr" gridColumnGap="lg">
        {projects.map((p) => (
          <Card as={Link} to={`/system/${p.url}`}>
            <CardHeader>
              <Heading color="textDarker">{p.name}</Heading>
            </CardHeader>
            <CardBody>
              This is the body text of a card. It can be used to describe its
              content or associated action.
            </CardBody>
          </Card>
        ))}
      </Grid>
    </Page>
  );
};

const Discover = () => {
  return <Page>Discover Page</Page>;
};
