import styled, { css } from "@xstyled/styled-components";
import { th } from "@xstyled/system";
import { system, SystemProps } from "../system-functions";

type DefaultProps = {
  loading?: boolean;
  disabled?: boolean;
};
type StyledProps = SystemProps & DefaultProps;

const base = css<StyledProps>`
  display: flex;
  align-items: center;
  height: 100%;
  white-space: nowrap;
  cursor: pointer;
  /** generated */
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

export const Tab = styled.a<StyledProps>`
  ${base}
  ${system}
`;
