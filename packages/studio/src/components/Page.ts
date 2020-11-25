import styled from "styled-components";

export const PageContainer = styled.section`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
`;

export const Logo = styled.img`
  height: ${({ theme }) => theme.size.sm};
`;

export const Nav = styled.nav`
  padding: ${({ theme }) => `0 ${theme.space.md}`};
  height: ${({ theme }) => theme.size.md};
  box-shadow: ${({ theme }) => theme.shadows[100]};
  background-color: ${({ theme }) => theme.colors.backgroundLight};
`;

export const NavContainer = styled(PageContainer)`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;
