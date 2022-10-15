import React, { ButtonHTMLAttributes, MouseEventHandler } from "react";
import { StyledButton } from "./Button.styles";

export enum Variant_Color {
  Primary = "primary",
  Success = "success",
  Warning = "warning",
  Danger = "danger"
}

export type Size = "large" | "medium" | "small";

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant_Color;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  size?: Size;
};

function Button({ children, variant, disabled, size, onClick }: Props) {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        if (disabled) return;
        onClick && onClick(e);
      };

  return (
    <StyledButton
    variant={ variant }
    onClick={ handleClick }
    disabled={ disabled }
    size={size}
    >
      { children }
    </StyledButton>
  );
}

export default Button;