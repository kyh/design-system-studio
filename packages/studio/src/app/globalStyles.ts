import styledNormalize from "styled-normalize";
import { createGlobalStyle } from "@xstyled/styled-components";

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
    font-family: body;
    font-size: body;
    font-weight: normal;
    color: text;
    background-color: pageBackground;
    text-rendering: optimizeLegibility;
  }

  a {
    color: inherit;
    text-decoration: inherit;
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
