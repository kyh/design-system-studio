import styled from "@xstyled/styled-components";

export const PageContainer = styled.section`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
`;

export const Logo = styled.img`
  height: sm;
`;

export const Nav = styled.nav`
  padding: 0 md;
  height: md;
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
