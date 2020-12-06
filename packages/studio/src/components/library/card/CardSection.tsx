import styled, { css } from "@xstyled/styled-components";
import { system, SystemProps } from "../system-functions";

type DefaultProps = {};
type StyledProps = SystemProps & DefaultProps;

export const CardHeader = styled.header<StyledProps>`
  display: flex;
  justify-content: space-between;
  padding: xl xl 0;
  ${system}
`;

export const CardBody = styled.section<{ divider?: boolean } & StyledProps>`
  padding: xl;
  ${({ divider }) =>
    divider &&
    css`
      border-bottom-style: solid;
      border-bottom-width: normal;
      border-color: borderColor;
    `}
  ${system}
`;

export const CardFooter = styled.footer<StyledProps>`
  display: flex;
  padding: 0 xl xl;
  ${system}
`;

export const CardSection = styled.section<StyledProps>`
  padding: xl;
  ${system}
`;
