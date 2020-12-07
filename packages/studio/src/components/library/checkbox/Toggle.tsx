import React, { forwardRef } from "react";
import styled, {
  css,
  system,
  SystemProps,
  StyledComponentProps,
  DefaultTheme,
} from "@xstyled/styled-components";
import { th } from "@xstyled/system";
import { srOnly } from "../system-utils";

type DefaultProps = {
  label?: string;
  hideLabel?: boolean;
  disabled?: boolean;
};
type Props = StyledComponentProps<
  "input",
  DefaultTheme,
  SystemProps & DefaultProps,
  never
>;

const Label = styled.label<Props>`
  display: inline-flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

const LabelText = styled.span<Props>`
  margin-left: sm;
  ${({ hideLabel }) => hideLabel && srOnly}
`;

const HiddenToggle = styled.input.attrs({ type: "checkbox" })`
  ${srOnly}
`;

const base = css<Props>`
  display: inline-block;
  /* generated */
  width: md;
  height: md;
  background-color: backgroundLight;
  border-radius: round;
  border-width: normal;
  border-style: solid;
  border-color: borderColor;
  transition: ${th("transitions.fast")};
  transition-property: all;
  > svg {
    fill: white;
    visibility: hidden;
  }
  &:hover {
    box-shadow: 0 0 0 3px ${th("colors.background")};
  }
  ${HiddenToggle}:focus + & {
    box-shadow: 0 0 0 3px ${th("colors.background")};
  }
  ${HiddenToggle}:checked + & {
    background-color: primaryLight;
    > svg {
      visibility: visible;
    }
  }
  ${HiddenToggle}:disabled + & {
    background-color: backgroundDark;
  }
  ${HiddenToggle}:checked:disabled + & {
    background-color: backgroundDarker;
    > svg {
      visibility: visible;
    }
  }
`;

const StyledToggle = styled.div<Props>`
  ${base}
  ${system}
`;

export const Toggle = forwardRef<any, Props>(
  (
    {
      id,
      name,
      value,
      checked,
      disabled,
      onChange = () => {},
      label,
      hideLabel,
      ...props
    },
    ref
  ) => {
    return (
      <Label ref={ref} disabled={disabled}>
        <HiddenToggle
          id={id}
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
        />
        <StyledToggle {...props}>
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="4" />
          </svg>
        </StyledToggle>
        <LabelText hideLabel={hideLabel}>{label}</LabelText>
      </Label>
    );
  }
);
