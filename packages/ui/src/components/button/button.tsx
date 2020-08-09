import React, { forwardRef } from "react";
import styled, { StyledComponentProps } from "styled-components";
import {
  border,
  compose,
  flexbox,
  layout,
  position,
  space,
  variant,
  BorderProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
} from "styled-system";
import { Box, BoxProps } from "../box";
import { Flex } from "../flex";
import { Spinner } from "../spinner";
import { focusRing } from "../shared-styles";

export type StyledButtonProps = SpaceProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps & {
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
    isLoading?: boolean;
    disabled?: boolean;
    variant?: "basic" | "primary" | "transparent" | "link";
  };

const defaultButtonStyles = {
  position: "relative",
  fontFamily: "body",
  fontSize: "body",
  fontWeight: "regular",
  lineHeight: "body",
  borderRadius: "regular",
  borderWidth: "regular",
  borderStyle: "regular",
  padding: 3,
  ml: 0,
  mr: 0,
  mb: 0,
  appearance: "button",
  cursor: "pointer",
};

export const buttonVariants = {
  basic: {
    ...defaultButtonStyles,
    backgroundColor: "ui.neutralGradient",
    "&:hover": {
      backgroundColor: "highlights.primaryHighlight",
    },
  },
  primary: {
    ...defaultButtonStyles,
    color: "ui.colorInverse",
    backgroundColor: "brand.blue.300",
    borderColor: "brand.blue.400",
    " svg": {
      color: "ui.colorInverse",
    },
    "&:hover": {
      backgroundColor: "brand.blue.400",
      borderColor: "brand.blue.500",
    },
    "&:active, &:focus": {
      backgroundColor: "brand.blue.300",
      borderColor: "brand.blue.500",
    },
    "&:disabled": {
      color: "text.disabled",
      backgroundColor: "ui.disabled",
      borderColor: "ui.disabled",
    },
  },
  transparent: {
    ...defaultButtonStyles,
    bg: "transparent",
    color: "brand.blue.300",
    borderColor: "transparent",
    " svg": {
      color: "brand.blue.300",
    },
    "&:hover": {
      backgroundColor: "highlights.bgHighlight",
    },
    "&:active, &:focus": {
      backgroundColor: "highlights.bgHighlight",
    },
    "&:disabled": {
      color: "text.disabled",
      backgroundColor: "ui.disabled",
      borderColor: "ui.disabled",
    },
  },
};

const v = variant({
  scale: "buttons",
  variants: buttonVariants,
});

const ButtonIcon = styled(Box)<BoxProps & { disabled?: boolean }>`
  display: inline-block;
  width: ${(props) => props.theme.fontSizes.heading}px;
  height: ${(props) => props.theme.fontSizes.heading}px;
  svg {
    position: absolute;
    display: block;
    font-size: ${(props) => props.theme.fontSizes.heading}px;
  }
`;

const StyledButton = styled.button<ButtonProps>`
  ${v}
  ${compose(space, layout, flexbox, border, position)}

  &:focus {
    ${focusRing}
  }
`;

export type ButtonProps = StyledComponentProps<
  "button",
  any,
  StyledButtonProps,
  never
>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      leftIcon,
      rightIcon,
      disabled,
      isLoading,
      children,
      mb,
      mt,
      mx,
      my,
      ml,
      mr,
      ...props
    },
    ref
  ) => (
    <StyledButton
      ref={ref}
      py={2}
      disabled={isLoading || disabled}
      isLoading={isLoading}
      {...props}
      mx={mx}
      my={my}
      mb={mb}
      mt={mt}
      ml={ml}
      mr={mr}
    >
      {isLoading && (
        <Spinner
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="absolute"
          top={0}
          right={0}
          bottom={0}
          left={0}
          size="body"
        />
      )}
      <Flex
        alignItems="center"
        position="relative"
        justifyContent="center"
        opacity={isLoading ? 0 : 1}
      >
        {leftIcon && (
          <ButtonIcon disabled={disabled} mr={2}>
            {leftIcon}
          </ButtonIcon>
        )}
        {children}
        {rightIcon && (
          <ButtonIcon disabled={disabled} ml={2}>
            {rightIcon}
          </ButtonIcon>
        )}
      </Flex>
    </StyledButton>
  )
);

Button.defaultProps = {
  variant: "basic",
};
