import styled from "@xstyled/styled-components";
import {
  th,
  compose,
  flexboxes,
  FlexboxesProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
} from "@xstyled/system";
import { Breadcrumb } from "./Breadcrumb";

type DefaultProps = {};

type StyledProps = FlexboxesProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  DefaultProps;

export const BreadcrumbGroup = styled.div<StyledProps>`
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
  ${compose(flexboxes, layout, position, space)}
`;
