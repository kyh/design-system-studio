import styled from "styled-components";
import { Logo, Nav, NavContainer, PageContainer } from "components/Page";

export const DiscoverPage: React.FC = () => {
  return (
    <>
      <Nav>
        <NavContainer>
          <Logo src="/logo.svg" />
          <ul>
            <li>My Projects</li>
            <li>Discover</li>
            <li>GitHub</li>
          </ul>
          <button>Send Feedback</button>
        </NavContainer>
      </Nav>
      <PageContainer>Discover Page</PageContainer>
    </>
  );
};
