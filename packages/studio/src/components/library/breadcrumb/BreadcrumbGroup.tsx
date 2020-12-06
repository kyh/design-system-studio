import styled, { css } from "@xstyled/styled-components";
import { th } from "@xstyled/system";
import { system, SystemProps } from "../system-functions";
import { Breadcrumb } from "./Breadcrumb";

type DefaultProps = {};
type StyledProps = SystemProps & DefaultProps;

const base = css<StyledProps>`
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

export const BreadcrumbGroup = styled.div<StyledProps>`
  ${base}
  ${system}
`;
