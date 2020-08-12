import styledNormalize from "styled-normalize";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<any>`
  ${styledNormalize}

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    color: ${({ theme }) => theme.colors.page.color};
    background-color: ${({ theme }) => theme.colors.page.background};
    ${({ theme }) => theme.text.base};
    text-rendering: optimizeLegibility;
  }

  .sr-only {
    position: absolute;
    clip: rect(1px,1px,1px,1px);
    -webkit-clip-path: inset(50%);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    overflow: hidden;
    padding: 0;
    border: 0;
    white-space: nowrap;
  }
`;
