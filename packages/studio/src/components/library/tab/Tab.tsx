import styled, { css, system, SystemProps } from "@xstyled/styled-components";
import { th } from "@xstyled/system";

type DefaultProps = {
  isLoading?: boolean;
  disabled?: boolean;
};
type Props = SystemProps & DefaultProps;

const base = css<Props>`
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

export const Tab = styled.a<Props>`
  ${base}
  ${system}
`;
