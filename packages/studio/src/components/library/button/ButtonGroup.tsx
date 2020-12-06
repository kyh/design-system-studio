import styled, { css } from "@xstyled/styled-components";
import { system, SystemProps } from "../system-functions";

type DefaultProps = {};
type StyledProps = SystemProps & DefaultProps;

const base = css<StyledProps>`
  /** generated */
  > button {
    border-radius: 0;
    &:first-child {
      border-top-left-radius: sm;
      border-bottom-left-radius: sm;
    }
    &:last-child {
      border-top-right-radius: sm;
      border-bottom-right-radius: sm;
    }
    &:focus {
      z-index: 1;
    }
  }
`;

export const ButtonGroup = styled.div<StyledProps>`
  ${base}
  ${system}
`;
