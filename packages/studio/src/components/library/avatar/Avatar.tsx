import React, { forwardRef } from "react";
import styled, {
  system,
  css,
  StyledComponentProps,
  SystemProps,
  DefaultTheme,
} from "@xstyled/styled-components";
import { th, variant as createVariants } from "@xstyled/system";

type DefaultProps = {
  isLoading?: boolean;
  username?: string;
  src?: string;
  shape?: "round" | "square"; // generated
  size?: "sm" | "md" | "lg"; // generated
};
type Props = StyledComponentProps<
  "div",
  DefaultTheme,
  SystemProps & DefaultProps,
  never
>;

const base = css<Props>`
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
    display: block;
  }
  /* generated */
  background-color: background;
  text-transform: uppercase;
  text-align: center;
`;

/* generated */
const shape = createVariants({
  key: "avatar.shape",
  prop: "shape",
  default: "round",
  variants: {
    round: css<Props>`
      border-radius: round;
    `,
    square: css<Props>`
      border-radius: none;
    `,
  },
});

/* generated */
const size = createVariants({
  key: "avatar.size",
  prop: "size",
  default: "md",
  variants: {
    sm: css<Props>`
      width: lg;
      height: lg;
      line-height: ${th("sizes.lg")};
    `,
    md: css<Props>`
      width: xl;
      height: xl;
      line-height: ${th("sizes.xl")};
    `,
    lg: css<Props>`
      width: xl40;
      height: xl40;
      line-height: ${th("sizes.xl40")};
    `,
  },
});

const StyledContainer = styled.div<Props>`
  ${base}
  ${system}
  /* generated */
  ${shape}
  ${size}
`;

export const Avatar = forwardRef<HTMLDivElement, Props>(
  ({ isLoading = false, username = "", src = "", ...props }, ref) => {
    let avatarFigure = <div />;
    const a11yProps: Record<string, any> = {};

    if (isLoading) {
      a11yProps["aria-busy"] = true;
      a11yProps["aria-label"] = "isLoading avatar...";
    } else if (src) {
      avatarFigure = <img src={src} alt={username} />;
    } else {
      a11yProps["aria-label"] = username;
      avatarFigure = <div aria-hidden="true">{username.substring(0, 1)}</div>;
    }

    return (
      <StyledContainer
        ref={ref}
        isLoading={isLoading}
        {...a11yProps}
        {...props}
      >
        {avatarFigure}
      </StyledContainer>
    );
  }
);
