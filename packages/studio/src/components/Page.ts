import styled from "@xstyled/styled-components";

export const Logo = styled.img`
  height: xl40;
`;

export const PageContainer = styled.sectionBox`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
`;

export const Page = styled.mainBox`
  padding-top: xl;
`;

export const NavContainer = styled.navBox`
  padding: 0 md;
  height: xl60;
  box-shadow: xs;
  background-color: backgroundLighter;
  position: relative;
`;

export const Nav = styled(PageContainer)`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 2fr 1fr;
  > * {
    display: flex;
    align-items: center;
  }
  *:nth-child(2) {
    justify-content: center;
  }
  *:nth-child(3) {
    justify-content: flex-end;
  }
`;
