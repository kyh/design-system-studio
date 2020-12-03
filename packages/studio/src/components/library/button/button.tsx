import React, { forwardRef } from "react";
import styled, { css, StyledComponentProps } from "@xstyled/styled-components";
import {
  th,
  compose,
  variant,
  flexboxes,
  FlexboxesProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
} from "@xstyled/system";
import { Flex } from "../flex";

type DefaultProps = {
  loading?: boolean;
  disabled?: boolean;
  variant?: keyof typeof buttonVariants; // generated
};

export type StyledButtonProps = SpaceProps &
  LayoutProps &
  FlexboxesProps &
  PositionProps &
  DefaultProps;

// generated
const buttonBase = css`
  font-family: body;
  font-size: body;
  line-height: body;
  font-weight: normal;
  border-style: solid;
  border-radius: sm;
  border-width: normal;
  padding: sm md;
  transition: ${th("transitions.fast")};
  transition-property: color, border-color, box-shadow;
`;

const base = css`
  position: relative;
  white-space: nowrap;
  vertical-align: middle;
  display: inline-block;
  cursor: pointer;
  user-select: none;
  appearance: none;
  text-decoration: none;
  text-align: center;
  ${buttonBase}

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
`;

// generated
const buttonVariants = {
  basic: css`
    color: text;
    background-color: backgroundLighter;
    background-image: ${th("gradients.light")};
    border-color: borderColor;
    &:hover {
      background-color: background;
      background-image: none;
      border-color: borderColor;
    }
    &:active {
      background-color: background;
      background-image: none;
      border-color: primary;
    }
    &:focus {
      background-color: background;
      background-image: none;
      border-color: primary;
      box-shadow: 0 0 0 1px ${th("colors.primary")};
    }
    &:disabled {
      background-color: backgroundLighter;
      background-image: ${th("gradients.light")};
      border-color: borderColor;
      box-shadow: none;
      cursor: not-allowed;
    }
  `,
  primary: css`
    color: textInverse;
    background-color: primary;
    border-color: primaryDark;
    &:hover {
      background-color: primaryDark;
      border-color: primaryDarker;
    }
    &:active {
      background-color: primaryDarker;
      border-color: primaryDarker;
    }
    &:focus {
      background-color: primary;
      border-color: primaryDarker;
    }
    &:disabled {
      background-color: primaryLighter;
      border-color: primaryLight;
      cursor: not-allowed;
    }
  `,
};

const variants = variant({
  key: "buttons.variants",
  default: "basic", // generated
  variants: buttonVariants, // generated
});

const StyledButton = styled.button<ButtonProps>`
  ${base}
  ${compose(space, layout, flexboxes, position)}
  ${variants}
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
