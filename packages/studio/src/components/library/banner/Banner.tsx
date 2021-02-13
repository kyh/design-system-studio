import styled, { css, system, SystemProps } from "@xstyled/styled-components";
import { variant as createVariants } from "@xstyled/system";

type DefaultProps = {
  status?: "warning" | "error"; // generated
};
type Props = SystemProps & DefaultProps;

const base = css<Props>`
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
    warning: css<Props>`
      color: text;
      background-color: warning;
    `,
    error: css<Props>`
      color: textInverse;
      background-color: errorDarker;
    `,
  },
});

export const Banner = styled.div<Props>`
  ${base}
  ${system}
  /* generated */
  ${status}
`;
