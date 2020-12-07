import styled, { css, system, SystemProps } from "@xstyled/styled-components";
import { th } from "@xstyled/system";
import { Breadcrumb } from "./Breadcrumb";

type DefaultProps = {};
type Props = SystemProps & DefaultProps;

const base = css<Props>`
  /** generated */
  ${Breadcrumb}:hover::after {
    color: textLighter;
  }
  ${Breadcrumb}::after {
    position: absolute;
    right: -${th("space.sm")};
    content: "/";
  }
  ${Breadcrumb}:last-child::after {
    display: none;
  }
`;

export const BreadcrumbGroup = styled.div<Props>`
  ${base}
  ${system}
`;
