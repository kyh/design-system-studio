import styled, { css, Box } from "@xstyled/styled-components";
import {
  th,
  SpaceProps,
  LayoutProps,
  BorderProps,
  PositionProps,
} from "@xstyled/system";

type DefaultProps = {
  loading?: boolean;
  disabled?: boolean;
};

export type TabProps = SpaceProps &
  LayoutProps &
  BorderProps &
  PositionProps &
  DefaultProps;

// generated
const tabBase = css`
  display: flex;
  align-items: center;
  height: 100%;
  white-space: nowrap;

  border-color: borderColor;
  border-bottom-style: solid;
  border-bottom-width: thick;
  margin-bottom: -xs;
  padding: sm xl;
  transition: ${th("transitions.fast")};
  transition-property: color, border-color, box-shadow;

  &:hover {
    color: primaryDarker;
  }

  &.active {
    color: primary;
    border-color: primary;
  }
`;

export const Tab = styled(Box)<TabProps>`
  ${tabBase}
`;
