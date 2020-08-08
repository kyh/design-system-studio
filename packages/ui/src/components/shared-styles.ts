import { css } from "styled-components";

export const focusRing = css`
  outline: 1px solid ${(props) => props.theme.colors.focusColor};
  outline-offset: 1px;
`;
