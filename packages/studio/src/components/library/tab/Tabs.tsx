import styled, { css } from "@xstyled/styled-components";
import { system, SystemProps } from "../system-functions";

type DefaultProps = {};
type StyledProps = SystemProps & DefaultProps;

const base = css<StyledProps>`
  /** generated */
  display: flex;
  align-items: center;
`;

export const Tabs = styled.nav<StyledProps>`
  ${base}
  ${system}
`;
