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
  loading?: boolean;
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

    ${theme.buttons.base}
  `;

const variants = variant({ scale: "buttons.variants" });
const sizes = variant({ scale: "buttons.sizes " });

const StyledButton = styled.button<ButtonProps>`
  ${base}
  ${compose(space, layout, flexbox, position)}
  ${variants}
  ${sizes}
`;

export type ButtonProps = StyledComponentProps<
  "button",
  any,
  StyledButtonProps,
  never
>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ disabled, loading, children, ...props }, ref) => (
    <StyledButton
      ref={ref}
      disabled={loading || disabled}
      loading={loading}
      {...props}
    >
      {loading && (
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
        opacity={loading ? 0 : 1}
      >
        {children}
      </Flex>
    </StyledButton>
  )
);
