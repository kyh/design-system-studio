import styled, { css, system, SystemProps } from "@xstyled/styled-components";

type DefaultProps = {};
type Props = SystemProps & DefaultProps;

export const CardHeader = styled.header<Props>`
  display: flex;
  justify-content: space-between;
  padding: xl xl 0;
  ${system}
`;

export const CardBody = styled.section<{ divider?: boolean } & Props>`
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

export const CardFooter = styled.footer<Props>`
  display: flex;
  padding: 0 xl xl;
  ${system}
`;
