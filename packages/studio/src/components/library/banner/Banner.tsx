import styled, { css } from "@xstyled/styled-components";
import { variant as createVariants } from "@xstyled/system";
import { system, SystemProps } from "../system-functions";

type DefaultProps = {
  status?: "warning" | "error"; // generated
};
type StyledProps = SystemProps & DefaultProps;

const base = css<StyledProps>`
  display: flex;
  width: 100%;
  /* generated */
  padding: xl;
`;

/* generated */
const status = createVariants({
  key: "banner.status",
  prop: "status",
  default: "warning",
  variants: {
    warning: css`
      color: text;
      background-color: warning;
    `,
    error: css`
      color: textInverse;
      background-color: errorDarker;
    `,
  },
});

export const Banner = styled.div<StyledProps>`
  ${base}
  ${system}
  /* generated */
  ${status}
`;
