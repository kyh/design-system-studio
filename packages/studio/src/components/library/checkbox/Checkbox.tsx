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

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  ${srOnly}
`;

const base = css<Props>`
  display: inline-block;
  /* generated */
  width: md;
  height: md;
  background-color: backgroundLight;
  border-radius: sm;
  border-width: normal;
  border-style: solid;
  border-color: borderColor;
  transition: ${th("transitions.fast")};
  transition-property: all;
  > svg {
    fill: none;
    stroke: white;
    stroke-width: 2px;
    visibility: hidden;
  }
  &:hover {
    box-shadow: 0 0 0 3px ${th("colors.background")};
  }
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 2px ${th("colors.primaryLight")};
  }
  ${HiddenCheckbox}:checked + & {
    background-color: primaryLight;
    > svg {
      visibility: visible;
    }
  }
  ${HiddenCheckbox}:disabled + & {
    background-color: backgroundDark;
  }
  ${HiddenCheckbox}:checked:disabled + & {
    background-color: backgroundDarker;
    > svg {
      visibility: visible;
    }
  }
`;

const StyledCheckbox = styled.div<Props>`
  ${base}
  ${system}
`;

export const Checkbox = forwardRef<any, Props>(
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
        <HiddenCheckbox
          id={id}
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
        />
        <StyledCheckbox {...props}>
          <svg viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </StyledCheckbox>
        <LabelText hideLabel={hideLabel}>{label}</LabelText>
      </Label>
    );
  }
);
