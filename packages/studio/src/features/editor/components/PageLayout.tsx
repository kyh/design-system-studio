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

export const Sidebar = styled.section<{ side: "left" | "right" }>`
  display: flex;
  flex-direction: column;
  grid-area: ${({ side }) => (side === "left" ? "lSidebar" : "rSidebar")};
  ${({ side, theme }) => {
    return side === "left"
      ? `border-left: ${theme.borderWidths.regular} ${theme.borderStyles.regular} ${theme.colors.page.borderColor};`
      : `border-right: ${theme.borderWidths.regular} ${theme.borderStyles.regular} ${theme.colors.page.borderColor};`;
  }}
`;

export const Content = styled.main`
  grid-area: content;
  background-color: ${({ theme }) => theme.colors.palette.neutrals[30]};
  overflow: auto;
`;
