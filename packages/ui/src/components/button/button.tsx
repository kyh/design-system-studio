import React, { forwardRef } from "react";
import styled, { css, StyledComponentProps } from "styled-components";
import {
  compose,
  variant,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
} from "styled-system";
import { Flex } from "../flex";

type DefaultProps = {
  isLoading?: boolean;
  disabled?: boolean;
  variant?: string;
};

export type StyledButtonProps = SpaceProps &
  LayoutProps &
  FlexboxProps &
  PositionProps &
  DefaultProps;

const base = ({ theme }: any) =>
  css`
    position: relative;
    white-space: nowrap;
    vertical-align: middle;
    display: inline-block;
    cursor: pointer;
    user-select: none;
    appearance: none;
    text-decoration: none;
    text-align: center;

    &:hover {
      text-decoration: none;
    }
    &:focus {
      outline: none;
    }
    &:disabled {
      cursor: default;
    }
    &:disabled svg {
      opacity: 0.6;
    }

    ${theme.skins.buttons.base}
  `;
const variants = variant({ scale: "skins.buttons.variants" });

const StyledButton = styled.button<ButtonProps>`
  ${base}
  ${variants}
  ${compose(space, layout, flexbox, position)}
`;

export type ButtonProps = StyledComponentProps<
  "button",
  any,
  StyledButtonProps,
  never
>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ disabled, isLoading, children, ...props }, ref) => (
    <StyledButton
      ref={ref}
      disabled={isLoading || disabled}
      isLoading={isLoading}
      {...props}
    >
      {isLoading && (
        <Flex
          alignItems="center"
          justifyContent="center"
          position="absolute"
          top={0}
          right={0}
          bottom={0}
          left={0}
          size="body"
        >
          Loading...
        </Flex>
      )}
      <Flex
        alignItems="center"
        position="relative"
        justifyContent="center"
        opacity={isLoading ? 0 : 1}
      >
        {children}
      </Flex>
    </StyledButton>
  )
);
