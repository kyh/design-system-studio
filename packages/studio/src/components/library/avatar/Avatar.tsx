import React, { forwardRef } from "react";
import styled, { css, StyledComponentProps } from "@xstyled/styled-components";
import {
  th,
  compose,
  variant as createVariants,
  flexboxes,
  FlexboxesProps,
  position,
  PositionProps,
  space,
  SpaceProps,
} from "@xstyled/system";

type DefaultProps = {
  loading?: boolean;
  username?: string;
  src?: string;
  shape?: "round" | "square"; // generated
  size?: "sm" | "md" | "lg"; // generated
};

type StyledProps = FlexboxesProps & PositionProps & SpaceProps & DefaultProps;

const base = css`
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
    round: css`
      border-radius: round;
    `,
    square: css`
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
    sm: css`
      width: xs;
      height: xs;
      line-height: ${th("sizes.xs")};
    `,
    md: css`
      width: sm;
      height: sm;
      line-height: ${th("sizes.sm")};
    `,
    lg: css`
      width: md;
      height: md;
      line-height: ${th("sizes.md")};
    `,
  },
});

const StyledContainer = styled.div<Props>`
  ${base}
  /* generated */
  ${shape}
  ${size}
  ${compose(flexboxes, position, space)}
`;

type Props = StyledComponentProps<"div", any, StyledProps, never>;

export const Avatar = forwardRef<HTMLDivElement, Props>(
  ({ loading = false, username = "", src = "", ...props }, ref) => {
    let avatarFigure = <div />;
    const a11yProps: Record<string, any> = {};

    if (loading) {
      a11yProps["aria-busy"] = true;
      a11yProps["aria-label"] = "Loading avatar...";
    } else if (src) {
      avatarFigure = <img src={src} alt={username} />;
    } else {
      a11yProps["aria-label"] = username;
      avatarFigure = <div aria-hidden="true">{username.substring(0, 1)}</div>;
    }

    return (
      <StyledContainer ref={ref} loading={loading} {...a11yProps} {...props}>
        {avatarFigure}
      </StyledContainer>
    );
  }
);
