import styled, { css } from "@xstyled/styled-components";
import { system, SystemProps } from "../system-functions";

type DefaultProps = {};
type StyledProps = SystemProps & DefaultProps;

const base = css<StyledProps>`
  /** generated */
  box-shadow: xs;
  border-style: solid;
  border-radius: sm;
  border-width: normal;
  border-color: borderColor;
`;

export const Card = styled.section<StyledProps>`
  ${base}
  ${system}
`;
