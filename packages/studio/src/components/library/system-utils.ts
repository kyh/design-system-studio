import { css } from "@xstyled/styled-components";

export const focusRing = css`
  outline: 1px solid ${({ theme }) => theme.colors.primary};
`;

export const srOnly = css`
  border: 0 !important;
  clip: rect(0 0 0 0) !important;
  clip-path: inset(50%) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  white-space: nowrap !important;
  width: 1px !important;
`;
