import styled, { css, system, SystemProps } from "@xstyled/styled-components";

type DefaultProps = {};
type Props = SystemProps & DefaultProps;

const base = css<Props>`
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

export const ButtonGroup = styled.div<Props>`
  ${base}
  ${system}
`;
