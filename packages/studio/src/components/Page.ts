import styled from "@xstyled/styled-components";

export const PageContainer = styled.section`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
`;

export const Logo = styled.img`
  height: xl40;
`;

export const Nav = styled.nav`
  padding: 0 md;
  height: xl60;
  box-shadow: xs;
  background-color: backgroundLighter;
  position: relative;
`;

export const NavContainer = styled(PageContainer)`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;
