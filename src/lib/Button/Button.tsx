import React, { MouseEventHandler } from "react";
import { ButtonProps } from "../types/Button.types";
import { StyledButton } from "./Button.styles";

export function Button({ children, variant, disabled, size, onClick }: ButtonProps) {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (disabled) return;
    onClick && onClick(e);
  };

  return (
    <StyledButton variant={variant} onClick={handleClick} disabled={disabled} size={size}>
      {children}
    </StyledButton>
  );
}
