import styledNormalize from "styled-normalize";
import { createGlobalStyle, DefaultTheme } from "@xstyled/styled-components";

export const GlobalStyle = createGlobalStyle<DefaultTheme>`
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
    line-height: body;
    color: text;
    background-color: pageBackground;
    text-rendering: optimizeLegibility;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
  }

  ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;
