import { Link } from "react-router-dom";
import styled from "@xstyled/styled-components";
import {
  Box,
  Badge,
  Button,
  Logo,
  Nav,
  NavContainer,
  Page,
  PageContainer,
  Heading,
} from "components";

const FullPage = styled.section`
  height: 100vh;
  background-image: url("${process.env.PUBLIC_URL}/bg.svg");
  background-size: 100%;
  background-color: backgroundInverseDarker;
  color: textInverse;
  display: flex;
  flex-direction: column;
`;

const NavLink = styled.a`
  margin-right: lg;
  color: textLighter;
  transition: 0.23s ease;
  &:hover {
    color: textInverse;
  }
`;

export const HomePage: React.FC = () => {
  return (
    <FullPage>
      <NavContainer backgroundColor="transparent" zIndex={1}>
        <Nav>
          <Box as={Link} to="/" display="inline-flex">
            <Logo src={`${process.env.PUBLIC_URL}/logo.svg`} />
          </Box>
          <Box />
          <Box>
            <NavLink href="http://uicapsule.com">Related Project</NavLink>
            <Button
              as="a"
              href="https://github.com/kyh/design-system-studio"
              variant="primary"
            >
              Github
            </Button>
          </Box>
        </Nav>
      </NavContainer>
      <PageContainer
        display="flex"
        flex="1"
        justifyContent="center"
        alignItems="center"
        position="relative"
        top={-60}
      >
        <Page p={0} position="relative" top={-10}>
          <Badge shape="badge" mb="md">
            Coming Soon
          </Badge>
          <Heading displaySize="xl" mb="md">
            Your favorite Design Systems under one API
          </Heading>
          <Heading as="h2" displaySize="sm" color="textLighter">
            A learn once, apply everywhere technique towards design systems
          </Heading>
        </Page>
      </PageContainer>
    </FullPage>
  );
};
