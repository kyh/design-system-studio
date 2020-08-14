import styled from "styled-components";

export const Page = styled.section`
  display: grid;
  height: 100vh;
  grid-template-areas:
    "header  header  header"
    "lSidebar content rSidebar";
  grid-template-columns: 265px 1fr 265px;
  grid-template-rows: 40px 1fr;
`;

export const Navigation = styled.nav`
  display: flex;
  grid-area: header;
  background-color: ${({ theme }) => theme.colors.page.backgroundInverse};
`;

export const LSidebar = styled.section`
  display: flex;
  flex-direction: column;
  grid-area: lSidebar;
  border-right: ${({ theme }) =>
    `${theme.borderWidths.regular} ${theme.borderStyles.regular} ${theme.colors.page.borderColor}`};
`;

export const RSidebar = styled.section`
  display: flex;
  flex-direction: column;
  grid-area: rSidebar;
  border-left: ${({ theme }) =>
    `${theme.borderWidths.regular} ${theme.borderStyles.regular} ${theme.colors.page.borderColor}`};
`;

export const Content = styled.main`
  display: flex;
  grid-area: content;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.palette.neutrals[30]};
`;
